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
            r"\bplatelet\b"
        ],
        "unit": "/mcL",
        "min": 150000.0,
        "max": 450000.0,
        "desc": "Primary cellular fragments responsible for hemostatic plug formation and coagulation.",
        "plain_note": "Low levels (thrombocytopenia) elevate bleeding risk; elevated counts indicate inflammation, iron deficiency, or reactive thrombocytosis."
    },
    {
        "id": "mcv",
        "name": "Mean Corpuscular Volume (MCV)",
        "patterns": [
            r"\bmean corpuscular volume\b",
            r"\bmcv\b",
            r"\bm\.c\.v\b"
        ],
        "unit": "fL",
        "min": 80.0,
        "max": 100.0,
        "desc": "Average volume and physical size of individual red blood cells.",
        "plain_note": "Low MCV indicates microcytic anemia (iron deficiency); high MCV indicates macrocytic anemia (B12 or folate deficiency)."
    },
    {
        "id": "mch",
        "name": "Mean Corpuscular Hemoglobin (MCH)",
        "patterns": [
            r"\bmean corpuscular hemo(?:a)?globin\b",
            r"\bmch\b",
            r"\bm\.c\.h\b"
        ],
        "unit": "pg",
        "min": 27.0,
        "max": 33.0,
        "desc": "Average mass of hemoglobin present inside an individual red blood cell.",
        "plain_note": "Tracks closely with MCV in classifying microcytic vs macrocytic anemias."
    },
    {
        "id": "mchc",
        "name": "Mean Corpuscular Hemoglobin Concentration (MCHC)",
        "patterns": [
            r"\bmchc\b",
            r"\bm\.c\.h\.c\b",
            r"\bmean corpuscular hemo(?:a)?globin conc(?:entration)?\b"
        ],
        "unit": "g/dL",
        "min": 32.0,
        "max": 36.0,
        "desc": "Concentration of hemoglobin in a given volume of packed red blood cells.",
        "plain_note": "Decreased in hypochromic anemias."
    },
    {
        "id": "rdw",
        "name": "Red Cell Distribution Width (RDW)",
        "patterns": [
            r"\bred cell distribution width\b",
            r"\brdw(?:-cv|-sd)?\b",
            r"\br\.d\.w\b"
        ],
        "unit": "%",
        "min": 11.5,
        "max": 15.0,
        "desc": "Measure of the variation in red blood cell volume (anisocytosis).",
        "plain_note": "Elevated RDW helps distinguish early iron deficiency anemia from thalassemia trait."
    },
    {
        "id": "esr",
        "name": "Erythrocyte Sedimentation Rate (ESR)",
        "patterns": [
            r"\berythrocyte sedimentation rate\b",
            r"\besr\b",
            r"\be\.s\.r\b"
        ],
        "unit": "mm/hr",
        "min": 0.0,
        "max": 20.0,
        "desc": "Non-specific marker of systemic inflammation and acute phase response.",
        "plain_note": "Elevated in infections, autoimmune diseases, and chronic inflammatory conditions."
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
        "desc": "Baseline glycemic level following a minimum 8-hour metabolic fast.",
        "plain_note": "A value between 100-125 mg/dL indicates impaired fasting glucose (prediabetes); 126 mg/dL or higher on repeat tests indicates diabetes mellitus."
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
        "desc": "Postprandial glycemic clearance measured 2 hours following a standardized meal.",
        "plain_note": "140-199 mg/dL indicates impaired glucose tolerance; 200 mg/dL or higher suggests diabetes."
    },
    {
        "id": "glucose",
        "name": "Blood Glucose (Sugar)",
        "patterns": [
            r"\b(?:serum |plasma |blood )?glucose\b",
            r"\bblood sugar\b",
            r"\brandom blood sugar\b",
            r"\brbs\b",
            r"\br\.b\.s\b",
            r"\bs\.?\s*glucose\b"
        ],
        "unit": "mg/dL",
        "min": 70.0,
        "max": 140.0,
        "desc": "Circulating blood glucose level (unspecified fasting or random).",
        "plain_note": "Screening indicator of carbohydrate metabolism and glycemic regulation."
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
        "desc": "Long-term glycemic biomarker indexing average blood glucose concentration over 90-120 days.",
        "plain_note": "Values from 5.7% to 6.4% indicate prediabetes; 6.5% or higher on two separate tests confirms diabetes mellitus."
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
            r"\bcholesterol\b"
        ],
        "unit": "mg/dL",
        "min": 125.0,
        "max": 200.0,
        "desc": "Sum of all circulating lipoprotein fractions carrying sterol rings.",
        "plain_note": "Values above 200 mg/dL warrant cardiovascular risk stratification and lifestyle intervention."
    },
    {
        "id": "hdl",
        "name": "HDL Cholesterol ('Good' Cholesterol)",
        "patterns": [
            r"\bhdl cholesterol\b",
            r"\bhdl-c\b",
            r"\bhigh-density lipoprotein\b",
            r"\bhdl\b",
            r"\bh\.d\.l\b",
            r"\bhol cholesterol\b",
            r"\bhol\b"
        ],
        "unit": "mg/dL",
        "min": 40.0,
        "max": 60.0,
        "desc": "Atheroprotective lipoprotein facilitating reverse cholesterol transport to hepatocytes.",
        "plain_note": "Levels below 40 mg/dL (men) or 50 mg/dL (women) associate with heightened coronary risk."
    },
    {
        "id": "ldl",
        "name": "LDL Cholesterol ('Bad' Cholesterol)",
        "patterns": [
            r"\bldl cholesterol\b",
            r"\bldl-c\b",
            r"\blow-density lipoprotein\b",
            r"\bldl\b",
            r"\bl\.d\.l\b",
            r"\blol cholesterol\b",
            r"\blol\b"
        ],
        "unit": "mg/dL",
        "min": 50.0,
        "max": 100.0,
        "desc": "Atherogenic lipoprotein driving plaque initiation and arterial wall foam cell formation.",
        "plain_note": "Elevations accelerate arterial stenosis; clinical targets adjust downward based on existing cardiac risk."
    },
    {
        "id": "vldl",
        "name": "VLDL Cholesterol",
        "patterns": [
            r"\bvldl cholesterol\b",
            r"\bvldl-c\b",
            r"\bvery low-density lipoprotein\b",
            r"\bvldl\b",
            r"\bv\.l\.d\.l\b"
        ],
        "unit": "mg/dL",
        "min": 10.0,
        "max": 30.0,
        "desc": "Hepatically derived triglyceride-rich transport vehicle.",
        "plain_note": "Elevated VLDL correlates with hypertriglyceridemia, metabolic syndrome, and pancreatitis risk."
    },
    {
        "id": "triglycerides",
        "name": "Triglycerides",
        "patterns": [
            r"\btriglycerides\b",
            r"\btg\b",
            r"\bt\.g\b",
            r"\bserum triglycerides\b",
            r"\btrigs\b"
        ],
        "unit": "mg/dL",
        "min": 40.0,
        "max": 150.0,
        "desc": "Glycerol esterified lipid molecules representing primary energy storage circulating in blood.",
        "plain_note": "Levels from 150-199 mg/dL are borderline high; values above 500 mg/dL carry risk of acute pancreatitis."
    },
    {
        "id": "creatinine",
        "name": "Serum Creatinine",
        "patterns": [
            r"\bserum creatinine\b",
            r"\bcreatinine\b",
            r"\bs\.?\s*creatinine\b",
            r"\bcreat\b"
        ],
        "unit": "mg/dL",
        "min": 0.6,
        "max": 1.2,
        "desc": "End-product of muscle phosphocreatine catabolism cleared exclusively by glomerular filtration.",
        "plain_note": "An elevation signals decreased glomerular filtration rate (GFR) requiring renal evaluation."
    },
    {
        "id": "egfr",
        "name": "Estimated Glomerular Filtration Rate (eGFR)",
        "patterns": [
            r"\bestimated glomerular filtration rate\b",
            r"\begfr\b",
            r"\be-gfr\b",
            r"\bgfr\b"
        ],
        "unit": "mL/min/1.73m2",
        "min": 60.0,
        "max": 130.0,
        "desc": "Calculated measure of kidney filtering capacity derived from serum creatinine and demographics.",
        "plain_note": "Values below 60 mL/min/1.73m2 for more than 3 months indicate chronic kidney disease (CKD)."
    },
    {
        "id": "bun",
        "name": "Blood Urea Nitrogen (BUN) / Blood Urea",
        "patterns": [
            r"\bblood urea nitrogen\b",
            r"\bbun\b",
            r"\bb\.u\.n\b"
        ],
        "unit": "mg/dL",
        "min": 7.0,
        "max": 21.0,
        "desc": "Nitrogenous waste molecule reflecting hepatic urea cycle synthesis and renal clearance.",
        "plain_note": "Rises in prerenal azotemia, acute kidney injury, upper GI bleeding, or high protein intake."
    },
        {
        "id": "alt_sgpt",
        "name": "ALT / SGPT (Liver Enzyme)",
        "patterns": [
            r"\bsgpt\b",
            r"\bs\.g\.p\.t\b",
            r"\balt\b",
            r"\ba\.l\.t\b",
            r"\balanine aminotransferase\b",
            r"\bsgpt\s*\(?alt\)?\b",
            r"\bsgpt\s*[/|I]\s*alt\b"
        ],
        "unit": "U/L",
        "min": 7.0,
        "max": 55.0,
        "desc": "Cytosolic hepatocyte transaminase serving as a primary biomarker for hepatocellular injury.",
        "plain_note": "Substantial elevation reflects acute hepatitis, drug-induced liver injury, or ischemic hepatopathy."
    },
    {
        "id": "ast_sgot",
        "name": "AST / SGOT (Liver Enzyme)",
        "patterns": [
            r"\bsgot\b",
            r"\bs\.g\.o\.t\b",
            r"\bast\b",
            r"\ba\.s\.t\b",
            r"\baspartate aminotransferase\b",
            r"\bsgot\s*\(?ast\)?\b",
            r"\bsgot\s*[/|I]\s*ast\b"
        ],
        "unit": "U/L",
        "min": 8.0,
        "max": 48.0,
        "desc": "Mitochondrial and cytosolic enzyme present in hepatocytes, cardiac myocytes, and skeletal muscle.",
        "plain_note": "AST exceeding ALT (ratio > 2.0) is suggestive of alcoholic hepatitis or advanced cirrhosis."
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
        "desc": "Zinc metalloenzyme located primarily in bile canaliculi and osteoblast membranes.",
        "plain_note": "Elevated in cholestatic liver diseases, biliary obstruction, and bone disorders."
    },
    {
        "id": "total_protein",
        "name": "Total Protein",
        "patterns": [
            r"\btotal protein\b",
            r"\bserum total protein\b",
            r"\bs\.?\s*total protein\b",
            r"\bserum protein\b"
        ],
        "unit": "g/dL",
        "min": 6.0,
        "max": 8.3,
        "desc": "Composite measurement of serum albumin and globulin fractions.",
        "plain_note": "Altered in nutritional deficiency, hepatic failure, and plasma cell dyscrasias."
    },
    {
        "id": "albumin",
        "name": "Serum Albumin",
        "patterns": [
            r"\bserum albumin\b",
            r"\balbumin\b",
            r"\bs\.?\s*albumin\b"
        ],
        "unit": "g/dL",
        "min": 3.5,
        "max": 5.2,
        "desc": "Major circulating protein maintaining colloid oncotic pressure and transporting hormones and drugs.",
        "plain_note": "Decreased in cirrhosis, nephrotic syndrome, severe malnutrition, and chronic inflammation."
    },
    {
        "id": "bilirubin_total",
        "name": "Bilirubin (Total)",
        "patterns": [
            r"\btotal bilirubin\b",
            r"\bbilirubin\s*[,:]?\s*total\b",
            r"\bs\.?\s*bilirubin\b",
            r"\bbilirubin\b"
        ],
        "unit": "mg/dL",
        "min": 0.2,
        "max": 1.2,
        "desc": "Breakdown product of hemoglobin catabolism conjugated by hepatic glucuronyltransferase.",
        "plain_note": "Elevations cause clinical jaundice and reflect hemolytic conditions, biliary obstruction, or hepatitis."
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
        "desc": "Anterior pituitary glycoprotein regulating thyroidal production of thyroxine (T4) and triiodothyronine (T3).",
        "plain_note": "Values > 4.5 mIU/L suggest primary hypothyroidism; values < 0.4 mIU/L suggest hyperthyroidism."
    },
    {
        "id": "uric_acid",
        "name": "Serum Uric Acid",
        "patterns": [
            r"\buric acid\b",
            r"\bserum uric acid\b",
            r"\bs\.?\s*uric acid\b"
        ],
        "unit": "mg/dL",
        "min": 3.5,
        "max": 7.2,
        "desc": "Final oxidation product of exogenous and purine nucleotide metabolism.",
        "plain_note": "Hyperuricemia (> 7.0 mg/dL) precipitates monosodium urate crystal arthritis (gout) and nephrolithiasis."
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
# ---------------------------------------------------------
# 3. Robust Extraction & Pre-Cleaning Engine
# ---------------------------------------------------------
NUMBER_REGEX = re.compile(r"(?<![A-Za-z0-9.])(\d{1,3}(?:,\d{3})*(?:\.\d+)?|\d+(?:,\d{1,2})?|\d+(?:\.\d+)?)(?![0-9.])")

UNIT_REGEX = re.compile(
    r"(?:(?:\b(?:g/d[Ll]|g/[Ll]|mg/d[Ll]|mg/[Ll]|cells/mc[Ll]|cells/u[Ll]|mil/mc[Ll]|million/mc[Ll]|mIU/[Ll]|uIU/m[Ll]|µIU/m[Ll]|pg/m[Ll]|ng/m[Ll]|ng/d[Ll]|mcg/d[Ll]|ug/d[Ll]|µg/d[Ll]|U/[Ll]|IU/[Ll]|f[Ll]|pg|mm/hr|mm/1st\s*hr|m[Ll]/min(?:/1\.73m2)?|mmol/[Ll]|umol/[Ll]|µmol/[Ll]|mEq/[Ll]|meq/[Ll])\b)|(?<![A-Za-z0-9])(?:/mc[Ll]|/u[Ll]|%)(?![A-Za-z0-9]))",
    re.IGNORECASE
)

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

    # Split joined words: LeucocyteCount -> Leucocyte Count (preserve dL, mL, uL, mcL)
    s = re.sub(r"([a-z])([A-KM-Z])", r"\1 \2", s)

    # Separate attached punctuation: PLT( -> PLT (
    s = re.sub(r"([A-Za-z0-9])([(\[:])", r"\1 \2", s)
    s = re.sub(r"([)\]:])([A-Za-z0-9])", r"\1 \2", s)

    # Normalize clinical acronym OCR distortions
    s = re.sub(r"\b[Hh]b\s*[Aa]?[lt1][cC]?\b", "HbA1c", s)
    s = re.sub(r"\b[Hh]ate\b", "HbA1c", s)
    s = re.sub(r"\b[Tt]o[lt]al\s*[Cc]hol[a-z]*\b", "Total Cholesterol", s, flags=re.IGNORECASE)
    s = re.sub(r"\b[Hh][Oo0][Ll]\s*([Cc]hol[a-z]*)?", "HDL Cholesterol", s, flags=re.IGNORECASE)
    s = re.sub(r"\b[Ll][Oo0][Ll]\s*([Cc]hol[a-z]*)?", "LDL Cholesterol", s, flags=re.IGNORECASE)
    s = re.sub(r"\b[Tt][Aa]\s*\(?[Tt]na[a-z]*\b", "Triglycerides", s, flags=re.IGNORECASE)
    s = re.sub(r"\b[Tt]rigs?\b", "Triglycerides", s, flags=re.IGNORECASE)
    s = re.sub(r"\b[Ss][Gg][Pp][Tt]\s*[I|/]\s*[Aa][Ll][Tt]\)?\b", "SGPT (ALT)", s, flags=re.IGNORECASE)
    s = re.sub(r"\b[Ss][Gg][Oo0][Tt]\s*[I|/]\s*[Aa][Ss][Tt]\)?\b", "SGOT (AST)", s, flags=re.IGNORECASE)
    s = re.sub(r"\b[Ss]a\s*[Pp][Tt]i?\s*[Aa]?[Ll]?[Tt]?\b", "SGPT", s)
    s = re.sub(r"\b1[Hh]\b", "TSH", s)
    s = re.sub(r"\bm\s*IU\b", "mIU", s, flags=re.IGNORECASE)
    s = re.sub(r"\bu\s*IU\b", "uIU", s, flags=re.IGNORECASE)
    s = re.sub(r"\b[Pp]lat[a-z]*\s*[Cc]oun[a-z]*\b", "Platelet Count", s, flags=re.IGNORECASE)

    # Fix contextual numeric OCR errors: IO5 -> 105, O.85 -> 0.85, 2I8 -> 218
    s = re.sub(r"\b[Il](?=[Oo\d])", "1", s)
    s = re.sub(r"(?<=[0-9])[Il](?=[0-9]|\b)", "1", s)
    s = re.sub(r"(?<=[0-9])[Oo](?=[0-9]|\b)", "0", s)
    s = re.sub(r"\b[Oo](?=\.[0-9])", "0", s)

    return s.strip()

def extract_printed_range_with_span(line: str):
    """
    Extracts printed reference intervals (e.g. 13.0 - 17.5, < 200, > 60)
    and returns (low, high, display_label, span).
    """
    m = re.search(r"(\d+(?:,\d+)*(?:\.\d+)?)\s*(?:-|to)\s*(\d+(?:,\d+)*(?:\.\d+)?)", line)
    if m:
        try:
            low = clean_num_str(m.group(1))
            high = clean_num_str(m.group(2))
            if low <= high:
                return low, high, f"{low} - {high}", m.span()
        except Exception:
            pass

    m = re.search(r"<\s*(\d+(?:,\d+)*(?:\.\d+)?)", line)
    if m:
        try:
            high = clean_num_str(m.group(1))
            return 0.0, high, f"< {high}", m.span()
        except Exception:
            pass

    m = re.search(r">\s*(\d+(?:,\d+)*(?:\.\d+)?)", line)
    if m:
        try:
            low = clean_num_str(m.group(1))
            return low, float("inf"), f"> {low}", m.span()
        except Exception:
            pass

    return None, None, None, None

def extract_printed_range(line: str):
    low, high, label, _ = extract_printed_range_with_span(line)
    return low, high, label

def detect_printed_flag(line: str) -> str:
    """
    Detects laboratory flags (High, Low, Abnormal, Normal) while strictly
    ignoring unit strings like /L and %.
    """
    clean = UNIT_REGEX.sub(" ", line)
    if re.search(r"(?<![/A-Za-z0-9])(?:H|HIGH|ABOVE)(?![/A-Za-z0-9])|▲", clean, re.IGNORECASE):
        return "High"
    if re.search(r"(?<![/A-Za-z0-9])(?:L|LOW|BELOW)(?![/A-Za-z0-9])|▼", clean, re.IGNORECASE):
        return "Low"
    if re.search(r"(?<![/A-Za-z0-9])(?:A|ABN|ABNORMAL|CRITICAL|ALERT|FLAG)(?![/A-Za-z0-9])|\*", clean, re.IGNORECASE):
        return "Abnormal"
    if re.search(r"\b(?:NORMAL|NORM|WITHIN RANGE|DESIRABLE|NEGATIVE)\b", clean, re.IGNORECASE):
        return "Normal"
    return ""

def detect_file_format(file_bytes: bytes, filename: str = "") -> str:
    """
    Detects the true document format by inspecting magic bytes / file signatures,
    falling back to filename extension only if magic bytes are indeterminate.
    Supports PDF, PNG, JPG/JPEG, WEBP, BMP, TIFF, HEIC/HEIF.
    """
    if not file_bytes:
        return "Unknown"

    header = file_bytes[:32]

    # PDF signature
    if header.startswith(b"%PDF"):
        return "PDF"

    # PNG signature: 89 50 4E 47 0D 0A 1A 0A
    if header.startswith(b"\x89PNG\r\n\x1a\n"):
        return "PNG"

    # JPEG signature: FF D8 FF
    if header.startswith(b"\xff\xd8\xff"):
        return "JPG"

    # WEBP signature: RIFF....WEBP
    if len(header) >= 12 and header.startswith(b"RIFF") and header[8:12] == b"WEBP":
        return "WEBP"

    # BMP signature: BM
    if header.startswith(b"BM"):
        return "BMP"

    # TIFF signature: II*\x00 (little-endian) or MM\x00* (big-endian)
    if header.startswith(b"II*\x00") or header.startswith(b"MM\x00*"):
        return "TIFF"

    # HEIC / HEIF signatures in ISO Base Media File Format (ftyp box)
    if len(header) >= 12 and header[4:8] == b"ftyp":
        brand = header[8:12].lower()
        if brand in (b"heic", b"heix", b"hevc", b"hevx", b"mif1", b"msf1"):
            return "HEIC"

    # Fallback to extension if magic bytes ambiguous
    if filename:
        ext = os.path.splitext(filename)[1].lower().lstrip(".")
        if ext in ("pdf", "png", "jpg", "jpeg", "webp", "bmp", "tiff", "tif", "heic", "heif"):
            if ext in ("jpeg", "jpg"):
                return "JPG"
            if ext in ("tif", "tiff"):
                return "TIFF"
            if ext in ("heic", "heif"):
                return "HEIC"
            return ext.upper()

    return "Unknown"

def _evaluate_biomarker_line(clean_l: str, raw_l: str, seen_biomarkers: set):
    """
    Inspects a single line or combined block line against REFERENCE_DB.
    Returns (record, matched_bio_id) if successfully parsed, else (None, None).
    Preserves measured values even when they equal range boundaries (p_min or p_max).
    """
    for bio in REFERENCE_DB:
        if bio["id"] in seen_biomarkers:
            continue

        matched_pat = None
        match_span = None
        for pat in bio["patterns"]:
            m = re.search(pat, clean_l, re.IGNORECASE)
            if m:
                matched_pat = pat
                match_span = (m.start(), m.end())
                break

        if not matched_pat or match_span is None:
            continue

        p_min, p_max, p_label, r_span = extract_printed_range_with_span(clean_l)
        printed_flag = detect_printed_flag(clean_l)

        # Find all number tokens with spans
        all_nums = [(m.group(1), m.start(), m.end()) for m in NUMBER_REGEX.finditer(clean_l)]
        if not all_nums:
            continue

        # Filter out numbers inside the printed range span
        non_range_nums = [n for n in all_nums if not (r_span and n[1] >= r_span[0] and n[2] <= r_span[1])]

        # Filter out numbers inside unit strings (e.g. 1.73 in 1.73m2, 10 in 10^3)
        valid_nums = []
        for n in non_range_nums:
            post = clean_l[n[2]:n[2]+5].strip()
            if post.startswith("m2") or post.startswith("m^2") or post.startswith("^"):
                continue
            valid_nums.append(n)

        if not valid_nums:
            continue

        # Prefer numbers that appear after the biomarker name (skips leading list numbers like "1.")
        after_name_nums = [n for n in valid_nums if n[1] >= match_span[1]]
        chosen_token = after_name_nums[0] if after_name_nums else valid_nums[0]

        try:
            measured_val = clean_num_str(chosen_token[0])
        except Exception:
            continue

        # Extract printed unit from the report text or fallback to canonical unit
        u_match = UNIT_REGEX.search(clean_l)
        extracted_unit = u_match.group(0) if u_match else bio["unit"]

        # Determine reference interval and source
        if p_min is not None and p_max is not None:
            eff_min = p_min
            eff_max = p_max
            range_display = p_label
            range_source = "Printed on Report"
        elif bio.get("min") is not None and bio.get("max") is not None:
            eff_min = bio["min"]
            eff_max = bio["max"]
            range_display = f"{eff_min} - {eff_max}"
            range_source = "Standard Adult Reference"
        else:
            eff_min = None
            eff_max = None
            range_display = "Unspecified (Needs Review)"
            range_source = "Unspecified (Needs Review)"

        # Clinical status classification
        if eff_min is not None and eff_max is not None:
            if measured_val < eff_min:
                status = "Potentially Low"
                category = "flagged"
            elif measured_val > eff_max:
                status = "Potentially High"
                category = "flagged"
            else:
                if printed_flag in ("High", "Low", "Abnormal"):
                    status = f"Report Flagged ({printed_flag})"
                    category = "flagged"
                else:
                    status = "Normal"
                    category = "normal"
        else:
            if printed_flag == "High":
                status = "Report Flagged (High)"
                category = "flagged"
            elif printed_flag == "Low":
                status = "Report Flagged (Low)"
                category = "flagged"
            elif printed_flag == "Abnormal":
                status = "Report Flagged (Abnormal)"
                category = "flagged"
            else:
                status = "Uncertain / Manual Review"
                category = "uncertain"

        # Determine label for traceability
        orig_label = raw_l.split()[0] if raw_l.split() else bio["name"]
        if ":" in raw_l:
            orig_label = raw_l.split(":")[0].strip()
        elif "|" in raw_l:
            orig_label = raw_l.split("|")[0].strip()

        record = {
            "Test Name": bio["name"],
            "Original Label": orig_label,
            "Measured Value": measured_val,
            "Unit": extracted_unit,
            "Reference Range": range_display,
            "Range Source": range_source,
            "Status": status,
            "Category": category,
            "Clinical Context": bio["desc"],
            "Plain Explanation": bio.get("plain_note", ""),
            "Report Flag": printed_flag,
            "Raw Line": raw_l
        }
        return record, bio["id"]

    return None, None

def parse_report_with_diagnostics(raw_text: str):
    """
    Robust multi-strategy laboratory report parser.
    Supports in-line results, colon-separated formats, pipe/tab-delimited tables,
    and multiline layouts. Preserves measured values at reference boundaries.
    """
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

    # Strategy 1: Delimited row and in-line matching
    for idx, (raw_l, line) in enumerate(zip(raw_lines, cleaned_lines)):
        if is_metadata_line(line):
            continue

        record, bio_id = _evaluate_biomarker_line(line, raw_l, seen_biomarkers)
        if record:
            extracted_records.append(record)
            seen_biomarkers.add(bio_id)
            recognized_indices.add(idx)

    # Strategy 2: Two-line and three-line block matching
    for idx in range(len(cleaned_lines) - 1):
        if idx in recognized_indices:
            continue
        line_cur = cleaned_lines[idx]

        # Check if line_cur contains a biomarker name with no numeric value
        has_num_cur = bool(NUMBER_REGEX.search(line_cur))
        if has_num_cur:
            continue

        # Test 2-line combination
        line_2 = f"{line_cur} {cleaned_lines[idx + 1]}"
        raw_2 = f"{raw_lines[idx]} -> {raw_lines[idx + 1]}"
        record, bio_id = _evaluate_biomarker_line(line_2, raw_2, seen_biomarkers)

        if record:
            extracted_records.append(record)
            seen_biomarkers.add(bio_id)
            recognized_indices.add(idx)
            recognized_indices.add(idx + 1)
            continue

        # Test 3-line combination if idx + 2 exists
        if idx + 2 < len(cleaned_lines):
            line_3 = f"{line_cur} {cleaned_lines[idx + 1]} {cleaned_lines[idx + 2]}"
            raw_3 = f"{raw_lines[idx]} -> {raw_lines[idx + 1]} -> {raw_lines[idx + 2]}"
            record, bio_id = _evaluate_biomarker_line(line_3, raw_3, seen_biomarkers)
            if record:
                extracted_records.append(record)
                seen_biomarkers.add(bio_id)
                recognized_indices.add(idx)
                recognized_indices.add(idx + 1)
                recognized_indices.add(idx + 2)

    # Collect unrecognized diagnostic candidates
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
        "unrecognized_candidates": unrecognized_candidates,
        "status_code": "NO_BIOMARKERS_DETECTED" if len(extracted_records) == 0 else "OK",
        "guidance": (
            "No standard laboratory biomarkers were recognized. The document text is visible in Phase 2 above; "
            "please verify that the document contains supported laboratory tests or edit the text and click 'Re-Analyze Text Stream'."
            if len(extracted_records) == 0 else "Analysis completed successfully."
        )
    }

    return extracted_records, diagnostics

