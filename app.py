"""
Orca MedScan — Medical Intelligence Dashboard & Report Analyzer
Orcathon 2026: Healthcare & MedTech Track

A reliable, transparent clinical screening tool to extract biomarkers,
verify printed and clinical reference ranges, and flag potential anomalies
across PDF, PNG, JPG, and raw text reports without external paid APIs.
"""

import io
import re
import shutil
from datetime import datetime
import pandas as pd
from PIL import Image, ImageOps
import streamlit as st

# Configure page
st.set_page_config(
    page_title="Orca MedScan | Medical Intelligence Dashboard",
    page_icon="🩺",
    layout="wide",
    initial_sidebar_state="expanded"
)

# ---------------------------------------------------------
# Custom Styling: Modern Clean Healthcare Theme
# ---------------------------------------------------------
st.markdown("""
<style>
    /* Global Typography & Palette */
    :root {
        --med-navy: #0F1E36;
        --med-teal: #0D9488;
        --med-blue: #0284C7;
        --med-bg: #F8FAFC;
        --med-card-bg: #FFFFFF;
        --med-border: #E2E8F0;
    }
    
    .main {
        background-color: var(--med-bg);
    }
    
    /* Metric Cards */
    .metric-card {
        background-color: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
        padding: 18px 20px;
        box-shadow: 0 1px 3px rgba(15, 30, 54, 0.05);
        margin-bottom: 12px;
    }
    .metric-card-title {
        font-size: 0.85rem;
        font-weight: 600;
        color: #64748B;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 4px;
    }
    .metric-card-val {
        font-size: 1.85rem;
        font-weight: 700;
        color: #0F1E36;
        line-height: 1.1;
    }
    .metric-card-sub {
        font-size: 0.8rem;
        color: #94A3B8;
        margin-top: 4px;
    }
    
    /* Status Badges */
    .badge-normal {
        display: inline-block;
        background-color: #ECFDF5;
        color: #065F46;
        border: 1px solid #A7F3D0;
        border-radius: 9999px;
        padding: 4px 12px;
        font-size: 0.78rem;
        font-weight: 600;
    }
    .badge-high {
        display: inline-block;
        background-color: #FEF2F2;
        color: #991B1B;
        border: 1px solid #FECACA;
        border-radius: 9999px;
        padding: 4px 12px;
        font-size: 0.78rem;
        font-weight: 600;
    }
    .badge-low {
        display: inline-block;
        background-color: #FFFBEB;
        color: #92400E;
        border: 1px solid #FDE68A;
        border-radius: 9999px;
        padding: 4px 12px;
        font-size: 0.78rem;
        font-weight: 600;
    }
    .badge-review {
        display: inline-block;
        background-color: #F1F5F9;
        color: #334155;
        border: 1px solid #CBD5E1;
        border-radius: 9999px;
        padding: 4px 12px;
        font-size: 0.78rem;
        font-weight: 600;
    }
    
    /* Result Row Container */
    .biomarker-row {
        background-color: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 8px;
        padding: 14px 18px;
        margin-bottom: 10px;
        transition: border-color 0.15s ease-in-out;
    }
    .biomarker-row:hover {
        border-color: #CBD5E1;
    }
    
    /* Empty State Box */
    .empty-state-box {
        text-align: center;
        background-color: #FFFFFF;
        border: 1.5px dashed #CBD5E1;
        border-radius: 12px;
        padding: 45px 20px;
        margin: 20px 0;
    }
</style>
""", unsafe_allow_html=True)

