"""
Orca MedScan — Medical Intelligence Dashboard & Robust Clinical Report Analyzer
Orcathon 2026: Healthcare & MedTech Track

A resilient, multi-format clinical screening system supporting:
- Digital & Scanned PDFs (with automated OCR fallback)
- Multi-format Images: PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC/HEIF
- Multi-strategy biomarker extraction with alias resolution & diagnostic tracing
- Comprehensive Clinical Intelligence Dashboard with session audit history
- Exportable CSV and PDF summary reports
"""

import io
import os
import re
import shutil
from datetime import datetime
import pandas as pd
from PIL import Image, ImageOps
import streamlit as st

# Register HEIF opener if available
try:
    import pillow_heif
    pillow_heif.register_heif_opener()
    HEIF_AVAILABLE = True
except Exception:
    HEIF_AVAILABLE = False

# ReportLab for PDF generation
try:
    from reportlab.lib.pagesizes import letter
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib import colors
    REPORTLAB_AVAILABLE = True
except Exception:
    REPORTLAB_AVAILABLE = False

# Configure Streamlit page
st.set_page_config(
    page_title="Orca MedScan | Medical Intelligence Dashboard",
    page_icon="🩺",
    layout="wide",
    initial_sidebar_state="expanded"
)

# ---------------------------------------------------------
# Custom Styling: Spacious, High-Contrast Healthcare Theme
# ---------------------------------------------------------
st.markdown("""
<style>
    /* Theme Palette */
    :root {
        --med-navy: #0F1E36;
        --med-teal: #0D9488;
        --med-blue: #0284C7;
        --med-bg: #F8FAFC;
        --med-card-bg: #FFFFFF;
        --med-border: #E2E8F0;
        --med-text-main: #0F172A;
        --med-text-muted: #475569;
    }

    /* Overall Layout */
    .block-container {
        padding-top: 1.8rem;
        padding-bottom: 3.5rem;
        max-width: 1400px;
    }

    /* Primary Navigation Bar */
    div[data-testid="stHorizontalBlock"]:has(div.nav-pill-active) {
        background-color: #FFFFFF;
        padding: 8px 12px;
        border-radius: 12px;
        border: 1px solid #CBD5E1;
        margin-bottom: 24px;
        box-shadow: 0 1px 3px rgba(15, 30, 54, 0.04);
    }

    /* Metric Cards */
    .metric-card {
        background-color: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        padding: 22px 24px;
        box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);
        margin-bottom: 14px;
        min-height: 125px;
    }
    .metric-card-title {
        font-size: 0.88rem;
        font-weight: 600;
        color: #475569;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 6px;
    }
    .metric-card-val {
        font-size: 2.2rem;
        font-weight: 700;
        color: #0F1E36;
        line-height: 1.1;
    }
    .metric-card-sub {
        font-size: 0.85rem;
        color: #64748B;
        margin-top: 6px;
    }

    /* Status Badges */
    .badge-normal {
        display: inline-block;
        background-color: #ECFDF5;
        color: #065F46;
        border: 1px solid #A7F3D0;
        border-radius: 9999px;
        padding: 5px 14px;
        font-size: 0.82rem;
        font-weight: 600;
    }
    .badge-high {
        display: inline-block;
        background-color: #FEF2F2;
        color: #991B1B;
        border: 1px solid #FECACA;
        border-radius: 9999px;
        padding: 5px 14px;
        font-size: 0.82rem;
        font-weight: 600;
    }
    .badge-low {
        display: inline-block;
        background-color: #FFFBEB;
        color: #92400E;
        border: 1px solid #FDE68A;
        border-radius: 9999px;
        padding: 5px 14px;
        font-size: 0.82rem;
        font-weight: 600;
    }
    .badge-review {
        display: inline-block;
        background-color: #F1F5F9;
        color: #334155;
        border: 1px solid #CBD5E1;
        border-radius: 9999px;
        padding: 5px 14px;
        font-size: 0.82rem;
        font-weight: 600;
    }

    /* Empty State Box */
    .empty-state-box {
        text-align: center;
        background-color: #FFFFFF;
        border: 1.5px dashed #CBD5E1;
        border-radius: 14px;
        padding: 48px 24px;
        margin: 20px 0;
    }

    /* Diagnostic Card */
    .diag-card {
        background-color: #F8FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 8px;
        padding: 12px 16px;
        margin-bottom: 8px;
        font-family: monospace;
        font-size: 0.86rem;
    }
</style>
""", unsafe_allow_html=True)

