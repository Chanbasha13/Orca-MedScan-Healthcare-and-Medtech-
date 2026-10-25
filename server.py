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
from fastapi.responses import PlainTextResponse, StreamingResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, EmailStr, Field

# -------------------------------------------------------------
# Groq Cloud Clinical AI Assistant Configuration (.env via python-dotenv)
# -------------------------------------------------------------
try:
    from dotenv import load_dotenv
    env_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), ".env")
    load_dotenv(dotenv_path=env_path, override=True)
except ImportError:
    pass

GROQ_API_KEY = os.environ.get("GROQ_API_KEY", "").strip()
GROQ_MODEL = os.environ.get("GROQ_MODEL", "qwen/qwen3.8-27b").strip()
GROQ_TIMEOUT_SECONDS = int(os.environ.get("GROQ_TIMEOUT_SECONDS", "30"))

try:
    from groq import Groq
    GROQ_SDK_AVAILABLE = True
except ImportError:
    GROQ_SDK_AVAILABLE = False

# Import core clinical engine and auth vault
from app import (
    parse_report_text,
    parse_report_with_diagnostics,
    extract_text_from_pdf,
    extract_text_from_image,
    is_tesseract_available,
    get_tesseract_command,
    get_tesseract_diagnostics,
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

@app.on_event("startup")
def startup_diagnostics():
    tess_diag = get_tesseract_diagnostics()
    status_str = "AVAILABLE" if tess_diag["available"] else "NOT DETECTED (OCR OFFLINE)"
    print("=" * 65)
    print("ORCA MEDSCAN SYSTEM STARTUP DIAGNOSTICS:")
    print(f"  • Tesseract OCR Status : {status_str}")
    print(f"  • Binary Location      : {tess_diag['binary_path']}")
    print(f"  • Engine Version       : {tess_diag.get('version', 'Unknown')}")
    print(f"  • Installed Languages  : {tess_diag.get('languages', [])}")
    print(f"  • TESSDATA_PREFIX      : {tess_diag.get('tessdata_prefix', 'System Default')}")
    print(f"  • Groq Clinical AI     : {'CONFIGURED' if bool(os.environ.get('GROQ_API_KEY', GROQ_API_KEY)) else 'UNCONFIGURED'}")
    print(f"  • Frontend Assets      : {'MOUNTED' if os.path.isdir(FRONTEND_ASSETS) else 'MISSING'}")
    print("=" * 65)

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

class AssistantMessage(BaseModel):
    role: str # 'user' | 'assistant'
    content: str = Field(..., max_length=4000)

class AssistantChatRequest(BaseModel):
    messages: List[AssistantMessage] = Field(..., max_length=100)
    language: Optional[str] = "English"
    report_context: Optional[Dict[str, Any]] = None

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
        "tesseract": get_tesseract_diagnostics(),
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

@app.get("/api/system/ocr-diagnostics")
def ocr_diagnostics():
    diag = get_tesseract_diagnostics()
    self_test = {"passed": False, "extracted_text": "", "error": None}
    
    if diag["available"]:
        try:
            import io
            from PIL import Image, ImageDraw
            img = Image.new("RGB", (260, 60), color="white")
            draw = ImageDraw.Draw(img)
            draw.text((10, 20), "ORCA OCR OK", fill="black")
            buf = io.BytesIO()
            img.save(buf, format="PNG")
            buf.seek(0)
            ok, text, _ = extract_text_from_image(buf)
            self_test["passed"] = ok and "ORCA" in text
            self_test["extracted_text"] = text.strip() if text else ""
        except Exception as e:
            self_test["error"] = str(e)
            
    return {
        "diagnostics": diag,
        "self_test": self_test,
        "environment": {
            "platform": os.name,
            "python_executable": os.sys.executable,
            "is_render": bool(os.environ.get("RENDER")),
            "tessdata_prefix": os.environ.get("TESSDATA_PREFIX", "")
        }
    }

# -------------------------------------------------------------
# Clinical AI Assistant Endpoints (Groq Integration)
# -------------------------------------------------------------
@app.get("/api/assistant/status")
def assistant_status():
    current_key = os.environ.get("GROQ_API_KEY", GROQ_API_KEY).strip()
    is_configured = bool(current_key and not current_key.startswith("gsk_your_groq_api_key"))
    return {
        "configured": is_configured,
        "model": os.environ.get("GROQ_MODEL", GROQ_MODEL),
        "sdk_available": GROQ_SDK_AVAILABLE,
        "supported_languages": ["en", "hi", "te", "ta", "kn", "ml", "bn"],
        "language_labels": [
            {"code": "en", "name": "English"},
            {"code": "hi", "name": "Hindi (हिन्दी)"},
            {"code": "te", "name": "Telugu (తెలుగు)"},
            {"code": "ta", "name": "Tamil (தமிழ்)"},
            {"code": "kn", "name": "Kannada (ಕನ್ನಡ)"},
            {"code": "ml", "name": "Malayalam (മലയാളം)"},
            {"code": "bn", "name": "Bengali (বাংলা)"},
        ],
        "disclaimer": "Orca MedScan Assistant provides educational screening support and does not substitute for licensed medical consultation."
    }

@app.post("/api/assistant/chat")
def assistant_chat(req: AssistantChatRequest):
    if not req.messages:
        raise HTTPException(status_code=400, detail="Conversation message history cannot be empty.")
    
    current_key = os.environ.get("GROQ_API_KEY", GROQ_API_KEY).strip()
    is_configured = bool(current_key and not current_key.startswith("gsk_your_groq_api_key"))

    lang = req.language or "English"

    if not is_configured:
        return {
            "success": False,
            "configured": False,
            "model": os.environ.get("GROQ_MODEL", GROQ_MODEL),
            "reply": (
                "Groq Cloud API Key is not configured on the server. "
                "To enable the clinical AI assistant, please set GROQ_API_KEY in your server environment "
                "or .env file (e.g., export GROQ_API_KEY='gsk_...').\n\n"
                "All deterministic report screening, OCR, reference intervals, and Indian language translations remain fully operational."
            ),
            "disclaimer": "Orca MedScan Assistant provides educational screening support and does not substitute for licensed medical consultation.",
            "language": lang,
            "has_report_context": bool(req.report_context)
        }

    # Clinical safety guardrail system prompt
    system_instructions = (
        "You are the Orca MedScan Clinical Decision-Support Assistant, an advanced educational screening "
        "and medical report explanation tool developed for Orcathon 2026 (Healthcare & MedTech track).\n\n"
        "MANDATORY CLINICAL SAFETY AND ETHICAL RULES:\n"
        "1. STRICTLY INFORMATIONAL: You are strictly an educational decision-support tool. You do NOT provide medical diagnoses, clinical prognoses, or emergency triage.\n"
        "2. NO PRESCRIPTIONS: Never prescribe medications or tell users to start, stop, or alter medical dosages.\n"
        "3. PRESERVE REPORT FIDELITY: When patient specimen results are attached below, reference ONLY the measured biomarker values, reference intervals, and flags provided. Never fabricate or hallucinate numerical values.\n"
        "4. CLEAR SEPARATION OF FACTS: Clearly distinguish between measured results from the patient's report and general medical physiology.\n"
        "5. UNCERTAIN READINGS: If an indicator is flagged as candidate or needs review, advise inspecting the physical printed document.\n"
        "6. ABNORMAL FINDINGS: For out-of-range results, explain the biological significance calmly and suggest discussing with a licensed physician.\n"
        f"7. LANGUAGE REQUIREMENT: You must respond in the requested language: {lang}. "
        f"Ensure natural, culturally respectful, and accurate phrasing in {lang}. Keep formal medical test names (e.g., Hemoglobin, Fasting Glucose) recognizable alongside the explanation.\n"
        "8. DISCLAIMER: Include a brief reminder that this analysis is educational and requires physician review."
    )

    # Build non-identifying report context if present
    context_str = ""
    if req.report_context:
        doc_name = req.report_context.get("source_name", "Laboratory Specimen")
        doc_type = req.report_context.get("source_type", "Lab Report")
        total = req.report_context.get("total_count", 0)
        flagged = req.report_context.get("flagged_count", 0)
        records = req.report_context.get("records", [])

        context_str = f"\n\nAUDITED LABORATORY REPORT CONTEXT:\nDocument: {doc_name} ({doc_type})\nTotal Tests: {total} | Out-of-Range Flags: {flagged}\n\nMeasured Biomarkers:\n"
        for r in records[:25]:
            name = r.get("Test Name") or r.get("test_name", "Unknown Test")
            val = r.get("Measured Value") or r.get("measured_value", "N/A")
            unit = r.get("Unit") or r.get("unit", "")
            rr = r.get("Reference Range") or r.get("reference_range", "")
            st = r.get("Status") or r.get("status", "Unknown")
            context_str += f"- {name}: {val} {unit} (Ref Range: {rr} {unit}, Status: {st})\n"

    full_system_prompt = system_instructions + context_str

    groq_messages = [{"role": "system", "content": full_system_prompt}]
    for m in req.messages[-10:]:
        if m.role in ["user", "assistant"]:
            groq_messages.append({"role": m.role, "content": m.content})

    try:
        model_to_use = os.environ.get("GROQ_MODEL", GROQ_MODEL)
        reply_text = ""

        max_output_tokens = int(os.environ.get("GROQ_MAX_TOKENS", "800"))

        if GROQ_SDK_AVAILABLE:
            client = Groq(api_key=current_key, timeout=GROQ_TIMEOUT_SECONDS)
            try:
                completion = client.chat.completions.create(
                    model=model_to_use,
                    messages=groq_messages,
                    temperature=0.2,
                    max_tokens=max_output_tokens,
                )
                reply_text = completion.choices[0].message.content
            except Exception as model_err:
                err_str = str(model_err).lower()
                # If configured model is not available or decommissioned on this account, try available fallbacks
                if "model_not_found" in err_str or "does not exist" in err_str or "decommissioned" in err_str:
                    fallback_models = ["qwen/qwen3.8-27b", "openai/gpt-oss-120b", "openai/gpt-oss-20b"]
                    fallback_success = False
                    for fb in fallback_models:
                        if fb == model_to_use:
                            continue
                        try:
                            completion = client.chat.completions.create(
                                model=fb,
                                messages=groq_messages,
                                temperature=0.2,
                                max_tokens=max_output_tokens,
                            )
                            reply_text = completion.choices[0].message.content
                            model_to_use = fb
                            fallback_success = True
                            break
                        except Exception:
                            continue
                    if not fallback_success:
                        raise model_err
                else:
                    raise model_err
        else:
            import httpx
            headers = {
                "Authorization": f"Bearer {current_key}",
                "Content-Type": "application/json"
            }
            payload = {
                "model": model_to_use,
                "messages": groq_messages,
                "temperature": 0.2,
                "max_tokens": max_output_tokens,
            }
            with httpx.Client(timeout=GROQ_TIMEOUT_SECONDS) as hc:
                hres = hc.post("https://api.groq.com/openai/v1/chat/completions", headers=headers, json=payload)
                if hres.status_code != 200:
                    raise HTTPException(status_code=hres.status_code, detail=f"Groq API error: {hres.text}")
                data = hres.json()
                reply_text = data["choices"][0]["message"]["content"]

        return {
            "success": True,
            "configured": True,
            "model": model_to_use,
            "reply": reply_text,
            "disclaimer": "Orca MedScan Assistant provides educational screening support and does not substitute for licensed medical consultation.",
            "language": lang,
            "has_report_context": bool(req.report_context)
        }
    except Exception as e:
        err_msg = str(e)
        if "401" in err_msg or "invalid_api_key" in err_msg.lower():
            return {
                "success": False,
                "configured": False,
                "model": os.environ.get("GROQ_MODEL", GROQ_MODEL),
                "reply": "The provided Groq API Key was rejected (401 Unauthorized). Please check your GROQ_API_KEY in the project-root .env file.",
                "error": "Invalid API Key",
                "disclaimer": "Orca MedScan Assistant provides educational screening support and does not substitute for licensed medical consultation.",
                "language": lang
            }
        elif "429" in err_msg or "rate limit" in err_msg.lower():
            return {
                "success": False,
                "configured": True,
                "model": os.environ.get("GROQ_MODEL", GROQ_MODEL),
                "reply": "Groq Cloud rate limit reached. Please wait a few moments before sending another query.",
                "error": "Rate limit exceeded",
                "disclaimer": "Orca MedScan Assistant provides educational screening support and does not substitute for licensed medical consultation.",
                "language": lang
            }
        else:
            return {
                "success": False,
                "configured": True,
                "model": os.environ.get("GROQ_MODEL", GROQ_MODEL),
                "reply": f"Encountered a communication error with Groq Cloud: {err_msg}.",
                "error": err_msg,
                "disclaimer": "Orca MedScan Assistant provides educational screening support and does not substitute for licensed medical consultation.",
                "language": lang
            }

# -------------------------------------------------------------
# Static Files & Single Page Application (SPA) Serving
# -------------------------------------------------------------
FRONTEND_DIST = os.path.join(os.path.dirname(os.path.abspath(__file__)), "frontend", "dist")
FRONTEND_ASSETS = os.path.join(FRONTEND_DIST, "assets")

if os.path.isdir(FRONTEND_ASSETS):
    app.mount("/assets", StaticFiles(directory=FRONTEND_ASSETS), name="assets")

@app.get("/{full_path:path}", include_in_schema=False)
async def serve_spa(full_path: str):
    # Guard against intercepting non-existent API endpoints
    if full_path.startswith("api/"):
        raise HTTPException(status_code=404, detail=f"API endpoint '/{full_path}' not found.")
    
    # Serve specific static file from FRONTEND_DIST if it exists
    target_file = os.path.join(FRONTEND_DIST, full_path)
    if full_path and os.path.isfile(target_file):
        return FileResponse(target_file)
    
    # SPA fallback: Return index.html for root and all client-side navigation routes
    index_file = os.path.join(FRONTEND_DIST, "index.html")
    if os.path.isfile(index_file):
        return FileResponse(index_file)
    
    return PlainTextResponse("Orca MedScan API Server active. Frontend build not found.", status_code=200)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)