def parse_report_text(raw_text: str):
    records, _ = parse_report_with_diagnostics(raw_text)
    return records

# 4. Multi-Format Ingestion Engine
# ---------------------------------------------------------
def configure_tesseract_environment():
    """
    Auto-detects Tesseract binary and configures pytesseract and TESSDATA_PREFIX.
    Supports system installations (/usr/bin/tesseract, Homebrew) and portable bundle (bin/tesseract).
    """
    base_dir = os.path.dirname(os.path.abspath(__file__))

    # 1. Check candidates for Tesseract executable
    candidates = [
        os.environ.get("TESSERACT_CMD"),
        os.environ.get("TESSERACT_PATH"),
        shutil.which("tesseract"),
        os.path.join(base_dir, "bin", "tesseract"),
        "/usr/bin/tesseract",
        "/usr/local/bin/tesseract",
        "/opt/homebrew/bin/tesseract",
        "/bin/tesseract",
    ]

    found_cmd = None
    for c in candidates:
        if c and os.path.isfile(c) and os.access(c, os.X_OK):
            found_cmd = c
            break

    if found_cmd:
        try:
            import pytesseract
            pytesseract.pytesseract.tesseract_cmd = found_cmd
        except ImportError:
            pass

    # 2. Check candidates for tessdata directory
    local_tessdata = os.path.join(base_dir, "tessdata")
    prefix_candidates = [
        os.environ.get("TESSDATA_PREFIX"),
        local_tessdata,
        "/usr/share/tesseract-ocr/5/tessdata",
        "/usr/share/tesseract-ocr/4.00/tessdata",
        "/usr/share/tessdata",
        "/usr/local/share/tessdata",
        "/opt/homebrew/share/tessdata",
    ]

    for p in prefix_candidates:
        if p and os.path.isdir(p) and os.path.isfile(os.path.join(p, "eng.traineddata")):
            os.environ["TESSDATA_PREFIX"] = p
            break

    return found_cmd

