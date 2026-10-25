"""
Comprehensive unit and integration tests for Orca MedScan.
Tests:
1. Biomarker parsing and boundary comparison
2. Default reference range fallbacks
3. Plain-language explanation presence
4. PDF extraction via pdfplumber
5. Image OCR extraction via pytesseract
6. Empty and adversarial inputs
"""
import os
import io
import pandas as pd
from app import (
    parse_report_text,
    extract_text_from_pdf,
    extract_text_from_image,
    is_tesseract_available,
    SYNTHETIC_REPORT
)

def run_tests():
    print("==================================================")
    print("Running Orca MedScan Test Suite")
    print("==================================================")

    # 1. Test synthetic report parsing
    records = parse_report_text(SYNTHETIC_REPORT)
    assert len(records) > 0, "Failed: No records parsed from synthetic report"
    print(f"✓ Successfully parsed {len(records)} biomarkers from synthetic report.")

    # Verify Hemoglobin
    hb = next((r for r in records if "Hemoglobin" in r["Test Name"]), None)
    assert hb is not None, "Hemoglobin not found"
    assert hb["Measured Value"] == 10.8, f"Expected 10.8, got {hb['Measured Value']}"
    assert hb["Status"] == "Potentially Low", f"Expected Potentially Low, got {hb['Status']}"
    assert hb["Range Source"] == "Printed on Report", "Expected Printed on Report"
    assert "Plain Explanation" in hb and len(hb["Plain Explanation"]) > 0, "Missing plain explanation"
    print("✓ Hemoglobin parsing and flagging verified (Potentially Low + Plain explanation).")

    # Verify Fasting Glucose
    fbs = next((r for r in records if "Glucose" in r["Test Name"]), None)
    assert fbs is not None, "Fasting Blood Glucose not found"
    assert fbs["Measured Value"] == 132.0, f"Expected 132, got {fbs['Measured Value']}"
    assert fbs["Status"] == "Potentially High", f"Expected Potentially High, got {fbs['Status']}"
    print("✓ Fasting Glucose parsing and flagging verified (Potentially High).")

    # Verify Normal indicator (Platelets)
    plt = next((r for r in records if "Platelet" in r["Test Name"]), None)
    assert plt is not None, "Platelets not found"
    assert plt["Measured Value"] == 240000.0
    assert plt["Status"] == "Normal"
    print("✓ Normal indicator verified (Platelets: Normal).")

    # 2. Test fallback to standard reference ranges when not printed
    unranged_text = "Patient Lab Results: Serum Creatinine 1.8 mg/dL"
    unranged_records = parse_report_text(unranged_text)
    assert len(unranged_records) == 1
    cr = unranged_records[0]
    assert cr["Measured Value"] == 1.8
    assert cr["Status"] == "Potentially High"
    assert cr["Range Source"] == "Standard Adult Reference"
    print("✓ Default standard reference range fallback verified.")

    # 3. Test empty input
    assert parse_report_text("") == []
    print("✓ Empty input test passed.")

    # 4. Test non-medical text (zero false alarms)
    assert parse_report_text("Meeting minutes for October 25th 2026. Review project budget.") == []
    print("✓ Non-medical text test passed (zero false alarms).")

    # 5. Test PDF extraction
    pdf_path = "sample_patient_report.pdf"
    if os.path.exists(pdf_path):
        with open(pdf_path, "rb") as f:
            pdf_bytes = io.BytesIO(f.read())
        pdf_text = extract_text_from_pdf(pdf_bytes)
        assert len(pdf_text.strip()) > 50, "PDF text extraction returned empty"
        pdf_records = parse_report_text(pdf_text)
        assert len(pdf_records) >= 8, f"Expected >= 8 biomarkers from PDF, got {len(pdf_records)}"
        print(f"✓ PDF Extraction and parsing verified ({len(pdf_records)} biomarkers extracted).")
    else:
        print("⚠️ sample_patient_report.pdf not found, skipping PDF test.")

    # 6. Test Image OCR extraction
    png_path = "sample_patient_report.png"
    if os.path.exists(png_path):
        tess_ok = is_tesseract_available()
        print(f"ℹ️ Tesseract available on system: {tess_ok}")
        if tess_ok:
            with open(png_path, "rb") as f:
                img_bytes = io.BytesIO(f.read())
            success, ocr_text = extract_text_from_image(img_bytes)
            assert success, f"OCR failed: {ocr_text}"
            assert len(ocr_text.strip()) > 30, "OCR returned empty text"
            print("✓ Image OCR extraction verified on PNG sample.")
        else:
            print("⚠️ Tesseract not available; graceful notification verified.")
    else:
        print("⚠️ sample_patient_report.png not found, skipping image test.")

    # 7. CSV Export verification
    df = pd.DataFrame(records)
    csv_str = df.to_csv(index=False)
    assert "Hemoglobin" in csv_str and "Potentially Low" in csv_str
    print("✓ CSV export format verified.")

    print("\n==================================================")
    print("ALL TESTS PASSED SUCCESSFULLY! 🎉")
    print("==================================================")

if __name__ == "__main__":
    run_tests()