# ---------------------------------------------------------
# 1. Centralized Biomarker Registry & Reference Database
# ---------------------------------------------------------
REFERENCE_DB = [
    {
        "id": "hb",
        "name": "Hemoglobin (Hb)",
        "patterns": [
            r"\bhemo(?:a)?globin\b",
            r"\bhgb\b",
            r"\bhb\b",
            r"\bs\.?\s*hemo(?:a)?globin\b"
        ],
        "unit": "g/dL",
        "min": 12.0,
        "max": 17.5,
        "desc": "Transports oxygen throughout bodily tissues via erythrocytes.",
        "plain_note": "A low value indicates potential anemia or iron deficiency; an elevated value may indicate dehydration or secondary erythrocytosis."
    },
    {
        "id": "wbc",
        "name": "White Blood Cell Count (WBC / TLC)",
        "patterns": [
            r"\bwhite blood cell(?:s)?(?:\s+count)?\b",
            r"\bwbc\b",
            r"\bw\.b\.c\b",
            r"\btotal leucocyte count\b",
            r"\btotal leukocyte count\b",
            r"\btlc\b",
            r"\bt\.l\.c\b",
            r"\bleucocyte count\b"
        ],
        "unit": "cells/mcL",
        "min": 4000.0,
        "max": 11000.0,
        "desc": "Essential component of immune defense; responds to infection and inflammation.",
        "plain_note": "Elevations frequently correlate with bacterial infection, tissue injury, or physiological stress; lower counts can indicate viral suppression or bone marrow stress."
    },
    {
        "id": "rbc",
        "name": "Red Blood Cell Count (RBC)",
        "patterns": [
            r"\bred blood cell(?:s)?(?:\s+count)?\b",
            r"\brbc(?:\s+count)?\b",
            r"\br\.b\.c\b",
            r"\berythrocyte count\b"
        ],
        "unit": "mil/mcL",
        "min": 4.0,
        "max": 5.9,
        "desc": "Absolute circulating count of oxygen-carrying erythrocytes.",
        "plain_note": "Monitored to assess blood oxygen transport capacity and hematologic status."
    },
    {
        "id": "platelets",
        "name": "Platelet Count",
        "patterns": [
            r"\bplatelet(?:s)?(?:\s+count)?\b",
            r"\bplt(?:\s+count)?\b",
            r"\bthrombocyte count\b"
        ],
        "unit": "/mcL",
        "min": 150000.0,
        "max": 450000.0,
        "desc": "Cell fragments vital for physiological clotting and vascular repair.",
        "plain_note": "Low counts (thrombocytopenia) elevate bleeding tendencies; elevated counts occur with reactive inflammation or myeloproliferative response."
    },
    {
        "id": "glucose_fasting",
        "name": "Fasting Blood Glucose (Sugar)",
        "patterns": [
            r"\bfasting (?:blood )?(?:sugar|glucose)\b",
            r"\bfbs\b",
            r"\bf\.b\.s\b",
            r"\bglucose\s*[,:]?\s*fasting\b",
            r"\bblood sugar\s*[,:]?\s*fasting\b",
            r"\bfasting sugar\b"
        ],
        "unit": "mg/dL",
        "min": 70.0,
        "max": 99.0,
        "desc": "Serum glucose level following an overnight fast (minimum 8 hours).",
        "plain_note": "Values >= 100 mg/dL signify impaired fasting glucose or diabetes mellitus risk, warranting formal glycemic workup."
    },
    {
        "id": "glucose_pp",
        "name": "Post-Prandial Blood Glucose (PPBS)",
        "patterns": [
            r"\bpost[\s-]prandial (?:blood )?(?:sugar|glucose)\b",
            r"\bppbs\b",
            r"\bp\.p\.b\.s\b",
            r"\bglucose\s*[,:]?\s*pp\b",
            r"\bblood sugar\s*[,:]?\s*pp\b",
            r"\bpp glucose\b"
        ],
        "unit": "mg/dL",
        "min": 70.0,
        "max": 140.0,
        "desc": "Blood glucose measured approximately 2 hours after a standardized meal.",
        "plain_note": "Levels exceeding 140 mg/dL indicate reduced peripheral insulin clearance or postprandial glucose intolerance."
    },
    {
        "id": "hba1c",
        "name": "Glycated Hemoglobin (HbA1c)",
        "patterns": [
            r"\bhba1c\b",
            r"\bglycated hemo(?:a)?globin\b",
            r"\bhaemoglobin a1c\b",
            r"\bhemoglobin a1c\b",
            r"\bglycosylated hemoglobin\b",
            r"\ba1c\b"
        ],
        "unit": "%",
        "min": 4.0,
        "max": 5.6,
        "desc": "Standard index reflecting mean circulating blood glucose over the preceding 60 to 90 days.",
        "plain_note": "5.7% to 6.4% indicates prediabetes; values >= 6.5% meet established criteria for diabetic clinical review."
    },
    {
        "id": "cholesterol",
        "name": "Total Cholesterol",
        "patterns": [
            r"\btotal cholesterol\b",
            r"\bserum cholesterol\b",
            r"\bs\.?\s*cholesterol\b",
            r"\btc\b",
            r"\bt\.c\b",
            r"\bcholesterol\s*[,:]?\s*total\b"
        ],
        "unit": "mg/dL",
        "min": 125.0,
        "max": 200.0,
        "desc": "Composite circulating serum cholesterol concentration.",
        "plain_note": "Values exceeding 200 mg/dL accelerate atherogenic cardiovascular risk, meriting lipid fraction review."
    },
    {
        "id": "hdl",
        "name": "HDL Cholesterol ('Good' Cholesterol)",
        "patterns": [
            r"\bhdl(?:\s*-\s*c)?(?:\s+cholesterol)?\b",
            r"\bhigh density lipoprotein\b"
        ],
        "unit": "mg/dL",
        "min": 40.0,
        "max": 90.0,
        "desc": "High-density lipoprotein that clears surplus cholesterol from arterial vasculature.",
        "plain_note": "Concentrations below 40 mg/dL represent an independent cardiovascular risk marker; higher figures provide atheroprotective benefits."
    },
    {
        "id": "ldl",
        "name": "LDL Cholesterol ('Bad' Cholesterol)",
        "patterns": [
            r"\bldl(?:\s*-\s*c)?(?:\s+cholesterol)?\b",
            r"\blow density lipoprotein\b"
        ],
        "unit": "mg/dL",
        "min": 50.0,
        "max": 100.0,
        "desc": "Low-density lipoprotein involved in atherogenic lipid deposition.",
        "plain_note": "Elevated LDL promotes coronary arterial plaque progression; primary target for lipid-lowering lifestyle or medical interventions."
    },
    {
        "id": "vldl",
        "name": "VLDL Cholesterol",
        "patterns": [
            r"\bvldl(?:\s*-\s*c)?(?:\s+cholesterol)?\b",
            r"\bvery low density lipoprotein\b"
        ],
        "unit": "mg/dL",
        "min": 5.0,
        "max": 30.0,
        "desc": "Carrier of endogenous triglycerides produced by hepatic tissue.",
        "plain_note": "Elevated alongside serum triglycerides in secondary metabolic dysregulation."
    },
    {
        "id": "triglycerides",
        "name": "Triglycerides",
        "patterns": [
            r"\btriglyceride(?:s)?\b",
            r"\btg\b",
            r"\bt\.g\b",
            r"\bserum triglycerides\b",
            r"\bs\.?\s*triglycerides\b"
        ],
        "unit": "mg/dL",
        "min": 40.0,
        "max": 150.0,
        "desc": "Primary lipid storage molecule circulating in serum.",
        "plain_note": "Concentrations above 150 mg/dL are correlated with insulin resistance, diet composition, and cardiovascular strain."
    },
    {
        "id": "creatinine",
        "name": "Serum Creatinine",
        "patterns": [
            r"\b(?:serum )?creatinine\b",
            r"\bs\.?\s*creatinine\b",
            r"\bs\.?\s*creat\b",
            r"\bcreat\b"
        ],
        "unit": "mg/dL",
        "min": 0.6,
        "max": 1.2,
        "desc": "Skeletal muscle breakdown product excreted exclusively through glomerular filtration.",
        "plain_note": "Elevations suggest reduced renal clearance or impaired filtration, requiring medical review of renal status and hydration."
    },
    {
        "id": "bun",
        "name": "Blood Urea Nitrogen (BUN) / Blood Urea",
        "patterns": [
            r"\bblood urea nitrogen\b",
            r"\bbun\b",
            r"\bb\.u\.n\b",
            r"\bblood urea\b",
            r"\bserum urea\b",
            r"\bs\.?\s*urea\b",
            r"\burea\b"
        ],
        "unit": "mg/dL",
        "min": 7.0,
        "max": 21.0,
        "desc": "End product of hepatic protein catabolism, cleared via renal excretion.",
        "plain_note": "Elevations occur in hypovolemia, high dietary protein consumption, or intrinsic renal impairment."
    },
    {
        "id": "alt_sgpt",
        "name": "ALT / SGPT (Liver Enzyme)",
        "patterns": [
            r"\bsgpt\b",
            r"\bs\.g\.p\.t\b",
            r"\balt\b",
            r"\ba\.l\.t\b",
            r"\balanine aminotransferase\b"
        ],
        "unit": "U/L",
        "min": 7.0,
        "max": 55.0,
        "desc": "Predominantly hepatic intracellular enzyme released during hepatocyte injury.",
        "plain_note": "Transient or chronic elevations signify liver inflammation, steatosis, medication effects, or acute hepatic insult."
    },
    {
        "id": "ast_sgot",
        "name": "AST / SGOT (Liver Enzyme)",
        "patterns": [
            r"\bsgot\b",
            r"\bs\.g\.o\.t\b",
            r"\bast\b",
            r"\ba\.s\.t\b",
            r"\baspartate aminotransferase\b"
        ],
        "unit": "U/L",
        "min": 8.0,
        "max": 48.0,
        "desc": "Enzyme concentrated in hepatic, cardiac, and skeletal muscle tissue.",
        "plain_note": "Interpreted in tandem with ALT to distinguish hepatic vs non-hepatic sources of cellular turnover."
    },
    {
        "id": "alp",
        "name": "Alkaline Phosphatase (ALP)",
        "patterns": [
            r"\balkaline phosphatase\b",
            r"\balp\b",
            r"\ba\.l\.p\b",
            r"\balk phos\b"
        ],
        "unit": "U/L",
        "min": 44.0,
        "max": 147.0,
        "desc": "Hydrolase enzyme abundant in biliary canaliculi and osteoblasts.",
        "plain_note": "High values indicate biliary flow obstruction, cholestatic hepatopathy, or active osteoblastic bone turnover."
    },
    {
        "id": "bilirubin_total",
        "name": "Bilirubin (Total)",
        "patterns": [
            r"\btotal bilirubin\b",
            r"\bbilirubin\s*[,:]?\s*total\b",
            r"\bserum bilirubin\b",
            r"\bs\.?\s*bilirubin\b"
        ],
        "unit": "mg/dL",
        "min": 0.2,
        "max": 1.2,
        "desc": "Degradation product of erythrocyte hemoglobin metabolized by the liver.",
        "plain_note": "Accumulation causes clinical jaundice and suggests hemolysis, hepatic metabolic congestion, or biliary blockage."
    },
    {
        "id": "tsh",
        "name": "Thyroid Stimulating Hormone (TSH)",
        "patterns": [
            r"\btsh\b",
            r"\bt\.s\.h\b",
            r"\bthyroid stimulating hormone\b",
            r"\bthyrotropin\b"
        ],
        "unit": "mIU/L",
        "min": 0.4,
        "max": 4.5,
        "desc": "Anterior pituitary regulatory hormone governing thyroid gland secretion.",
        "plain_note": "Elevated TSH signals compensatory drive for sluggish thyroid activity (hypothyroidism); low TSH reflects hyperthyroid state."
    },
    {
        "id": "uric_acid",
        "name": "Serum Uric Acid",
        "patterns": [
            r"\b(?:serum )?uric acid\b",
            r"\bs\.?\s*uric acid\b",
            r"\burate\b"
        ],
        "unit": "mg/dL",
        "min": 3.5,
        "max": 7.2,
        "desc": "Final end-stage oxidation metabolite of endogenous and dietary purines.",
        "plain_note": "Hyperuricemia elevates the clinical risk for monosodium urate crystallization (gout) or uric acid nephrolithiasis."
    },
    {
        "id": "calcium",
        "name": "Serum Calcium",
        "patterns": [
            r"\b(?:serum )?calcium\b",
            r"\bs\.?\s*calcium\b",
            r"\btotal calcium\b"
        ],
        "unit": "mg/dL",
        "min": 8.5,
        "max": 10.5,
        "desc": "Essential mineral cation mediating neuromuscular conduction and cardiac electrophysiology.",
        "plain_note": "Deviations require workup of parathyroid hormone (PTH), 25-hydroxy vitamin D, and renal electrolyte conservation."
    },
    {
        "id": "sodium",
        "name": "Serum Sodium (Na+)",
        "patterns": [
            r"\b(?:serum )?sodium\b",
            r"\bs\.?\s*sodium\b",
            r"\bna\+\b"
        ],
        "unit": "mEq/L",
        "min": 135.0,
        "max": 145.0,
        "desc": "Principal extracellular cation regulating intravascular volume and osmotic equilibrium.",
        "plain_note": "Perturbations reflect water balance disorders, endocrine dysfunction, or diuretic therapy."
    },
    {
        "id": "potassium",
        "name": "Serum Potassium (K+)",
        "patterns": [
            r"\b(?:serum )?potassium\b",
            r"\bs\.?\s*potassium\b",
            r"\bk\+\b"
        ],
        "unit": "mEq/L",
        "min": 3.5,
        "max": 5.1,
        "desc": "Primary intracellular electrolyte governing cardiac rhythmicity and membrane potentials.",
        "plain_note": "Both hypokalemia and hyperkalemia represent electrophysiologic risks requiring prompt physician review."
    }
]

