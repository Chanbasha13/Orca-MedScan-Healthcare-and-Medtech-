"""
Unit tests for the core medical parser logic.
"""
from app import parse_report_text, SYNTHETIC_REPORT

def run_tests():
    print("Testing core medical report parser...")

    # 1. Test synthetic report parsing
    records = parse_report_text(SYNTHETIC_REPORT)
    assert len(records) > 0, "Failed: No records parsed from synthetic report"
    print(f"✓ Successfully parsed {len(records)} biomarkers from synthetic report.")

    # Convert to lookup dict
    results = {r["Test Name"]: r for r in records}

    # Verify Hemoglobin
    hb = next((r for r in records if "Hemoglobin" in r["Test Name"]), None)
    assert hb is not None, "Hemoglobin not found"
    assert hb["Measured Value"] == 10.8, f"Expected 10.8, got {hb['Measured Value']}"
    assert hb["Status"] == "Potentially Low", f"Expected Potentially Low, got {hb['Status']}"
    assert hb["Range Source"] == "Printed on Report", "Expected Printed on Report"
    print("✓ Hemoglobin parsing and flagging verified (Potentially Low).")

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

    # 4. Test non-medical text
    assert parse_report_text("Meeting minutes for October 25th 2026. Review budget.") == []
    print("✓ Non-medical text test passed (zero false alarms).")

    print("\nALL TESTS PASSED SUCCESSFULLY! 🎉")

if __name__ == "__main__":
    run_tests()
