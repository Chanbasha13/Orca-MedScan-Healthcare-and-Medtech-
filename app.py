"""
Medical Report Analyzer (Orcathon 2026 - Healthcare & MedTech)
A reliable, transparent screening tool to extract biomarkers, compare against reference ranges,
and flag potentially abnormal health indicators without paid APIs.
"""

import re
import io
import pandas as pd
import streamlit as st

# Configure page
st.set_page_config(
    page_title="Medical Report Analyzer",
    page_icon="🩺",
    layout="wide",
    initial_sidebar_state="expanded"
)

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
        "desc": "Carries oxygen throughout the body. Levels depend on age, sex, and hydration."
    },
    {
        "id": "wbc",
        "name": "White Blood Cell Count (WBC / TLC)",
        "patterns": [r"\bwhite blood cell(?:s)?\b", r"\bwbc\b", r"\btotal leucocyte count\b", r"\btlc\b"],
        "unit": "cells/mcL",
        "min": 4000.0,
        "max": 11000.0,
        "desc": "Key component of immune system; can fluctuate with infection, stress, or inflammation."
    },
    {
        "id": "rbc",
        "name": "Red Blood Cell Count (RBC)",
        "patterns": [r"\bred blood cell(?:s)?\b", r"\brbc(?:\s+count)?\b"],
        "unit": "mil/mcL",
        "min": 4.0,
        "max": 5.9,
        "desc": "Total count of oxygen-carrying erythrocytes."
    },
    {
        "id": "platelets",
        "name": "Platelet Count",
        "patterns": [r"\bplatelet(?:s)?(?:\s+count)?\b", r"\bplt\b"],
        "unit": "/mcL",
        "min": 150000.0,
        "max": 450000.0,
        "desc": "Blood cell fragments essential for normal clotting."
    },
    {
        "id": "glucose_fasting",
        "name": "Fasting Blood Glucose (Sugar)",
        "patterns": [r"\bfasting (?:blood )?(?:sugar|glucose)\b", r"\bfbs\b", r"\bglucose\s*,?\s*fasting\b"],
        "unit": "mg/dL",
        "min": 70.0,
        "max": 99.0,
        "desc": "Blood glucose level after an overnight fast (minimum 8 hours)."
    },
    {
        "id": "glucose_pp",
        "name": "Post-Prandial Blood Glucose (PPBS)",
        "patterns": [r"\bpost[\s-]prandial (?:blood )?(?:sugar|glucose)\b", r"\bppbs\b", r"\bglucose\s*,?\s*pp\b"],
        "unit": "mg/dL",
        "min": 70.0,
        "max": 140.0,
        "desc": "Blood sugar measured approximately 2 hours after a meal."
    },
    {
        "id": "hba1c",
        "name": "Glycated Hemoglobin (HbA1c)",
        "patterns": [r"\bhba1c\b", r"\bglycated hemo(?:a)?globin\b", r"\bhaemoglobin a1c\b"],
        "unit": "%",
        "min": 4.0,
        "max": 5.6,
        "desc": "Reflects average blood sugar levels over the past 2 to 3 months."
    },
    {
        "id": "cholesterol",
        "name": "Total Cholesterol",
        "patterns": [r"\btotal cholesterol\b", r"\bserum cholesterol\b"],
        "unit": "mg/dL",
        "min": 125.0,
        "max": 200.0,
        "desc": "Total circulating blood lipid (desirable upper target is generally < 200 mg/dL)."
    },
    {
        "id": "hdl",
        "name": "HDL Cholesterol ('Good' Cholesterol)",
        "patterns": [r"\bhdl(?:\s+cholesterol)?\b", r"\bhigh density lipoprotein\b"],
        "unit": "mg/dL",
        "min": 40.0,
        "max": 90.0,
        "desc": "Helps remove excess cholesterol; higher levels typically preferred."
    },
    {
        "id": "ldl",
        "name": "LDL Cholesterol ('Bad' Cholesterol)",
        "patterns": [r"\bldl(?:\s+cholesterol)?\b", r"\blow density lipoprotein\b"],
        "unit": "mg/dL",
        "min": 50.0,
        "max": 100.0,
        "desc": "Optimal target is typically below 100 mg/dL for low-to-moderate risk profiles."
    },
    {
        "id": "triglycerides",
        "name": "Triglycerides",
        "patterns": [r"\btriglyceride(?:s)?\b", r"\btg\b"],
        "unit": "mg/dL",
        "min": 40.0,
        "max": 150.0,
        "desc": "Main form of stored fat in the body. Normal target is below 150 mg/dL."
    },
    {
        "id": "creatinine",
        "name": "Serum Creatinine",
        "patterns": [r"\b(?:serum )?creatinine\b"],
        "unit": "mg/dL",
        "min": 0.6,
        "max": 1.2,
        "desc": "Waste byproduct filtered by kidneys; elevated values can signal altered renal clearance."
    },
    {
        "id": "bun",
        "name": "Blood Urea Nitrogen (BUN) / Blood Urea",
        "patterns": [r"\bblood urea nitrogen\b", r"\bbun\b", r"\bblood urea\b"],
        "unit": "mg/dL",
        "min": 7.0,
        "max": 21.0,
        "desc": "Waste product from protein breakdown; monitored alongside creatinine for kidney health."
    },
    {
        "id": "alt_sgpt",
        "name": "ALT / SGPT (Liver Enzyme)",
        "patterns": [r"\bsgpt\b", r"\balt\b", r"\balanine aminotransferase\b"],
        "unit": "U/L",
        "min": 7.0,
        "max": 55.0,
        "desc": "Liver enzyme; transient elevations may occur with medications or cellular stress."
    },
    {
        "id": "ast_sgot",
        "name": "AST / SGOT (Liver Enzyme)",
        "patterns": [r"\bsgot\b", r"\bast\b", r"\baspartate aminotransferase\b"],
        "unit": "U/L",
        "min": 8.0,
        "max": 48.0,
        "desc": "Enzyme present in liver and muscle tissue."
    },
    {
        "id": "bilirubin_total",
        "name": "Bilirubin (Total)",
        "patterns": [r"\btotal bilirubin\b", r"\bbilirubin\s*,?\s*total\b"],
        "unit": "mg/dL",
        "min": 0.2,
        "max": 1.2,
        "desc": "Byproduct of red blood cell breakdown, processed by the liver."
    },
    {
        "id": "tsh",
        "name": "Thyroid Stimulating Hormone (TSH)",
        "patterns": [r"\btsh\b", r"\bthyroid stimulating hormone\b"],
        "unit": "mIU/L",
        "min": 0.4,
        "max": 4.5,
        "desc": "Pituitary hormone regulating thyroid function."
    },
    {
        "id": "uric_acid",
        "name": "Serum Uric Acid",
        "patterns": [r"\b(?:serum )?uric acid\b"],
        "unit": "mg/dL",
        "min": 3.5,
        "max": 7.2,
        "desc": "Formed from breakdown of purines; elevated levels linked to gout or metabolic stress."
    },
    {
        "id": "calcium",
        "name": "Serum Calcium",
        "patterns": [r"\b(?:serum )?calcium\b"],
        "unit": "mg/dL",
        "min": 8.5,
        "max": 10.5,
        "desc": "Vital for bone, nerve, and cardiovascular function."
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
# 3. Parsing & Extraction Engine
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
    # Look for interval min - max
    interval_match = re.search(r"(\d+(?:,\d+)*(?:\.\d+)?)\s*(?:-|to)\s*(\d+(?:,\d+)*(?:\.\d+)?)", line)
    if interval_match:
        try:
            low = clean_num_str(interval_match.group(1))
            high = clean_num_str(interval_match.group(2))
            if low <= high:
                return low, high, f"{low} - {high}"
        except Exception:
            pass

    # Look for '< max'
    less_match = re.search(r"<\s*(\d+(?:,\d+)*(?:\.\d+)?)", line)
    if less_match:
        try:
            high = clean_num_str(less_match.group(1))
            return 0.0, high, f"< {high}"
        except Exception:
            pass

    # Look for '> min'
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
            # Matches: 10.8, 8200, 240000, 150,000, 6.8
            numbers = re.findall(r"\b\d+(?:,\d+)*(?:\.\d+)?\b", cleaned_line)
            if not numbers:
                continue

            # Check for printed range on this line
            p_min, p_max, p_label = extract_printed_range(cleaned_line)

            # Determine which number is the measured patient value
            measured_val = None
            if p_min is not None and p_max is not None:
                # If printed range exists, the measured value is usually the first number before the range
                # or a number that does not exactly equal the range bounds
                for num_str in numbers:
                    try:
                        val = clean_num_str(num_str)
                        # Skip if it is the printed min or printed max
                        if p_max != float("inf") and (abs(val - p_min) < 0.0001 or abs(val - p_max) < 0.0001):
                            continue
                        measured_val = val
                        break
                    except Exception:
                        continue
            else:
                # If no printed range, pick first valid numerical match
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
                "Clinical Context": bio["desc"]
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
            for idx, page in enumerate(pdf.pages):
                text = page.extract_text()
                if text:
                    extracted_pages.append(text)
        return "\n".join(extracted_pages)
    except Exception as e:
        st.error(f"Error reading PDF: {e}")
        return ""

# ---------------------------------------------------------
# 4. Streamlit User Interface
# ---------------------------------------------------------
def main():
    # Sidebar
    with st.sidebar:
        st.title("🩺 Orca MedScan")
        st.caption("Orcathon 2026 — Healthcare & MedTech Track")
        st.markdown("---")
        st.markdown(
            "**Purpose**:\n"
            "This application automatically parses medical lab reports, "
            "extracts known biomarkers, and flags indicators that fall outside "
            "reference ranges."
        )
        st.markdown("---")
        st.subheader("💡 Quick Test")
        if st.button("Load Sample Report (1-Click)", use_container_width=True, type="primary"):
            st.session_state["report_text"] = SYNTHETIC_REPORT
            st.session_state["input_mode"] = "Pasted Text"
            st.rerun()

        st.markdown("---")
        st.info(
            "🔒 **Privacy Guaranteed**\n"
            "Runs 100% locally. Zero data is transmitted to cloud APIs or external servers."
        )

    # Main Header
    st.title("Medical Report Indicator Analyzer")
    st.markdown(
        "Upload a digital PDF report or paste raw report text to extract biomarkers and detect values requiring clinical review."
    )

    # Prominent Disclaimer
    st.warning(
        "⚠️ **Medical Disclaimer**: This software is an informational screening tool built for demonstration and hackathon review. "
        "It does **not** provide clinical diagnosis, medical triage, or treatment guidance. Reference intervals vary across laboratories "
        "and patient demographics. Always consult a qualified healthcare professional."
    )

    # Input Method Selection
    input_choice = st.radio(
        "Choose Input Method:",
        ["Paste Report Text", "Upload Report PDF"],
        horizontal=True,
        index=0 if st.session_state.get("input_mode") != "Upload Report PDF" else 1
    )

    raw_text = ""

    if input_choice == "Paste Report Text":
        default_val = st.session_state.get("report_text", "")
        raw_text = st.text_area(
            "Paste lab report text below:",
            value=default_val,
            height=240,
            placeholder="Paste complete blood panel, lipid profile, or metabolic panel text here..."
        )
    else:
        uploaded_file = st.file_uploader(
            "Upload lab report PDF (standard digital format):",
            type=["pdf"],
            help="Upload a digital PDF generated by a laboratory or patient portal."
        )
        if uploaded_file is not None:
            with st.spinner("Extracting text from PDF..."):
                raw_text = extract_text_from_pdf(uploaded_file)
                if not raw_text.strip():
                    st.error(
                        "No readable text could be extracted from this PDF. "
                        "The document might be a scanned image without an embedded text layer. "
                        "Please copy-paste the text directly using the 'Paste Report Text' tab."
                    )

    # Action Button
    col_btn, col_clear = st.columns([1, 4])
    with col_btn:
        analyze_clicked = st.button("🔬 Analyze Report", type="primary", use_container_width=True)
    with col_clear:
        if st.button("Clear Input", use_container_width=False):
            st.session_state["report_text"] = ""
            st.rerun()

    # Process Analysis
    if analyze_clicked or (raw_text and st.session_state.get("report_text") == raw_text):
        if not raw_text.strip():
            st.warning("Please provide report text or upload a valid PDF file before analyzing.")
            return

        with st.spinner("Analyzing indicators and cross-referencing reference ranges..."):
            records = parse_report_text(raw_text)

        if not records:
            st.error(
                "❌ **No matching biomarkers recognized.**\n\n"
                "The parser could not locate standard biomarkers (e.g., Hemoglobin, Glucose, Cholesterol, Creatinine). "
                "Ensure your text includes standard test labels alongside their numeric values, or try the 1-Click Sample Report."
            )
            return

        # Metrics Overview
        df = pd.DataFrame(records)
        total_count = len(df)
        normal_count = len(df[df["Category"] == "normal"])
        flagged_count = len(df[df["Category"] == "flagged"])
        uncertain_count = len(df[df["Category"] == "uncertain"])

        st.markdown("### 📊 Analysis Summary")
        m1, m2, m3, m4 = st.columns(4)
        m1.metric("Total Indicators Found", total_count)
        m2.metric("Within Reference Range", normal_count)
        m3.metric("Flagged (Out of Range)", flagged_count, delta=f"{flagged_count} abnormal" if flagged_count > 0 else "0", delta_color="inverse")
        m4.metric("Uncertain / Manual Review", uncertain_count)

        # Filters
        st.markdown("---")
        filter_col, search_col = st.columns([2, 3])
        with filter_col:
            status_filter = st.selectbox(
                "Filter indicators by status:",
                ["Show All Indicators", "Show Only Flagged (Out of Range)", "Show Normal Only"]
            )
        with search_col:
            search_query = st.text_input("Search test by name:", placeholder="e.g. Glucose, Hemoglobin, LDL...")

        # Apply filter
        filtered_df = df.copy()
        if status_filter == "Show Only Flagged (Out of Range)":
            filtered_df = filtered_df[filtered_df["Category"] == "flagged"]
        elif status_filter == "Show Normal Only":
            filtered_df = filtered_df[filtered_df["Category"] == "normal"]

        if search_query.strip():
            filtered_df = filtered_df[filtered_df["Test Name"].str.contains(search_query.strip(), case=False, na=False)]

        # Display Results
        st.subheader("📑 Detailed Biomarker Breakdown")

        if filtered_df.empty:
            st.info("No records match the current filter criteria.")
        else:
            # Custom styled presentation
            for _, row in filtered_df.iterrows():
                status_val = row["Status"]
                if status_val == "Normal":
                    status_badge = "🟢 **Normal**"
                    border_color = "#28a745"
                elif "High" in status_val:
                    status_badge = "🔺 **Potentially High**"
                    border_color = "#dc3545"
                elif "Low" in status_val:
                    status_badge = "🔻 **Potentially Low**"
                    border_color = "#ffc107"
                else:
                    status_badge = "⚠️ **Review Needed**"
                    border_color = "#6c757d"

                with st.container():
                    c1, c2, c3, c4 = st.columns([3, 2, 2, 2])
                    with c1:
                        st.markdown(f"**{row['Test Name']}**")
                        st.caption(f"ℹ️ {row['Clinical Context']}")
                    with c2:
                        st.markdown(f"**{row['Measured Value']}** {row['Unit']}")
                        st.caption(f"Measured Result")
                    with c3:
                        st.markdown(f"{row['Reference Range']} {row['Unit']}")
                        st.caption(f"Range ({row['Range Source']})")
                    with c4:
                        st.markdown(status_badge)
                        st.caption(f"Classification")
                    st.divider()

        # Export findings as CSV
        csv_buffer = io.StringIO()
        df.to_csv(csv_buffer, index=False)
        st.download_button(
            label="📥 Download Structured Report (CSV)",
            data=csv_buffer.getvalue(),
            file_name="orca_medical_report_analysis.csv",
            mime="text/csv"
        )

        # Raw Extracted Text Viewer (for full transparency)
        with st.expander("🔍 View Raw Extracted Text from Report"):
            st.text(raw_text)

if __name__ == "__main__":
    main()