# ---------------------------------------------------------
# 2. Sample Synthetic Medical Report (For 1-Click Demo)
# ---------------------------------------------------------
SYNTHETIC_REPORT = """METROPOLIS DIAGNOSTIC PATHOLOGY LABORATORY
Accredited Clinical Testing Facility
Patient Name: John Doe                  Age/Gender: 46 Y / Male
Date of Collection: 25-Oct-2026         Sample ID: MET-98421
Referring Physician: Dr. S. Rao, MD     Report Status: Final

-----------------------------------------------------------------------------------------
TEST NAME                           RESULT      UNIT         PRINTED REFERENCE RANGE
-----------------------------------------------------------------------------------------
COMPLETE BLOOD COUNT (CBC)
Hemoglobin                           10.8        g/dL         13.0 - 17.5
Total Leucocyte Count (TLC)          8200        cells/mcL    4000 - 11000
Red Blood Cell Count (RBC)           3.8         mil/mcL      4.2 - 5.8
Platelet Count                       240000      /mcL         150000 - 450000

METABOLIC & DIABETIC PANEL
Fasting Blood Sugar (Glucose)        132         mg/dL        70 - 99
HbA1c                                6.8         %            4.0 - 5.6

LIPID PROFILE
Total Cholesterol                    228         mg/dL        125 - 200
HDL Cholesterol                      36          mg/dL        40 - 60
LDL Cholesterol                      145         mg/dL        50 - 100
Triglycerides                        185         mg/dL        40 - 150

RENAL & HEPATIC FUNCTION
Serum Creatinine                     1.1         mg/dL        0.6 - 1.2
Blood Urea Nitrogen (BUN)            16          mg/dL        7 - 21
SGPT (ALT)                           42          U/L          7 - 55
SGOT (AST)                           31          U/L          8 - 48
Serum Uric Acid                      6.1         mg/dL        3.5 - 7.2
Thyroid Stimulating Hormone (TSH)    2.8         mIU/L        0.4 - 4.5
-----------------------------------------------------------------------------------------
End of Report. Authenticated by Dr. K. Sharma (MD, Pathology).
"""

# ---------------------------------------------------------
# 3. Robust Extraction & Parsing Engine
# ---------------------------------------------------------
NUMBER_REGEX = re.compile(r"(?<![A-Za-z0-9.])(\d{1,3}(?:,\d{3})*(?:\.\d+)?|\d+(?:\.\d+)?)(?![0-9.])")

def clean_num_str(raw: str) -> float:
    """Parse numeric string with commas or decimals into float safely."""
    sanitized = raw.replace(",", "").strip()
    return float(sanitized)

def extract_printed_range(line: str):
    """
    Detects printed reference intervals in a line.
    Matches formats like '13.0 - 17.5', '150000 - 450000', '4.0-5.6', '< 200', '> 40', '0.6 to 1.2'.
    """
    # Interval: min - max
    interval_match = re.search(r"(\d+(?:,\d+)*(?:\.\d+)?)\s*(?:-|to)\s*(\d+(?:,\d+)*(?:\.\d+)?)", line)
    if interval_match:
        try:
            low = clean_num_str(interval_match.group(1))
            high = clean_num_str(interval_match.group(2))
            if low <= high:
                return low, high, f"{low} - {high}"
        except Exception:
            pass

    # Threshold: < max
    less_match = re.search(r"<\s*(\d+(?:,\d+)*(?:\.\d+)?)", line)
    if less_match:
        try:
            high = clean_num_str(less_match.group(1))
            return 0.0, high, f"< {high}"
        except Exception:
            pass

    # Threshold: > min
    more_match = re.search(r">\s*(\d+(?:,\d+)*(?:\.\d+)?)", line)
    if more_match:
        try:
            low = clean_num_str(more_match.group(1))
            return low, float("inf"), f"> {low}"
        except Exception:
            pass

    return None, None, None

def detect_printed_flag(line: str) -> str:
    """Detects explicit high/low flags printed in report line (e.g. '10.8 L', '145 H', 'High')."""
    if re.search(r"\b(?:H|HIGH|\*)\b", line, re.IGNORECASE):
        return "High"
    if re.search(r"\b(?:L|LOW)\b", line, re.IGNORECASE):
        return "Low"
    return ""

def sanitize_line(raw: str) -> str:
    """Normalizes punctuation, dashes, dots, and colons in line for easier matching."""
    s = raw.replace("\t", " ")
    # Normalize multiple dots used as leader dots: 'Hemoglobin ....... 14.2' -> 'Hemoglobin 14.2'
    s = re.sub(r"\.{2,}", " ", s)
    return s.strip()