# ---------------------------------------------------------
# 1. Documented Reference Database (Standard Adult Ranges)
# ---------------------------------------------------------
REFERENCE_DB = [
    {
        "id": "hb",
        "name": "Hemoglobin (Hb)",
        "patterns": [r"\bhemo(?:a)?globin\b", r"\bhb\b"],
        "unit": "g/dL",
        "min": 12.0,
        "max": 17.5,
        "desc": "Carries oxygen throughout the body. Levels depend on age, sex, and hydration.",
        "plain_note": "A low value indicates potential anemia or iron deficiency; an elevated value may indicate dehydration or erythrocytosis."
    },
    {
        "id": "wbc",
        "name": "White Blood Cell Count (WBC / TLC)",
        "patterns": [r"\bwhite blood cell(?:s)?\b", r"\bwbc\b", r"\btotal leucocyte count\b", r"\btlc\b"],
        "unit": "cells/mcL",
        "min": 4000.0,
        "max": 11000.0,
        "desc": "Key component of immune system; fluctuates with infection, inflammation, or physical stress.",
        "plain_note": "Elevations frequently correlate with infection or physiological stress; lower counts can indicate immunosuppression."
    },
    {
        "id": "rbc",
        "name": "Red Blood Cell Count (RBC)",
        "patterns": [r"\bred blood cell(?:s)?\b", r"\brbc(?:\s+count)?\b"],
        "unit": "mil/mcL",
        "min": 4.0,
        "max": 5.9,
        "desc": "Total count of oxygen-carrying erythrocytes.",
        "plain_note": "Monitored to assess blood volume, oxygen carrying capacity, and hematologic health."
    },
    {
        "id": "platelets",
        "name": "Platelet Count",
        "patterns": [r"\bplatelet(?:s)?(?:\s+count)?\b", r"\bplt\b"],
        "unit": "/mcL",
        "min": 150000.0,
        "max": 450000.0,
        "desc": "Blood cell fragments essential for normal clotting and coagulation.",
        "plain_note": "Low counts increase bruising/bleeding risk; high counts may signal reactive inflammation or marrow activity."
    },
    {
        "id": "glucose_fasting",
        "name": "Fasting Blood Glucose (Sugar)",
        "patterns": [r"\bfasting (?:blood )?(?:sugar|glucose)\b", r"\bfbs\b", r"\bglucose\s*,?\s*fasting\b"],
        "unit": "mg/dL",
        "min": 70.0,
        "max": 99.0,
        "desc": "Blood glucose level after an overnight fast (minimum 8 hours).",
        "plain_note": "Elevated fasting blood sugar (>= 100 mg/dL) points to impaired fasting glucose or diabetes mellitus risk."
    },
    {
        "id": "glucose_pp",
        "name": "Post-Prandial Blood Glucose (PPBS)",
        "patterns": [r"\bpost[\s-]prandial (?:blood )?(?:sugar|glucose)\b", r"\bppbs\b", r"\bglucose\s*,?\s*pp\b"],
        "unit": "mg/dL",
        "min": 70.0,
        "max": 140.0,
        "desc": "Blood sugar measured approximately 2 hours after a meal.",
        "plain_note": "Values above 140 mg/dL suggest reduced insulin response or impaired postprandial glucose tolerance."
    },
    {
        "id": "hba1c",
        "name": "Glycated Hemoglobin (HbA1c)",
        "patterns": [r"\bhba1c\b", r"\bglycated hemo(?:a)?globin\b", r"\bhaemoglobin a1c\b"],
        "unit": "%",
        "min": 4.0,
        "max": 5.6,
        "desc": "Reflects average blood sugar levels over the past 2 to 3 months.",
        "plain_note": "5.7% to 6.4% indicates prediabetes; 6.5% or above meets criteria for clinical evaluation of diabetes."
    },
    {
        "id": "cholesterol",
        "name": "Total Cholesterol",
        "patterns": [r"\btotal cholesterol\b", r"\bserum cholesterol\b"],
        "unit": "mg/dL",
        "min": 125.0,
        "max": 200.0,
        "desc": "Total circulating blood lipid; desirable upper target is generally < 200 mg/dL.",
        "plain_note": "Higher numbers contribute to atherosclerotic cardiovascular risk and warrant dietary or lipid evaluation."
    },
    {
        "id": "hdl",
        "name": "HDL Cholesterol ('Good' Cholesterol)",
        "patterns": [r"\bhdl(?:\s+cholesterol)?\b", r"\bhigh density lipoprotein\b"],
        "unit": "mg/dL",
        "min": 40.0,
        "max": 90.0,
        "desc": "Helps remove excess cholesterol; higher levels typically provide cardiovascular protection.",
        "plain_note": "Values below 40 mg/dL in men or 50 mg/dL in women are considered an independent cardiovascular risk factor."
    },
    {
        "id": "ldl",
        "name": "LDL Cholesterol ('Bad' Cholesterol)",
        "patterns": [r"\bldl(?:\s+cholesterol)?\b", r"\blow density lipoprotein\b"],
        "unit": "mg/dL",
        "min": 50.0,
        "max": 100.0,
        "desc": "Optimal target is typically below 100 mg/dL for low-to-moderate risk profiles.",
        "plain_note": "Elevated LDL increases the risk of arterial plaque buildup; primary target for cardiovascular risk reduction."
    },
    {
        "id": "triglycerides",
        "name": "Triglycerides",
        "patterns": [r"\btriglyceride(?:s)?\b", r"\btg\b"],
        "unit": "mg/dL",
        "min": 40.0,
        "max": 150.0,
        "desc": "Main form of stored fat in the body. Normal target is below 150 mg/dL.",
        "plain_note": "Elevated triglycerides are linked to metabolic syndrome, insulin resistance, and dietary excess."
    },
    {
        "id": "creatinine",
        "name": "Serum Creatinine",
        "patterns": [r"\b(?:serum )?creatinine\b"],
        "unit": "mg/dL",
        "min": 0.6,
        "max": 1.2,
        "desc": "Waste byproduct filtered by kidneys; elevated values can signal altered renal clearance.",
        "plain_note": "Elevations may signify reduced glomerular filtration, requiring assessment of renal status and hydration."
    },
    {
        "id": "bun",
        "name": "Blood Urea Nitrogen (BUN) / Blood Urea",
        "patterns": [r"\bblood urea nitrogen\b", r"\bbun\b", r"\bblood urea\b"],
        "unit": "mg/dL",
        "min": 7.0,
        "max": 21.0,
        "desc": "Waste product from protein breakdown; monitored alongside creatinine for kidney health.",
        "plain_note": "High BUN can occur with dehydration, increased protein intake, or declining kidney clearance."
    },
    {
        "id": "alt_sgpt",
        "name": "ALT / SGPT (Liver Enzyme)",
        "patterns": [r"\bsgpt\b", r"\balt\b", r"\balanine aminotransferase\b"],
        "unit": "U/L",
        "min": 7.0,
        "max": 55.0,
        "desc": "Liver enzyme; transient elevations may occur with medications, fatty liver, or cellular stress.",
        "plain_note": "Elevated levels suggest acute or chronic liver irritation and merit clinical review."
    },
    {
        "id": "ast_sgot",
        "name": "AST / SGOT (Liver Enzyme)",
        "patterns": [r"\bsgot\b", r"\bast\b", r"\baspartate aminotransferase\b"],
        "unit": "U/L",
        "min": 8.0,
        "max": 48.0,
        "desc": "Enzyme present in liver and muscle tissue.",
        "plain_note": "Interpreted alongside ALT to evaluate hepatic and muscular wellness."
    },
    {
        "id": "bilirubin_total",
        "name": "Bilirubin (Total)",
        "patterns": [r"\btotal bilirubin\b", r"\bbilirubin\s*,?\s*total\b"],
        "unit": "mg/dL",
        "min": 0.2,
        "max": 1.2,
        "desc": "Byproduct of red blood cell breakdown, processed and excreted by the liver.",
        "plain_note": "Elevations can indicate hemolysis, biliary flow impairment, or benign unconjugated hyperbilirubinemia."
    },
    {
        "id": "tsh",
        "name": "Thyroid Stimulating Hormone (TSH)",
        "patterns": [r"\btsh\b", r"\bthyroid stimulating hormone\b"],
        "unit": "mIU/L",
        "min": 0.4,
        "max": 4.5,
        "desc": "Pituitary hormone regulating thyroid function.",
        "plain_note": "High TSH suggests sluggish thyroid function (hypothyroidism); low TSH suggests hyperthyroid activity."
    },
    {
        "id": "uric_acid",
        "name": "Serum Uric Acid",
        "patterns": [r"\b(?:serum )?uric acid\b"],
        "unit": "mg/dL",
        "min": 3.5,
        "max": 7.2,
        "desc": "Formed from breakdown of purines; elevated levels linked to gout or metabolic stress.",
        "plain_note": "Hyperuricemia predisposes to crystal deposition (gout) or renal calculus formation."
    },
    {
        "id": "calcium",
        "name": "Serum Calcium",
        "patterns": [r"\b(?:serum )?calcium\b"],
        "unit": "mg/dL",
        "min": 8.5,
        "max": 10.5,
        "desc": "Vital for bone, nerve, and cardiovascular function.",
        "plain_note": "Deviations require evaluation of parathyroid function, vitamin D status, or medication effects."
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
# 3. Extraction & Parsing Utilities
# ---------------------------------------------------------
def clean_num_str(raw: str) -> float:
    """Parse numeric string with commas or decimals into float."""
    sanitized = raw.replace(",", "").strip()
    return float(sanitized)

def extract_printed_range(line: str):
    """
    Looks for printed reference interval in a single report line.
    Matches formats like '13.0 - 17.5', '150000 - 450000', '4.0-5.6', '< 200', '> 40'.
    """
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

def parse_report_text(raw_text: str):
    """
    Extracts recognized medical biomarkers, measured values, units, and ranges.
    Determines status against printed or documented default ranges.
    """
    lines = raw_text.splitlines()
    extracted_records = []
    seen_biomarkers = set()

    for line in lines:
        cleaned_line = line.strip()
        if not cleaned_line:
            continue

        for bio in REFERENCE_DB:
            if bio["id"] in seen_biomarkers:
                continue

            # Check if any alias matches this line
            matched = False
            for pat in bio["patterns"]:
                if re.search(pat, cleaned_line, re.IGNORECASE):
                    matched = True
                    break

            if not matched:
                continue

            # Look for numerical numbers on this line
            numbers = re.findall(r"\b\d+(?:,\d+)*(?:\.\d+)?\b", cleaned_line)
            if not numbers:
                continue

            # Check for printed range on this line
            p_min, p_max, p_label = extract_printed_range(cleaned_line)

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

            # Determine range boundaries and source
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

            # Evaluate status
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
                "Plain Explanation": bio.get("plain_note", "")
            })
            seen_biomarkers.add(bio["id"])

    return extracted_records

