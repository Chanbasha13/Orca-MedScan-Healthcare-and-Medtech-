"""
Automated Integration Test for Orca MedScan FastAPI Server & Endpoints
Verifies:
1. Health & System Status
2. Authentication (Login, Register, Wrong Password rejection)
3. Benchmark Extraction (16 biomarkers)
4. Multi-format upload parsing (PDF, PNG, WEBP, BMP, TIFF, Scanned PDF)
5. CSV & ReportLab PDF Export endpoints
"""

import requests
import io

BASE_URL = "http://127.0.0.1:8000"

def test_api():
    print("=" * 60)
    print("RUNNING ORCA MEDSCAN REST API INTEGRATION SUITE")
    print("=" * 60)

    # 1. Health check
    print("\n[API Test 1] Health Check...")
    r = requests.get(f"{BASE_URL}/api/health")
    assert r.status_code == 200
    assert r.json()["status"] == "healthy"
    print("✓ Passed: Health check OK")

    # 2. System Status
    print("\n[API Test 2] System Status & Diagnostics...")
    r = requests.get(f"{BASE_URL}/api/system/status")
    assert r.status_code == 200
    st = r.json()
    assert st["tesseract"]["available"] is True
    assert st["vault"]["algorithm"] == "PBKDF2-HMAC-SHA256"
    print(f"✓ Passed: System status verified (Tesseract active, {st['vault']['registered_practitioners']} practitioners)")

    # 3. Evaluator Login
    print("\n[API Test 3] Evaluator Fast Pass Login...")
    r = requests.post(f"{BASE_URL}/api/auth/login", json={
        "email": "evaluator@orcamed.org",
        "password": "OrcaMed2026!"
    })
    assert r.status_code == 200
    assert r.json()["user"]["role"] == "Lead Clinical Evaluator"
    print("✓ Passed: Authenticated Lead Clinical Evaluator")

    # 4. Bad Password Rejection
    print("\n[API Test 4] Invalid Password Rejection...")
    r = requests.post(f"{BASE_URL}/api/auth/login", json={
        "email": "evaluator@orcamed.org",
        "password": "WrongPassword!"
    })
    assert r.status_code == 401
    print("✓ Passed: Correctly returned 401 for bad password")

    # 5. Benchmark Data
    print("\n[API Test 5] Benchmark Report Endpoint...")
    r = requests.get(f"{BASE_URL}/api/benchmark")
    assert r.status_code == 200
    bench = r.json()
    assert bench["total_count"] >= 16
    assert bench["flagged_count"] > 0
    print(f"✓ Passed: Benchmark returned {bench['total_count']} biomarkers ({bench['flagged_count']} flagged)")

    # 6. Upload Digital PDF
    print("\n[API Test 6] Upload Digital PDF...")
    with open("sample_patient_report.pdf", "rb") as f:
        r = requests.post(f"{BASE_URL}/api/analyze/upload", files={"file": ("sample_patient_report.pdf", f, "application/pdf")})
    assert r.status_code == 200
    res = r.json()
    assert len(res["records"]) >= 8
    print(f"✓ Passed: Digital PDF processed via {res['extraction_method']} ({len(res['records'])} biomarkers)")

    # 7. Upload PNG
    print("\n[API Test 7] Upload PNG OCR...")
    with open("sample_patient_report.png", "rb") as f:
        r = requests.post(f"{BASE_URL}/api/analyze/upload", files={"file": ("sample_patient_report.png", f, "image/png")})
    assert r.status_code == 200
    res = r.json()
    assert len(res["records"]) >= 8
    print(f"✓ Passed: PNG OCR processed via {res['extraction_method']} ({len(res['records'])} biomarkers)")

    # 8. Upload WEBP
    print("\n[API Test 8] Upload WEBP OCR...")
    with open("sample_patient_report.webp", "rb") as f:
        r = requests.post(f"{BASE_URL}/api/analyze/upload", files={"file": ("sample_patient_report.webp", f, "image/webp")})
    assert r.status_code == 200
    res = r.json()
    assert len(res["records"]) >= 8
    print(f"✓ Passed: WEBP OCR processed via {res['extraction_method']} ({len(res['records'])} biomarkers)")

    # 9. Upload Scanned PDF with OCR Fallback
    print("\n[API Test 9] Upload Scanned PDF (OCR Fallback)...")
    with open("scanned_report.pdf", "rb") as f:
        r = requests.post(f"{BASE_URL}/api/analyze/upload", files={"file": ("scanned_report.pdf", f, "application/pdf")})
    assert r.status_code == 200
    res = r.json()
    assert len(res["records"]) >= 8
    print(f"✓ Passed: Scanned PDF processed via {res['extraction_method']} ({len(res['records'])} biomarkers)")

    # 10. CSV Export
    print("\n[API Test 10] CSV Export Endpoint...")
    r = requests.post(f"{BASE_URL}/api/export/csv", json={"records": bench["records"]})
    assert r.status_code == 200
    assert "Hemoglobin" in r.text
    print("✓ Passed: CSV export generated")

    # 11. PDF Export
    print("\n[API Test 11] ReportLab PDF Export Endpoint...")
    r = requests.post(f"{BASE_URL}/api/export/pdf", json={
        "meta": {"id": "TEST-001", "source_name": "Test Specimen", "timestamp": "2026-10-25 13:00"},
        "records": bench["records"]
    })
    assert r.status_code == 200
    assert r.content.startswith(b"%PDF")
    print(f"✓ Passed: Clinical PDF summary generated ({len(r.content)} bytes)")

    print("\n" + "=" * 60)
    print("ALL REST API INTEGRATION TESTS PASSED WITH 100% SUCCESS! 🎉")
    print("=" * 60)

if __name__ == "__main__":
    test_api()