def parse_report_with_diagnostics(raw_text: str):
    """
    Robust multi-strategy parser that extracts recognized biomarkers,
    evaluates reference ranges, and returns diagnostics for unmatched candidate lines.
    """
    lines = [sanitize_line(l) for l in raw_text.splitlines() if l.strip()]
    extracted_records = []
    seen_biomarkers = set()
    recognized_lines = set()
    unrecognized_candidates = []

    # Filter out common metadata lines to prevent false matching (Age, Dates, Phone, Sample IDs)
    def is_metadata_line(l: str) -> bool:
        lower = l.lower()
        if re.search(r"\b(?:age|dob|sex|gender|date|sample id|patient id|phone|ref\.? by)\b", lower):
            # Check if it doesn't also contain a known test name
            has_test = any(any(re.search(p, lower) for p in b["patterns"]) for b in REFERENCE_DB)
            return not has_test
        return False

    # Strategy 1: In-line matching (Test and value on the same line)
    for idx, line in enumerate(lines):
        if is_metadata_line(line):
            continue

        for bio in REFERENCE_DB:
            if bio["id"] in seen_biomarkers:
                continue

            matched = False
            for pat in bio["patterns"]:
                if re.search(pat, line, re.IGNORECASE):
                    matched = True
                    break

            if not matched:
                continue

            # Extract numbers on this line
            numbers = NUMBER_REGEX.findall(line)
            if not numbers:
                continue

            # Check printed range
            p_min, p_max, p_label = extract_printed_range(line)
            printed_flag = detect_printed_flag(line)

            measured_val = None
            if p_min is not None and p_max is not None:
                # If range exists on line, pick the first number that isn't one of the range bounds
                for num_str in numbers:
                    try:
                        val = clean_num_str(num_str)
                        if p_max != float("inf") and (abs(val - p_min) < 0.0001 or abs(val - p_max) < 0.0001):
                            continue
                        measured_val = val
                        break
                    except Exception:
                        continue
            else:
                try:
                    measured_val = clean_num_str(numbers[0])
                except Exception:
                    continue

            if measured_val is None:
                continue

            # Evaluate effective range
            if p_min is not None and p_max is not None:
                eff_min = p_min
                eff_max = p_max
                range_display = p_label
                range_source = "Printed on Report"
            else:
                eff_min = bio["min"]
                eff_max = bio["max"]
                range_display = f"{eff_min} - {eff_max}"
                range_source = "Standard Adult Reference"

            # Determine clinical category
            if eff_min is not None and eff_max is not None:
                if measured_val < eff_min:
                    status = "Potentially Low"
                    category = "flagged"
                elif measured_val > eff_max:
                    status = "Potentially High"
                    category = "flagged"
                else:
                    status = "Normal"
                    category = "normal"
            else:
                status = "Uncertain / Manual Review"
                category = "uncertain"

            extracted_records.append({
                "Test Name": bio["name"],
                "Measured Value": measured_val,
                "Unit": bio["unit"],
                "Reference Range": range_display,
                "Range Source": range_source,
                "Status": status,
                "Category": category,
                "Clinical Context": bio["desc"],
                "Plain Explanation": bio.get("plain_note", ""),
                "Report Flag": printed_flag,
                "Raw Line": line
            })
            seen_biomarkers.add(bio["id"])
            recognized_lines.add(idx)

    # Strategy 2: Two-line / columnar matching (Test name on line N, result on line N+1)
    for idx in range(len(lines) - 1):
        if idx in recognized_lines:
            continue
        line_cur = lines[idx]
        line_next = lines[idx + 1]

        for bio in REFERENCE_DB:
            if bio["id"] in seen_biomarkers:
                continue

            matched = any(re.search(p, line_cur, re.IGNORECASE) for p in bio["patterns"])
            if not matched:
                continue

            # Check if next line contains the numeric result
            numbers = NUMBER_REGEX.findall(line_next)
            if not numbers:
                continue

            p_min, p_max, p_label = extract_printed_range(line_next)
            try:
                measured_val = clean_num_str(numbers[0])
            except Exception:
                continue

            if p_min is not None and p_max is not None:
                eff_min = p_min
                eff_max = p_max
                range_display = p_label
                range_source = "Printed on Report"
            else:
                eff_min = bio["min"]
                eff_max = bio["max"]
                range_display = f"{eff_min} - {eff_max}"
                range_source = "Standard Adult Reference"

            if eff_min is not None and eff_max is not None:
                if measured_val < eff_min:
                    status = "Potentially Low"
                    category = "flagged"
                elif measured_val > eff_max:
                    status = "Potentially High"
                    category = "flagged"
                else:
                    status = "Normal"
                    category = "normal"
            else:
                status = "Uncertain / Manual Review"
                category = "uncertain"

            extracted_records.append({
                "Test Name": bio["name"],
                "Measured Value": measured_val,
                "Unit": bio["unit"],
                "Reference Range": range_display,
                "Range Source": range_source,
                "Status": status,
                "Category": category,
                "Clinical Context": bio["desc"],
                "Plain Explanation": bio.get("plain_note", ""),
                "Report Flag": detect_printed_flag(line_next),
                "Raw Line": f"{line_cur} -> {line_next}"
            })
            seen_biomarkers.add(bio["id"])
            recognized_lines.add(idx)
            recognized_lines.add(idx + 1)

    # Diagnostics: Detect candidate lines that had numbers and test-like words but weren't matched
    for idx, line in enumerate(lines):
        if idx in recognized_lines or is_metadata_line(line):
            continue
        # Check if line has a number and letters
        has_num = bool(NUMBER_REGEX.search(line))
        has_letters = bool(re.search(r"[A-Za-z]{3,}", line))
        if has_num and has_letters and not re.search(r"\b(?:page|doctor|signature|accredited|end of report)\b", line, re.IGNORECASE):
            unrecognized_candidates.append(line)

    diagnostics = {
        "total_lines": len(lines),
        "recognized_count": len(extracted_records),
        "recognized_labels": [r["Test Name"] for r in extracted_records],
        "unrecognized_candidates": unrecognized_candidates
    }

    return extracted_records, diagnostics

def parse_report_text(raw_text: str):
    """Backwards-compatible wrapper returning only records."""
    records, _ = parse_report_with_diagnostics(raw_text)
    return records

# ---------------------------------------------------------
# 4. Multi-Format Document Ingestion Engine
# ---------------------------------------------------------
def get_tesseract_command():
    """Locates the Tesseract OCR executable across standard local and cloud paths."""
    candidates = [
        shutil.which("tesseract"),
        "/usr/bin/tesseract",
        "/usr/local/bin/tesseract",
        "/opt/homebrew/bin/tesseract"
    ]
    for c in candidates:
        if c and os.path.isfile(c) and os.access(c, os.X_OK):
            return c
    return None

def is_tesseract_available() -> bool:
    return get_tesseract_command() is not None

def preprocess_image_for_ocr(pil_img: Image.Image) -> Image.Image:
    """Preprocesses image to enhance OCR contrast, orientation, and resolution."""
    # 1. Correct EXIF orientation
    try:
        pil_img = ImageOps.exif_transpose(pil_img)
    except Exception:
        pass

    # 2. Convert to RGB to discard alpha channels
    if pil_img.mode != "RGB":
        pil_img = pil_img.convert("RGB")

    # 3. Upscale small images to ensure decimal points and small fonts are distinct
    w, h = pil_img.size
    if w < 1400:
        scale_factor = 2
        pil_img = pil_img.resize((w * scale_factor, h * scale_factor), Image.Resampling.LANCZOS)

    # 4. Convert to grayscale and apply autocontrast
    gray = pil_img.convert("L")
    contrasted = ImageOps.autocontrast(gray)
    return contrasted

def extract_text_from_image(image_bytes):
    """
    Ingests PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC/HEIF images.
    Returns (success: bool, text_or_error: str, format_name: str).
    """
    tess_cmd = get_tesseract_command()
    if not tess_cmd:
        return False, (
            "Tesseract OCR executable is not available on this system.\n\n"
            "Installation Guide:\n"
            "• macOS: `brew install tesseract`\n"
            "• Linux / Streamlit Cloud: `apt-get install tesseract-ocr` (configured via packages.txt)\n"
            "• Windows: Download installer from GitHub UB-Mannheim/tesseract\n\n"
            "Fallback: You can paste the text directly into the 'Paste Report Text' tab."
        ), "Unknown"

    try:
        import pytesseract
        pytesseract.pytesseract.tesseract_cmd = tess_cmd

        # Inspect and open with Pillow
        img = Image.open(image_bytes)
        img_format = img.format or "Image"

        proc_img = preprocess_image_for_ocr(img)

        # First attempt with PSM 6 (uniform block of text / table)
        ocr_text = pytesseract.image_to_string(proc_img, config="--psm 6")
        if not ocr_text.strip():
            # Fallback attempt with default PSM
            ocr_text = pytesseract.image_to_string(proc_img)

        if not ocr_text.strip():
            return False, "No readable text detected in this image. Please ensure sufficient lighting, sharpness, and resolution.", img_format

        return True, ocr_text, img_format
    except Exception as e:
        return False, f"Image decoding / OCR error: {str(e)}", "Error"

