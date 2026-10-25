# 🩺 Orca MedScan — Medical Report Indicator Analyzer

> **Orcathon 2026 — Healthcare & MedTech Track**  
> An open-source, zero-cost clinical screening tool to extract biomarkers, cross-reference reference intervals, and flag out-of-range indicators.

---

## 📌 Problem & Overview
Patients often struggle to interpret complex laboratory reports (such as Complete Blood Counts, Metabolic Panels, and Lipid Profiles). Critical out-of-range indicators can be overlooked in dense formatting.

**Orca MedScan** solves this by:
1. Ingesting medical lab reports via **PDF upload** or **direct text paste**.
2. Automatically parsing recognized **biomarkers, measured values, units, and reference ranges**.
3. Cross-referencing against printed report intervals or standard documented clinical reference ranges.
4. Categorizing results clearly into **Normal**, **Potentially High**, **Potentially Low**, or **Review Needed** with zero hallucinations.
5. Providing **1-Click Demo** capability using synthetic lab data for instant evaluation.
6. Exporting structured findings as **CSV**.

---

## 🚀 Key Features
- **100% Zero-Cost & Private**: Runs locally with no paid APIs, no OpenAI/cloud API keys, and no risk of sensitive patient data leaking to external servers.
- **Dual Input Modes**: Supports direct digital PDF parsing via `pdfplumber` and raw text paste.
- **Dynamic Reference Detection**: Prioritizes reference ranges printed on the report itself; seamlessly falls back to standard clinical adult references when not printed.
- **Responsible Terminology**: Avoids speculative diagnostic claims; flags items with neutral, professional language (*"Potentially High"*, *"Potentially Low"*).
- **Interactive UI**: Built with Streamlit — includes metric overview cards, status filtering, test searching, and transparent raw-text inspection.
- **One-Click Synthetic Demo**: Built-in test report allows immediate live testing without hunting for external files.

---

## 🛠️ Tech Stack
- **Language**: Python 3.10+
- **Frontend / Dashboard**: Streamlit
- **PDF Extraction**: `pdfplumber`
- **Data Handling**: Pandas, Regex

---

## ⚙️ Quick Start (Local Setup)

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/orca-medscan.git
cd orca-medscan
```

### 2. Create and activate a virtual environment
```bash
# macOS / Linux:
python3 -m venv .venv
source .venv/bin/activate

# Windows:
python -m venv .venv
.venv\Scripts\activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the application
```bash
streamlit run app.py
```
The application will open automatically in your browser at `http://localhost:8501`.

---

## ⚠️ Medical Disclaimer
*Orca MedScan is an informational screening prototype developed for hackathon demonstration. It does NOT provide clinical diagnoses, prognosis, or treatment decisions. Laboratory reference intervals vary based on equipment calibration, geographic standards, and individual patient demographics. Always consult a qualified medical professional for health concerns.*
