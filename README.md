# 🩺 Orca MedScan — Medical Intelligence Dashboard & Report Analyzer

> **Orcathon 2026 — Healthcare & MedTech Track**  
> An open-source, zero-cost clinical screening dashboard to ingest medical lab documents (PDF, PNG, JPG, JPEG, Text), cross-reference printed and clinical reference intervals, and flag potentially out-of-range indicators.

---

## 📌 Problem & Clinical Need
Patients and busy general practitioners are often overwhelmed by dense, unstructured lab reports (Complete Blood Counts, Metabolic Panels, Lipid Panels, Thyroid Panels). Abnormal results can easily get lost in complex tabular layouts.

**Orca MedScan** solves this by providing:
1. **Multi-Format Ingestion**: Ingests **PDFs**, scanned image reports (**PNG, JPG, JPEG** via OCR), and **raw text**.
2. **Medical Intelligence Dashboard**: Real-time summary cards, aggregate biomarker status distributions, and priority anomaly alerts.
3. **Dynamic Reference Detection**: Prioritizes reference intervals printed on the report; seamlessly falls back to standard adult clinical references when omitted.
4. **Transparent & Safe**: Categorizes findings into `Normal`, `Potentially High`, `Potentially Low`, or `Review Needed` without speculating or making unauthorized clinical diagnoses.
5. **Interactive Exploration**: Filter findings by status, search by test name, inspect OCR output in an editable review box, and export structured findings as **CSV**.
6. **1-Click Judge Demo**: Built-in synthetic test report allows instant evaluation without hunting for files.

---

## 🚀 Key Features

| Feature | Description |
|---|---|
| **Multi-Format Ingestion** | Supports digital PDFs (`pdfplumber`) and scanned image reports (`pytesseract` + Pillow) with an editable pre-analysis review box. |
| **Medical Intelligence Dashboard** | Real-time session analytics: Reports Analyzed, Indicators Screened, Out-of-Range Flags, and Needs Clinical Review. |
| **Biomarker Distribution Charts** | Lightweight native visualizations displaying the proportion of normal vs out-of-range indicators. |
| **Priority Anomaly Alerts** | Highlights out-of-range biomarkers immediately with deviations and plain-language clinical notes. |
| **Session Audit History** | Retains all evaluated reports in an active session log for comparative review. |
| **100% Zero-Cost & Private** | Runs completely locally. Zero data is sent to external cloud APIs, eliminating patient data leakage. |
| **Streamlit Cloud Ready** | Includes `packages.txt` (`tesseract-ocr`) and `requirements.txt` for 1-click free deployment. |

---

## 🛠️ Tech Stack
- **Language**: Python 3.10+
- **UI & Dashboard**: Streamlit
- **Document Processing**: `pdfplumber` (PDFs), `pytesseract` & `Pillow` (Images)
- **Data & Analytics**: Pandas

---

## ⚙️ Quick Start (Local Setup)

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/orca-medscan.git
cd orca-medscan
```

### 2. Install Tesseract OCR (For Image Uploads)
- **macOS**: `brew install tesseract`
- **Ubuntu/Debian**: `sudo apt-get install tesseract-ocr`
- **Windows**: Download installer from GitHub UB-Mannheim/tesseract

*(Note: If Tesseract is not installed, PDF and Text modes still work 100% out of the box).*

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

## 🧪 Running Automated Tests
```bash
python3 test_engine.py
```
Validates biomarker parsing, reference interval comparisons, fallback defaults, PDF reading, OCR extraction, and CSV generation.

---

## ⚠️ Medical Disclaimer
*Orca MedScan is an informational screening prototype developed for hackathon demonstration. It does NOT provide clinical diagnoses, prognosis, or treatment decisions. Laboratory reference intervals vary based on equipment calibration, geographic standards, and individual patient demographics. Always consult a qualified medical professional for health concerns.*