def extract_text_from_pdf(pdf_bytes):
    """
    Extracts text from PDF. If the PDF is scanned (insufficient embedded text),
    automatically renders pages to images and runs OCR on each page.
    Returns (success: bool, text: str, method: str, pages_count: int).
    """
    try:
        import pdfplumber
        extracted_pages = []
        is_scanned = False
        tess_cmd = get_tesseract_command()

        with pdfplumber.open(pdf_bytes) as pdf:
            total_pages = len(pdf.pages)
            if total_pages == 0:
                return False, "PDF contains zero pages.", "Empty", 0

            # 1. Attempt digital text stream extraction
            for page in pdf.pages:
                text = page.extract_text()
                if text and text.strip():
                    extracted_pages.append(text.strip())

            # 2. Check if text is sufficient or if it's a scanned document
            combined_text = "\n\n".join(extracted_pages)
            if len(combined_text.strip()) < 30:
                # Scanned PDF detected: Fall back to rendering pages as images + OCR
                is_scanned = True
                if not tess_cmd:
                    return False, (
                        "This PDF appears to be a scanned image without an embedded digital text layer, "
                        "and Tesseract OCR is not installed on this host. "
                        "Please install tesseract or copy-paste report text directly."
                    ), "Scanned PDF (No OCR)", total_pages

                import pytesseract
                pytesseract.pytesseract.tesseract_cmd = tess_cmd
                ocr_pages = []

                for idx, page in enumerate(pdf.pages):
                    page_img = page.to_image(resolution=200).original
                    proc_img = preprocess_image_for_ocr(page_img)
                    page_text = pytesseract.image_to_string(proc_img, config="--psm 6")
                    if not page_text.strip():
                        page_text = pytesseract.image_to_string(proc_img)
                    if page_text.strip():
                        ocr_pages.append(f"--- Page {idx + 1} ---\n{page_text.strip()}")

                combined_text = "\n\n".join(ocr_pages)
                method = "Scanned PDF (OCR Rendered)"
            else:
                method = "Digital PDF Stream"

            if not combined_text.strip():
                return False, "No readable text could be retrieved from this PDF.", method, total_pages

            return True, combined_text, method, total_pages
    except Exception as e:
        return False, f"PDF extraction failed: {str(e)}", "Error", 0

# ---------------------------------------------------------
# 5. PDF Audit Report Exporter (ReportLab)
# ---------------------------------------------------------
def generate_pdf_audit_report(meta: dict, records: list) -> bytes:
    """Generates a professional clinical PDF audit report using ReportLab."""
    if not REPORTLAB_AVAILABLE:
        return b""

    buf = io.BytesIO()
    doc = SimpleDocTemplate(buf, pagesize=letter, leftMargin=36, rightMargin=36, topMargin=36, bottomMargin=36)
    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        "MedTitle",
        parent=styles["Heading1"],
        fontSize=18,
        leading=22,
        textColor=colors.HexColor("#0F1E36")
    )
    sub_style = ParagraphStyle(
        "MedSub",
        parent=styles["Normal"],
        fontSize=9,
        leading=12,
        textColor=colors.HexColor("#64748B")
    )

    story = [
        Paragraph("Orca MedScan — Clinical Screening Audit Summary", title_style),
        Paragraph(f"Audit ID: <b>{meta.get('id', 'N/A')}</b> | Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}", sub_style),
        Paragraph(f"Source Document: {meta.get('source_name', 'Direct Input')} ({meta.get('source_type', 'N/A')})", sub_style),
        Spacer(1, 14),
    ]

    # Table data
    table_data = [["Biomarker", "Result", "Unit", "Reference Interval", "Status"]]
    for r in records:
        table_data.append([
            r["Test Name"],
            str(r["Measured Value"]),
            r["Unit"],
            f"{r['Reference Range']} ({r['Range Source']})",
            r["Status"]
        ])

    table = Table(table_data, colWidths=[160, 60, 60, 150, 110])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#0F1E36")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.whitesmoke),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#CBD5E1")),
    ]))
    story.append(table)
    story.append(Spacer(1, 16))
    story.append(Paragraph("<b>Disclaimer:</b> Informational screening prototype for Orcathon 2026. Not a clinical diagnosis. Consult a licensed physician.", sub_style))

    doc.build(story)
    return buf.getvalue()

# ---------------------------------------------------------
# 6. Session State Management
# ---------------------------------------------------------
def init_session_state():
    if "history" not in st.session_state:
        st.session_state["history"] = []
    if "current_records" not in st.session_state:
        st.session_state["current_records"] = []
    if "current_meta" not in st.session_state:
        st.session_state["current_meta"] = None
    if "current_diagnostics" not in st.session_state:
        st.session_state["current_diagnostics"] = None
    if "raw_text_buffer" not in st.session_state:
        st.session_state["raw_text_buffer"] = ""
    if "nav_view" not in st.session_state:
        st.session_state["nav_view"] = "Dashboard"

def add_report_to_history(source_name: str, source_type: str, records: list, raw_text: str, diagnostics: dict):
    rep_id = f"AUDIT-{len(st.session_state['history']) + 1:03d}"
    entry = {
        "id": rep_id,
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "source_name": source_name,
        "source_type": source_type,
        "records": records,
        "total_count": len(records),
        "normal_count": sum(1 for r in records if r["Category"] == "normal"),
        "flagged_count": sum(1 for r in records if r["Category"] == "flagged"),
        "uncertain_count": sum(1 for r in records if r["Category"] == "uncertain"),
        "raw_text": raw_text,
        "diagnostics": diagnostics
    }
    st.session_state["history"].append(entry)
    st.session_state["current_records"] = records
    st.session_state["current_meta"] = entry
    st.session_state["current_diagnostics"] = diagnostics
    return entry

# ---------------------------------------------------------
# 7. Navigation & Top-Level Selector
# ---------------------------------------------------------
def render_navigation_bar():
    st.markdown("### 🩺 Orca MedScan — Clinical Intelligence Platform")
    
    views = [
        "📊 Dashboard",
        "🔬 Analyze Report",
        "📋 Report History",
        "🔍 Extraction Diagnostics",
        "ℹ️ About & Safety"
    ]
    # Clean map
    clean_map = {
        "📊 Dashboard": "Dashboard",
        "🔬 Analyze Report": "Analyze Report",
        "📋 Report History": "Report History",
        "🔍 Extraction Diagnostics": "Extraction Diagnostics",
        "ℹ️ About & Safety": "About & Safety"
    }
    current_idx = list(clean_map.values()).index(st.session_state["nav_view"])

    selected = st.radio(
        "Navigation",
        views,
        index=current_idx,
        horizontal=True,
        label_visibility="collapsed"
    )
    new_view = clean_map[selected]
    if new_view != st.session_state["nav_view"]:
        st.session_state["nav_view"] = new_view
        st.rerun()

    st.markdown("<hr style='margin-top: 6px; margin-bottom: 20px; border-color: #E2E8F0;'>", unsafe_allow_html=True)

