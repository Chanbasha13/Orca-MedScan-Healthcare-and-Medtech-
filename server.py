"""
Orca MedScan — High-Performance Clinical Intelligence API Server
Orcathon 2026: Healthcare & MedTech Track
Wraps deterministic clinical extraction algorithms and local cryptographic enclave auth in FastAPI.
"""

import io
import os
import json
from datetime import datetime
from typing import Optional, List, Dict, Any
from fastapi import FastAPI, UploadFile, File, Form, HTTPException, Response, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import PlainTextResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, EmailStr

# Import core clinical engine and auth vault
from app import (
    parse_report_text,
    parse_report_with_diagnostics,
    extract_text_from_pdf,
    extract_text_from_image,
    is_tesseract_available,
    generate_pdf_audit_report,
    SYNTHETIC_REPORT,
    HEIF_AVAILABLE,
    REPORTLAB_AVAILABLE
)
from auth import (
    init_auth_vault,
    authenticate_user,
    register_user,
    validate_email,
    validate_password_strength,
    DEFAULT_EVALUATOR_EMAIL,
    DEFAULT_EVALUATOR_PASS,
    AUTH_FILE
)

# Initialize Enclave Vault on server start
init_auth_vault()

app = FastAPI(
    title="Orca MedScan Clinical API",
    description="Privacy-Preserving Laboratory Extraction & Biomarker Intelligence Engine",
    version="2.0.0"
)

# Enable CORS for local Vite development and production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------------------------------------
# Data Models
# -------------------------------------------------------------
class LoginRequest(BaseModel):
    email: str
    password: str

class RegisterRequest(BaseModel):
    email: str
    password: str
    confirm_password: str

class TextAnalyzeRequest(BaseModel):
    text: str
    source_label: Optional[str] = "Manual Text Entry"

class ExportCSVRequest(BaseModel):
    records: List[Dict[str, Any]]

class ExportPDFRequest(BaseModel):
    meta: Dict[str, Any]
    records: List[Dict[str, Any]]

# -------------------------------------------------------------
# API Endpoints
# -------------------------------------------------------------
@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "Orca MedScan Clinical Intelligence",
        "timestamp": datetime.now().isoformat(),
        "orcathon": "Orcathon 2026 Healthcare & MedTech"
    }

@app.post("/api/auth/login")
def login(req: LoginRequest):
    success, msg, user_data = authenticate_user(req.email, req.password)
    if not success:
        raise HTTPException(status_code=401, detail=msg)
    return {
        "success": True,
        "message": msg,
        "user": user_data
    }

@app.post("/api/auth/register")
def register(req: RegisterRequest):
    success, msg = register_user(req.email, req.password, req.confirm_password)
    if not success:
        raise HTTPException(status_code=400, detail=msg)
    return {
        "success": True,
        "message": msg
    }

@app.get("/api/benchmark")
def get_benchmark():
    records, diag = parse_report_with_diagnostics(SYNTHETIC_REPORT)
    return {
        "source_name": "Metropolis Diagnostic Benchmark (MET-98421)",
        "source_type": "Synthetic Clinical Benchmark",
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "raw_text": SYNTHETIC_REPORT,
        "records": records,
        "diagnostics": diag,
        "total_count": len(records),
        "normal_count": sum(1 for r in records if r["Category"] == "normal"),
        "flagged_count": sum(1 for r in records if r["Category"] == "flagged"),
        "uncertain_count": sum(1 for r in records if r["Category"] == "uncertain"),
    }