def get_tesseract_command():
    return configure_tesseract_environment()

def is_tesseract_available() -> bool:
    return get_tesseract_command() is not None

def get_tesseract_diagnostics() -> dict:
    cmd = get_tesseract_command()
    available = cmd is not None
    version = "Unavailable"
    languages = []

    if available:
        try:
            import pytesseract
            pytesseract.pytesseract.tesseract_cmd = cmd
            version = str(pytesseract.get_tesseract_version())
            languages = pytesseract.get_languages()
        except Exception:
            try:
                res = subprocess.run([cmd, "--version"], capture_output=True, text=True, timeout=5)
                version = res.stdout.splitlines()[0] if res.stdout else "Available (CLI)"
            except Exception as e:
                version = f"Available ({str(e)})"

    return {
        "available": available,
        "binary_path": cmd if cmd else "None (not found in PATH, /usr/bin, or bin/tesseract)",
        "version": version,
        "languages": languages if languages else (["eng"] if available else []),
        "tessdata_prefix": os.environ.get("TESSDATA_PREFIX", "System Default")
    }

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

        if hasattr(image_bytes, "getvalue") and len(image_bytes.getvalue()) == 0:
            return False, "Image document is empty (0 bytes).", "Empty Image"

        from PIL import ImageSequence
        img = Image.open(image_bytes)
        img_format = img.format or "Image"

        ocr_frames = []
        total_frames = getattr(img, "n_frames", 1)

        for frame_idx, frame in enumerate(ImageSequence.Iterator(img)):
            proc_img = preprocess_image_for_ocr(frame)
            frame_text = pytesseract.image_to_string(proc_img, config="--psm 6")
            if len(frame_text.strip()) < 10:
                frame_text = pytesseract.image_to_string(proc_img)
            if len(frame_text.strip()) < 10:
                frame_text = pytesseract.image_to_string(proc_img, config="--psm 11")

            # Check if rotation is needed when text is empty
            if len(frame_text.strip()) < 10:
                for angle in (90, 180, 270):
                    rotated = proc_img.rotate(angle, expand=True)
                    rot_text = pytesseract.image_to_string(rotated, config="--psm 6")
                    if len(rot_text.strip()) >= 10:
                        frame_text = rot_text
                        break

            if frame_text.strip():
                if total_frames > 1:
                    ocr_frames.append(f"--- Frame {frame_idx + 1} ---\n{frame_text.strip()}")
                else:
                    ocr_frames.append(frame_text.strip())

        combined_text = "\n\n".join(ocr_frames)
        if not combined_text.strip():
            return False, "No readable text detected in image.", img_format

        return True, combined_text, img_format
    except Exception as e:
        err_msg = str(e)
        if "heif" in err_msg.lower() or "heic" in err_msg.lower():
            return False, f"HEIC decoding failed. Ensure pillow-heif is registered: {err_msg}", "HEIC"
        return False, f"Image decoding / OCR error: {err_msg}", "Error"

