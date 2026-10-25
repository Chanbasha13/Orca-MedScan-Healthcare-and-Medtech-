"""
Orca MedScan — Clinical Intelligence Platform & Multi-Format Laboratory Diagnostics
Orcathon 2026: Healthcare & MedTech Track

Architectural Capabilities:
- Multi-format Ingestion: Digital/Scanned PDFs (with automated OCR fallback), PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC/HEIF
- Resilient Multi-strategy OCR Parser with clinical alias resolution & OCR typo auto-repair
- Persistent Left Sidebar Navigation with Theme Toggle (Clinical Light / Deep Midnight)
- Realistic 3D Interactive Clinical Document Workspace (Paper depth, multi-page stack, pointer parallax)
- Executive Dashboard with dynamic session metrics & Plotly clinical distribution charts
- Structured CSV Export and ReportLab Clinical PDF Summary Downloads
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

# Cryptographic Enclave Authentication
from auth import (
    authenticate_user,
    register_user,
    init_auth_vault,
    validate_email,
    validate_password_strength,
    DEFAULT_EVALUATOR_EMAIL,
    DEFAULT_EVALUATOR_PASS,
    AUTH_FILE
)

# Register HEIF opener if available
try:
    import pillow_heif
    pillow_heif.register_heif_opener()
    HEIF_AVAILABLE = True
except Exception:
    HEIF_AVAILABLE = False

# ReportLab for clinical PDF generation
try:
    from reportlab.lib.pagesizes import letter
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib import colors
    REPORTLAB_AVAILABLE = True
except Exception:
    REPORTLAB_AVAILABLE = False

# Plotly for clinical analytics
try:
    import plotly.graph_objects as go
    PLOTLY_AVAILABLE = True
except Exception:
    PLOTLY_AVAILABLE = False

# Configure Streamlit page layout
st.set_page_config(
    page_title="Orca MedScan | Clinical Intelligence",
    page_icon="🩺",
    layout="wide",
    initial_sidebar_state="expanded"
)

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
            r"\bs\.?\s*hemo(?:a)?globin\b",
            r"\bhb%"
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
            r"\bleucocyte count\b",
            r"\bleukocyte count\b"
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
            r"\bthrombocyte count\b",
            r"\btotal platelet(?:s)?\b"
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
            r"\bfbg\b",
            r"\bfpg\b",
            r"\bf\.b\.s\b",
            r"\bglucose\s*[,:]?\s*fasting\b",
            r"\bblood sugar\s*[,:]?\s*fasting\b",
            r"\bfasting sugar\b",
            r"\bfasting plasma glucose\b"
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
            r"\bppg\b",
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
            r"\bhba[l1t]c\b",
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
            r"\bcholesterol\s*[,:]?\s*total\b",
            r"\btotal chol\b",
            r"\bchol\b"
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
            r"\btrigs?\b",
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
            r"\bcreat\b",
            r"\bcreatin\b"
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
# 3. Robust Extraction & Pre-Cleaning Engine
# ---------------------------------------------------------
NUMBER_REGEX = re.compile(r"(?<![A-Za-z0-9.])(\d{1,3}(?:,\d{3})*(?:\.\d+)?|\d+(?:,\d{1,2})?|\d+(?:\.\d+)?)(?![0-9.])")

def clean_num_str(raw: str) -> float:
    """Intelligently converts strings with commas (either decimals or thousands) to float."""
    s = raw.strip()
    if re.match(r"^\d+,\d{1,2}$", s):
        s = s.replace(",", ".")
    else:
        s = s.replace(",", "")
    return float(s)

def pre_clean_ocr_line(raw: str) -> str:
    """
    Cleans up noisy OCR artifacts, resolves joined words, and fixes common character confusions
    without inventing data.
    """
    s = raw.replace("\t", " ")
    s = s.replace("—", " - ").replace("§", " ").replace("°", " ").replace("‘", " ").replace("’", " ")
    s = re.sub(r"\.{2,}", " ", s)

    # Split joined words: LeucocyteCount -> Leucocyte Count
    s = re.sub(r"([a-z])([A-Z])", r"\1 \2", s)

    # Separate attached punctuation: PLT( -> PLT (
    s = re.sub(r"([A-Za-z0-9])([(\[:])", r"\1 \2", s)
    s = re.sub(r"([)\]:])([A-Za-z0-9])", r"\1 \2", s)

    # Normalize clinical acronym OCR distortions
    s = re.sub(r"\b[Hh]b[Aa]?[lt1][cC]?\b", "HbA1c", s)
    s = re.sub(r"\b[Hh]ate\b", "HbA1c", s)
    s = re.sub(r"\b[Tt]o[lt]al\s*[Cc]hol[a-z]*\b", "Total Cholesterol", s, flags=re.IGNORECASE)
    s = re.sub(r"\b[Hh][Dd][Ll]\s*([Cc]hol[a-z]*)", r"HDL \1", s, flags=re.IGNORECASE)
    s = re.sub(r"\b[Ll][Oo0][Ll]\s*([Cc]hol[a-z]*)", r"LDL \1", s, flags=re.IGNORECASE)
    s = re.sub(r"\b[Tt][Aa]\s*\(?[Tt]na[a-z]*\b", "Triglycerides", s, flags=re.IGNORECASE)
    s = re.sub(r"\b[Tt]rigs?\b", "Triglycerides", s, flags=re.IGNORECASE)
    s = re.sub(r"\b[Ss]a\s*[Pp][Tt]i?\s*[Aa]?[Ll]?[Tt]?\b", "SGPT", s)
    s = re.sub(r"\b1[Hh]\b", "TSH", s)
    s = re.sub(r"\b[Pp]lat[a-z]*\s*[Cc]oun[a-z]*\b", "Platelet Count", s, flags=re.IGNORECASE)

    # Fix contextual numeric OCR errors: IO5 -> 105, O.85 -> 0.85, 2I8 -> 218
    s = re.sub(r"\b[Il](?=[Oo\d])", "1", s)
    s = re.sub(r"(?<=[0-9])[Il](?=[0-9]|\b)", "1", s)
    s = re.sub(r"(?<=[0-9])[Oo](?=[0-9]|\b)", "0", s)
    s = re.sub(r"\b[Oo](?=\.[0-9])", "0", s)

    return s.strip()

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

def parse_report_with_diagnostics(raw_text: str):
    raw_lines = [l for l in raw_text.splitlines() if l.strip()]
    cleaned_lines = [pre_clean_ocr_line(l) for l in raw_lines]

    extracted_records = []
    seen_biomarkers = set()
    recognized_indices = set()
    unrecognized_candidates = []

    def is_metadata_line(l: str) -> bool:
        lower = l.lower()
        if re.search(r"\b(?:age|dob|sex|gender|date|sample id|patient id|phone|ref\.? by)\b", lower):
            has_test = any(any(re.search(p, lower) for p in b["patterns"]) for b in REFERENCE_DB)
            return not has_test
        return False

    # Strategy 1: In-line matching
    for idx, (raw_l, line) in enumerate(zip(raw_lines, cleaned_lines)):
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
                "Original Label": raw_l.split()[0] if raw_l.split() else bio["name"],
                "Measured Value": measured_val,
                "Unit": bio["unit"],
                "Reference Range": range_display,
                "Range Source": range_source,
                "Status": status,
                "Category": category,
                "Clinical Context": bio["desc"],
                "Plain Explanation": bio.get("plain_note", ""),
                "Report Flag": printed_flag,
                "Raw Line": raw_l
            })
            seen_biomarkers.add(bio["id"])
            recognized_indices.add(idx)

    # Strategy 2: Two-line / block matching
    for idx in range(len(cleaned_lines) - 1):
        if idx in recognized_indices:
            continue
        line_cur = cleaned_lines[idx]
        line_next = cleaned_lines[idx + 1]

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
                "Original Label": line_cur.split()[0] if line_cur.split() else bio["name"],
                "Measured Value": measured_val,
                "Unit": bio["unit"],
                "Reference Range": range_display,
                "Range Source": range_source,
                "Status": status,
                "Category": category,
                "Clinical Context": bio["desc"],
                "Plain Explanation": bio.get("plain_note", ""),
                "Report Flag": detect_printed_flag(line_next),
                "Raw Line": f"{raw_lines[idx]} -> {raw_lines[idx+1]}"
            })
            seen_biomarkers.add(bio["id"])
            recognized_indices.add(idx)
            recognized_indices.add(idx + 1)

    # Diagnostic candidate lines
    for idx, (raw_l, line) in enumerate(zip(raw_lines, cleaned_lines)):
        if idx in recognized_indices or is_metadata_line(line):
            continue
        has_num = bool(NUMBER_REGEX.search(line))
        has_letters = bool(re.search(r"[A-Za-z]{2,}", line))
        if has_num and has_letters and not re.search(r"\b(?:page|doctor|signature|accredited|end of report)\b", line, re.IGNORECASE):
            unrecognized_candidates.append(raw_l)

    diagnostics = {
        "total_lines": len(raw_lines),
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
        textColor=colors.HexColor("#0F172A")
    )
    sub_style = ParagraphStyle(
        "MedSub",
        parent=styles["Normal"],
        fontSize=9,
        leading=12,
        textColor=colors.HexColor("#475569")
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
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#0F766E")),
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
# 6. Realistic 3D Interactive Clinical Document Sheet
# ---------------------------------------------------------
def render_3d_document_sheet(doc_name: str, snippet_text: str, theme: str):
    """
    Renders an authentic 3D laboratory document sheet with physical stacked page depth,
    margin guides, and interactive pointer tilt.
    """
    is_dark = (theme == "Dark")
    bg_card = "#1E293B" if is_dark else "#FFFFFF"
    text_color = "#F8FAFC" if is_dark else "#0F172A"
    sub_color = "#94A3B8" if is_dark else "#64748B"
    border_color = "rgba(56, 189, 248, 0.25)" if is_dark else "rgba(15, 118, 110, 0.2)"
    paper_shadow = "0 15px 35px rgba(0,0,0,0.6)" if is_dark else "0 10px 25px rgba(15, 23, 42, 0.08)"

    escaped_doc = doc_name.replace("'", "\\'")
    escaped_lines = [l.replace("'", "\\'").strip() for l in snippet_text.splitlines()[:6] if l.strip()]
    lines_html = "".join([f"<div style='font-family: monospace; font-size: 0.72rem; color: {sub_color}; margin-bottom: 4px;'>{l}</div>" for l in escaped_lines])

    html_code = f"""
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            background: transparent;
            overflow: hidden;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 290px;
        }}
        .viewport-3d {{
            width: 100%;
            height: 280px;
            perspective: 1000px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }}
        .paper-stack {{
            position: relative;
            width: 480px;
            height: 250px;
            transform-style: preserve-3d;
            transform: rotateX(8deg) rotateY(-6deg);
            transition: transform 0.12s ease-out;
        }}
        /* Underneath Page 2 */
        .page-back {{
            position: absolute;
            inset: 0;
            background: {bg_card};
            border: 1px solid {border_color};
            border-radius: 8px;
            transform: translateZ(-8px) rotate(1.2deg);
            opacity: 0.7;
            box-shadow: {paper_shadow};
        }}
        /* Underneath Page 3 */
        .page-back-2 {{
            position: absolute;
            inset: 0;
            background: {bg_card};
            border: 1px solid {border_color};
            border-radius: 8px;
            transform: translateZ(-16px) rotate(-1.5deg);
            opacity: 0.4;
            box-shadow: {paper_shadow};
        }}
        /* Top Active Document Sheet */
        .page-front {{
            position: absolute;
            inset: 0;
            background: {bg_card};
            border: 1px solid {border_color};
            border-radius: 8px;
            padding: 16px 20px;
            box-shadow: {paper_shadow};
            transform: translateZ(5px);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }}
        .header-bar {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1.5px solid {border_color};
            padding-bottom: 8px;
            margin-bottom: 10px;
        }}
        .doc-tag {{
            font-size: 0.68rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: {'#34D399' if is_dark else '#0F766E'};
            background: {'rgba(16, 185, 129, 0.12)' if is_dark else '#F0FDFA'};
            padding: 2px 8px;
            border-radius: 4px;
        }}
        .watermark {{
            position: absolute;
            right: 20px;
            bottom: 12px;
            font-size: 0.65rem;
            color: {sub_color};
            opacity: 0.6;
            letter-spacing: 0.04em;
        }}
    </style>
    </head>
    <body>
        <div class="viewport-3d" id="viewport">
            <div class="paper-stack" id="stack">
                <div class="page-back-2"></div>
                <div class="page-back"></div>
                <div class="page-front">
                    <div>
                        <div class="header-bar">
                            <span style="font-weight: 700; font-size: 0.82rem; color: {text_color};">📄 {escaped_doc}</span>
                            <span class="doc-tag">CLINICAL SPECIMEN</span>
                        </div>
                        <div style="font-size: 0.74rem; color: {sub_color}; margin-bottom: 8px;"><b>SPECIMEN STREAM PREVIEW:</b></div>
                        {lines_html}
                    </div>
                    <div class="watermark">ORCA CLINICAL ENGINE // 3D DOCUMENT STACK</div>
                </div>
            </div>
        </div>
        <script>
            const viewport = document.getElementById('viewport');
            const stack = document.getElementById('stack');

            viewport.addEventListener('mousemove', (e) => {{
                const rect = viewport.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const rotY = (x / (rect.width / 2)) * 14;
                const rotX = -(y / (rect.height / 2)) * 12;
                stack.style.transform = `rotateX(${{rotX}}deg) rotateY(${{rotY}}deg)`;
            }});

            viewport.addEventListener('mouseleave', () => {{
                stack.style.transform = 'rotateX(8deg) rotateY(-6deg)';
            }});
        </script>
    </body>
    </html>
    """
    components.html(html_code, height=290, scrolling=False)

# ---------------------------------------------------------
# 7. Session State Management
# ---------------------------------------------------------
def init_session_state():
    init_auth_vault()
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
    if "theme" not in st.session_state:
        st.session_state["theme"] = "Light"
    if "authenticated" not in st.session_state:
        st.session_state["authenticated"] = False
    if "user" not in st.session_state:
        st.session_state["user"] = None
    if "page" not in st.session_state:
        st.session_state["page"] = "landing"
    if "auth_flash" not in st.session_state:
        st.session_state["auth_flash"] = None

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
# 8. Dynamic Theme CSS Injector
# ---------------------------------------------------------
def apply_theme_css(theme: str):
    if theme == "Dark":
        css = """
        <style>
            :root {
                --bg-base: #0B1120;
                --surface-card: #111827;
                --surface-subtle: #1E293B;
                --border-color: #334155;
                --border-focus: #14B8A6;
                --text-main: #F8FAFC;
                --text-muted: #94A3B8;
                --accent-primary: #14B8A6;
                --accent-hover: #2DD4BF;
                --accent-subtle: rgba(20, 184, 166, 0.15);
                --card-shadow: 0 4px 16px rgba(0, 0, 0, 0.45);
                --badge-norm-bg: rgba(16, 185, 129, 0.16);
                --badge-norm-text: #34D399;
                --badge-norm-border: rgba(16, 185, 129, 0.4);
                --badge-high-bg: rgba(244, 63, 94, 0.16);
                --badge-high-text: #FB7185;
                --badge-high-border: rgba(244, 63, 94, 0.4);
                --badge-low-bg: rgba(245, 158, 11, 0.16);
                --badge-low-text: #FBBF24;
                --badge-low-border: rgba(245, 158, 11, 0.4);
                --badge-rev-bg: rgba(148, 163, 184, 0.16);
                --badge-rev-text: #CBD5E1;
                --badge-rev-border: rgba(148, 163, 184, 0.4);
            }
            .stApp {
                background-color: var(--bg-base) !important;
                color: var(--text-main) !important;
            }
            /* High-contrast Streamlit Top Header & Toolbar */
            header[data-testid="stHeader"] {
                background-color: var(--bg-base) !important;
                color: var(--text-main) !important;
                border-bottom: 1px solid var(--border-color) !important;
                z-index: 999990 !important;
            }
            header[data-testid="stHeader"] * {
                color: var(--text-main) !important;
            }
            header[data-testid="stHeader"] svg {
                fill: var(--text-main) !important;
            }
            div[data-testid="stToolbar"] {
                right: 1.25rem !important;
                top: 0.45rem !important;
                z-index: 999999 !important;
                visibility: visible !important;
                opacity: 1 !important;
                display: flex !important;
                align-items: center !important;
                gap: 8px !important;
            }
            div[data-testid="stToolbar"] button,
            header[data-testid="stHeader"] button {
                background-color: var(--surface-subtle) !important;
                color: var(--text-main) !important;
                border: 1px solid var(--border-color) !important;
                border-radius: 6px !important;
            }
            .main .block-container {
                padding-top: 4.75rem !important;
                padding-bottom: 3.5rem !important;
                max-width: 1280px !important;
            }
            section[data-testid="stSidebar"] {
                background-color: var(--surface-card) !important;
                border-right: 1px solid var(--border-color) !important;
            }
            section[data-testid="stSidebar"] * {
                color: var(--text-main);
            }
            .metric-box {
                background: var(--surface-card);
                border: 1px solid var(--border-color);
                border-radius: 10px;
                padding: 18px 20px;
                box-shadow: var(--card-shadow);
                margin-bottom: 12px;
            }
            .stTextInput input, .stTextArea textarea {
                background-color: var(--surface-card) !important;
                color: var(--text-main) !important;
                border-color: var(--border-color) !important;
            }
            div[data-baseweb="select"] > div {
                background-color: var(--surface-card) !important;
                color: var(--text-main) !important;
                border-color: var(--border-color) !important;
            }
            div[data-baseweb="popover"], div[data-baseweb="menu"] {
                background-color: var(--surface-card) !important;
                color: var(--text-main) !important;
            }
        </style>
        """
    else:
        css = """
        <style>
            :root {
                --bg-base: #F8FAFC;
                --surface-card: #FFFFFF;
                --surface-subtle: #F1F5F9;
                --border-color: #E2E8F0;
                --border-focus: #0D9488;
                --text-main: #0F172A;
                --text-muted: #475569;
                --accent-primary: #0F766E;
                --accent-hover: #115E59;
                --accent-subtle: rgba(15, 118, 110, 0.1);
                --card-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
                --badge-norm-bg: #ECFDF5;
                --badge-norm-text: #065F46;
                --badge-norm-border: #A7F3D0;
                --badge-high-bg: #FFF1F2;
                --badge-high-text: #9F1239;
                --badge-high-border: #FECDD3;
                --badge-low-bg: #FFFBEB;
                --badge-low-text: #92400E;
                --badge-low-border: #FDE68A;
                --badge-rev-bg: #F1F5F9;
                --badge-rev-text: #475569;
                --badge-rev-border: #CBD5E1;
            }
            .stApp {
                background-color: var(--bg-base);
                color: var(--text-main);
            }
            /* High-contrast Streamlit Top Header & Toolbar */
            header[data-testid="stHeader"] {
                background-color: var(--bg-base) !important;
                color: var(--text-main) !important;
                border-bottom: 1px solid var(--border-color) !important;
                z-index: 999990 !important;
            }
            header[data-testid="stHeader"] * {
                color: var(--text-main) !important;
            }
            header[data-testid="stHeader"] svg {
                fill: var(--text-main) !important;
            }
            div[data-testid="stToolbar"] {
                right: 1.25rem !important;
                top: 0.45rem !important;
                z-index: 999999 !important;
                visibility: visible !important;
                opacity: 1 !important;
                display: flex !important;
                align-items: center !important;
                gap: 8px !important;
            }
            div[data-testid="stToolbar"] button,
            header[data-testid="stHeader"] button {
                background-color: var(--surface-card) !important;
                color: var(--text-main) !important;
                border: 1px solid var(--border-color) !important;
                border-radius: 6px !important;
            }
            .main .block-container {
                padding-top: 4.75rem !important;
                padding-bottom: 3.5rem !important;
                max-width: 1280px !important;
            }
            section[data-testid="stSidebar"] {
                background-color: var(--surface-card) !important;
                border-right: 1px solid var(--border-color) !important;
            }
            section[data-testid="stSidebar"] * {
                color: var(--text-main);
            }
            .metric-box {
                background: var(--surface-card);
                border: 1px solid var(--border-color);
                border-radius: 10px;
                padding: 18px 20px;
                box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);
                margin-bottom: 12px;
            }
            .stTextInput input, .stTextArea textarea {
                background-color: var(--surface-card) !important;
                color: var(--text-main) !important;
                border-color: var(--border-color) !important;
            }
            div[data-baseweb="select"] > div {
                background-color: var(--surface-card) !important;
                color: var(--text-main) !important;
                border-color: var(--border-color) !important;
            }
            div[data-baseweb="popover"], div[data-baseweb="menu"] {
                background-color: var(--surface-card) !important;
                color: var(--text-main) !important;
            }
        </style>
        """
    st.markdown(css, unsafe_allow_html=True)

# ---------------------------------------------------------
# 9. Persistent Left Sidebar Navigation
# ---------------------------------------------------------
def render_sidebar():
    with st.sidebar:
        st.markdown("""
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
            <span style="font-size: 1.8rem;">🩺</span>
            <div>
                <h3 style="margin: 0; font-size: 1.25rem; font-weight: 800; letter-spacing: -0.02em;">ORCA MEDSCAN</h3>
                <span style="font-size: 0.72rem; color: #0D9488; font-weight: 700; text-transform: uppercase;">Clinical Intelligence Enclave</span>
            </div>
        </div>
        """, unsafe_allow_html=True)

        user = st.session_state.get("user") or {"email": DEFAULT_EVALUATOR_EMAIL, "role": "Lead Clinical Evaluator"}
        user_email = user.get("email", DEFAULT_EVALUATOR_EMAIL)
        user_role = user.get("role", "Clinical Practitioner")

        st.markdown(f"""
        <div style="background: var(--surface-subtle); border: 1px solid var(--border-color); border-radius: 8px; padding: 10px 12px; margin-bottom: 14px;">
            <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Enclave Identity</div>
            <div style="font-weight: 700; font-size: 0.84rem; color: var(--text-main); margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                👤 {user_email}
            </div>
            <div style="margin-top: 4px;">
                <span style="background: var(--accent-subtle); color: var(--accent-primary); padding: 2px 8px; border-radius: 4px; font-size: 0.72rem; font-weight: 700;">{user_role}</span>
            </div>
        </div>
        """, unsafe_allow_html=True)

        nav_options = [
            "📊 Dashboard",
            "🔬 Analyze Report",
            "📋 Report History",
            "🔍 Extraction Diagnostics",
            "⚙️ Settings & Enclave",
            "ℹ️ Clinical Safety / About"
        ]
        nav_keys = {
            "📊 Dashboard": "Dashboard",
            "🔬 Analyze Report": "Analyze Report",
            "📋 Report History": "Report History",
            "🔍 Extraction Diagnostics": "Extraction Diagnostics",
            "⚙️ Settings & Enclave": "Settings",
            "ℹ️ Clinical Safety / About": "About & Safety"
        }

        current_nav_key = st.session_state.get("nav_view", "Dashboard")
        if current_nav_key not in nav_keys.values():
            current_nav_key = "Dashboard"
        current_idx = list(nav_keys.values()).index(current_nav_key)

        selected_nav = st.radio(
            "Primary Navigation",
            nav_options,
            index=current_idx,
            label_visibility="collapsed"
        )
        new_nav_key = nav_keys[selected_nav]
        if new_nav_key != current_nav_key:
            st.session_state["nav_view"] = new_nav_key
            st.rerun()

        st.markdown("---")
        st.subheader("⚡ Quick Actions")
        if st.button("Load 1-Click Benchmark", use_container_width=True, type="primary"):
            records, diag = parse_report_with_diagnostics(SYNTHETIC_REPORT)
            add_report_to_history("Metropolis Diagnostic Benchmark (MET-98421)", "Synthetic Benchmark", records, SYNTHETIC_REPORT, diag)
            st.session_state["nav_view"] = "Dashboard"
            st.rerun()

        st.markdown("---")
        # Session Status
        audits_count = len(st.session_state["history"])
        st.caption(f"Session Audits: **{audits_count}** active")
        st.caption(f"OCR Engine: **{'Active (Local)' if is_tesseract_available() else 'Not Installed'}**")

        st.markdown("---")
        # Theme Toggle
        st.markdown("<div style='font-size: 0.8rem; font-weight: 600; margin-bottom: 6px;'>INTERFACE THEME</div>", unsafe_allow_html=True)
        theme_choice = st.radio(
            "Interface Theme",
            ["Light", "Dark"],
            index=0 if st.session_state["theme"] == "Light" else 1,
            horizontal=True,
            label_visibility="collapsed"
        )
        if theme_choice != st.session_state["theme"]:
            st.session_state["theme"] = theme_choice
            st.rerun()

        st.markdown("---")
        if st.button("🚪 Log Out of Enclave", use_container_width=True):
            st.session_state["authenticated"] = False
            st.session_state["user"] = None
            st.session_state["page"] = "landing"
            st.rerun()

# ---------------------------------------------------------
# 10. View: Dashboard
# ---------------------------------------------------------
def render_dashboard_view():
    st.markdown("""
    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 20px;">
        <div>
            <h2 style="margin: 0; font-size: 1.8rem; font-weight: 800;">Clinical Intelligence Dashboard</h2>
            <div style="color: var(--text-muted); font-size: 0.9rem; margin-top: 4px;">Laboratory indicator screening, reference verification, and anomaly surveillance.</div>
        </div>
    </div>
    """, unsafe_allow_html=True)

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

    # Metrics Row
    m1, m2, m3, m4 = st.columns(4)
    with m1:
        st.markdown(f"""
        <div class="metric-box">
            <div style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Reports Analyzed</div>
            <div style="font-size: 2.1rem; font-weight: 800; line-height: 1.1; margin-top: 4px;">{total_audits}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">Current session audits</div>
        </div>
        """, unsafe_allow_html=True)
    with m2:
        st.markdown(f"""
        <div class="metric-box">
            <div style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Biomarkers Screened</div>
            <div style="font-size: 2.1rem; font-weight: 800; line-height: 1.1; margin-top: 4px;">{total_indicators}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">{total_normal} in reference range</div>
        </div>
        """, unsafe_allow_html=True)
    with m3:
        st.markdown(f"""
        <div class="metric-box">
            <div style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Out-of-Range Flags</div>
            <div style="font-size: 2.1rem; font-weight: 800; line-height: 1.1; margin-top: 4px; color: {'#E11D48' if total_flagged > 0 else 'var(--text-main)'};">{total_flagged}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">Potentially High or Low</div>
        </div>
        """, unsafe_allow_html=True)
    with m4:
        st.markdown(f"""
        <div class="metric-box">
            <div style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Needs Review</div>
            <div style="font-size: 2.1rem; font-weight: 800; line-height: 1.1; margin-top: 4px;">{total_uncertain}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">Atypical or non-standard</div>
        </div>
        """, unsafe_allow_html=True)

    # Empty State Condition
    if total_audits == 0:
        st.markdown("""
        <div style="text-align: center; background: var(--surface-card); border: 1.5px dashed var(--border-color); border-radius: 12px; padding: 48px 24px; margin: 24px 0;">
            <div style="font-size: 2.6rem; margin-bottom: 12px;">📑</div>
            <h3 style="margin-bottom: 8px; font-weight: 700;">No Medical Reports Analyzed in this Session</h3>
            <p style="color: var(--text-muted); max-width: 580px; margin: 0 auto 20px auto; font-size: 0.95rem; line-height: 1.5;">
                Ingest laboratory reports (PDFs, PNG, JPG, WEBP, BMP, TIFF) or trigger the 1-Click Benchmark below
                to populate real-time biometric distributions and clinical indicator surveillance.
            </p>
        </div>
        """, unsafe_allow_html=True)
        col1, col2 = st.columns([1, 1])
        with col1:
            if st.button("🚀 Analyze New Report", use_container_width=True, type="primary"):
                st.session_state["nav_view"] = "Analyze Report"
                st.rerun()
        with col2:
            if st.button("⚡ Load 1-Click Benchmark", use_container_width=True):
                records, diag = parse_report_with_diagnostics(SYNTHETIC_REPORT)
                add_report_to_history("Metropolis Diagnostic Benchmark (MET-98421)", "Synthetic Benchmark", records, SYNTHETIC_REPORT, diag)
                st.rerun()
        return

    st.markdown("---")

    # Mid Section: Status Distribution Chart & Priority Findings
    c_chart, c_alerts = st.columns([6, 6])
    with c_chart:
        st.subheader("📊 Biomarker Status Distribution")
        if PLOTLY_AVAILABLE:
            is_dark = (st.session_state["theme"] == "Dark")
            fig = go.Figure(data=[go.Pie(
                labels=["In Reference Range", "Potentially High", "Potentially Low", "Review Needed"],
                values=[
                    total_normal,
                    sum(1 for h in history for r in h["records"] if "High" in r["Status"]),
                    sum(1 for h in history for r in h["records"] if "Low" in r["Status"]),
                    total_uncertain
                ],
                hole=.6,
                marker=dict(colors=["#10B981", "#E11D48", "#F59E0B", "#64748B"]),
                textinfo="label+value"
            )])
            fig.update_layout(
                paper_bgcolor="rgba(0,0,0,0)",
                plot_bgcolor="rgba(0,0,0,0)",
                font=dict(color="#F8FAFC" if is_dark else "#0F172A", family="Inter, sans-serif"),
                showlegend=False,
                height=250,
                margin=dict(t=10, b=10, l=10, r=10)
            )
            st.plotly_chart(fig, use_container_width=True)
        else:
            dist_df = pd.DataFrame({
                "Classification": ["Normal", "Out-of-Range", "Review Needed"],
                "Count": [total_normal, total_flagged, total_uncertain]
            })
            st.bar_chart(dist_df.set_index("Classification"))

    with c_alerts:
        st.subheader("🚨 Priority Out-of-Range Findings")
        current_meta = st.session_state.get("current_meta")
        latest_records = current_meta["records"] if current_meta else []
        flagged_items = [r for r in latest_records if r["Category"] == "flagged"]

        if flagged_items:
            for item in flagged_items[:4]:
                is_high = "High" in item["Status"]
                border_clr = "#E11D48" if is_high else "#F59E0B"
                badge_bg = "var(--badge-high-bg)" if is_high else "var(--badge-low-bg)"
                badge_txt = "var(--badge-high-text)" if is_high else "var(--badge-low-text)"
                arrow = "▲" if is_high else "▼"

                st.markdown(f"""
                <div style="background: var(--surface-card); border-left: 4px solid {border_clr}; border-radius: 8px; padding: 12px 16px; margin-bottom: 8px; border: 1px solid var(--border-color); border-left-width: 4px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <strong style="font-size: 0.95rem;">{item['Test Name']}</strong>
                        <span style="background: {badge_bg}; color: {badge_txt}; padding: 3px 8px; border-radius: 9999px; font-size: 0.76rem; font-weight: 700;">{arrow} {item['Status']}</span>
                    </div>
                    <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">
                        Measured: <b>{item['Measured Value']} {item['Unit']}</b> (Ref: {item['Reference Range']} {item['Unit']})
                    </div>
                </div>
                """, unsafe_allow_html=True)
        else:
            st.success("All biomarkers in the latest audited document are within verified reference intervals.")

    st.markdown("---")

    # Latest Audit Overview Table
    latest_meta = st.session_state["current_meta"]
    st.subheader(f"📑 Active Audit: {latest_meta['source_name']}")
    st.caption(f"Audit ID: `{latest_meta['id']}` | Timestamp: `{latest_meta['timestamp']}` | Format: `{latest_meta['source_type']}`")

    latest_df = pd.DataFrame(st.session_state["current_records"])
    disp_df = latest_df[["Test Name", "Original Label", "Measured Value", "Unit", "Reference Range", "Range Source", "Status"]].copy()
    st.dataframe(disp_df, use_container_width=True, hide_index=True)

    # Action Row
    act1, act2, act3 = st.columns([1, 1, 1])
    with act1:
        if st.button("➕ Analyze Another Report", use_container_width=True, type="primary"):
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
# 11. View: Analyze Report Workflow
# ---------------------------------------------------------
def render_analyze_view():
    st.subheader("🔬 Clinical Report Ingestion & Analysis Workflow")
    st.caption("Step-by-step extraction: Upload document → Verify extracted stream → Analyze reference intervals → Review & export.")

    st.markdown("""
    <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 8px; padding: 12px 16px; margin-bottom: 18px; font-size: 0.85rem;">
        ⚠️ <b>Clinical Screening Guardrail:</b> Orca MedScan is an educational and clinical decision-support screening prototype. It does not provide medical diagnoses or pharmaceutical prescriptions. Always corroborate findings with licensed healthcare providers.
    </div>
    """, unsafe_allow_html=True)

    # STEP 1: Ingestion Zone
    st.markdown("#### 1. Ingest Laboratory Document")
    tab_upload, tab_paste, tab_sample = st.tabs([
        "📁 Drag-and-Drop Upload",
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
                with st.spinner("Processing PDF (digital text stream & scanned OCR fallback)..."):
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

    # STEP 2: Realistic 3D Document Sheet & Verification Box
    st.markdown("#### 2. Verify Document Extraction Stream")
    if extracted_text:
        col_3d_doc, col_edit = st.columns([5, 7])
        with col_3d_doc:
            st.caption("Realistic 3D Document Sheet View (Mouse Parallax Tilt):")
            render_3d_document_sheet(source_label, extracted_text, st.session_state["theme"])
        with col_edit:
            st.caption(f"Pipeline: **{extraction_method}** | Document: `{source_label}`")
            final_text = st.text_area("Inspect & edit extracted stream before clinical analysis:", value=extracted_text, height=210)
    else:
        final_text = ""
        st.info("Upload a document, paste text, or load the benchmark above to view the 3D document sheet and extracted stream.")

    # STEP 3: Analysis Execution
    st.markdown("#### 3. Execute Reference Verification")
    col_run, col_clear = st.columns([2, 5])
    with col_run:
        run_analysis = st.button("🔬 Analyze Extracted Biomarkers", type="primary", use_container_width=True)
    with col_clear:
        if st.button("Clear Input", use_container_width=False):
            st.session_state["raw_text_buffer"] = ""
            st.rerun()

    if run_analysis:
        if not final_text.strip():
            st.warning("Please provide or upload report text before analyzing.")
            return

        with st.spinner("Extracting biomarkers, cross-referencing reference intervals, and resolving aliases..."):
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

    # STEP 4: Review Detailed Findings
    if st.session_state.get("current_records"):
        records = st.session_state["current_records"]
        df = pd.DataFrame(records)

        st.markdown("---")
        st.markdown("#### 4. Clinical Findings & Reference Interval Assessment")

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

        st.markdown("##### Detailed Findings")
        if filtered_df.empty:
            st.info("No biomarkers match the selected filter criteria.")
        else:
            for _, row in filtered_df.iterrows():
                status_str = row["Status"]
                if status_str == "Normal":
                    badge_html = '<span style="background: var(--badge-norm-bg); color: var(--badge-norm-text); padding: 4px 10px; border-radius: 9999px; font-size: 0.76rem; font-weight: 700;">● Normal</span>'
                elif "High" in status_str:
                    badge_html = '<span style="background: var(--badge-high-bg); color: var(--badge-high-text); padding: 4px 10px; border-radius: 9999px; font-size: 0.76rem; font-weight: 700;">▲ Potentially High</span>'
                elif "Low" in status_str:
                    badge_html = '<span style="background: var(--badge-low-bg); color: var(--badge-low-text); padding: 4px 10px; border-radius: 9999px; font-size: 0.76rem; font-weight: 700;">▼ Potentially Low</span>'
                else:
                    badge_html = '<span style="background: var(--surface-subtle); color: var(--text-muted); padding: 4px 10px; border-radius: 9999px; font-size: 0.76rem; font-weight: 700;">◆ Review Needed</span>'

                with st.container():
                    r1, r2, r3, r4 = st.columns([3, 2, 2, 2])
                    with r1:
                        st.markdown(f"**{row['Test Name']}**")
                        st.caption(f"Original Label: `{row.get('Original Label', row['Test Name'])}`")
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

        # Export Row
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
# 12. View: Report History
# ---------------------------------------------------------
def render_history_view():
    st.subheader("📋 Session Audit History")
    st.caption("Log of all medical documents audited in the current runtime session. Session storage is temporary.")

    history = st.session_state["history"]
    if not history:
        st.info("No reports have been audited in this session yet. Upload a report in 'Analyze Report' to track history.")
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
            pd.DataFrame(selected_report["records"])[["Test Name", "Original Label", "Measured Value", "Unit", "Reference Range", "Range Source", "Status"]],
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
# 13. View: Extraction Diagnostics
# ---------------------------------------------------------
def render_diagnostics_view():
    st.subheader("🔍 Extraction Diagnostics & Candidate Telemetry")
    st.caption("Inspect raw OCR output, verified biomarker lines, and candidate lines requiring manual verification.")

    diag = st.session_state.get("current_diagnostics")
    current_meta = st.session_state.get("current_meta")

    if not diag or not current_meta:
        st.info("No active report telemetry available. Ingest and analyze a document to view extraction diagnostics.")
        return

    st.markdown(f"#### Audit Telemetry: `{current_meta['id']}` ({current_meta['source_name']})")

    c1, c2, c3 = st.columns(3)
    c1.metric("Lines Processed", diag["total_lines"])
    c2.metric("Biomarkers Matched", diag["recognized_count"])
    c3.metric("Candidate Unmatched Lines", len(diag["unrecognized_candidates"]))

    st.markdown("---")
    st.subheader("✅ Successfully Recognized Biomarkers")
    st.write(diag["recognized_labels"])

    st.markdown("---")
    st.subheader("⚠️ Unrecognized Candidate Lines")
    st.caption("Lines containing numbers or potential test names that were not mapped to the central registry:")
    if diag["unrecognized_candidates"]:
        for cand in diag["unrecognized_candidates"]:
            st.markdown(f"<div style='background: var(--surface-subtle); border: 1px solid var(--border-color); border-radius: 6px; padding: 10px 14px; margin-bottom: 6px; font-family: monospace; font-size: 0.84rem;'>{cand}</div>", unsafe_allow_html=True)
    else:
        st.success("Zero unmapped candidate lines detected.")

    st.markdown("---")
    with st.expander("📄 View Full Raw Text Stream", expanded=False):
        st.text(current_meta["raw_text"])

# ---------------------------------------------------------
# 14. View: Clinical Safety
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
# 15. View: System Settings & Enclave Vault
# ---------------------------------------------------------
def render_settings_view():
    st.markdown("""
    <div style="margin-bottom: 20px;">
        <h2 style="margin: 0; font-size: 1.8rem; font-weight: 800;">⚙️ System Settings & Enclave Vault</h2>
        <div style="color: var(--text-muted); font-size: 0.9rem; margin-top: 4px;">Inspect cryptographic vault integrity, OCR engine telemetry, and manage session cache.</div>
    </div>
    """, unsafe_allow_html=True)

    tab_vault, tab_engine, tab_session = st.tabs([
        "🔒 Cryptographic Enclave & Vault",
        "🔍 Optical Engine & Formats",
        "🗑️ Session Data Management"
    ])

    with tab_vault:
        st.subheader("Practitioner Enclave Security Parameters")
        user = st.session_state.get("user") or {}
        st.markdown(f"""
        - **Active Identity**: `{user.get('email', DEFAULT_EVALUATOR_EMAIL)}`
        - **Practitioner Role**: `{user.get('role', 'Clinical Evaluator')}`
        - **Session Login Timestamp**: `{user.get('last_login', 'Active Enclave Session')}`
        """)

        st.markdown("---")
        st.subheader("Cryptographic Vault Specification")

        vault_user_count = 1
        if os.path.exists(AUTH_FILE):
            try:
                import json
                with open(AUTH_FILE, "r", encoding="utf-8") as f:
                    vdata = json.load(f)
                    vault_user_count = len(vdata.get("users", {}))
            except Exception:
                pass

        c1, c2, c3, c4 = st.columns(4)
        c1.metric("Registered Practitioners", vault_user_count)
        c2.metric("Hash Algorithm", "PBKDF2-SHA256")
        c3.metric("Key Iterations", "100,000")
        c4.metric("Salt Entropy", "256-bit CSPRNG")

        st.info("💡 **Clinical Enclave Guarantee**: Password hashes and salts are written strictly to host disk (`data/.auth_vault.json`). No external authentication servers or cloud services are contacted.")

    with tab_engine:
        st.subheader("Ingestion Engine & Format Support Matrix")

        tess_ok = is_tesseract_available()
        e1, e2, e3, e4 = st.columns(4)
        e1.metric("Tesseract OCR", "Active (Local)" if tess_ok else "Not Found")
        e2.metric("HEIF / HEIC Decoder", "Active" if HEIF_AVAILABLE else "Disabled")
        e3.metric("ReportLab Generator", "Active" if REPORTLAB_AVAILABLE else "Disabled")
        e4.metric("Plotly Analytics", "Active" if PLOTLY_AVAILABLE else "Disabled")

        st.markdown("---")
        st.markdown("##### Verified Supported Formats:")
        st.dataframe(pd.DataFrame([
            {"Format": "PDF (Digital)", "Pipeline": "pdfplumber text stream extraction", "Status": "Verified"},
            {"Format": "PDF (Scanned)", "Pipeline": "Automatic OCR fallback render", "Status": "Verified"},
            {"Format": "PNG / JPG / JPEG", "Pipeline": "Pillow + Tesseract OCR", "Status": "Verified"},
            {"Format": "WEBP", "Pipeline": "Pillow + Tesseract OCR (with typo repair)", "Status": "Verified"},
            {"Format": "BMP / TIFF", "Pipeline": "Pillow + Tesseract OCR", "Status": "Verified"},
            {"Format": "HEIC / HEIF", "Pipeline": "pillow-heif registration", "Status": "Verified" if HEIF_AVAILABLE else "Optional"}
        ]), use_container_width=True, hide_index=True)

    with tab_session:
        st.subheader("Session Memory & Cache Management")
        st.caption(f"Currently active reports in session cache: **{len(st.session_state['history'])}**")

        if st.button("🗑️ Reset All Session Audits & Buffers", type="primary"):
            st.session_state["history"] = []
            st.session_state["current_records"] = []
            st.session_state["current_meta"] = None
            st.session_state["current_diagnostics"] = None
            st.session_state["raw_text_buffer"] = ""
            st.success("Session memory cleared successfully.")
            st.rerun()

# ---------------------------------------------------------
# 16. View: Public Clinical Landing Page
# ---------------------------------------------------------
def render_landing_page():
    # Top navigation bar
    col_nav1, col_nav2, col_nav3, col_nav4, col_nav5 = st.columns([4, 2, 2, 2, 2])
    with col_nav1:
        st.markdown("""
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.6rem;">🩺</span>
            <div>
                <span style="font-size: 1.15rem; font-weight: 800; letter-spacing: -0.02em;">ORCA MEDSCAN</span>
                <span style="font-size: 0.7rem; background: var(--badge-norm-bg); color: var(--badge-norm-text); border: 1px solid var(--badge-norm-border); padding: 2px 6px; border-radius: 4px; margin-left: 6px; font-weight: 700;">ENCLAVE</span>
            </div>
        </div>
        """, unsafe_allow_html=True)
    with col_nav2:
        pass
    with col_nav3:
        theme_icon = "☀️ Light" if st.session_state["theme"] == "Dark" else "🌙 Dark"
        if st.button(f"Theme: {theme_icon}", use_container_width=True):
            st.session_state["theme"] = "Light" if st.session_state["theme"] == "Dark" else "Dark"
            st.rerun()
    with col_nav4:
        if st.button("Sign In", use_container_width=True):
            st.session_state["page"] = "login"
            st.rerun()
    with col_nav5:
        if st.button("Get Started", use_container_width=True, type="primary"):
            st.session_state["page"] = "signup"
            st.rerun()

    st.markdown("<div style='height: 24px;'></div>", unsafe_allow_html=True)

    # Hero Banner
    st.markdown("""
    <div style="text-align: center; max-width: 900px; margin: 0 auto 32px auto;">
        <div style="display: inline-block; background: var(--surface-subtle); border: 1px solid var(--border-color); border-radius: 9999px; padding: 4px 14px; font-size: 0.78rem; font-weight: 700; color: var(--accent-primary); letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 16px;">
            ORCATHON 2026 • HEALTHCARE & MEDTECH TRACK
        </div>
        <h1 style="font-size: 2.75rem; font-weight: 850; letter-spacing: -0.03em; line-height: 1.15; margin-bottom: 16px;">
            Deterministic Laboratory Report Screening & Clinical Intelligence
        </h1>
        <p style="font-size: 1.12rem; color: var(--text-muted); line-height: 1.6; margin: 0 auto 28px auto; max-width: 760px;">
            A local privacy-preserving enclave for automated medical report extraction, resilient optical character recognition (OCR), and dynamic reference interval verification. Zero cloud API exposure — 100% on-premise execution.
        </p>
    </div>
    """, unsafe_allow_html=True)

    # Primary Action Buttons
    c_btn1, c_btn2, c_btn3 = st.columns([1.2, 1.4, 1.2])
    with c_btn1:
        if st.button("🚀 Launch Clinical Enclave", use_container_width=True, type="primary"):
            st.session_state["page"] = "login"
            st.rerun()
    with c_btn2:
        if st.button("⚡ 1-Click Evaluator Demo (Benchmark)", use_container_width=True):
            init_auth_vault()
            success, msg, udata = authenticate_user(DEFAULT_EVALUATOR_EMAIL, DEFAULT_EVALUATOR_PASS)
            if success:
                st.session_state["authenticated"] = True
                st.session_state["user"] = udata
                st.session_state["page"] = "app"
                records, diag = parse_report_with_diagnostics(SYNTHETIC_REPORT)
                add_report_to_history("Metropolis Diagnostic Benchmark (MET-98421)", "Synthetic Benchmark", records, SYNTHETIC_REPORT, diag)
                st.session_state["nav_view"] = "Dashboard"
                st.rerun()
    with c_btn3:
        if st.button("🛡️ Register Practitioner", use_container_width=True):
            st.session_state["page"] = "signup"
            st.rerun()

    st.markdown("<div style='height: 24px;'></div>", unsafe_allow_html=True)

    # Format Badges Strip
    st.markdown("""
    <div style="background: var(--surface-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 14px 20px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 10px; margin-bottom: 36px; box-shadow: var(--card-shadow);">
        <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-right: 8px;">VERIFIED FORMAT INGESTION:</span>
        <span style="background: var(--surface-subtle); border: 1px solid var(--border-color); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">📄 Digital PDF</span>
        <span style="background: var(--surface-subtle); border: 1px solid var(--border-color); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">📑 Scanned PDF (OCR)</span>
        <span style="background: var(--surface-subtle); border: 1px solid var(--border-color); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">🖼️ PNG</span>
        <span style="background: var(--surface-subtle); border: 1px solid var(--border-color); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">📷 JPG / JPEG</span>
        <span style="background: var(--surface-subtle); border: 1px solid var(--border-color); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">🌐 WEBP</span>
        <span style="background: var(--surface-subtle); border: 1px solid var(--border-color); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">🔲 BMP</span>
        <span style="background: var(--surface-subtle); border: 1px solid var(--border-color); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">🎞️ TIFF</span>
        <span style="background: var(--surface-subtle); border: 1px solid var(--border-color); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">📱 HEIC/HEIF</span>
    </div>
    """, unsafe_allow_html=True)

    # 3D Pipeline Showcase Section
    st.markdown("""
    <div style="margin-bottom: 24px;">
        <h3 style="font-size: 1.45rem; font-weight: 800; text-align: center; margin-bottom: 8px;">Deterministic 5-Stage Clinical Pipeline</h3>
        <p style="text-align: center; color: var(--text-muted); font-size: 0.92rem; max-width: 650px; margin: 0 auto 24px auto;">
            From raw lab specimen document to validated clinical report telemetry and dual-format compliance exports.
        </p>
    </div>
    """, unsafe_allow_html=True)

    p1, p2, p3, p4, p5 = st.columns(5)
    with p1:
        st.markdown("""
        <div class="metric-box" style="height: 100%;">
            <div style="font-size: 0.72rem; font-weight: 800; color: var(--accent-primary); text-transform: uppercase;">STEP 01</div>
            <div style="font-weight: 700; font-size: 0.96rem; margin: 4px 0;">Multi-Format Ingestion</div>
            <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.4;">Vector text stream extraction via pdfplumber with automatic fallthrough to Tesseract OCR.</div>
        </div>
        """, unsafe_allow_html=True)
    with p2:
        st.markdown("""
        <div class="metric-box" style="height: 100%;">
            <div style="font-size: 0.72rem; font-weight: 800; color: var(--accent-primary); text-transform: uppercase;">STEP 02</div>
            <div style="font-weight: 700; font-size: 0.96rem; margin: 4px 0;">OCR Typo Repair</div>
            <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.4;">Pre-sanitizes OCR character confusions (IO5 → 105), acronym misreads, and fused punctuation.</div>
        </div>
        """, unsafe_allow_html=True)
    with p3:
        st.markdown("""
        <div class="metric-box" style="height: 100%;">
            <div style="font-size: 0.72rem; font-weight: 800; color: var(--accent-primary); text-transform: uppercase;">STEP 03</div>
            <div style="font-weight: 700; font-size: 0.96rem; margin: 4px 0;">Biomarker Mapping</div>
            <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.4;">Maps 50+ laboratory aliases and abbreviations (Hb, TLC, PLT, FBS, FPG, TC, TG, Cr, ALT, etc.).</div>
        </div>
        """, unsafe_allow_html=True)
    with p4:
        st.markdown("""
        <div class="metric-box" style="height: 100%;">
            <div style="font-size: 0.72rem; font-weight: 800; color: var(--accent-primary); text-transform: uppercase;">STEP 04</div>
            <div style="font-weight: 700; font-size: 0.96rem; margin: 4px 0;">Reference Interval Logic</div>
            <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.4;">Prioritizes assay-specific printed laboratory intervals; falls back to standard adult clinical norms.</div>
        </div>
        """, unsafe_allow_html=True)
    with p5:
        st.markdown("""
        <div class="metric-box" style="height: 100%;">
            <div style="font-size: 0.72rem; font-weight: 800; color: var(--accent-primary); text-transform: uppercase;">STEP 05</div>
            <div style="font-weight: 700; font-size: 0.96rem; margin: 4px 0;">Dual Audit Export</div>
            <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.4;">Instant structured CSV exports and signed ReportLab clinical PDF summaries with audit telemetry.</div>
        </div>
        """, unsafe_allow_html=True)

    st.markdown("<div style='height: 28px;'></div>", unsafe_allow_html=True)

    # Core Architectural Pillars
    c1, c2, c3 = st.columns(3)
    with c1:
        st.markdown("""
        <div class="metric-box">
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🔒</div>
            <h4 style="margin: 0 0 8px 0; font-weight: 800;">Zero-Cloud Security Boundary</h4>
            <p style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.5; margin: 0;">
                All parsing, OCR, and reference interval matching execute strictly in host RAM. No external LLMs, no remote third-party API keys, and zero patient health information (PHI) leaks.
            </p>
        </div>
        """, unsafe_allow_html=True)
    with c2:
        st.markdown("""
        <div class="metric-box">
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🎯</div>
            <h4 style="margin: 0 0 8px 0; font-weight: 800;">Non-Speculative Clinical Guardrail</h4>
            <p style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.5; margin: 0;">
                Strict categorization into Normal, Potentially High, Potentially Low, or Review Needed. Prevents hallucinated medical diagnoses and adheres to clinical decision-support standards.
            </p>
        </div>
        """, unsafe_allow_html=True)
    with c3:
        st.markdown("""
        <div class="metric-box">
            <div style="font-size: 1.8rem; margin-bottom: 8px;">📊</div>
            <h4 style="margin: 0 0 8px 0; font-weight: 800;">Extraction Telemetry & Diagnostics</h4>
            <p style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.5; margin: 0;">
                Complete clinical transparency: monitors total scanned lines, matched biomarkers, and non-conforming candidate lines to allow clinicians to inspect and verify every data point.
            </p>
        </div>
        """, unsafe_allow_html=True)

    # Clinical Safety Expander
    st.markdown("<div style='height: 16px;'></div>", unsafe_allow_html=True)
    with st.expander("ℹ️ Clinical Safety Protocol, Medical Disclaimer & Hackathon Enclave Specification", expanded=False):
        st.markdown("""
        **Clinical Decision Support Scope**: Orca MedScan is developed for Orcathon 2026 (Healthcare & MedTech track). It is designed to assist clinical practitioners and patients in rapidly screening structured laboratory reports. It is not an autonomous diagnostic instrument and does not prescribe medication or clinical treatments.

        **Cryptographic Storage Standard**: User credentials are protected using NIST-recommended PBKDF2-HMAC-SHA256 with 100,000 iterations and unique 256-bit cryptographically secure salts stored in `data/.auth_vault.json`.
        """)

# ---------------------------------------------------------
# 17. View: Practitioner Login
# ---------------------------------------------------------
def render_login_page():
    c_back, c_theme = st.columns([8, 2])
    with c_back:
        if st.button("← Back to Public Overview"):
            st.session_state["page"] = "landing"
            st.rerun()
    with c_theme:
        theme_icon = "☀️ Light" if st.session_state["theme"] == "Dark" else "🌙 Dark"
        if st.button(f"Theme: {theme_icon}", use_container_width=True):
            st.session_state["theme"] = "Light" if st.session_state["theme"] == "Dark" else "Dark"
            st.rerun()

    st.markdown("<div style='height: 16px;'></div>", unsafe_allow_html=True)

    _, col_card, _ = st.columns([1, 2, 1])
    with col_card:
        if st.session_state.get("auth_flash"):
            st.success(st.session_state["auth_flash"])
            st.session_state["auth_flash"] = None

        st.markdown("""
        <div style="background: var(--surface-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 24px 24px 16px 24px; box-shadow: var(--card-shadow); margin-bottom: 20px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <span style="font-size: 1.8rem;">🩺</span>
                <div>
                    <h2 style="margin: 0; font-size: 1.35rem; font-weight: 800;">Clinical Enclave Sign In</h2>
                    <div style="color: var(--text-muted); font-size: 0.85rem;">Access authenticated laboratory diagnostic records</div>
                </div>
            </div>
        </div>
        """, unsafe_allow_html=True)

        with st.form("login_form"):
            email_in = st.text_input("Practitioner Email", value=DEFAULT_EVALUATOR_EMAIL, placeholder="doctor@hospital.org")
            pass_in = st.text_input("Password", value=DEFAULT_EVALUATOR_PASS, type="password", placeholder="Enter your password")
            submit_btn = st.form_submit_button("Sign In to Clinical Enclave", type="primary", use_container_width=True)

            if submit_btn:
                success, msg, udata = authenticate_user(email_in, pass_in)
                if success:
                    st.session_state["authenticated"] = True
                    st.session_state["user"] = udata
                    st.session_state["page"] = "app"
                    st.session_state["nav_view"] = "Dashboard"
                    st.rerun()
                else:
                    st.error(msg)

        st.markdown("<div style='text-align: center; margin: 12px 0; color: var(--text-muted); font-size: 0.82rem;'>— FAST-TRACK HACKATHON EVALUATION —</div>", unsafe_allow_html=True)

        if st.button("⚡ 1-Click Evaluator Login (Hackathon Demo)", use_container_width=True, type="secondary"):
            init_auth_vault()
            success, msg, udata = authenticate_user(DEFAULT_EVALUATOR_EMAIL, DEFAULT_EVALUATOR_PASS)
            if success:
                st.session_state["authenticated"] = True
                st.session_state["user"] = udata
                st.session_state["page"] = "app"
                st.session_state["nav_view"] = "Dashboard"
                st.rerun()

        st.markdown("<div style='height: 12px;'></div>", unsafe_allow_html=True)
        col_reg, col_help = st.columns(2)
        with col_reg:
            if st.button("New Practitioner? Register", use_container_width=True):
                st.session_state["page"] = "signup"
                st.rerun()
        with col_help:
            st.caption(f"Default Evaluator Account:\n`{DEFAULT_EVALUATOR_EMAIL}`")

        st.markdown("""
        <div style="background: var(--surface-subtle); border: 1px solid var(--border-color); border-radius: 8px; padding: 12px 14px; margin-top: 18px; font-size: 0.78rem; color: var(--text-muted); line-height: 1.4;">
            🔒 <b>Local Enclave Vault</b>: Evaluator credentials utilize salted PBKDF2-HMAC-SHA256 (100,000 rounds) stored within host enclave (<code>data/.auth_vault.json</code>). Zero cloud transmissions.
        </div>
        """, unsafe_allow_html=True)

# ---------------------------------------------------------
# 18. View: Practitioner Registration
# ---------------------------------------------------------
def render_signup_page():
    c_back, c_theme = st.columns([8, 2])
    with c_back:
        if st.button("← Back to Public Overview"):
            st.session_state["page"] = "landing"
            st.rerun()
    with c_theme:
        theme_icon = "☀️ Light" if st.session_state["theme"] == "Dark" else "🌙 Dark"
        if st.button(f"Theme: {theme_icon}", use_container_width=True):
            st.session_state["theme"] = "Light" if st.session_state["theme"] == "Dark" else "Dark"
            st.rerun()

    st.markdown("<div style='height: 16px;'></div>", unsafe_allow_html=True)

    _, col_card, _ = st.columns([1, 2, 1])
    with col_card:
        st.markdown("""
        <div style="background: var(--surface-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 24px 24px 16px 24px; box-shadow: var(--card-shadow); margin-bottom: 20px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <span style="font-size: 1.8rem;">🩺</span>
                <div>
                    <h2 style="margin: 0; font-size: 1.35rem; font-weight: 800;">Register Practitioner Account</h2>
                    <div style="color: var(--text-muted); font-size: 0.85rem;">Create a local cryptographic enclave identity</div>
                </div>
            </div>
        </div>
        """, unsafe_allow_html=True)

        with st.form("signup_form"):
            email_in = st.text_input("Practitioner Email", placeholder="doctor@clinic.org")
            pass1 = st.text_input("Password", type="password", placeholder="At least 8 characters with letter & number")
            pass2 = st.text_input("Confirm Password", type="password", placeholder="Repeat password")
            submit_btn = st.form_submit_button("Register Enclave Account", type="primary", use_container_width=True)

            if submit_btn:
                success, msg = register_user(email_in, pass1, pass2)
                if success:
                    st.session_state["auth_flash"] = "Account registered successfully! You may now sign in."
                    st.session_state["page"] = "login"
                    st.rerun()
                else:
                    st.error(msg)

        if st.button("Already have an account? Sign In", use_container_width=True):
            st.session_state["page"] = "login"
            st.rerun()

# ---------------------------------------------------------
# 19. Main Application Controller
# ---------------------------------------------------------
def main():
    init_session_state()
    apply_theme_css(st.session_state["theme"])

    # If unauthenticated, route between Landing, Login, and Signup
    if not st.session_state.get("authenticated", False):
        page = st.session_state.get("page", "landing")
        if page == "login":
            render_login_page()
        elif page == "signup":
            render_signup_page()
        else:
            render_landing_page()
        return

    # Authenticated flow: Render permanent sidebar and protected workspace
    render_sidebar()

    view = st.session_state.get("nav_view", "Dashboard")
    if view == "Dashboard":
        render_dashboard_view()
    elif view == "Analyze Report":
        render_analyze_view()
    elif view == "Report History":
        render_history_view()
    elif view == "Extraction Diagnostics":
        render_diagnostics_view()
    elif view == "Settings":
        render_settings_view()
    elif view == "About & Safety":
        render_about_view()

if __name__ == "__main__":
    main()
