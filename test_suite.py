"""
Orca MedScan — Comprehensive Automated Test Suite (14 Verifications)
Covers all requirements from Phase 8 + Regression Test for OCR WebP extraction.
"""
import io
import os
import pandas as pd
from app import (
    parse_report_text,
    parse_report_with_diagnostics,
    extract_text_from_pdf,
    extract_text_from_image,
    is_tesseract_available,
    generate_pdf_audit_report,
    SYNTHETIC_REPORT
)

def run_all_tests():
    print("=" * 60)
    print("ORCA MEDSCAN COMPREHENSIVE TEST SUITE")
    print("=" * 60)

    # -------------------------------------------------------------
    # Test 1: Existing Digital PDF Sample
    # -------------------------------------------------------------
    print("\n[Test 1] Digital PDF Extraction (sample_patient_report.pdf)...")
    with open("sample_patient_report.pdf", "rb") as f:
        pdf_bytes = io.BytesIO(f.read())
    success, pdf_text, method, pages = extract_text_from_pdf(pdf_bytes)
    assert success, f"PDF extraction failed: {pdf_text}"
    assert method == "Digital PDF Stream", f"Expected Digital PDF Stream, got {method}"
    pdf_records = parse_report_text(pdf_text)
    assert len(pdf_records) >= 8, f"Expected >= 8 biomarkers, got {len(pdf_records)}"
    print(f"✓ Passed: Digital PDF processed ({len(pdf_records)} biomarkers extracted via {method}).")

    # -------------------------------------------------------------
    # Test 2: PNG and JPG Image Samples
    # -------------------------------------------------------------
    print("\n[Test 2] PNG and JPG Image OCR...")
    with open("sample_patient_report.png", "rb") as f:
        png_bytes = io.BytesIO(f.read())
    success, png_text, detected_fmt = extract_text_from_image(png_bytes)
    assert success, f"PNG OCR failed: {png_text}"
    assert "PNG" in detected_fmt
    png_records = parse_report_text(png_text)
    assert len(png_records) >= 8, f"Expected >= 8 biomarkers from PNG, got {len(png_records)}"
    print(f"✓ Passed: PNG OCR extracted {len(png_records)} biomarkers (format: {detected_fmt}).")

    # -------------------------------------------------------------
    # Test 3: WEBP Image Sample
    # -------------------------------------------------------------
    print("\n[Test 3] WEBP Image OCR (sample_patient_report.webp)...")
    with open("sample_patient_report.webp", "rb") as f:
        webp_bytes = io.BytesIO(f.read())
    success, webp_text, detected_fmt = extract_text_from_image(webp_bytes)
    assert success, f"WEBP OCR failed: {webp_text}"
    assert "WEBP" in detected_fmt
    webp_records = parse_report_text(webp_text)
    assert len(webp_records) >= 8, f"Expected >= 8 biomarkers from WEBP, got {len(webp_records)}"
    print(f"✓ Passed: WEBP OCR extracted {len(webp_records)} biomarkers (format: {detected_fmt}).")

    # -------------------------------------------------------------
    # Test 4: BMP and TIFF Samples
    # -------------------------------------------------------------
    print("\n[Test 4] BMP and TIFF Image OCR...")
    with open("sample_patient_report.bmp", "rb") as f:
        bmp_bytes = io.BytesIO(f.read())
    success_bmp, bmp_text, fmt_bmp = extract_text_from_image(bmp_bytes)
    assert success_bmp, f"BMP OCR failed: {bmp_text}"
    assert "BMP" in fmt_bmp

    with open("sample_patient_report.tiff", "rb") as f:
        tiff_bytes = io.BytesIO(f.read())
    success_tiff, tiff_text, fmt_tiff = extract_text_from_image(tiff_bytes)
    assert success_tiff, f"TIFF OCR failed: {tiff_text}"
    assert "TIFF" in fmt_tiff
    print(f"✓ Passed: Both BMP and TIFF formats verified successfully.")

    # -------------------------------------------------------------
    # Test 5: Scanned PDF Requiring OCR Fallback
    # -------------------------------------------------------------
    print("\n[Test 5] Scanned PDF with OCR Fallback (scanned_report.pdf)...")
    with open("scanned_report.pdf", "rb") as f:
        scanned_pdf_bytes = io.BytesIO(f.read())
    success_scanned, scanned_text, method_scanned, pages_scanned = extract_text_from_pdf(scanned_pdf_bytes)
    assert success_scanned, f"Scanned PDF OCR failed: {scanned_text}"
    assert "OCR" in method_scanned, f"Expected OCR in method, got {method_scanned}"
    scanned_records = parse_report_text(scanned_text)
    assert len(scanned_records) >= 8, f"Expected >= 8 biomarkers from scanned PDF, got {len(scanned_records)}"
    print(f"✓ Passed: Scanned PDF automatically triggered OCR ({method_scanned}, {len(scanned_records)} biomarkers).")

    # -------------------------------------------------------------
    # Test 6: Common Biomarker Aliases & Abbreviations
    # -------------------------------------------------------------
    print("\n[Test 6] Biomarker Aliases and Abbreviations...")
    alias_text = """
    HGB: 14.5 g/dL
    WBC: 6500 cells/mcL
    TLC: 6800 /mcL
    RBC: 4.8 mil/mcL
    PLT: 250000 /mcL
    FBS: 95 mg/dL
    HbA1c: 5.2 %
    TC: 180 mg/dL
    HDL: 48 mg/dL
    LDL: 90 mg/dL
    TG: 120 mg/dL
    Creatinine: 0.9 mg/dL
    BUN: 14 mg/dL
    Blood Urea: 22 mg/dL
    SGPT: 28 U/L
    ALT: 30 U/L
    AST: 25 U/L
    TSH: 2.1 mIU/L
    """
    records_alias, diag_alias = parse_report_with_diagnostics(alias_text)
    found_names = {r["Test Name"] for r in records_alias}
    expected_core = [
        "Hemoglobin (Hb)",
        "White Blood Cell Count (WBC / TLC)",
        "Red Blood Cell Count (RBC)",
        "Platelet Count",
        "Fasting Blood Glucose (Sugar)",
        "Glycated Hemoglobin (HbA1c)",
        "Total Cholesterol",
        "HDL Cholesterol ('Good' Cholesterol)",
        "LDL Cholesterol ('Bad' Cholesterol)",
        "Triglycerides",
        "Serum Creatinine",
        "Blood Urea Nitrogen (BUN) / Blood Urea",
        "ALT / SGPT (Liver Enzyme)",
        "AST / SGOT (Liver Enzyme)",
        "Thyroid Stimulating Hormone (TSH)"
    ]
    for exp in expected_core:
        assert exp in found_names, f"Alias test missing: {exp}"
    print(f"✓ Passed: All standard clinical abbreviations (HGB, TLC, PLT, FBS, TC, TG, BUN, etc.) successfully resolved.")

    # -------------------------------------------------------------
    # Test 7: Decimal Values, Attached Units & Printed Flags
    # -------------------------------------------------------------
    print("\n[Test 7] Numerical Precision, Attached Units & Printed Flags...")
    tricky_text = """
    Hemoglobin:13.5g/dL (12.0 - 16.0)
    Platelet Count: 240,000 /mcL (150,000 - 450,000)
    Fasting Blood Sugar: 145 H mg/dL (70-99)
    Serum Creatinine: 1.4 High mg/dL (0.6 - 1.2)
    HbA1c: 6.8% (4.0-5.6)
    """
    records_tricky = parse_report_text(tricky_text)
    res_dict = {r["Test Name"]: r for r in records_tricky}

    assert res_dict["Hemoglobin (Hb)"]["Measured Value"] == 13.5
    assert res_dict["Platelet Count"]["Measured Value"] == 240000.0
    assert res_dict["Fasting Blood Glucose (Sugar)"]["Measured Value"] == 145.0
    assert res_dict["Fasting Blood Glucose (Sugar)"]["Status"] == "Potentially High"
    assert res_dict["Serum Creatinine"]["Measured Value"] == 1.4
    assert res_dict["Serum Creatinine"]["Status"] == "Potentially High"
    assert res_dict["Glycated Hemoglobin (HbA1c)"]["Measured Value"] == 6.8
    print("✓ Passed: Decimal values (13.5g/dL), commas (240,000), and flags (H, High) parsed with 100% precision.")

    # -------------------------------------------------------------
    # Test 8: All-Normal Report
    # -------------------------------------------------------------
    print("\n[Test 8] All-Normal Report Testing...")
    normal_text = """
    Hemoglobin: 14.5 g/dL (13.0 - 17.5)
    Total Leucocyte Count: 6500 cells/mcL (4000 - 11000)
    Platelet Count: 250000 /mcL (150000 - 450000)
    Fasting Blood Sugar: 85 mg/dL (70 - 99)
    Total Cholesterol: 165 mg/dL (125 - 200)
    Serum Creatinine: 0.9 mg/dL (0.6 - 1.2)
    """
    records_norm = parse_report_text(normal_text)
    assert all(r["Status"] == "Normal" for r in records_norm)
    assert len(records_norm) == 6
    print("✓ Passed: All 6 biomarkers correctly evaluated as Normal (zero false alarms).")

    # -------------------------------------------------------------
    # Test 9: Mixed Out-of-Range Report
    # -------------------------------------------------------------
    print("\n[Test 9] Mixed Out-of-Range Report...")
    mixed_text = """
    Hemoglobin: 10.2 g/dL (13.0 - 17.5)
    Fasting Blood Sugar: 168 mg/dL (70 - 99)
    Platelet Count: 280000 /mcL (150000 - 450000)
    """
    records_mix = parse_report_text(mixed_text)
    hb_rec = next(r for r in records_mix if "Hemoglobin" in r["Test Name"])
    fbs_rec = next(r for r in records_mix if "Glucose" in r["Test Name"])
    plt_rec = next(r for r in records_mix if "Platelet" in r["Test Name"])

    assert hb_rec["Status"] == "Potentially Low"
    assert fbs_rec["Status"] == "Potentially High"
    assert plt_rec["Status"] == "Normal"
    print("✓ Passed: High, Low, and Normal statuses clearly distinguished.")

    # -------------------------------------------------------------
    # Test 10: Unknown Labels & Adversarial Non-Medical Text
    # -------------------------------------------------------------
    print("\n[Test 10] Unknown Labels & Adversarial Non-Medical Text...")
    unrelated_text = "Board Meeting Agenda. Financial Quarter 3 summary. Revenue: $4,500,000."
    rec_unrelated, diag_unrelated = parse_report_with_diagnostics(unrelated_text)
    assert len(rec_unrelated) == 0

    candidate_text = "Vitamin D3: 18.5 ng/mL (30.0 - 100.0)"
    rec_cand, diag_cand = parse_report_with_diagnostics(candidate_text)
    assert len(rec_cand) == 0
    assert len(diag_cand["unrecognized_candidates"]) > 0
    print("✓ Passed: Unrelated text yielded zero false alarms; unknown test captured in candidate diagnostics.")

    # -------------------------------------------------------------
    # Test 11: Corrupt and Unsupported Files
    # -------------------------------------------------------------
    print("\n[Test 11] Corrupt and Unsupported Files Handling...")
    corrupt_bytes = io.BytesIO(b"NOT_A_VALID_FILE_CONTENTS_XYZ123")
    success_img, err_img, _ = extract_text_from_image(corrupt_bytes)
    assert not success_img

    corrupt_pdf_bytes = io.BytesIO(b"%PDF-1.4 corrupt data dummy")
    success_pdf, err_pdf, _, _ = extract_text_from_pdf(corrupt_pdf_bytes)
    assert not success_pdf
    print("✓ Passed: Corrupt files handled gracefully without unhandled exceptions.")

    # -------------------------------------------------------------
    # Test 12: Empty Input
    # -------------------------------------------------------------
    print("\n[Test 12] Empty Input Handling...")
    assert parse_report_text("") == []
    assert parse_report_text("   \n\n  ") == []
    print("✓ Passed: Empty inputs safely return empty results.")

    # -------------------------------------------------------------
    # Test 13: Export Generation (CSV & PDF Audit Report)
    # -------------------------------------------------------------
    print("\n[Test 13] Export Generation (CSV & PDF Audit Report)...")
    meta = {
        "id": "AUDIT-001",
        "source_name": "Benchmark Panel",
        "source_type": "Synthetic"
    }
    sample_records = parse_report_text(SYNTHETIC_REPORT)
    df = pd.DataFrame(sample_records)
    csv_str = df.to_csv(index=False)
    assert "Hemoglobin" in csv_str and "Potentially Low" in csv_str

    pdf_bytes = generate_pdf_audit_report(meta, sample_records)
    assert len(pdf_bytes) > 500
    assert pdf_bytes.startswith(b"%PDF")
    print(f"✓ Passed: CSV export and ReportLab PDF audit summary generated successfully ({len(pdf_bytes)} bytes).")

    # -------------------------------------------------------------
    # Test 14: Regression Test for Realistic 17-Line OCR WebP Output
    # -------------------------------------------------------------
    print("\n[Test 14] Regression Test: Realistic 17-line OCR WebP with joined words and acronyms...")
    failing_webp_sim = """PATIENT REPORT
Alex Morgan 34Y F
ID: W-9912 2026-10-25
---------------------
FPG: 105 mg/dL (70-99)
HGB(Hemoglobin) 14.2 g/dL (13.0-17.5)
TLC: 7.2 x10^3/uL
PLT(PlateletCount) 210 x10^3/uL
TotalCholesterol: 218 mg/dL
HDL-C: 45 mg/dL
LDL-C: 142 mg/dL
Trigs: 165 mg/dL
SerumCreatinine: 0.85 mg/dL
BloodUrea: 24 mg/dL
SGPT/ALT: 32 U/L
TSH: 2.45 uIU/mL"""

    records_reg, diag_reg = parse_report_with_diagnostics(failing_webp_sim)
    assert len(records_reg) >= 10, f"Expected >= 10 biomarkers recognized in regression test, got {len(records_reg)}"
    print(f"✓ Passed: Regression test verified ({len(records_reg)} biomarkers recognized from realistic 17-line layout).")

    # -------------------------------------------------------------
    # Test 15: Local Enclave Authentication (Evaluator Login & Rejection)
    # -------------------------------------------------------------
    print("\n[Test 15] Local Enclave Authentication & PBKDF2 Hashing...")
    from auth import (
        init_auth_vault,
        authenticate_user,
        DEFAULT_EVALUATOR_EMAIL,
        DEFAULT_EVALUATOR_PASS
    )
    init_auth_vault()
    ok, msg, udata = authenticate_user(DEFAULT_EVALUATOR_EMAIL, DEFAULT_EVALUATOR_PASS)
    assert ok, f"Evaluator login failed: {msg}"
    assert udata["email"] == DEFAULT_EVALUATOR_EMAIL
    assert udata["role"] == "Lead Clinical Evaluator"

    # Verify wrong password rejection
    bad_ok, bad_msg, _ = authenticate_user(DEFAULT_EVALUATOR_EMAIL, "WrongPassword!")
    assert not bad_ok, "Expected bad password rejection"
    print("✓ Passed: Enclave authenticated evaluator credentials and strictly rejected invalid passwords.")

    # -------------------------------------------------------------
    # Test 16: Practitioner Registration & Password Validation
    # -------------------------------------------------------------
    print("\n[Test 16] Practitioner Registration & Password Validation...")
    from auth import register_user, validate_email, validate_password_strength
    
    assert validate_email("doctor@hospital.org") is True
    assert validate_email("not-an-email") is False
    
    val_ok, _ = validate_password_strength("weak")
    assert not val_ok
    val_ok2, _ = validate_password_strength("ValidPass2026!")
    assert val_ok2

    test_doc = f"qa_test_{os.getpid()}@clinic.org"
    reg_ok, reg_msg = register_user(test_doc, "SecurePass2026!", "SecurePass2026!")
    assert reg_ok, f"Registration failed: {reg_msg}"
    
    login_ok, _, doc_data = authenticate_user(test_doc, "SecurePass2026!")
    assert login_ok, "Login for newly registered practitioner failed"
    assert doc_data["email"] == test_doc
    print("✓ Passed: Account registration, password complexity validation, and session auth verified.")

    print("\n" + "=" * 60)
    print("ALL 16 AUTOMATED TESTS PASSED WITH 100% SUCCESS! 🎉")
    print("=" * 60)

if __name__ == "__main__":
    run_all_tests()