def extract_text_from_pdf(pdf_bytes):
    try:
        import pdfplumber
        extracted_pages = []
        tess_cmd = get_tesseract_command()

        if hasattr(pdf_bytes, "getvalue") and len(pdf_bytes.getvalue()) == 0:
            return False, "PDF document is empty (0 bytes).", "Empty PDF", 0

        with pdfplumber.open(pdf_bytes) as pdf:
            total_pages = len(pdf.pages)
            if total_pages == 0:
                return False, "PDF contains zero pages.", "Empty", 0

            max_pages = min(total_pages, 50)

            for idx in range(max_pages):
                page = pdf.pages[idx]
                page_lines = []

                # 1. Extract structured tables if present
                try:
                    tables = page.extract_tables()
                    if tables:
                        for table in tables:
                            for row in table:
                                if not row:
                                    continue
                                clean_cells = [str(c).strip() for c in row if c is not None and str(c).strip()]
                                if clean_cells:
                                    page_lines.append(" | ".join(clean_cells))
                except Exception:
                    pass

                # 2. Extract layout-aware text
                try:
                    layout_text = page.extract_text(layout=True)
                    if layout_text and layout_text.strip():
                        for line in layout_text.splitlines():
                            line_s = line.strip()
                            if line_s and line_s not in page_lines:
                                page_lines.append(line_s)
                except Exception:
                    pass

                # 3. Fallback to standard text
                if not page_lines:
                    try:
                        raw_text = page.extract_text()
                        if raw_text and raw_text.strip():
                            page_lines.extend([l.strip() for l in raw_text.splitlines() if l.strip()])
                    except Exception:
                        pass

                if page_lines:
                    header = f"--- Page {idx + 1} ---" if total_pages > 1 else ""
                    if header:
                        extracted_pages.append(header + "\n" + "\n".join(page_lines))
                    else:
                        extracted_pages.append("\n".join(page_lines))

            combined_text = "\n\n".join(extracted_pages)

            if len(combined_text.strip()) < 30:
                if not tess_cmd:
                    return False, "Scanned PDF detected without available OCR engine on host system.", "Scanned PDF (No OCR)", total_pages

                import pytesseract
                pytesseract.pytesseract.tesseract_cmd = tess_cmd
                ocr_pages = []

                for idx in range(max_pages):
                    page = pdf.pages[idx]
                    page_img = page.to_image(resolution=200).original
                    proc_img = preprocess_image_for_ocr(page_img)
                    page_text = pytesseract.image_to_string(proc_img, config="--psm 6")
                    if len(page_text.strip()) < 10:
                        page_text = pytesseract.image_to_string(proc_img)
                    if len(page_text.strip()) < 10:
                        page_text = pytesseract.image_to_string(proc_img, config="--psm 11")
                    if page_text.strip():
                        ocr_pages.append(f"--- Page {idx + 1} ---\n{page_text.strip()}")

                combined_text = "\n\n".join(ocr_pages)
                method = "Scanned PDF (OCR Rendered)"
            else:
                method = "Digital PDF Stream"

            if not combined_text.strip():
                return False, "No readable laboratory text retrieved from PDF.", method, total_pages

            return True, combined_text, method, total_pages
    except Exception as e:
        err_msg = str(e)
        if "password" in err_msg.lower():
            return False, "Password-protected or encrypted PDF cannot be accessed without credentials.", "Encrypted PDF", 0
        return False, f"PDF extraction failed: {err_msg}", "Error", 0

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