# ---------------------------------------------------------
# 8. View: Dashboard
# ---------------------------------------------------------
def render_dashboard_view():
    st.markdown("## 📊 Medical Intelligence Dashboard")
    st.caption("Executive overview of biomarker screenings, reference interval verifications, and detected anomalies.")

    history = st.session_state["history"]
    total_audits = len(history)

    if total_audits > 0:
        total_indicators = sum(h["total_count"] for h in history)
        total_flagged = sum(h["flagged_count"] for h in history)
        total_uncertain = sum(h["uncertain_count"] for h in history)
        total_normal = sum(h["normal_count"] for h in history)
    else:
        total_indicators = 0
        total_flagged = 0
        total_uncertain = 0
        total_normal = 0

    # Summary metric cards
    c1, c2, c3, c4 = st.columns(4)
    with c1:
        st.markdown(f"""
        <div class="metric-card">
            <div class="metric-card-title">Reports Audited</div>
            <div class="metric-card-val">{total_audits}</div>
            <div class="metric-card-sub">Active session verifications</div>
        </div>
        """, unsafe_allow_html=True)
    with c2:
        st.markdown(f"""
        <div class="metric-card">
            <div class="metric-card-title">Biomarkers Screened</div>
            <div class="metric-card-val">{total_indicators}</div>
            <div class="metric-card-sub">{total_normal} within reference range</div>
        </div>
        """, unsafe_allow_html=True)
    with c3:
        flag_color = "#DC2626" if total_flagged > 0 else "#0D9488"
        st.markdown(f"""
        <div class="metric-card">
            <div class="metric-card-title">Out-of-Range Flags</div>
            <div class="metric-card-val" style="color: {flag_color};">{total_flagged}</div>
            <div class="metric-card-sub">Potentially High or Low values</div>
        </div>
        """, unsafe_allow_html=True)
    with c4:
        st.markdown(f"""
        <div class="metric-card">
            <div class="metric-card-title">Needs Review</div>
            <div class="metric-card-val" style="color: #64748B;">{total_uncertain}</div>
            <div class="metric-card-sub">Atypical or non-standard format</div>
        </div>
        """, unsafe_allow_html=True)

    st.markdown("<br>", unsafe_allow_html=True)

    # Empty State Condition
    if total_audits == 0:
        st.markdown("""
        <div class="empty-state-box">
            <div style="font-size: 3rem; margin-bottom: 12px;">🩺</div>
            <h3 style="color: #0F1E36; margin-bottom: 8px;">No Clinical Reports Analyzed in this Session Yet</h3>
            <p style="color: #64748B; max-width: 620px; margin: 0 auto 24px auto; font-size: 1rem; line-height: 1.5;">
                Ingest a digital or scanned laboratory document (PDF, PNG, JPG, WEBP, BMP, TIFF), paste raw report text,
                or launch the pre-configured synthetic demo to populate real-time analytics.
            </p>
        </div>
        """, unsafe_allow_html=True)

        col1, col2 = st.columns([1, 1])
        with col1:
            if st.button("🚀 Analyze New Medical Report", use_container_width=True, type="primary"):
                st.session_state["nav_view"] = "Analyze Report"
                st.rerun()
        with col2:
            if st.button("⚡ Load 1-Click Synthetic Sample (For Judges)", use_container_width=True):
                records, diag = parse_report_with_diagnostics(SYNTHETIC_REPORT)
                add_report_to_history("Metropolis Diagnostic Sample (MET-98421)", "Synthetic Sample", records, SYNTHETIC_REPORT, diag)
                st.rerun()
        return

    # Populated State: Charts & Anomaly Callouts
    st.markdown("### 📈 Indicator Status Breakdown & Priority Alerts")
    chart_col, alert_col = st.columns([3, 2])

    with chart_col:
        st.markdown("##### Session Biomarker Classification")
        dist_df = pd.DataFrame({
            "Classification": ["Normal", "Out-of-Range (Flagged)", "Review Needed"],
            "Count": [total_normal, total_flagged, total_uncertain]
        })
        st.bar_chart(dist_df.set_index("Classification"), color="#0284C7", use_container_width=True)

    with alert_col:
        st.markdown("##### 🚨 Priority Anomalies (Latest Audit)")
        current_meta = st.session_state["current_meta"]
        latest_records = current_meta["records"] if current_meta else []
        flagged_items = [r for r in latest_records if r["Category"] == "flagged"]

        if flagged_items:
            for item in flagged_items[:4]:
                badge = "🔺 Potentially High" if "High" in item["Status"] else "🔻 Potentially Low"
                st.markdown(f"""
                <div style="background-color: #FFFFFF; border-left: 4px solid #DC2626; border-radius: 8px; padding: 12px 16px; margin-bottom: 8px; border: 1px solid #E2E8F0; border-left-width: 4px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <strong>{item['Test Name']}</strong>
                        <span style="font-size: 0.8rem; font-weight: 600; color: #DC2626;">{badge}</span>
                    </div>
                    <div style="font-size: 0.85rem; color: #475569; margin-top: 4px;">
                        Measured: <b>{item['Measured Value']} {item['Unit']}</b> (Ref: {item['Reference Range']} {item['Unit']})
                    </div>
                </div>
                """, unsafe_allow_html=True)
            if len(flagged_items) > 4:
                st.caption(f"+ {len(flagged_items) - 4} more flagged indicators")
        else:
            st.success("All indicators in the latest analyzed report are within expected reference intervals.")

    st.markdown("---")

    # Latest Audit Overview Table
    st.subheader(f"📑 Latest Report Audit: {st.session_state['current_meta']['source_name']}")
    st.caption(f"Audit ID: {st.session_state['current_meta']['id']} | Screened: {st.session_state['current_meta']['timestamp']} | Input Type: {st.session_state['current_meta']['source_type']}")

    latest_df = pd.DataFrame(st.session_state["current_records"])
    display_df = latest_df[["Test Name", "Measured Value", "Unit", "Reference Range", "Range Source", "Status"]].copy()
    st.dataframe(display_df, use_container_width=True, hide_index=True)

    # Action row
    btn1, btn2, btn3 = st.columns([1, 1, 1])
    with btn1:
        if st.button("➕ Analyze Another Report", use_container_width=True, type="primary"):
            st.session_state["nav_view"] = "Analyze Report"
            st.rerun()
    with btn2:
        csv_buffer = io.StringIO()
        latest_df.to_csv(csv_buffer, index=False)
        st.download_button(
            label="📥 Download Audit Data (CSV)",
            data=csv_buffer.getvalue(),
            file_name=f"orca_audit_{st.session_state['current_meta']['id']}.csv",
            mime="text/csv",
            use_container_width=True
        )
    with btn3:
        if REPORTLAB_AVAILABLE:
            pdf_bytes = generate_pdf_audit_report(st.session_state["current_meta"], st.session_state["current_records"])
            st.download_button(
                label="📄 Download Clinical Summary (PDF)",
                data=pdf_bytes,
                file_name=f"orca_clinical_summary_{st.session_state['current_meta']['id']}.pdf",
                mime="application/pdf",
                use_container_width=True
            )