@app.post("/api/analyze/upload")
async def analyze_upload(file: UploadFile = File(...)):
    filename = file.filename or "uploaded_document"
    contents = await file.read()
    file_bytes = io.BytesIO(contents)
    fname_lower = filename.lower()

    extracted_text = ""
    extraction_method = "Unknown"
    source_kind = "Unknown"

    if fname_lower.endswith(".pdf"):
        success, text_res, method, pages = extract_text_from_pdf(file_bytes)
        if not success:
            raise HTTPException(status_code=422, detail=f"PDF extraction error: {text_res}")
        extracted_text = text_res
        extraction_method = method
        source_kind = "PDF"
    else:
        # Image pipeline (PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC)
        success, text_res, detected_format = extract_text_from_image(file_bytes)
        if not success:
            raise HTTPException(status_code=422, detail=f"OCR parsing error: {text_res}")
        extracted_text = text_res
        extraction_method = f"Tesseract OCR ({detected_format})"
        source_kind = f"Image ({detected_format})"

    # Parse with telemetry
    records, diagnostics = parse_report_with_diagnostics(extracted_text)

    return {
        "success": True,
        "source_name": filename,
        "source_type": source_kind,
        "extraction_method": extraction_method,
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "raw_text": extracted_text,
        "records": records,
        "diagnostics": diagnostics,
        "total_count": len(records),
        "normal_count": sum(1 for r in records if r["Category"] == "normal"),
        "flagged_count": sum(1 for r in records if r["Category"] == "flagged"),
        "uncertain_count": sum(1 for r in records if r["Category"] == "uncertain"),
    }

@app.post("/api/analyze/text")
def analyze_text(req: TextAnalyzeRequest):
    if not req.text.strip():
        raise HTTPException(status_code=400, detail="Cannot analyze empty text.")
    records, diagnostics = parse_report_with_diagnostics(req.text)
    return {
        "success": True,
        "source_name": req.source_label or "Direct Clinical Stream",
        "source_type": "Pasted Stream",
        "extraction_method": "Direct Ingestion",
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "raw_text": req.text,
        "records": records,
        "diagnostics": diagnostics,
        "total_count": len(records),
        "normal_count": sum(1 for r in records if r["Category"] == "normal"),
        "flagged_count": sum(1 for r in records if r["Category"] == "flagged"),
        "uncertain_count": sum(1 for r in records if r["Category"] == "uncertain"),
    }

@app.post("/api/export/csv")
def export_csv(req: ExportCSVRequest):
    import pandas as pd
    if not req.records:
        raise HTTPException(status_code=400, detail="No records available to export.")
    df = pd.DataFrame(req.records)
    # Reorder columns cleanly if present
    cols = [c for c in ["Test Name", "Original Label", "Measured Value", "Unit", "Reference Range", "Range Source", "Status", "Plain Explanation"] if c in df.columns]
    if cols:
        df = df[cols]
    csv_str = df.to_csv(index=False)
    return Response(
        content=csv_str,
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=orca_biomarkers.csv"}
    )

@app.post("/api/export/pdf")
def export_pdf(req: ExportPDFRequest):
    if not REPORTLAB_AVAILABLE:
        raise HTTPException(status_code=500, detail="ReportLab is not installed on host.")
    pdf_bytes = generate_pdf_audit_report(req.meta, req.records)
    audit_id = req.meta.get("id", "AUDIT")
    return Response(
        content=pdf_bytes,
        media_type="application/pdf",
        headers={"Content-Disposition": f"attachment; filename=orca_clinical_summary_{audit_id}.pdf"}
    )

@app.get("/api/system/status")
def system_status():
    vault_users_count = 1
    if os.path.exists(AUTH_FILE):
        try:
            with open(AUTH_FILE, "r", encoding="utf-8") as f:
                vdata = json.load(f)
                vault_users_count = len(vdata.get("users", {}))
        except Exception:
            pass

    return {
        "tesseract": {
            "available": is_tesseract_available(),
            "binary_path": "/opt/homebrew/bin/tesseract" if os.path.exists("/opt/homebrew/bin/tesseract") else "system PATH"
        },
        "decoders": {
            "heif_available": HEIF_AVAILABLE,
            "reportlab_available": REPORTLAB_AVAILABLE,
            "supported_formats": ["PDF (Digital)", "PDF (Scanned OCR)", "PNG", "JPG", "JPEG", "WEBP", "BMP", "TIFF", "HEIC/HEIF"]
        },
        "vault": {
            "registered_practitioners": vault_users_count,
            "algorithm": "PBKDF2-HMAC-SHA256",
            "iterations": 100000,
            "salt_entropy": "256-bit CSPRNG",
            "vault_path": AUTH_FILE
        }
    }

# If built frontend exists, serve it
FRONTEND_DIST = os.path.join(os.path.dirname(__file__), "frontend", "dist")
if os.path.exists(FRONTEND_DIST):
    app.mount("/", StaticFiles(directory=FRONTEND_DIST, html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)