def extract_text_from_pdf(pdf_file) -> str:
    """Reads PDF pages safely using pdfplumber."""
    try:
        import pdfplumber
        extracted_pages = []
        with pdfplumber.open(io.BytesIO(pdf_file.read())) as pdf:
            if not pdf.pages:
                return ""
            for page in pdf.pages:
                text = page.extract_text()
                if text:
                    extracted_pages.append(text)
        return "\n".join(extracted_pages)
    except Exception as e:
        st.error(f"Error reading PDF: {e}")
        return ""

def is_tesseract_available() -> bool:
    """Checks whether the Tesseract OCR executable is available on the system."""
    return shutil.which("tesseract") is not None

def extract_text_from_image(image_file):
    """
    Performs OCR on PNG/JPG/JPEG images using pytesseract.
    Returns (success: bool, text_or_error: str).
    """
    if not is_tesseract_available():
        return False, (
            "Tesseract OCR is not installed or configured in the system PATH.\n\n"
            "Setup Instructions:\n"
            "• macOS: run `brew install tesseract`\n"
            "• Ubuntu/Debian / Cloud: run `sudo apt-get install tesseract-ocr`\n"
            "• Streamlit Community Cloud: add `tesseract-ocr` to `packages.txt` (already created in this project).\n\n"
            "Workaround: You can copy and paste the report text directly into the 'Paste Report Text' tab."
        )

    try:
        import pytesseract
        pil_image = Image.open(image_file)
        # Preprocessing: convert to RGB then grayscale with contrast adjustment
        if pil_image.mode != "RGB":
            pil_image = pil_image.convert("RGB")
        
        # Scale up slightly if resolution is low to improve character & period discernment
        w, h = pil_image.size
        if w < 1200:
            pil_image = pil_image.resize((w * 2, h * 2), Image.Resampling.LANCZOS)
            
        gray = pil_image.convert("L")
        # Moderate auto-contrast
        contrasted = ImageOps.autocontrast(gray)
        
        ocr_text = pytesseract.image_to_string(contrasted, config="--psm 6")
        if not ocr_text.strip():
            # Retry with default psm if sparse
            ocr_text = pytesseract.image_to_string(contrasted)
            
        if not ocr_text.strip():
            return False, "No readable text could be recognized from the uploaded image. Please ensure the image is clear and well-lit."
            
        return True, ocr_text
    except Exception as e:
        return False, f"OCR processing encountered an error: {str(e)}"

