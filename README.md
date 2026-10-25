# 🩺 Orca MedScan — Clinical Laboratory Intelligence & Screening Platform

> **Orcathon 2026 — Healthcare & MedTech Track**  
> A high-performance, resilient clinical screening platform to ingest digital/scanned PDFs, multi-format images (PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC), and raw lab text. Cross-references calibrated laboratory reference intervals and highlights abnormal indicators with 100% local cryptographic enclave privacy.

---

## 📌 Problem & Clinical Need
Patients and primary care physicians frequently grapple with dense, unstructured lab reports. Abnormal biomarkers can easily be overlooked in complex tabular layouts or lost when OCR misreads units or decimal points.

**Orca MedScan** provides an end-to-end clinical workflow:
1. **Full-Length Editorial Landing Page**: Explaining the 5-stage ingestion-to-export clinical pipeline, format matrix, and clinical safety scope.
2. **Signature 3D Experience (Three.js)**: Purposeful WebGL 3D document stack with realistic paper thickness, layered specimen pages, pointer-responsive mouse parallax tilt, scanning laser animation, and static accessible fallback.
3. **Rock-Solid Theme System**: True application-wide Light Mode (warm white surfaces) & Dark Mode (deep charcoal & navy surfaces) with design tokens, zero text clipping, and instant persistence across routes.
4. **Local Enclave Cryptographic Auth**: NIST-compliant PBKDF2-HMAC-SHA256 password hashing (100,000 rounds, 256-bit CSPRNG salts) stored in `data/.auth_vault.json` with zero cloud identity calls.
5. **Multi-Format Ingestion**: Ingests **digital PDFs**, **scanned PDFs** (via automated OCR page rendering), and **images** (**PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC/HEIF**).
6. **Multi-Strategy Parser & OCR Auto-Repair**: Solves unit-attachment bugs (`13.5g/dL`), OCR character confusions (`IO5` → `105`), multiline label-value pairs, colon/dot leader formatting, and resolves dozens of clinical aliases (`HGB`, `TLC`, `PLT`, `FBS`, `TC`, `TG`, `BUN`, `SGPT`, etc.).
7. **Extraction Diagnostics & Telemetry**: Never silently hides failures. Shows extraction pipelines, character counts, recognized labels, and unrecognized candidate lines with an editable pre-analysis review box.
8. **Medical Intelligence Dashboard**: Spacious, modern SaaS layout featuring session aggregate metrics, biomarker status distribution charts, and priority anomaly callouts.
9. **Dual Export**: Download structured data as **CSV** or generate formal clinical audit reports as **PDF** (via ReportLab).
10. **1-Click Hackathon Evaluator Fast Pass**: Pre-seeded evaluator account (`evaluator@orcamed.org` / `OrcaMed2026!`) with 1-click bypass to instantly evaluate the complete 16-biomarker diagnostic dashboard.

---

## 🛠️ Supported File Formats & Pipelines

| Format | Extraction Pipeline | Handling Details |
|---|---|---|
| **Digital PDF** | `pdfplumber` | Pure Python digital text stream extraction. |
| **Scanned PDF** | `pdfplumber` + `pytesseract` | Automatically renders pages to 200 DPI images when no embedded text is detected, followed by page-by-page OCR. |
| **PNG, JPG, JPEG** | `pytesseract` + `Pillow` | Auto-orients EXIF, scales small text, enhances contrast, and executes PSM 6 / default OCR. |
| **WEBP** | `pytesseract` + `Pillow` | Native decoding, typo auto-repair, and contrast enhancement. |
| **BMP, TIFF** | `pytesseract` + `Pillow` | Lossless / high-resolution document scanning. |
| **HEIC / HEIF** | `pillow-heif` + `Pillow` | Decoded via libheif wrapper; graceful fallback if uninstalled. |
| **Pasted Text** | Direct Input | Zero-failure manual input and editing. |

---

## 🔒 Cryptographic Enclave Specification

- **Algorithm**: PBKDF2-HMAC-SHA256
- **Salt Generation**: Cryptographically secure 256-bit salt per account (`secrets.token_bytes(32)`)
- **Key Derivation Work Factor**: 100,000 iterations (conforming to NIST SP 800-132)
- **Comparison**: Constant-time digest verification (`secrets.compare_digest`)
- **Storage**: Local on-premise vault (`data/.auth_vault.json`)
- **Default Evaluator Credential**: `evaluator@orcamed.org` / `OrcaMed2026!`

---

## ⚙️ Quick Start (Local Setup)

### 1. Prerequisites
- Python 3.10+
- Node.js 18+ (for frontend development)
- Tesseract OCR:
  - **macOS**: `brew install tesseract`
  - **Ubuntu/Debian**: `sudo apt-get install tesseract-ocr tesseract-ocr-eng libtesseract-dev`
  - **Windows**: Download installer from GitHub UB-Mannheim/tesseract

### 2. Install Dependencies
```bash
# Python dependencies
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt

# Frontend dependencies
cd frontend
npm install
npm run build
cd ..
```

### 3. Launch the Application

#### Option A: FastAPI Production Server (Full React UI + REST API on port 8000)
```bash
python3 -m uvicorn server:app --host 0.0.0.0 --port 8000
```
Open **`http://localhost:8000`** in your browser.

#### Option B: Vite Frontend Dev Server with Hot-Reload (port 5173)
```bash
# Terminal 1: Run Backend API
python3 -m uvicorn server:app --port 8000

# Terminal 2: Run Frontend Vite Dev
cd frontend && npm run dev
```
Open **`http://localhost:5173`** in your browser.

#### Option C: Streamlit Interface (port 8501)
```bash
streamlit run app.py
```
Open **`http://localhost:8501`** in your browser.

---

## 🧪 Comprehensive Automated Test Suites

### 1. REST API Integration Tests (11 Verifications)
```bash
python3 test_api.py
```
Tests health check, system status, evaluator login, bad password rejection, benchmark delivery, digital PDF upload, PNG OCR upload, WEBP OCR upload, scanned PDF OCR fallback, CSV export, and ReportLab clinical PDF export.

### 2. Core Clinical Engine & OCR Suite (16 Verifications)
```bash
python3 test_suite.py
```
Tests all formats, clinical abbreviations, numerical precision, out-of-range detection, empty/adversarial inputs, realistic OCR WebP regression, and enclave PBKDF2 cryptography.

---

## ⚠️ Medical Disclaimer
*Orca MedScan is an educational and clinical decision-support screening prototype developed for hackathon demonstration. It does NOT provide clinical diagnoses, prognosis, or pharmaceutical prescriptions. Laboratory reference intervals vary based on equipment calibration, geographic standards, and individual patient demographics. Always consult a licensed medical professional for health concerns.*
