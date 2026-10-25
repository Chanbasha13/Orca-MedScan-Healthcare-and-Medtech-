# 🩺 Orca MedScan — Clinical Intelligence Platform & Biomarker Screening Enclave

> **Orcathon 2026 — Healthcare & MedTech Track**  
> An open-source, resilient clinical screening dashboard to ingest digital/scanned PDFs, multi-format images (PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC), and text reports. Cross-references laboratory reference intervals and highlights abnormal indicators with 100% local cryptographic enclave privacy.

---

## 📌 Problem & Clinical Need
Patients and primary care physicians frequently grapple with dense, unstructured lab reports. Abnormal biomarkers can easily be overlooked in complex tabular layouts or lost when OCR misreads units or decimal points.

**Orca MedScan** solves this through:
1. **Clinical Landing Page & 3D Interactive Pipeline**: Public educational overview detailing the 5-stage ingestion-to-export clinical pipeline with interactive mouse parallax tilt.
2. **Local Enclave Authentication**: NIST-compliant PBKDF2-HMAC-SHA256 password hashing (100,000 rounds, 256-bit CSPRNG salts) stored in `data/.auth_vault.json` with zero cloud identity calls.
3. **Multi-Format Ingestion**: Ingests **digital PDFs**, **scanned PDFs** (via automated OCR page rendering), and **images** (**PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC/HEIF**).
4. **Multi-Strategy Parser & OCR Auto-Repair**: Solves unit-attachment bugs (`13.5g/dL`), OCR character confusions (`IO5` → `105`), multiline label-value pairs, colon/dot leader formatting, and resolves dozens of clinical aliases (`HGB`, `TLC`, `PLT`, `FBS`, `TC`, `TG`, `BUN`, `SGPT`, etc.).
5. **Extraction Diagnostics & Telemetry**: Never silently hides failures. Shows extraction pipelines, character counts, recognized labels, and unrecognized candidate lines with an editable pre-analysis review box.
6. **Medical Intelligence Dashboard**: Spacious, modern SaaS layout featuring session aggregate metrics, biomarker status distribution charts, and priority anomaly callouts.
7. **Session Audit History & Enclave Settings**: Maintains a non-cloud, privacy-preserving session audit trail and offers complete cryptographic vault inspection.
8. **Dual Export**: Download structured data as **CSV** or generate formal clinical audit reports as **PDF** (via ReportLab).
9. **1-Click Hackathon Evaluator Demo**: Pre-seeded evaluator account (`evaluator@orcamed.org` / `OrcaMed2026!`) with 1-click bypass to instantly evaluate the complete 16-biomarker diagnostic dashboard.

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

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/orca-medscan.git
cd orca-medscan
```

### 2. Install Tesseract OCR (For Scanned PDFs and Images)
- **macOS**: `brew install tesseract`
- **Ubuntu/Debian**: `sudo apt-get install tesseract-ocr tesseract-ocr-eng libtesseract-dev`
- **Windows**: Download installer from GitHub UB-Mannheim/tesseract

*(Note: On Streamlit Community Cloud, `packages.txt` automatically provisions `tesseract-ocr`).*

### 3. Create virtual environment & install dependencies
```bash
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

### 4. Run the application
```bash
streamlit run app.py
```
Open `http://localhost:8501` in your browser.

---

## 🧪 Comprehensive Automated Test Suite (16 Checks)
Execute all 16 end-to-end verifications:
```bash
python3 test_suite.py
```
Tests:
1. Digital PDF extraction (`sample_patient_report.pdf`)
2. PNG / JPG OCR extraction (`sample_patient_report.png`)
3. WEBP image OCR (`sample_patient_report.webp`)
4. BMP and TIFF format support
5. Scanned PDF with automated OCR fallback (`scanned_report.pdf`)
6. Biomarker abbreviations (`HGB`, `TLC`, `PLT`, `FBS`, `TC`, `TG`, `BUN`, etc.)
7. Numerical precision (`13.5g/dL`), thousands separators (`240,000`), and abnormal flags (`H`, `L`)
8. All-normal test report (zero false alarms)
9. Mixed out-of-range report (both high and low)
10. Unknown labels & non-medical text isolation
11. Corrupt and unsupported files handling
12. Empty input handling
13. CSV export and ReportLab PDF generation
14. Realistic 17-line OCR WebP with joined words and acronyms (regression test)
15. Local Enclave Authentication & PBKDF2 Hashing
16. Practitioner Registration & Password Validation

---

## ⚠️ Medical Disclaimer
*Orca MedScan is an educational and clinical decision-support screening prototype developed for hackathon demonstration. It does NOT provide clinical diagnoses, prognosis, or pharmaceutical prescriptions. Laboratory reference intervals vary based on equipment calibration, geographic standards, and individual patient demographics. Always consult a licensed medical professional for health concerns.*