# ---------------------------------------------------------
# 4. Session State Management
# ---------------------------------------------------------
def init_session_state():
    if "history" not in st.session_state:
        st.session_state["history"] = []
    if "current_records" not in st.session_state:
        st.session_state["current_records"] = []
    if "current_meta" not in st.session_state:
        st.session_state["current_meta"] = None
    if "report_text_buffer" not in st.session_state:
        st.session_state["report_text_buffer"] = ""
    if "nav_view" not in st.session_state:
        st.session_state["nav_view"] = "Dashboard"

def add_report_to_history(source_name: str, source_type: str, records: list, raw_text: str):
    rep_id = f"REP-{len(st.session_state['history']) + 1:03d}"
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
        "raw_text": raw_text
    }
    st.session_state["history"].append(entry)
    st.session_state["current_records"] = records
    st.session_state["current_meta"] = entry
    return entry

# ---------------------------------------------------------
# 5. Dashboard View Components
# ---------------------------------------------------------
def render_dashboard_view():
    st.markdown("## 📊 Medical Intelligence Dashboard")
    st.caption("Automated biomarker screening, reference interval verification, and anomaly detection.")

    history = st.session_state["history"]
    total_reports = len(history)

    # Compute aggregate session metrics from actual data
    if total_reports > 0:
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
            <div class="metric-card-title">Reports Analyzed</div>
            <div class="metric-card-val">{total_reports}</div>
            <div class="metric-card-sub">Active session audits</div>
        </div>
        """, unsafe_allow_html=True)
    with c2:
        st.markdown(f"""
        <div class="metric-card">
            <div class="metric-card-title">Indicators Screened</div>
            <div class="metric-card-val">{total_indicators}</div>
            <div class="metric-card-sub">{total_normal} in reference range</div>
        </div>
        """, unsafe_allow_html=True)
    with c3:
        delta_color = "#DC2626" if total_flagged > 0 else "#0D9488"
        st.markdown(f"""
        <div class="metric-card">
            <div class="metric-card-title">Out-of-Range Flags</div>
            <div class="metric-card-val" style="color: {delta_color};">{total_flagged}</div>
            <div class="metric-card-sub">Requiring clinical attention</div>
        </div>
        """, unsafe_allow_html=True)
    with c4:
        st.markdown(f"""
        <div class="metric-card">
            <div class="metric-card-title">Review Needed</div>
            <div class="metric-card-val" style="color: #64748B;">{total_uncertain}</div>
            <div class="metric-card-sub">Atypical or non-standard format</div>
        </div>
        """, unsafe_allow_html=True)

    st.markdown("<br>", unsafe_allow_html=True)

    # Empty State Condition
    if total_reports == 0:
        st.markdown("""
        <div class="empty-state-box">
            <div style="font-size: 2.8rem; margin-bottom: 12px;">🩺</div>
            <h3 style="color: #0F1E36; margin-bottom: 8px;">No Clinical Reports Analyzed in this Session Yet</h3>
            <p style="color: #64748B; max-width: 580px; margin: 0 auto 20px auto; font-size: 0.95rem;">
                Upload a laboratory report (PDF, PNG, JPG), paste raw test text, or trigger the pre-configured
                synthetic demo report to populate real-time analytics and anomaly distributions.
            </p>
        </div>
        """, unsafe_allow_html=True)

        col_btn1, col_btn2 = st.columns([1, 1])
        with col_btn1:
            if st.button("🚀 Analyze New Report", use_container_width=True, type="primary"):
                st.session_state["nav_view"] = "Analyze Report"
                st.rerun()
        with col_btn2:
            if st.button("⚡ Quick-Start Sample Report (For Judges)", use_container_width=True):
                records = parse_report_text(SYNTHETIC_REPORT)
                add_report_to_history("Metropolis Diagnostic Sample (MET-98421)", "Synthetic Sample", records, SYNTHETIC_REPORT)
                st.rerun()
        return

    # Populated State: Charts & Latest Breakdown
    st.markdown("### 📈 Biomarker Distribution & Priority Alerts")
    chart_col, alert_col = st.columns([3, 2])

    with chart_col:
        st.markdown("##### Aggregate Status Breakdown")
        dist_data = pd.DataFrame({
            "Classification": ["Normal", "Out-of-Range (Flagged)", "Review Needed"],
            "Count": [total_normal, total_flagged, total_uncertain]
        })
        st.bar_chart(dist_data.set_index("Classification"), color="#0284C7", use_container_width=True)

    with alert_col:
        st.markdown("##### 🚨 Priority Anomalies (Latest Audit)")
        current_meta = st.session_state["current_meta"]
        latest_records = current_meta["records"] if current_meta else []
        flagged_items = [r for r in latest_records if r["Category"] == "flagged"]

        if flagged_items:
            for item in flagged_items[:4]:  # Show top 4
                badge = "🔺 High" if "High" in item["Status"] else "🔻 Low"
                st.markdown(f"""
                <div style="background-color: #FFFFFF; border-left: 4px solid #DC2626; border-radius: 6px; padding: 10px 14px; margin-bottom: 8px; border: 1px solid #E2E8F0; border-left-width: 4px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <strong>{item['Test Name']}</strong>
                        <span style="font-size: 0.8rem; font-weight: 600; color: #DC2626;">{badge}</span>
                    </div>
                    <div style="font-size: 0.85rem; color: #475569; margin-top: 2px;">
                        Value: <strong>{item['Measured Value']} {item['Unit']}</strong> (Ref: {item['Reference Range']} {item['Unit']})
                    </div>
                </div>
                """, unsafe_allow_html=True)
            if len(flagged_items) > 4:
                st.caption(f"+ {len(flagged_items) - 4} more flagged indicators")
        else:
            st.success("All indicators in the latest analyzed report are within normal reference ranges.")

    st.markdown("---")

    # Latest Analyzed Report Overview
    st.subheader(f"📑 Latest Report Audit: {st.session_state['current_meta']['source_name']}")
    st.caption(f"Audit ID: {st.session_state['current_meta']['id']} | Screened: {st.session_state['current_meta']['timestamp']} | Input Type: {st.session_state['current_meta']['source_type']}")

    latest_df = pd.DataFrame(st.session_state["current_records"])
    
    # Table presentation
    display_df = latest_df[["Test Name", "Measured Value", "Unit", "Reference Range", "Range Source", "Status"]].copy()
    st.dataframe(display_df, use_container_width=True, hide_index=True)

    # Action row
    btn_col1, btn_col2 = st.columns([1, 1])
    with btn_col1:
        if st.button("➕ Analyze Another Report", use_container_width=True, type="primary"):
            st.session_state["nav_view"] = "Analyze Report"
            st.rerun()
    with btn_col2:
        csv_buffer = io.StringIO()
        latest_df.to_csv(csv_buffer, index=False)
        st.download_button(
            label="📥 Download Structured Audit Report (CSV)",
            data=csv_buffer.getvalue(),
            file_name=f"orca_audit_{st.session_state['current_meta']['id']}.csv",
            mime="text/csv",
            use_container_width=True
        )

# ---------------------------------------------------------
# 6. Analyze Report View Components
# ---------------------------------------------------------
def render_analyze_view():
    st.markdown("## 🔬 Clinical Report Analyzer")
    st.caption("Upload a lab document (PDF, PNG, JPG, JPEG) or paste raw text to run automated indicator screening.")

    # Prominent Medical Disclaimer
    st.warning(
        "⚠️ **Clinical Screening Disclaimer**: Orca MedScan is an informational decision-support prototype. "
        "It does not provide diagnosis, clinical staging, or pharmaceutical prescriptions. Always corroborate findings with licensed healthcare providers."
    )

    # Input Method Tabs
    tab_upload, tab_paste, tab_sample = st.tabs([
        "📁 Upload Document / Image (PDF, PNG, JPG)",
        "📝 Paste Report Text",
        "⚡ 1-Click Synthetic Sample"
    ])

    extracted_text = ""
    source_label = "Direct Input"
    source_kind = "Text"

    with tab_upload:
        st.markdown("##### Supported Formats: `.pdf`, `.png`, `.jpg`, `.jpeg`")
        uploaded_file = st.file_uploader(
            "Select medical lab report file:",
            type=["pdf", "png", "jpg", "jpeg"],
            help="Upload digital PDF lab reports or scanned image panels (PNG, JPG, JPEG)."
        )

        if uploaded_file is not None:
            fname = uploaded_file.name.lower()
            source_label = uploaded_file.name

            if fname.endswith(".pdf"):
                source_kind = "PDF"
                with st.spinner("Extracting digital text layer from PDF..."):
                    pdf_text = extract_text_from_pdf(uploaded_file)
                    if pdf_text.strip():
                        extracted_text = pdf_text
                        st.success(f"✅ Successfully extracted text from `{uploaded_file.name}` ({len(pdf_text.splitlines())} lines).")
                    else:
                        st.error(
                            "⚠️ No text could be extracted from this PDF. It appears to be an unindexed scanned document. "
                            "Please convert the page to PNG/JPG or copy-paste the text directly into the 'Paste Report Text' tab."
                        )
            elif fname.endswith((".png", ".jpg", ".jpeg")):
                source_kind = "Image (OCR)"
                col_img, col_ocr_info = st.columns([1, 1])
                with col_img:
                    st.image(uploaded_file, caption=f"Uploaded: {uploaded_file.name}", use_container_width=True)
                with col_ocr_info:
                    with st.spinner("Running optical character recognition (OCR)..."):
                        success, result_text = extract_text_from_image(uploaded_file)
                        if success:
                            extracted_text = result_text
                            st.success("✅ OCR recognition complete.")
                        else:
                            st.error(f"❌ {result_text}")

    with tab_paste:
        pasted_text = st.text_area(
            "Paste complete laboratory report text below:",
            value=st.session_state.get("report_text_buffer", ""),
            height=200,
            placeholder="Paste raw blood panel, metabolic panel, or pathology text..."
        )
        if pasted_text.strip():
            extracted_text = pasted_text
            source_label = "Pasted Lab Text"
            source_kind = "Pasted Text"

    with tab_sample:
        st.markdown("##### Pre-configured Clinical Test Panel (John Doe, 46 Y / Male)")
        st.info("Contains Complete Blood Count (CBC), Metabolic Panel, Lipid Profile, and Renal/Hepatic Function tests with printed reference ranges.")
        if st.button("Load Sample Data Into Review Box", type="secondary"):
            st.session_state["report_text_buffer"] = SYNTHETIC_REPORT
            st.rerun()

        if st.session_state.get("report_text_buffer") == SYNTHETIC_REPORT:
            extracted_text = SYNTHETIC_REPORT
            source_label = "Metropolis Diagnostic Sample (MET-98421)"
            source_kind = "Synthetic Sample"

    st.markdown("---")

    # Expandable Preview & Verification (Allows editing before running analysis)
    if extracted_text:
        with st.expander("🔍 Inspect & Edit Extracted Text Before Analysis", expanded=True):
            st.caption("You can verify or make minor corrections to the extracted text below before triggering indicator parsing.")
            final_text = st.text_area("Report Text for Analysis:", value=extracted_text, height=180)
    else:
        final_text = ""

    # Primary Action Button
    col_run, col_clear = st.columns([2, 5])
    with col_run:
        run_analysis = st.button("🔬 Run Clinical Indicator Analysis", type="primary", use_container_width=True)
    with col_clear:
        if st.button("Clear Buffer", use_container_width=False):
            st.session_state["report_text_buffer"] = ""
            st.rerun()

    # Execution & Results Rendering
    if run_analysis:
        if not final_text.strip():
            st.warning("Please provide or upload report text before analyzing.")
            return

        with st.spinner("Screening indicators, cross-referencing reference intervals, and categorizing..."):
            records = parse_report_text(final_text)

        if not records:
            st.error(
                "❌ **No Recognized Biomarkers Found**\n\n"
                "The parser could not locate standard biomarkers (e.g., Hemoglobin, Fasting Glucose, Total Cholesterol, Creatinine). "
                "Ensure test labels are spelled correctly and numeric values are included."
            )
            return

        # Store in session state and history
        entry = add_report_to_history(source_label, source_kind, records, final_text)
        st.success(f"✅ Analysis complete! Identified {len(records)} clinical biomarkers.")

    # Display Active Analysis Results if records exist
    if st.session_state.get("current_records"):
        records = st.session_state["current_records"]
        df = pd.DataFrame(records)

        st.markdown("### 📊 Active Report Findings")
        
        # Summary row
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

        # Apply filtering
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
                        st.caption(f"Ref Range ({row['Range Source']})")
                    with r4:
                        st.markdown(badge_html, unsafe_allow_html=True)
                        st.caption("Classification")
                    st.divider()

        # Download CSV
        csv_buffer = io.StringIO()
        df.to_csv(csv_buffer, index=False)
        st.download_button(
            label="📥 Download Structured Report (CSV)",
            data=csv_buffer.getvalue(),
            file_name="orca_biomarker_report.csv",
            mime="text/csv",
            use_container_width=True
        )

# ---------------------------------------------------------
# 7. Report History View
# ---------------------------------------------------------
def render_history_view():
    st.markdown("## 📋 Session Audit History")
    st.caption("Audit log of all laboratory reports evaluated during this active session.")

    history = st.session_state["history"]
    if not history:
        st.info("No reports have been audited in this session yet. Upload a report in 'Analyze Report' to start tracking history.")
        return

    # History summary table
    summary_rows = []
    for h in history:
        summary_rows.append({
            "Audit ID": h["id"],
            "Timestamp": h["timestamp"],
            "Source / File Name": h["source_name"],
            "Format": h["source_type"],
            "Indicators Found": h["total_count"],
            "Out-of-Range": h["flagged_count"],
            "Normal": h["normal_count"]
        })
    st.dataframe(pd.DataFrame(summary_rows), use_container_width=True, hide_index=True)

    # Detailed report inspector
    st.markdown("---")
    st.subheader("🔍 Inspect Historical Audit")
    selected_id = st.selectbox("Select Audit ID to inspect:", [h["id"] for h in history])
    selected_report = next((h for h in history if h["id"] == selected_id), None)

    if selected_report:
        st.markdown(f"**Source**: {selected_report['source_name']} | **Screened At**: {selected_report['timestamp']}")
        st.dataframe(pd.DataFrame(selected_report["records"])[["Test Name", "Measured Value", "Unit", "Reference Range", "Status"]], use_container_width=True, hide_index=True)

    if st.button("🗑️ Clear Session Audit History"):
        st.session_state["history"] = []
        st.session_state["current_records"] = []
        st.session_state["current_meta"] = None
        st.rerun()

# ---------------------------------------------------------
# 8. About & Safety View
# ---------------------------------------------------------
def render_about_view():
    st.markdown("## ℹ️ About & Clinical Safety")
    
    st.markdown("""
    ### 🩺 Purpose & Scope
    **Orca MedScan** is a clinical screening and healthcare intelligence prototype designed for **Orcathon 2026** (Healthcare & MedTech track).
    Its mission is to assist patients and primary care clinicians in rapidly interpreting unstructured lab documents without privacy risks.

    ---

    ### 🔒 Privacy & Zero-API Architecture
    - **100% Local Processing**: All document parsing, regex extraction, and reference verification execute entirely on the local runtime.
    - **No Cloud Leakage**: No patient data, names, or values are transmitted to OpenAI, Google Cloud, or third-party servers.
    - **Zero Paid Dependencies**: Operates entirely using open-source Python, `pdfplumber`, `pytesseract`, and `pandas`.

    ---

    ### 📐 Reference Interval Methodology
    1. **Printed Laboratory Ranges (Highest Priority)**:
       Different clinical laboratories calibrate analyzers with specific reagents. Orca MedScan automatically detects and respects reference ranges explicitly printed in the report.
    2. **Documented Adult Clinical Ranges (Fallback)**:
       When a report omits reference intervals, Orca MedScan applies standard adult clinical reference guidelines and explicitly labels the source as `Standard Adult Reference`.
    3. **Conservative Classification**:
       Results are strictly classified as `Normal`, `Potentially High`, `Potentially Low`, or `Review Needed`. The system deliberately avoids speculative clinical diagnoses.

    ---

    ### ⚠️ Medical Disclaimer
    *This application is an educational and screening prototype. It does not provide medical diagnoses, treatment plans, or clinical triaging. Patients should consult licensed healthcare providers for diagnostic interpretation.*
    """)

# ---------------------------------------------------------
# 9. Main Application Controller
# ---------------------------------------------------------
def main():
    init_session_state()

    # Sidebar Navigation & Branding
    with st.sidebar:
        st.title("🩺 Orca MedScan")
        st.caption("Clinical Intelligence & Report Screening")
        st.markdown("---")

        nav_selection = st.radio(
            "Navigate",
            ["Dashboard", "Analyze Report", "Report History", "About & Safety"],
            index=["Dashboard", "Analyze Report", "Report History", "About & Safety"].index(st.session_state["nav_view"])
        )
        st.session_state["nav_view"] = nav_selection

        st.markdown("---")
        st.subheader("⚡ Quick-Start")
        if st.button("Load Sample Report (1-Click)", use_container_width=True, type="primary"):
            records = parse_report_text(SYNTHETIC_REPORT)
            add_report_to_history("Metropolis Diagnostic Sample (MET-98421)", "Synthetic Sample", records, SYNTHETIC_REPORT)
            st.session_state["nav_view"] = "Dashboard"
            st.rerun()

        st.markdown("---")
        history_len = len(st.session_state["history"])
        st.caption(f"Session Audits: **{history_len}** reports")
        
        # OCR engine status indicator
        tess_status = "Available (Local)" if is_tesseract_available() else "Not Installed (Text/PDF only)"
        st.caption(f"OCR Engine: **{tess_status}**")

    # Render selected view
    if st.session_state["nav_view"] == "Dashboard":
        render_dashboard_view()
    elif st.session_state["nav_view"] == "Analyze Report":
        render_analyze_view()
    elif st.session_state["nav_view"] == "Report History":
        render_history_view()
    elif st.session_state["nav_view"] == "About & Safety":
        render_about_view()

if __name__ == "__main__":
    main()