# ---------------------------------------------------------
# 9. View: Analyze Report
# ---------------------------------------------------------
def render_analyze_view():
    st.markdown("## 🔬 Clinical Report Analyzer")
    st.caption("Upload medical lab documents or paste raw text to screen biomarkers and evaluate reference intervals.")

    st.warning(
        "⚠️ **Clinical Screening Disclaimer**: Orca MedScan is an informational decision-support prototype. "
        "It does not provide diagnosis, clinical staging, or pharmaceutical prescriptions. Always corroborate findings with licensed healthcare providers."
    )

    # Ingestion Tabs
    tab_upload, tab_paste, tab_sample = st.tabs([
        "📁 Upload Document / Image (PDF, PNG, JPG, WEBP, BMP, TIFF)",
        "📝 Paste Report Text",
        "⚡ 1-Click Synthetic Sample"
    ])

    extracted_text = ""
    source_label = "Direct Input"
    source_kind = "Text"
    extraction_method = "Direct"

    with tab_upload:
        st.markdown("##### Supported Formats: `.pdf` (digital or scanned), `.png`, `.jpg`, `.jpeg`, `.webp`, `.bmp`, `.tiff`")
        uploaded_file = st.file_uploader(
            "Select medical lab report file:",
            type=["pdf", "png", "jpg", "jpeg", "webp", "bmp", "tiff", "tif", "heic", "heif"],
            help="Upload PDF or scanned image lab panels in any standard clinical format."
        )

        if uploaded_file is not None:
            source_label = uploaded_file.name
            fname_lower = uploaded_file.name.lower()
            file_bytes = io.BytesIO(uploaded_file.read())

            if fname_lower.endswith(".pdf"):
                with st.spinner("Processing PDF (verifying digital text layer & scanned OCR fallback)..."):
                    success, text_res, method, pages = extract_text_from_pdf(file_bytes)
                    if success:
                        extracted_text = text_res
                        source_kind = "PDF"
                        extraction_method = method
                        st.success(f"✅ Ingested PDF ({pages} page(s)) via **{method}**.")
                    else:
                        st.error(f"❌ {text_res}")
            else:
                # Image processing
                col_img, col_ocr_info = st.columns([1, 1])
                with col_img:
                    try:
                        st.image(file_bytes, caption=f"Uploaded: {uploaded_file.name}", use_container_width=True)
                    except Exception:
                        st.info(f"Image uploaded: `{uploaded_file.name}`")

                with col_ocr_info:
                    with st.spinner("Detecting format and executing optical character recognition (OCR)..."):
                        file_bytes.seek(0)
                        success, text_res, detected_format = extract_text_from_image(file_bytes)
                        if success:
                            extracted_text = text_res
                            source_kind = f"Image ({detected_format})"
                            extraction_method = f"Tesseract OCR ({detected_format})"
                            st.success(f"✅ OCR successfully completed on **{detected_format}** format.")
                        else:
                            st.error(f"❌ {text_res}")

    with tab_paste:
        pasted_text = st.text_area(
            "Paste complete laboratory report text below:",
            value=st.session_state.get("raw_text_buffer", ""),
            height=200,
            placeholder="Paste raw blood panel, metabolic panel, or pathology text..."
        )
        if pasted_text.strip():
            extracted_text = pasted_text
            source_label = "Pasted Lab Text"
            source_kind = "Pasted Text"
            extraction_method = "Direct Paste"

    with tab_sample:
        st.markdown("##### Pre-configured Clinical Test Panel (John Doe, 46 Y / Male)")
        st.info("Includes Complete Blood Count (CBC), Metabolic Panel, Lipid Profile, Renal Function, and Thyroid panel with printed reference ranges.")
        if st.button("Load Sample Data Into Review Box", type="secondary"):
            st.session_state["raw_text_buffer"] = SYNTHETIC_REPORT
            st.rerun()

        if st.session_state.get("raw_text_buffer") == SYNTHETIC_REPORT:
            extracted_text = SYNTHETIC_REPORT
            source_label = "Metropolis Diagnostic Sample (MET-98421)"
            source_kind = "Synthetic Sample"
            extraction_method = "Synthetic Benchmark"

    st.markdown("---")

    # Editable Pre-Analysis Verification Box
    if extracted_text:
        with st.expander("🔍 Inspect & Edit Extracted Text Before Analysis", expanded=True):
            st.caption(f"Extraction Pipeline: **{extraction_method}** | Document: `{source_label}`")
            final_text = st.text_area("Report Text for Analysis:", value=extracted_text, height=180)
    else:
        final_text = ""

    # Primary Action Button
    col_run, col_clear = st.columns([2, 5])
    with col_run:
        run_analysis = st.button("🔬 Run Clinical Indicator Analysis", type="primary", use_container_width=True)
    with col_clear:
        if st.button("Clear Buffer", use_container_width=False):
            st.session_state["raw_text_buffer"] = ""
            st.rerun()

    # Execution & Results Rendering
    if run_analysis:
        if not final_text.strip():
            st.warning("Please provide or upload report text before analyzing.")
            return

        with st.spinner("Extracting biomarkers, cross-referencing reference intervals, and resolving aliases..."):
            records, diagnostics = parse_report_with_diagnostics(final_text)

        if not records:
            st.error(
                "❌ **No Recognized Biomarkers Found**\n\n"
                f"• Extraction Pipeline: **{extraction_method}**\n"
                f"• Characters Processed: **{len(final_text)}**\n"
                f"• Lines Screened: **{diagnostics['total_lines']}**\n\n"
                "The parser could not match standard clinical test labels in the extracted text. "
                "Possible reasons:\n"
                "1. Document text does not contain supported biomarkers (e.g. CBC, Metabolic, Lipid, Thyroid, Renal).\n"
                "2. Image was blurry or characters were misread by OCR.\n"
                "3. Test labels use proprietary or unsupported acronyms."
            )
            with st.expander("🔍 View Extracted Text for Manual Review", expanded=True):
                st.text(final_text)
                if diagnostics["unrecognized_candidates"]:
                    st.markdown("**Lines with numbers or test-like patterns detected:**")
                    for cand in diagnostics["unrecognized_candidates"][:5]:
                        st.markdown(f"- `{cand}`")
            return

        # Store in session history
        entry = add_report_to_history(source_label, source_kind, records, final_text, diagnostics)
        st.success(f"✅ Successfully identified {len(records)} clinical biomarkers from `{source_label}`!")

    # Display Active Analysis Results
    if st.session_state.get("current_records"):
        records = st.session_state["current_records"]
        df = pd.DataFrame(records)

        st.markdown("### 📊 Active Report Findings")
        t_cnt = len(df)
        n_cnt = sum(1 for r in records if r["Category"] == "normal")
        f_cnt = sum(1 for r in records if r["Category"] == "flagged")
        u_cnt = sum(1 for r in records if r["Category"] == "uncertain")

        m1, m2, m3, m4 = st.columns(4)
        m1.metric("Biomarkers Detected", t_cnt)
        m2.metric("Within Reference Range", n_cnt)
        m3.metric("Potentially Out of Range", f_cnt, delta=f"{f_cnt} abnormal" if f_cnt > 0 else "0", delta_color="inverse")
        m4.metric("Needs Clinical Review", u_cnt)

        # Filters
        st.markdown("<br>", unsafe_allow_html=True)
        f_col, s_col = st.columns([2, 3])
        with f_col:
            filter_mode = st.selectbox(
                "Filter findings by status:",
                ["Show All Biomarkers", "Show Only Flagged (High & Low)", "Show Normal Only", "Show Review Needed Only"]
            )
        with s_col:
            search_query = st.text_input("Search test by name:", placeholder="e.g. Glucose, Hemoglobin, LDL...")

        filtered_df = df.copy()
        if filter_mode == "Show Only Flagged (High & Low)":
            filtered_df = filtered_df[filtered_df["Category"] == "flagged"]
        elif filter_mode == "Show Normal Only":
            filtered_df = filtered_df[filtered_df["Category"] == "normal"]
        elif filter_mode == "Show Review Needed Only":
            filtered_df = filtered_df[filtered_df["Category"] == "uncertain"]

        if search_query.strip():
            filtered_df = filtered_df[filtered_df["Test Name"].str.contains(search_query.strip(), case=False, na=False)]

        st.markdown("##### 📑 Detailed Indicator Assessment")
        if filtered_df.empty:
            st.info("No biomarkers match the selected filter criteria.")
        else:
            for _, row in filtered_df.iterrows():
                status_str = row["Status"]
                if status_str == "Normal":
                    badge_html = '<span class="badge-normal">🟢 Normal</span>'
                elif "High" in status_str:
                    badge_html = '<span class="badge-high">🔺 Potentially High</span>'
                elif "Low" in status_str:
                    badge_html = '<span class="badge-low">🔻 Potentially Low</span>'
                else:
                    badge_html = '<span class="badge-review">⚠️ Review Needed</span>'

                with st.container():
                    r1, r2, r3, r4 = st.columns([3, 2, 2, 2])
                    with r1:
                        st.markdown(f"**{row['Test Name']}**")
                        st.caption(f"ℹ️ {row['Clinical Context']}")
                        if row.get("Plain Explanation"):
                            st.caption(f"💡 *{row['Plain Explanation']}*")
                    with r2:
                        st.markdown(f"**{row['Measured Value']}** {row['Unit']}")
                        st.caption("Measured Value")
                    with r3:
                        st.markdown(f"**{row['Reference Range']}** {row['Unit']}")
                        st.caption(f"Range ({row['Range Source']})")
                    with r4:
                        st.markdown(badge_html, unsafe_allow_html=True)
                        st.caption("Classification")
                    st.divider()

        # Download row
        d_col1, d_col2 = st.columns([1, 1])
        with d_col1:
            csv_buffer = io.StringIO()
            df.to_csv(csv_buffer, index=False)
            st.download_button(
                label="📥 Download Structured Report (CSV)",
                data=csv_buffer.getvalue(),
                file_name="orca_biomarker_report.csv",
                mime="text/csv",
                use_container_width=True
            )
        with d_col2:
            if REPORTLAB_AVAILABLE and st.session_state.get("current_meta"):
                pdf_bytes = generate_pdf_audit_report(st.session_state["current_meta"], records)
                st.download_button(
                    label="📄 Download Clinical Summary (PDF)",
                    data=pdf_bytes,
                    file_name="orca_clinical_summary.pdf",
                    mime="application/pdf",
                    use_container_width=True
                )

