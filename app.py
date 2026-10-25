"""
Orca MedScan — Clinical Intelligence Command Center & Multi-Format Diagnostic Analyzer
Orcathon 2026: Healthcare & MedTech Track

Architectural Capabilities:
- Digital & Scanned PDFs (with automated OCR fallback via pdfplumber page rendering)
- Multi-format Images: PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC/HEIF
- Robust multi-strategy biomarker extraction with alias resolution & diagnostic tracing
- Signature Interactive 3D Medical Holographic Document Scanner
- Clinical Command Center Dashboard with dark executive aesthetics
- Interactive Plotly biomarker distribution analytics
- Exportable structured CSV and ReportLab clinical PDF reports
"""

import io
import os
import re
import shutil
from datetime import datetime
import pandas as pd
from PIL import Image, ImageOps
import streamlit as st
import streamlit.components.v1 as components

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

# Plotly for interactive clinical analytics
try:
    import plotly.graph_objects as go
    PLOTLY_AVAILABLE = True
except Exception:
    PLOTLY_AVAILABLE = False

# Configure Streamlit page
st.set_page_config(
    page_title="Orca MedScan | Clinical Intelligence",
    page_icon="🩺",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# ---------------------------------------------------------
# Custom Styling: Deep Midnight Healthcare Aesthetic
# ---------------------------------------------------------
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

    :root {
        --bg-midnight: #0A0F1D;
        --surface-dark: #111827;
        --surface-card: #161F30;
        --border-subtle: rgba(56, 189, 248, 0.14);
        --border-highlight: rgba(56, 189, 248, 0.35);
        --cyan-neon: #38BDF8;
        --cyan-glow: rgba(56, 189, 248, 0.25);
        --mint-healthy: #10B981;
        --rose-alert: #F43F5E;
        --amber-warning: #F59E0B;
        --slate-text: #94A3B8;
        --white-crisp: #F8FAFC;
    }

    /* Overall Canvas */
    .stApp {
        background-color: var(--bg-midnight);
        color: var(--white-crisp);
        font-family: 'Inter', -apple-system, sans-serif;
    }

    .block-container {
        padding-top: 1.5rem;
        padding-bottom: 3.5rem;
        max-width: 1440px;
    }

    /* Typography */
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Inter', sans-serif;
        color: var(--white-crisp);
        letter-spacing: -0.02em;
        font-weight: 700;
    }

    /* Hero Banner */
    .hero-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0 20px 0;
        border-bottom: 1px solid rgba(148, 163, 184, 0.12);
        margin-bottom: 24px;
    }
    .hero-title {
        font-size: 1.95rem;
        font-weight: 800;
        background: linear-gradient(135deg, #FFFFFF 30%, #38BDF8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .hero-sub {
        font-size: 0.88rem;
        color: var(--slate-text);
        margin-top: 4px;
    }
    .enclave-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(16, 185, 129, 0.12);
        border: 1px solid rgba(16, 185, 129, 0.3);
        color: #34D399;
        padding: 5px 12px;
        border-radius: 9999px;
        font-size: 0.76rem;
        font-family: 'JetBrains Mono', monospace;
        letter-spacing: 0.05em;
    }

    /* Metric Card Component */
    .metric-card-dark {
        background: linear-gradient(145deg, #111827 0%, #161F30 100%);
        border: 1px solid var(--border-subtle);
        border-radius: 14px;
        padding: 22px 24px;
        box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.45);
        position: relative;
        overflow: hidden;
        margin-bottom: 14px;
    }
    .metric-card-dark::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--cyan-neon), transparent);
    }
    .metric-label {
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--slate-text);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 6px;
    }
    .metric-number {
        font-size: 2.3rem;
        font-weight: 800;
        color: var(--white-crisp);
        font-family: 'JetBrains Mono', monospace;
        line-height: 1.1;
    }
    .metric-caption {
        font-size: 0.82rem;
        color: #64748B;
        margin-top: 6px;
    }

    /* Status Badges */
    .pill-normal {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(16, 185, 129, 0.12);
        color: #34D399;
        border: 1px solid rgba(16, 185, 129, 0.35);
        border-radius: 9999px;
        padding: 5px 14px;
        font-size: 0.8rem;
        font-weight: 600;
        font-family: 'JetBrains Mono', monospace;
    }
    .pill-high {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(244, 63, 94, 0.15);
        color: #FB7185;
        border: 1px solid rgba(244, 63, 94, 0.4);
        border-radius: 9999px;
        padding: 5px 14px;
        font-size: 0.8rem;
        font-weight: 600;
        font-family: 'JetBrains Mono', monospace;
    }
    .pill-low {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(245, 158, 11, 0.14);
        color: #FBBF24;
        border: 1px solid rgba(245, 158, 11, 0.4);
        border-radius: 9999px;
        padding: 5px 14px;
        font-size: 0.8rem;
        font-weight: 600;
        font-family: 'JetBrains Mono', monospace;
    }
    .pill-review {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(148, 163, 184, 0.12);
        color: #CBD5E1;
        border: 1px solid rgba(148, 163, 184, 0.3);
        border-radius: 9999px;
        padding: 5px 14px;
        font-size: 0.8rem;
        font-weight: 600;
        font-family: 'JetBrains Mono', monospace;
    }

    /* Result Row Card */
    .biomarker-card {
        background: #111827;
        border: 1px solid rgba(148, 163, 184, 0.12);
        border-radius: 12px;
        padding: 16px 20px;
        margin-bottom: 10px;
        transition: all 0.2s ease;
    }
    .biomarker-card:hover {
        border-color: var(--border-highlight);
        background: #151E30;
    }

    /* Empty State Container */
    .empty-state-dark {
        text-align: center;
        background: linear-gradient(180deg, #111827 0%, #0D1322 100%);
        border: 1.5px dashed rgba(56, 189, 248, 0.25);
        border-radius: 16px;
        padding: 48px 24px;
        margin: 20px 0;
    }

    /* Form & Input adjustments for dark mode */
    .stTextInput > div > div, .stSelectbox > div > div, .stTextArea > div > div {
        background-color: #111827 !important;
        color: #F8FAFC !important;
        border-color: rgba(148, 163, 184, 0.2) !important;
    }
    
    /* Primary Action Buttons */
    .stButton > button[kind="primary"] {
        background: linear-gradient(135deg, #0284C7 0%, #0D9488 100%) !important;
        color: #FFFFFF !important;
        font-weight: 600 !important;
        border: 1px solid rgba(56, 189, 248, 0.4) !important;
        box-shadow: 0 4px 14px rgba(2, 132, 199, 0.3) !important;
        border-radius: 9px !important;
        padding: 10px 22px !important;
    }
    .stButton > button[kind="primary"]:hover {
        box-shadow: 0 6px 20px rgba(56, 189, 248, 0.5) !important;
        transform: translateY(-1px);
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
        "desc": "Oxygen transport protein within red blood cells.",
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
        "desc": "Primary cellular defense component of the immune system.",
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
        "desc": "Total circulating count of oxygen-carrying erythrocytes.",
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
        "desc": "Platelet fragments essential for hemostatic plug formation and vascular repair.",
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
        "desc": "Blood glucose level following a minimum 8-hour overnight fast.",
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
        "desc": "Blood glucose concentration measured 2 hours post-meal.",
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
        "desc": "Weighted 60-to-90 day circulating mean glycemic index.",
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
        "desc": "Overall circulating cholesterol content in serum.",
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
        "desc": "Scavenges excess circulating cholesterol for reverse transport to the liver.",
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
        "desc": "Primary atherogenic carrier responsible for arterial plaque accumulation.",
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
        "desc": "Endogenous triglyceride transporter manufactured in hepatocytes.",
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
        "desc": "Dominant dietary and endogenous storage lipid.",
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
        "desc": "Metabolic breakdown marker cleared strictly via glomerular filtration.",
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
        "desc": "End byproduct of protein deamination excreted by functional nephrons.",
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
        "desc": "Cytosolic hepatocyte enzyme released into circulation upon cellular stress.",
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
        "desc": "Enzyme concentrated within hepatic parenchymal, skeletal, and myocardial cells.",
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
        "desc": "Biliary and bone matrix hydrolase enzyme.",
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
        "desc": "Heme catabolic product processed and conjugated by hepatocytes.",
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
        "desc": "Pituitary feedback hormone modulating thyroid thyroxine output.",
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
        "desc": "Terminal oxidation product of purine nucleoside metabolism.",
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
        "desc": "Divalent cation mediating bone density, clotting cascades, and membrane stability.",
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
        "desc": "Major extracellular osmotic determinant maintaining intravascular volume.",
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
        "desc": "Dominant intracellular cation regulating transmembrane potential and cardiac repolarization.",
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
    sanitized = raw.replace(",", "").strip()
    return float(sanitized)

def extract_printed_range(line: str):
    interval_match = re.search(r"(\d+(?:,\d+)*(?:\.\d+)?)\s*(?:-|to)\s*(\d+(?:,\d+)*(?:\.\d+)?)", line)
    if interval_match:
        try:
            low = clean_num_str(interval_match.group(1))
            high = clean_num_str(interval_match.group(2))
            if low <= high:
                return low, high, f"{low} - {high}"
        except Exception:
            pass

    less_match = re.search(r"<\s*(\d+(?:,\d+)*(?:\.\d+)?)", line)
    if less_match:
        try:
            high = clean_num_str(less_match.group(1))
            return 0.0, high, f"< {high}"
        except Exception:
            pass

    more_match = re.search(r">\s*(\d+(?:,\d+)*(?:\.\d+)?)", line)
    if more_match:
        try:
            low = clean_num_str(more_match.group(1))
            return low, float("inf"), f"> {low}"
        except Exception:
            pass

    return None, None, None

def detect_printed_flag(line: str) -> str:
    if re.search(r"\b(?:H|HIGH|\*)\b", line, re.IGNORECASE):
        return "High"
    if re.search(r"\b(?:L|LOW)\b", line, re.IGNORECASE):
        return "Low"
    return ""

def sanitize_line(raw: str) -> str:
    s = raw.replace("\t", " ")
    s = re.sub(r"\.{2,}", " ", s)
    return s.strip()

def parse_report_with_diagnostics(raw_text: str):
    lines = [sanitize_line(l) for l in raw_text.splitlines() if l.strip()]
    extracted_records = []
    seen_biomarkers = set()
    recognized_lines = set()
    unrecognized_candidates = []

    def is_metadata_line(l: str) -> bool:
        lower = l.lower()
        if re.search(r"\b(?:age|dob|sex|gender|date|sample id|patient id|phone|ref\.? by)\b", lower):
            has_test = any(any(re.search(p, lower) for p in b["patterns"]) for b in REFERENCE_DB)
            return not has_test
        return False

    # Strategy 1: In-line extraction
    for idx, line in enumerate(lines):
        if is_metadata_line(line):
            continue

        for bio in REFERENCE_DB:
            if bio["id"] in seen_biomarkers:
                continue

            matched = any(re.search(pat, line, re.IGNORECASE) for pat in bio["patterns"])
            if not matched:
                continue

            numbers = NUMBER_REGEX.findall(line)
            if not numbers:
                continue

            p_min, p_max, p_label = extract_printed_range(line)
            printed_flag = detect_printed_flag(line)

            measured_val = None
            if p_min is not None and p_max is not None:
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
                "Report Flag": printed_flag,
                "Raw Line": line
            })
            seen_biomarkers.add(bio["id"])
            recognized_lines.add(idx)

    # Strategy 2: Two-line / multiline column matching
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

    # Candidates for extraction telemetry
    for idx, line in enumerate(lines):
        if idx in recognized_lines or is_metadata_line(line):
            continue
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
    records, _ = parse_report_with_diagnostics(raw_text)
    return records

# ---------------------------------------------------------
# 4. Multi-Format Ingestion Engine
# ---------------------------------------------------------
def get_tesseract_command():
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
    try:
        pil_img = ImageOps.exif_transpose(pil_img)
    except Exception:
        pass

    if pil_img.mode != "RGB":
        pil_img = pil_img.convert("RGB")

    w, h = pil_img.size
    if w < 1400:
        scale_factor = 2
        pil_img = pil_img.resize((w * scale_factor, h * scale_factor), Image.Resampling.LANCZOS)

    gray = pil_img.convert("L")
    contrasted = ImageOps.autocontrast(gray)
    return contrasted

def extract_text_from_image(image_bytes):
    tess_cmd = get_tesseract_command()
    if not tess_cmd:
        return False, "Tesseract OCR executable not found on host system.", "Unknown"

    try:
        import pytesseract
        pytesseract.pytesseract.tesseract_cmd = tess_cmd

        img = Image.open(image_bytes)
        img_format = img.format or "Image"
        proc_img = preprocess_image_for_ocr(img)

        ocr_text = pytesseract.image_to_string(proc_img, config="--psm 6")
        if not ocr_text.strip():
            ocr_text = pytesseract.image_to_string(proc_img)

        if not ocr_text.strip():
            return False, "No readable text detected in image.", img_format

        return True, ocr_text, img_format
    except Exception as e:
        return False, f"Image decoding / OCR error: {str(e)}", "Error"

def extract_text_from_pdf(pdf_bytes):
    try:
        import pdfplumber
        extracted_pages = []
        tess_cmd = get_tesseract_command()

        with pdfplumber.open(pdf_bytes) as pdf:
            total_pages = len(pdf.pages)
            if total_pages == 0:
                return False, "PDF contains zero pages.", "Empty", 0

            for page in pdf.pages:
                text = page.extract_text()
                if text and text.strip():
                    extracted_pages.append(text.strip())

            combined_text = "\n\n".join(extracted_pages)
            if len(combined_text.strip()) < 30:
                if not tess_cmd:
                    return False, "Scanned PDF detected without available OCR engine.", "Scanned PDF (No OCR)", total_pages

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
                return False, "No readable text retrieved from PDF.", method, total_pages

            return True, combined_text, method, total_pages
    except Exception as e:
        return False, f"PDF extraction failed: {str(e)}", "Error", 0

# ---------------------------------------------------------
# 5. ReportLab PDF Clinical Summary Generator
# ---------------------------------------------------------
def generate_pdf_audit_report(meta: dict, records: list) -> bytes:
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
# 6. Signature 3D Interactive Scanner Centerpiece
# ---------------------------------------------------------
def render_3d_scanner_centerpiece():
    """Renders the signature WebGL/Canvas 3D interactive holographic medical document."""
    html_code = """
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            background-color: transparent;
            overflow: hidden;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 340px;
        }

        .viewport-3d {
            width: 100%;
            height: 330px;
            perspective: 1100px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: crosshair;
        }

        .holo-card {
            width: 520px;
            height: 290px;
            background: linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(15, 23, 42, 0.85) 100%);
            border: 1px solid rgba(56, 189, 248, 0.35);
            border-radius: 16px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(56, 189, 248, 0.15);
            transform-style: preserve-3d;
            transform: rotateX(16deg) rotateY(-12deg);
            transition: transform 0.1s ease-out;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
        }

        /* 3D Grid Blueprint */
        .grid-layer {
            position: absolute;
            inset: 0;
            background-image: 
                linear-gradient(rgba(56, 189, 248, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(56, 189, 248, 0.08) 1px, transparent 1px);
            background-size: 24px 24px;
            transform: translateZ(10px);
            pointer-events: none;
        }

        /* Sweeping Volumetric Laser */
        .laser-beam {
            position: absolute;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, transparent, #38BDF8, #00F2FE, #38BDF8, transparent);
            box-shadow: 0 0 18px #38BDF8, 0 0 35px #00F2FE;
            animation: sweepLaser 3.5s ease-in-out infinite alternate;
            transform: translateZ(28px);
        }

        @keyframes sweepLaser {
            0% { top: 8%; opacity: 0.6; }
            50% { opacity: 1; }
            100% { top: 90%; opacity: 0.8; }
        }

        /* Header Info Inside Holo */
        .holo-header {
            padding: 16px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(56, 189, 248, 0.2);
            transform: translateZ(20px);
        }
        .holo-title {
            color: #F8FAFC;
            font-size: 0.82rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }
        .holo-status {
            color: #34D399;
            font-size: 0.72rem;
            background: rgba(16, 185, 129, 0.18);
            border: 1px solid rgba(16, 185, 129, 0.4);
            padding: 3px 8px;
            border-radius: 9999px;
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }
        .holo-status-dot {
            width: 6px;
            height: 6px;
            background: #34D399;
            border-radius: 50%;
            animation: pulseDot 1.5s infinite;
        }
        @keyframes pulseDot {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.8); }
        }

        /* Floating 3D Biomarker Nodes */
        .nodes-container {
            padding: 18px 22px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            transform: translateZ(35px);
        }
        .holo-node {
            background: rgba(15, 23, 42, 0.7);
            border: 1px solid rgba(148, 163, 184, 0.2);
            border-radius: 8px;
            padding: 9px 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.2s ease;
        }
        .holo-node:hover {
            border-color: #38BDF8;
            box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
            transform: translateZ(48px);
        }
        .node-name {
            color: #94A3B8;
            font-size: 0.76rem;
            font-weight: 600;
        }
        .node-val {
            font-size: 0.82rem;
            font-weight: 700;
        }
        .val-low { color: #FBBF24; }
        .val-high { color: #FB7185; }
        .val-norm { color: #34D399; }

        /* Sonar Ripple on Click */
        .ripple {
            position: absolute;
            border-radius: 50%;
            border: 2px solid #38BDF8;
            animation: rippleAnim 1.2s cubic-bezier(0, 0.2, 0.8, 1) forwards;
            pointer-events: none;
            transform: translateZ(30px);
        }
        @keyframes rippleAnim {
            0% { width: 0; height: 0; opacity: 1; }
            100% { width: 450px; height: 450px; opacity: 0; }
        }

        /* Bottom Telemetry */
        .holo-footer {
            position: absolute;
            bottom: 12px;
            left: 20px;
            right: 20px;
            display: flex;
            justify-content: space-between;
            color: #64748B;
            font-size: 0.68rem;
            letter-spacing: 0.05em;
            transform: translateZ(15px);
        }
    </style>
    </head>
    <body>
        <div class="viewport-3d" id="viewport">
            <div class="holo-card" id="card">
                <div class="grid-layer"></div>
                <div class="laser-beam"></div>

                <div class="holo-header">
                    <div class="holo-title">🧬 CLINICAL SCANNER CORE // 3D TELEMETRY</div>
                    <div class="holo-status">
                        <div class="holo-status-dot"></div>
                        ACTIVE SCAN
                    </div>
                </div>

                <div class="nodes-container">
                    <div class="holo-node">
                        <span class="node-name">Hemoglobin</span>
                        <span class="node-val val-low">10.8 g/dL ▼</span>
                    </div>
                    <div class="holo-node">
                        <span class="node-name">Glucose (F)</span>
                        <span class="node-val val-high">132 mg/dL ▲</span>
                    </div>
                    <div class="holo-node">
                        <span class="node-name">Cholesterol</span>
                        <span class="node-val val-high">228 mg/dL ▲</span>
                    </div>
                    <div class="holo-node">
                        <span class="node-name">Platelet Count</span>
                        <span class="node-val val-norm">240k /mcL ●</span>
                    </div>
                    <div class="holo-node">
                        <span class="node-name">Creatinine</span>
                        <span class="node-val val-norm">1.1 mg/dL ●</span>
                    </div>
                    <div class="holo-node">
                        <span class="node-name">HbA1c</span>
                        <span class="node-val val-high">6.8 % ▲</span>
                    </div>
                </div>

                <div class="holo-footer">
                    <span>VOLUMETRIC REFERENCE VERIFICATION</span>
                    <span>PARALLAX DEPTH: 1100PX // 60 FPS</span>
                </div>
            </div>
        </div>

        <script>
            const viewport = document.getElementById('viewport');
            const card = document.getElementById('card');

            // Responsive 3D Mouse Parallax
            viewport.addEventListener('mousemove', (e) => {
                const rect = viewport.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const rotY = (x / (rect.width / 2)) * 18;
                const rotX = -(y / (rect.height / 2)) * 18;

                card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
            });

            viewport.addEventListener('mouseleave', () => {
                card.style.transform = `rotateX(16deg) rotateY(-12deg)`;
            });

            // Interactive Ripple Pulse on Click
            viewport.addEventListener('click', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const ripple = document.createElement('div');
                ripple.className = 'ripple';
                ripple.style.left = (x - 225) + 'px';
                ripple.style.top = (y - 225) + 'px';
                card.appendChild(ripple);

                setTimeout(() => ripple.remove(), 1200);
            });
        </script>
    </body>
    </html>
    """
    components.html(html_code, height=340, scrolling=False)

# ---------------------------------------------------------
# 7. Session State Management
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
# 8. Navigation & Top-Level Hero Header
# ---------------------------------------------------------
def render_header_and_navigation():
    # Hero Banner
    st.markdown("""
    <div class="hero-container">
        <div>
            <h1 class="hero-title">🩺 ORCA MEDSCAN</h1>
            <div class="hero-sub">Clinical Intelligence Command Center & Multi-Format Laboratory Diagnostics</div>
        </div>
        <div style="display: flex; gap: 10px; align-items: center;">
            <div class="enclave-badge">
                <span style="font-size: 0.9rem;">●</span> ZERO-CLOUD ENCLAVE // LOCAL RUNTIME
            </div>
        </div>
    </div>
    """, unsafe_allow_html=True)

    views = [
        "📊 Command Dashboard",
        "🔬 Ingest & Analyze",
        "📋 Audit History",
        "🔍 Extraction Telemetry",
        "ℹ️ Clinical Safety"
    ]
    view_keys = {
        "📊 Command Dashboard": "Dashboard",
        "🔬 Ingest & Analyze": "Analyze Report",
        "📋 Audit History": "Report History",
        "🔍 Extraction Telemetry": "Extraction Diagnostics",
        "ℹ️ Clinical Safety": "About & Safety"
    }

    current_idx = list(view_keys.values()).index(st.session_state["nav_view"])
    selected_label = st.radio(
        "Navigation",
        views,
        index=current_idx,
        horizontal=True,
        label_visibility="collapsed"
    )
    new_view = view_keys[selected_label]
    if new_view != st.session_state["nav_view"]:
        st.session_state["nav_view"] = new_view
        st.rerun()

    st.markdown("<hr style='margin-top: 6px; margin-bottom: 24px; border-color: rgba(148, 163, 184, 0.12);'>", unsafe_allow_html=True)

# ---------------------------------------------------------
# 9. View: Command Dashboard
# ---------------------------------------------------------
def render_dashboard_view():
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

    # Top Row: 3D Holographic Centerpiece + Real-Time Telemetry
    col_3d, col_stats = st.columns([7, 5])

    with col_3d:
        render_3d_scanner_centerpiece()

    with col_stats:
        st.markdown(f"""
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 6px;">
            <div class="metric-card-dark">
                <div class="metric-label">Reports Audited</div>
                <div class="metric-number">{total_audits}</div>
                <div class="metric-caption">Session telemetry records</div>
            </div>
            <div class="metric-card-dark">
                <div class="metric-label">Biomarkers Screened</div>
                <div class="metric-number">{total_indicators}</div>
                <div class="metric-caption">{total_normal} in verified interval</div>
            </div>
            <div class="metric-card-dark">
                <div class="metric-label">Out-of-Range Flags</div>
                <div class="metric-number" style="color: {'#FB7185' if total_flagged > 0 else '#34D399'};">{total_flagged}</div>
                <div class="metric-caption">Requiring clinical attention</div>
            </div>
            <div class="metric-card-dark">
                <div class="metric-label">Needs Review</div>
                <div class="metric-number" style="color: #94A3B8;">{total_uncertain}</div>
                <div class="metric-caption">Atypical or non-standard format</div>
            </div>
        </div>
        """, unsafe_allow_html=True)

        if st.button("⚡ 1-Click Synthetic Benchmark (For Judges)", type="primary", use_container_width=True):
            records, diag = parse_report_with_diagnostics(SYNTHETIC_REPORT)
            add_report_to_history("Metropolis Diagnostic Sample (MET-98421)", "Synthetic Benchmark", records, SYNTHETIC_REPORT, diag)
            st.rerun()

    # Empty State Notice if No Audits
    if total_audits == 0:
        st.markdown("""
        <div class="empty-state-dark">
            <div style="font-size: 2.8rem; margin-bottom: 12px;">📑</div>
            <h3 style="color: #F8FAFC; margin-bottom: 8px;">No Clinical Documents Audited in Active Session</h3>
            <p style="color: #94A3B8; max-width: 580px; margin: 0 auto 20px auto; font-size: 0.95rem; line-height: 1.5;">
                Ingest laboratory reports (PDFs, PNG, JPG, WEBP, BMP, TIFF) or click the 1-Click Benchmark above
                to populate real-time biometric distributions and volumetric anomaly alerts.
            </p>
        </div>
        """, unsafe_allow_html=True)
        return

    st.markdown("---")

    # Mid Row: Biomarker Analytics & Priority Anomalies
    col_chart, col_alerts = st.columns([6, 6])

    with col_chart:
        st.subheader("📊 Biomarker Status Distribution")
        if PLOTLY_AVAILABLE:
            fig = go.Figure(data=[go.Pie(
                labels=["In Reference Range", "Potentially High", "Potentially Low", "Review Needed"],
                values=[
                    total_normal,
                    sum(1 for h in history for r in h["records"] if "High" in r["Status"]),
                    sum(1 for h in history for r in h["records"] if "Low" in r["Status"]),
                    total_uncertain
                ],
                hole=.65,
                marker=dict(colors=["#10B981", "#F43F5E", "#F59E0B", "#64748B"]),
                textinfo="label+value"
            )])
            fig.update_layout(
                paper_bgcolor="rgba(0,0,0,0)",
                plot_bgcolor="rgba(0,0,0,0)",
                font=dict(color="#F8FAFC", family="Inter, sans-serif"),
                showlegend=False,
                height=260,
                margin=dict(t=10, b=10, l=10, r=10)
            )
            st.plotly_chart(fig, use_container_width=True)
        else:
            dist_df = pd.DataFrame({
                "Classification": ["Normal", "Out-of-Range", "Review Needed"],
                "Count": [total_normal, total_flagged, total_uncertain]
            })
            st.bar_chart(dist_df.set_index("Classification"), color="#38BDF8")

    with col_alerts:
        st.subheader("🚨 Priority Anomaly Alerts (Latest Document)")
        current_meta = st.session_state.get("current_meta")
        latest_records = current_meta["records"] if current_meta else []
        flagged_items = [r for r in latest_records if r["Category"] == "flagged"]

        if flagged_items:
            for item in flagged_items[:4]:
                badge_class = "pill-high" if "High" in item["Status"] else "pill-low"
                arrow = "▲" if "High" in item["Status"] else "▼"
                st.markdown(f"""
                <div style="background: #111827; border-left: 4px solid {'#F43F5E' if 'High' in item['Status'] else '#F59E0B'}; border-radius: 8px; padding: 12px 16px; margin-bottom: 8px; border: 1px solid rgba(148, 163, 184, 0.12); border-left-width: 4px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <strong style="color: #F8FAFC; font-size: 0.95rem;">{item['Test Name']}</strong>
                        <span class="{badge_class}">{arrow} {item['Status']}</span>
                    </div>
                    <div style="font-size: 0.85rem; color: #94A3B8; margin-top: 4px;">
                        Measured: <b style="color: #F8FAFC;">{item['Measured Value']} {item['Unit']}</b> (Ref: {item['Reference Range']} {item['Unit']})
                    </div>
                </div>
                """, unsafe_allow_html=True)
        else:
            st.success("All biomarkers in the latest audited document are within verified reference intervals.")

    st.markdown("---")

    # Bottom Row: Active Audit Overview Table & Exports
    latest_meta = st.session_state["current_meta"]
    st.subheader(f"📑 Active Audit: {latest_meta['source_name']}")
    st.caption(f"Audit ID: `{latest_meta['id']}` | Timestamp: `{latest_meta['timestamp']}` | Format: `{latest_meta['source_type']}`")

    latest_df = pd.DataFrame(st.session_state["current_records"])
    disp_df = latest_df[["Test Name", "Measured Value", "Unit", "Reference Range", "Range Source", "Status"]].copy()
    st.dataframe(disp_df, use_container_width=True, hide_index=True)

    # Export Action Row
    act1, act2, act3 = st.columns([1, 1, 1])
    with act1:
        if st.button("➕ Ingest Another Report", use_container_width=True, type="primary"):
            st.session_state["nav_view"] = "Analyze Report"
            st.rerun()
    with act2:
        csv_buffer = io.StringIO()
        latest_df.to_csv(csv_buffer, index=False)
        st.download_button(
            label="📥 Download Structured CSV",
            data=csv_buffer.getvalue(),
            file_name=f"orca_audit_{latest_meta['id']}.csv",
            mime="text/csv",
            use_container_width=True
        )
    with act3:
        if REPORTLAB_AVAILABLE:
            pdf_bytes = generate_pdf_audit_report(latest_meta, st.session_state["current_records"])
            st.download_button(
                label="📄 Download Clinical Summary (PDF)",
                data=pdf_bytes,
                file_name=f"orca_clinical_summary_{latest_meta['id']}.pdf",
                mime="application/pdf",
                use_container_width=True
            )

# ---------------------------------------------------------
# 10. View: Ingest & Analyze
# ---------------------------------------------------------
def render_analyze_view():
    st.subheader("🔬 Multi-Format Report Ingestion & Screening")
    st.caption("Supports digital/scanned PDFs (with automated OCR fallback), PNG, JPG, JPEG, WEBP, BMP, TIFF, and direct clinical text.")

    st.markdown("""
    <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 8px; padding: 12px 16px; margin-bottom: 18px; color: #FDE68A; font-size: 0.85rem;">
        ⚠️ <b>Clinical Screening Guardrail:</b> Orca MedScan is an educational and clinical decision-support screening prototype. It does not provide diagnoses or pharmaceutical prescriptions. Always corroborate findings with licensed healthcare providers.
    </div>
    """, unsafe_allow_html=True)

    tab_upload, tab_paste, tab_sample = st.tabs([
        "📁 Upload Document / Image",
        "📝 Paste Report Text",
        "⚡ 1-Click Benchmark"
    ])

    extracted_text = ""
    source_label = "Direct Input"
    source_kind = "Text"
    extraction_method = "Direct"

    with tab_upload:
        st.markdown("##### Supported: `.pdf` (digital & scanned), `.png`, `.jpg`, `.jpeg`, `.webp`, `.bmp`, `.tiff`")
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
                with st.spinner("Processing PDF (verifying text stream & scanned OCR fallback)..."):
                    success, text_res, method, pages = extract_text_from_pdf(file_bytes)
                    if success:
                        extracted_text = text_res
                        source_kind = "PDF"
                        extraction_method = method
                        st.success(f"✅ Ingested PDF ({pages} page(s)) via **{method}**.")
                    else:
                        st.error(f"❌ {text_res}")
            else:
                col_img, col_ocr_info = st.columns([1, 1])
                with col_img:
                    try:
                        st.image(file_bytes, caption=f"Uploaded: {uploaded_file.name}", use_container_width=True)
                    except Exception:
                        st.info(f"Image uploaded: `{uploaded_file.name}`")

                with col_ocr_info:
                    with st.spinner("Executing optical character recognition (OCR)..."):
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
        st.markdown("##### Pre-configured Clinical Benchmark Panel (John Doe, 46 Y / Male)")
        st.info("Contains CBC, Metabolic, Lipid, Renal, Hepatic, and Thyroid biomarkers with printed reference intervals.")
        if st.button("Load Benchmark Panel Into Review Box", type="secondary"):
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
        with st.expander("🔍 Inspect & Verify Extracted Text Before Analysis", expanded=True):
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

    if run_analysis:
        if not final_text.strip():
            st.warning("Please provide or upload report text before analyzing.")
            return

        with st.spinner("Executing multi-strategy biomarker extraction & reference verification..."):
            records, diagnostics = parse_report_with_diagnostics(final_text)

        if not records:
            st.error(
                "❌ **No Recognized Biomarkers Found**\n\n"
                f"• Pipeline: **{extraction_method}**\n"
                f"• Characters Screened: **{len(final_text)}**\n"
                f"• Lines Screened: **{diagnostics['total_lines']}**\n\n"
                "The parser could not match standard clinical test labels in the extracted text. "
                "Check the text preview above for OCR typos or unrecognized abbreviations."
            )
            with st.expander("🔍 Candidate Lines Detected", expanded=True):
                st.text(final_text)
                if diagnostics["unrecognized_candidates"]:
                    for cand in diagnostics["unrecognized_candidates"][:5]:
                        st.markdown(f"- `{cand}`")
            return

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
                    pill_html = '<span class="pill-normal">● Normal</span>'
                elif "High" in status_str:
                    pill_html = '<span class="pill-high">▲ Potentially High</span>'
                elif "Low" in status_str:
                    pill_html = '<span class="pill-low">▼ Potentially Low</span>'
                else:
                    pill_html = '<span class="pill-review">◆ Review Needed</span>'

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
                        st.markdown(pill_html, unsafe_allow_html=True)
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
# 11. View: Report History
# ---------------------------------------------------------
def render_history_view():
    st.subheader("📋 Session Audit Timeline")
    st.caption("Chronological audit log of all clinical reports evaluated during the current session.")

    history = st.session_state["history"]
    if not history:
        st.info("No reports have been audited in this session yet. Upload a report in 'Ingest & Analyze' to initiate tracking.")
        return

    summary_rows = []
    for h in history:
        summary_rows.append({
            "Audit ID": h["id"],
            "Timestamp": h["timestamp"],
            "Document Source": h["source_name"],
            "Format": h["source_type"],
            "Biomarkers Screened": h["total_count"],
            "Out-of-Range": h["flagged_count"],
            "Normal": h["normal_count"]
        })
    st.dataframe(pd.DataFrame(summary_rows), use_container_width=True, hide_index=True)

    st.markdown("---")
    st.subheader("🔍 Historical Audit Inspector")
    selected_id = st.selectbox("Select Audit ID to inspect:", [h["id"] for h in history])
    selected_report = next((h for h in history if h["id"] == selected_id), None)

    if selected_report:
        st.markdown(f"**Document**: `{selected_report['source_name']}` | **Audited At**: `{selected_report['timestamp']}`")
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
# 12. View: Extraction Telemetry
# ---------------------------------------------------------
def render_diagnostics_view():
    st.subheader("🔍 Extraction Telemetry & OCR Diagnostics")
    st.caption("Technical deep-dive into digital text extraction, candidate line matching, and OCR character recognition.")

    diag = st.session_state.get("current_diagnostics")
    current_meta = st.session_state.get("current_meta")

    if not diag or not current_meta:
        st.info("No active report telemetry available. Ingest and analyze a document to view extraction telemetry.")
        return

    st.markdown(f"#### Audit Telemetry: `{current_meta['id']}` ({current_meta['source_name']})")
    
    c1, c2, c3 = st.columns(3)
    c1.metric("Lines Processed", diag["total_lines"])
    c2.metric("Biomarkers Matched", diag["recognized_count"])
    c3.metric("Candidate Unmatched Lines", len(diag["unrecognized_candidates"]))

    st.markdown("---")
    st.subheader("✅ Mapped Biomarkers")
    st.write(diag["recognized_labels"])

    st.markdown("---")
    st.subheader("⚠️ Unmatched Candidate Lines")
    st.caption("Lines containing numbers or potential test names that were not mapped to the central registry:")
    if diag["unrecognized_candidates"]:
        for cand in diag["unrecognized_candidates"]:
            st.markdown(f"<div style='background: #111827; border: 1px solid rgba(148, 163, 184, 0.15); border-radius: 6px; padding: 10px 14px; margin-bottom: 6px; font-family: monospace; font-size: 0.84rem; color: #38BDF8;'>{cand}</div>", unsafe_allow_html=True)
    else:
        st.success("Zero unmapped candidate lines detected.")

    st.markdown("---")
    with st.expander("📄 View Full Raw Text Stream", expanded=False):
        st.text(current_meta["raw_text"])

# ---------------------------------------------------------
# 13. View: Clinical Safety
# ---------------------------------------------------------
def render_about_view():
    st.subheader("ℹ️ Clinical Safety, Reference Intervals & Methodology")
    
    st.markdown("""
    ### 🩺 Purpose & Scope
    **Orca MedScan** is a clinical decision-support and screening prototype developed for **Orcathon 2026** (Healthcare & MedTech track).
    Its design philosophy bridges the gap between dense, complex laboratory reports and rapid, actionable clinical review without exposing sensitive patient health records to third-party cloud APIs.

    ---

    ### 🔒 Privacy-Preserving Enclave Architecture
    - **100% Local Execution**: All digital document parsing (`pdfplumber`), image OCR (`pytesseract`), regex tokenization, and reference range comparisons execute exclusively in host memory.
    - **Zero Cloud API Exposure**: Patient identifiers, dates of birth, test results, and scanned reports are never transmitted over the internet or sent to external LLMs.

    ---

    ### 📐 Dynamic Reference Interval Verification
    1. **Printed Laboratory Ranges (Highest Priority)**:
       Different clinical laboratories calibrate analyzers with specific assay reagents. Orca MedScan automatically detects and respects reference ranges printed directly on the patient report.
    2. **Documented Adult Clinical Ranges (Fallback)**:
       When a report omits reference intervals, standard adult clinical ranges are applied and explicitly labeled as `Standard Adult Reference`.
    3. **Conservative Classification**:
       Results are strictly categorized as `Normal`, `Potentially High`, `Potentially Low`, or `Review Needed`. Speculative clinical diagnoses are deliberately prohibited.

    ---

    ### ⚠️ Medical Disclaimer
    *This application is an educational and screening prototype. It does not provide medical diagnoses, treatment plans, or clinical triaging. Patients should consult licensed healthcare providers for diagnostic interpretation.*
    """)

# ---------------------------------------------------------
# 14. Main Application Controller
# ---------------------------------------------------------
def main():
    init_session_state()
    render_header_and_navigation()

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