# ---------------------------------------------------------
# 10. View: Report History
# ---------------------------------------------------------
def render_history_view():
    st.markdown("## 📋 Session Audit History")
    st.caption("Log of all medical documents audited in the current runtime session. Disclosed: Session storage is temporary.")

    history = st.session_state["history"]
    if not history:
        st.info("No reports have been audited in this session yet. Upload a report in 'Analyze Report' to track history.")
        return

    summary_rows = []
    for h in history:
        summary_rows.append({
            "Audit ID": h["id"],
            "Timestamp": h["timestamp"],
            "Source / File Name": h["source_name"],
            "Format": h["source_type"],
            "Biomarkers Found": h["total_count"],
            "Out-of-Range": h["flagged_count"],
            "Normal": h["normal_count"]
        })
    st.dataframe(pd.DataFrame(summary_rows), use_container_width=True, hide_index=True)

    st.markdown("---")
    st.subheader("🔍 Inspect Historical Audit")
    selected_id = st.selectbox("Select Audit ID to inspect:", [h["id"] for h in history])
    selected_report = next((h for h in history if h["id"] == selected_id), None)

    if selected_report:
        st.markdown(f"**Document**: `{selected_report['source_name']}` | **Audited At**: {selected_report['timestamp']}")
        st.dataframe(
            pd.DataFrame(selected_report["records"])[["Test Name", "Measured Value", "Unit", "Reference Range", "Range Source", "Status"]],
            use_container_width=True,
            hide_index=True
        )

    if st.button("🗑️ Clear Session Audit History"):
        st.session_state["history"] = []
        st.session_state["current_records"] = []
        st.session_state["current_meta"] = None
        st.session_state["current_diagnostics"] = None
        st.rerun()

# ---------------------------------------------------------
# 11. View: Extraction Diagnostics
# ---------------------------------------------------------
def render_diagnostics_view():
    st.markdown("## 🔍 Extraction & OCR Diagnostics")
    st.caption("Deep inspection of raw extracted text, recognized biomarker lines, and candidate unmatched lines.")

    diag = st.session_state.get("current_diagnostics")
    current_meta = st.session_state.get("current_meta")

    if not diag or not current_meta:
        st.info("No active report diagnostics available. Analyze a report to inspect extraction telemetry.")
        return

    st.markdown(f"#### Audit: `{current_meta['id']}` ({current_meta['source_name']})")
    
    c1, c2, c3 = st.columns(3)
    c1.metric("Total Lines Processed", diag["total_lines"])
    c2.metric("Biomarkers Matched", diag["recognized_count"])
    c3.metric("Unmatched Candidates", len(diag["unrecognized_candidates"]))

    st.markdown("---")
    st.subheader("✅ Successfully Recognized Biomarkers")
    st.write(diag["recognized_labels"])

    st.markdown("---")
    st.subheader("⚠️ Unrecognized Candidate Lines")
    st.caption("Lines containing numbers or potential test names that were not mapped to the central registry:")
    if diag["unrecognized_candidates"]:
        for cand in diag["unrecognized_candidates"]:
            st.markdown(f"<div class='diag-card'>{cand}</div>", unsafe_allow_html=True)
    else:
        st.success("Zero unmapped candidate lines detected.")

    st.markdown("---")
    with st.expander("📄 View Full Raw Text Stream", expanded=False):
        st.text(current_meta["raw_text"])

# ---------------------------------------------------------
# 12. View: About & Safety
# ---------------------------------------------------------
def render_about_view():
    st.markdown("## ℹ️ About & Clinical Safety")
    
    st.markdown("""
    ### 🩺 Purpose & Scope
    **Orca MedScan** is a clinical screening and healthcare intelligence prototype designed for **Orcathon 2026** (Healthcare & MedTech track).
    Its goal is to assist patients and primary care clinicians in rapidly interpreting unstructured lab documents across multiple formats without privacy compromises.

    ---

    ### 📁 Comprehensive Format Support
    - **Digital PDFs**: Extracted using pure Python text streams (`pdfplumber`).
    - **Scanned PDFs**: Automatically rendered to high-resolution images with automated Tesseract OCR fallback.
    - **Raster Images**: Supports **PNG, JPG, JPEG, WEBP, BMP, and TIFF** formats with adaptive contrast preprocessing.
    - **HEIC / HEIF**: Supported via `pillow-heif` decoder.

    ---

    ### 🔒 Privacy & Zero-Cloud API Architecture
    - **100% Local Runtime**: All OCR, document parsing, regex extraction, and reference verification execute on the host machine.
    - **Zero Data Leakage**: No patient identifiers, lab values, or medical reports are transmitted to external cloud APIs or third parties.

    ---

    ### 📐 Reference Interval Methodology
    1. **Printed Laboratory Ranges (Primary Priority)**:
       Clinical laboratories calibrate analyzers with specific assay reagents. Orca MedScan automatically extracts and respects reference ranges printed directly on the report.
    2. **Documented Adult Clinical Ranges (Fallback)**:
       When a report omits reference intervals, standard adult clinical ranges are applied and explicitly labeled as `Standard Adult Reference`.
    3. **Conservative Classification**:
       Results are strictly categorized as `Normal`, `Potentially High`, `Potentially Low`, or `Review Needed`. Speculative clinical diagnoses are deliberately prohibited.

    ---

    ### ⚠️ Medical Disclaimer
    *This application is an educational and clinical screening prototype. It does not provide medical diagnoses, treatment plans, or clinical triaging. Patients should consult licensed healthcare providers for diagnostic interpretation.*
    """)

# ---------------------------------------------------------
# 13. Main Application Controller
# ---------------------------------------------------------
def main():
    init_session_state()

    # Sidebar
    with st.sidebar:
        st.title("🩺 Orca MedScan")
        st.caption("Clinical Intelligence & Report Screening")
        st.markdown("---")

        st.subheader("⚡ Quick Actions")
        if st.button("Load Sample Report (1-Click)", use_container_width=True, type="primary"):
            records, diag = parse_report_with_diagnostics(SYNTHETIC_REPORT)
            add_report_to_history("Metropolis Diagnostic Sample (MET-98421)", "Synthetic Sample", records, SYNTHETIC_REPORT, diag)
            st.session_state["nav_view"] = "Dashboard"
            st.rerun()

        st.markdown("---")
        total_history = len(st.session_state["history"])
        st.caption(f"Audits in Session: **{total_history}**")

        tess_ok = is_tesseract_available()
        tess_desc = "Available (Active)" if tess_ok else "Not Installed (Text/Digital PDF only)"
        st.caption(f"OCR Engine: **{tess_desc}**")
        st.caption(f"HEIF Decoder: **{'Available' if HEIF_AVAILABLE else 'Not Available'}**")

        st.markdown("---")
        st.info("🔒 100% Local & Private. Zero patient data transmitted externally.")

    # Top-Level Spacious Navigation Bar
    render_navigation_bar()

    # View Router
    view = st.session_state["nav_view"]
    if view == "Dashboard":
        render_dashboard_view()
    elif view == "Analyze Report":
        render_analyze_view()
    elif view == "Report History":
        render_history_view()
    elif view == "Extraction Diagnostics":
        render_diagnostics_view()
    elif view == "About & Safety":
        render_about_view()

if __name__ == "__main__":
    main()
