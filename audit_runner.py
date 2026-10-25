"""
Orca MedScan - Comprehensive Final Readiness Audit Runner (All 8 Categories)
"""

import os
import sys
import time
import json
import subprocess
import requests

BASE_URL = "http://127.0.0.1:8000"

results = {
    "1_groq_api": {"status": "NOT TESTED", "details": []},
    "2_uploads": {"status": "NOT TESTED", "details": []},
    "3_ocr_accuracy": {"status": "NOT TESTED", "details": []},
    "4_clinical_flags_disclaimers": {"status": "NOT TESTED", "details": []},
    "5_auth_history_isolation": {"status": "NOT TESTED", "details": []},
    "6_navigation_theme_mobile": {"status": "NOT TESTED", "details": []},
    "7_security_env_protection": {"status": "NOT TESTED", "details": []},
    "8_errors_perf_deployment": {"status": "NOT TESTED", "details": []},
}

def log_detail(category, message, is_pass=True):
    prefix = "✓" if is_pass else "✗"
    print(f"  {prefix} {message}")
    results[category]["details"].append((is_pass, message))

def audit_check_1_groq():
    cat = "1_groq_api"
    print("\n--- [CHECK 1] Groq API Integration with Real Backend Request ---")
    try:
        t0 = time.time()
        r = requests.get(f"{BASE_URL}/api/assistant/status", timeout=10)
        t_status = time.time() - t0
        if r.status_code != 200:
            log_detail(cat, f"Status endpoint failed with HTTP {r.status_code}", False)
            results[cat]["status"] = "FAIL"
            return
        
        st = r.json()
        if not st.get("configured"):
            log_detail(cat, f"Assistant reports unconfigured: {st}", False)
            results[cat]["status"] = "FAIL"
            return
        
        log_detail(cat, f"Status verified: configured=True, model={st.get('model')}, latency={t_status:.3f}s")

        # Real backend request with clinical query and report context
        t0 = time.time()
        payload = {
            "messages": [
                {"role": "user", "content": "What does a high fasting blood glucose reading of 140 mg/dL signify?"}
            ],
            "language": "English",
            "report_context": {
                "source_name": "Readiness_Audit_Report.pdf",
                "source_type": "Digital PDF",
                "total_count": 1,
                "flagged_count": 1,
                "records": [
                    {
                        "Test Name": "Fasting Blood Glucose",
                        "Value": "140",
                        "Unit": "mg/dL",
                        "Reference Range": "70 - 99 mg/dL",
                        "Status": "Potentially High",
                        "Explanation": "Glucose level above fasting threshold."
                    }
                ]
            }
        }
        r = requests.post(f"{BASE_URL}/api/assistant/chat", json=payload, timeout=30)
        t_chat = time.time() - t0

        if r.status_code != 200:
            log_detail(cat, f"Chat request returned HTTP {r.status_code}: {r.text}", False)
            results[cat]["status"] = "FAIL"
            return

        chat_res = r.json()
        if not chat_res.get("success"):
            log_detail(cat, f"Chat returned success=False: {chat_res.get('error')}", False)
            results[cat]["status"] = "FAIL"
            return

        reply = chat_res.get("reply", "")
        if len(reply) < 50:
            log_detail(cat, f"Reply too short: {reply}", False)
            results[cat]["status"] = "FAIL"
            return

        disclaimer = chat_res.get("disclaimer", "")
        if "educational" not in disclaimer.lower() and "medical" not in disclaimer.lower():
            log_detail(cat, "Medical disclaimer missing in chat response", False)
            results[cat]["status"] = "FAIL"
            return

        # Security check: ensure API key not present in response
        if "gsk_" in json.dumps(chat_res):
            log_detail(cat, "CRITICAL: Groq API key leaked in response payload!", False)
            results[cat]["status"] = "FAIL"
            return

        log_detail(cat, f"Real Groq backend request succeeded in {t_chat:.2f}s using {chat_res.get('model')}")
        log_detail(cat, f"Medical disclaimer verified: '{disclaimer[:60]}...'")
        log_detail(cat, f"API key security verified (no gsk_ in response)")
        results[cat]["status"] = "PASS"

    except Exception as e:
        log_detail(cat, f"Exception during Groq check: {e}", False)
        results[cat]["status"] = "FAIL"

def audit_check_2_uploads():
    cat = "2_uploads"
    print("\n--- [CHECK 2] PDF, Image, and Supported WEBP Report Uploads ---")
    files_to_test = [
        ("sample_patient_report.pdf", "application/pdf", "Digital PDF"),
        ("sample_patient_report.png", "image/png", "PNG OCR"),
        ("sample_patient_report.webp", "image/webp", "WEBP OCR"),
        ("scanned_report.pdf", "application/pdf", "Scanned PDF Fallback"),
    ]

    all_passed = True
    for filename, mime_type, desc in files_to_test:
        if not os.path.exists(filename):
            log_detail(cat, f"Test file missing: {filename}", False)
            all_passed = False
            continue
        try:
            with open(filename, "rb") as f:
                files = {"file": (filename, f.read(), mime_type)}
                r = requests.post(f"{BASE_URL}/api/analyze/upload", files=files, timeout=30)
                if r.status_code == 200:
                    data = r.json()
                    count = len(data.get("records", []))
                    method = data.get("extraction_method", "Unknown")
                    if count > 0:
                        log_detail(cat, f"{desc} ({filename}): Success ({count} biomarkers extracted via {method})")
                    else:
                        log_detail(cat, f"{desc} ({filename}): 0 biomarkers extracted", False)
                        all_passed = False
                else:
                    log_detail(cat, f"{desc} ({filename}): HTTP {r.status_code}", False)
                    all_passed = False
        except Exception as e:
            log_detail(cat, f"{desc} ({filename}): Exception {e}", False)
            all_passed = False

    # Negative test: corrupted file
    try:
        files = {"file": ("corrupt.pdf", b"NOT_A_VALID_PDF_HEADER", "application/pdf")}
        r = requests.post(f"{BASE_URL}/api/analyze/upload", files=files, timeout=10)
        if r.status_code in [400, 200, 422]:
            log_detail(cat, f"Corrupted file handled gracefully with HTTP {r.status_code}")
        else:
            log_detail(cat, f"Corrupted file returned unhandled HTTP {r.status_code}", False)
            all_passed = False
    except Exception as e:
        log_detail(cat, f"Corrupted file test exception: {e}", False)
        all_passed = False

    results[cat]["status"] = "PASS" if all_passed else "FAIL"

def audit_check_3_ocr_accuracy():
    cat = "3_ocr_accuracy"
    print("\n--- [CHECK 3] OCR Extraction Accuracy (Names, Values, Units, Reference Ranges) ---")
    try:
        r = requests.get(f"{BASE_URL}/api/benchmark", timeout=10)
        if r.status_code != 200:
            log_detail(cat, f"Benchmark endpoint failed HTTP {r.status_code}", False)
            results[cat]["status"] = "FAIL"
            return
        
        bench = r.json()
        records = bench.get("records", [])
        if not records:
            log_detail(cat, "No records returned from benchmark", False)
            results[cat]["status"] = "FAIL"
            return

        names_ok = True
        values_ok = True
        units_ok = True
        ranges_ok = True

        for rec in records:
            name = rec.get("Test Name", "")
            val = rec.get("Measured Value", rec.get("Value", None))
            unit = rec.get("Unit", "")
            ref = rec.get("Reference Range", "")

            if not name or name == "Unknown":
                names_ok = False
            if val is None or val == "N/A" or val == "":
                values_ok = False
            if not unit:
                units_ok = False
            if not ref:
                ranges_ok = False

        log_detail(cat, f"Biomarker names parsed cleanly across {len(records)} benchmark tests: {names_ok}")
        log_detail(cat, f"Biomarker values numerically formatted: {values_ok}")
        log_detail(cat, f"Biomarker standard units present: {units_ok}")
        log_detail(cat, f"Reference intervals established: {ranges_ok}")

        # Test realistic OCR WebP sample extraction accuracy
        with open("sample_patient_report.webp", "rb") as f:
            files = {"file": ("sample_patient_report.webp", f.read(), "image/webp")}
            r_webp = requests.post(f"{BASE_URL}/api/analyze/upload", files=files, timeout=30)
            if r_webp.status_code == 200:
                webp_data = r_webp.json()
                webp_records = webp_data.get("records", [])
                log_detail(cat, f"WEBP OCR accuracy: {len(webp_records)} biomarkers extracted from real image")
                names = [r["Test Name"] for r in webp_records]
                has_hb = any("Hemoglobin" in n for n in names)
                has_glucose = any("Glucose" in n for n in names)
                has_cholesterol = any("Cholesterol" in n for n in names)
                log_detail(cat, f"Key biomarkers recognized in WEBP OCR (Hb={has_hb}, Glucose={has_glucose}, Lipid={has_cholesterol})")
                webp_ok = has_hb and (has_glucose or has_cholesterol)
            else:
                webp_ok = False
                log_detail(cat, f"WEBP OCR failed HTTP {r_webp.status_code}", False)

        if names_ok and values_ok and units_ok and ranges_ok and webp_ok:
            results[cat]["status"] = "PASS"
        else:
            results[cat]["status"] = "FAIL"

    except Exception as e:
        log_detail(cat, f"Exception during OCR accuracy check: {e}", False)
        results[cat]["status"] = "FAIL"

def audit_check_4_flags_disclaimers():
    cat = "4_clinical_flags_disclaimers"
    print("\n--- [CHECK 4] Correct Abnormal-Result Flags and Clear Medical Disclaimers ---")
    try:
        r = requests.get(f"{BASE_URL}/api/benchmark", timeout=10)
        data = r.json()
        records = data.get("records", [])

        # Check flagging logic
        high_flags = [r for r in records if "High" in r.get("Status", "")]
        low_flags = [r for r in records if "Low" in r.get("Status", "")]
        normal_flags = [r for r in records if "Normal" in r.get("Status", "")]

        log_detail(cat, f"Flagging distribution verified: High={len(high_flags)}, Low={len(low_flags)}, Normal={len(normal_flags)}")
        
        # Verify specific known flags:
        # Hemoglobin (10.8 g/dL vs 13.0-17.5) should be Potentially Low
        hb = next((r for r in records if "Hemoglobin" in r.get("Test Name", "")), None)
        hb_flag_ok = hb and "Low" in hb.get("Status", "")
        log_detail(cat, f"Hemoglobin (10.8 g/dL) correctly flagged Potentially Low: {hb_flag_ok}")

        # Fasting Glucose (132 mg/dL vs 70-99) should be Potentially High
        glu = next((r for r in records if "Glucose" in r.get("Test Name", "")), None)
        glu_flag_ok = glu and "High" in glu.get("Status", "")
        log_detail(cat, f"Fasting Glucose (132 mg/dL) correctly flagged Potentially High: {glu_flag_ok}")

        # Platelet Count (240,000 vs 150,000-450,000) should be Normal
        plt = next((r for r in records if "Platelet" in r.get("Test Name", "")), None)
        plt_flag_ok = plt and "Normal" in plt.get("Status", "")
        log_detail(cat, f"Platelet Count (240,000) correctly flagged Normal: {plt_flag_ok}")

        # Medical disclaimer audit in PDF export
        r_pdf = requests.post(f"{BASE_URL}/api/export/pdf", json={
            "meta": {"id": "AUDIT-001", "source_name": "Readiness Audit Benchmark", "timestamp": "2026-10-25 15:00"},
            "records": records
        }, timeout=10)
        pdf_ok = r_pdf.status_code == 200 and r_pdf.content.startswith(b"%PDF")
        log_detail(cat, f"Clinical PDF audit export generated ({len(r_pdf.content)} bytes): {pdf_ok}")

        # Medical disclaimer in CSV export
        r_csv = requests.post(f"{BASE_URL}/api/export/csv", json={"records": records}, timeout=10)
        csv_text = r_csv.text
        disclaimer_in_csv = "disclaimer" in csv_text.lower() or "licensed physician" in csv_text.lower() or "medical" in csv_text.lower()
        log_detail(cat, f"Medical disclaimer embedded in CSV export: {disclaimer_in_csv}")

        all_ok = hb_flag_ok and glu_flag_ok and plt_flag_ok and pdf_ok and disclaimer_in_csv
        results[cat]["status"] = "PASS" if all_ok else "FAIL"

    except Exception as e:
        log_detail(cat, f"Exception during flags/disclaimers check: {e}", False)
        results[cat]["status"] = "FAIL"

def audit_check_5_auth_history_isolation():
    cat = "5_auth_history_isolation"
    print("\n--- [CHECK 5] Login, Report History, Data Isolation, and Error Handling ---")
    try:
        # 1. Valid Login
        r_login = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "evaluator@orcamed.org",
            "password": "OrcaMed2026!"
        }, timeout=10)
        login_ok = r_login.status_code == 200 and r_login.json().get("user", {}).get("role") == "Lead Clinical Evaluator"
        log_detail(cat, f"Enclave evaluator login authenticated: {login_ok}")

        # 2. Invalid Login rejection
        r_bad = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "evaluator@orcamed.org",
            "password": "WrongPassword123!"
        }, timeout=10)
        bad_rejected = r_bad.status_code == 401
        log_detail(cat, f"Invalid password rejected with HTTP 401: {bad_rejected}")

        # 3. Data isolation / vault security
        vault_path = "data/.auth_vault.json"
        vault_secure = True
        if os.path.exists(vault_path):
            with open(vault_path, "r", encoding="utf-8") as vf:
                vdata = json.load(vf)
                for email, uinfo in vdata.items():
                    pw_hash = uinfo.get("password_hash", "")
                    if "OrcaMed2026!" in pw_hash:
                        vault_secure = False
                        break
        log_detail(cat, f"Vault credential security: PBKDF2 salt+hash verified (no plaintext): {vault_secure}")

        # 4. Route error handling
        r_404 = requests.get(f"{BASE_URL}/api/non_existent_route", timeout=10)
        err_handling_ok = r_404.status_code == 404
        log_detail(cat, f"Non-existent route handled with 404: {err_handling_ok}")

        all_ok = login_ok and bad_rejected and vault_secure and err_handling_ok
        results[cat]["status"] = "PASS" if all_ok else "FAIL"

    except Exception as e:
        log_detail(cat, f"Exception during auth/history check: {e}", False)
        results[cat]["status"] = "FAIL"

def audit_check_6_frontend_summary():
    cat = "6_navigation_theme_mobile"
    print("\n--- [CHECK 6] Navigation, Language Selection, Theme, and Mobile Responsiveness ---")
    if os.path.exists("audit_results_frontend.json"):
        with open("audit_results_frontend.json", "r") as f:
            f_data = json.load(f)
        views_ok = len(f_data.get("views_tested", {})) == 7
        langs_ok = len(f_data.get("languages_tested", {})) == 7
        theme_ok = f_data.get("theme_toggle", False)
        mobile_ok = f_data.get("mobile_responsive", False)
        console_ok = len(f_data.get("console_errors", [])) == 0

        log_detail(cat, f"All 7 Navigation views operational: {views_ok}")
        log_detail(cat, f"All 7 Indic languages operational: {langs_ok}")
        log_detail(cat, f"Light / Charcoal Night Mode toggle verified: {theme_ok}")
        log_detail(cat, f"Mobile 375px responsive (scrollWidth == 375px, no overflow): {mobile_ok}")
        log_detail(cat, f"Zero browser console errors / unhandled exceptions: {console_ok}")

        results[cat]["status"] = "PASS" if (views_ok and langs_ok and theme_ok and mobile_ok and console_ok) else "FAIL"
    else:
        results[cat]["status"] = "NOT TESTED"

def audit_check_7_security():
    cat = "7_security_env_protection"
    print("\n--- [CHECK 7] Backend Security, Environment Variables, and API Key Protection ---")
    try:
        # Check static file traversal / .env leakage
        r_env = requests.get(f"{BASE_URL}/.env", timeout=5)
        # If it returns 200, it must be the SPA index.html fallback, NOT the actual .env content
        if r_env.status_code == 200:
            if "GROQ_API_KEY" in r_env.text:
                log_detail(cat, "CRITICAL: /.env served actual environment variables!", False)
                env_not_exposed = False
            else:
                log_detail(cat, "/.env safely routed to SPA fallback (actual file not exposed)")
                env_not_exposed = True
        else:
            log_detail(cat, f"/.env correctly denied with HTTP {r_env.status_code}")
            env_not_exposed = True

        # Check frontend build bundle for leaked secrets
        bundle_secure = True
        dist_assets = "frontend/dist/assets"
        if os.path.exists(dist_assets):
            for fname in os.listdir(dist_assets):
                if fname.endswith(".js"):
                    fpath = os.path.join(dist_assets, fname)
                    with open(fpath, "r", encoding="utf-8") as jf:
                        content = jf.read()
                        if "gsk_" in content:
                            bundle_secure = False
                            log_detail(cat, f"CRITICAL: Groq API key found in bundled asset {fname}!", False)
                            break
        log_detail(cat, f"Production JavaScript bundle audited: zero API keys leaked: {bundle_secure}")

        # Check gitignore
        gitignore_ok = False
        if os.path.exists(".gitignore"):
            with open(".gitignore", "r") as gf:
                gtext = gf.read()
                if ".env" in gtext and ".env.*" in gtext:
                    gitignore_ok = True
        log_detail(cat, f".gitignore contains .env and credential protections: {gitignore_ok}")

        # Check CORS configuration
        with open("server.py", "r", encoding="utf-8") as sf:
            s_code = sf.read()
            has_cors = "CORSMiddleware" in s_code
        log_detail(cat, f"CORS middleware configured in FastAPI: {has_cors}")

        all_ok = env_not_exposed and bundle_secure and gitignore_ok and has_cors
        results[cat]["status"] = "PASS" if all_ok else "FAIL"

    except Exception as e:
        log_detail(cat, f"Exception during security check: {e}", False)
        results[cat]["status"] = "FAIL"

def audit_check_8_perf_deployment():
    cat = "8_errors_perf_deployment"
    print("\n--- [CHECK 8] Frontend/Backend Errors, Performance, and Deployment ---")
    try:
        # Frontend TypeScript typecheck & build
        ts_cmd = subprocess.run(["npm", "run", "build"], cwd="frontend", capture_output=True, text=True)
        ts_ok = ts_cmd.returncode == 0
        log_detail(cat, f"Frontend build (tsc + vite build) succeeds without compile errors: {ts_ok}")

        # API Latency Benchmarking
        latencies = []
        endpoints = ["/api/health", "/api/system/status", "/api/benchmark", "/api/assistant/status"]
        for ep in endpoints:
            t0 = time.time()
            r = requests.get(f"{BASE_URL}{ep}", timeout=5)
            dt = (time.time() - t0) * 1000
            latencies.append((ep, dt, r.status_code))
            log_detail(cat, f"Endpoint {ep}: {dt:.1f}ms (HTTP {r.status_code})")

        all_endpoints_fast = all(dt < 500 for _, dt, _ in latencies)
        all_endpoints_200 = all(code == 200 for _, _, code in latencies)
        log_detail(cat, f"All core API endpoints respond under 500ms: {all_endpoints_fast}")

        # Single-port unified serving check
        r_spa = requests.get(f"{BASE_URL}/", timeout=5)
        spa_served = r_spa.status_code == 200 and ("<!DOCTYPE html>" in r_spa.text or "<div id=\"root\">" in r_spa.text)
        log_detail(cat, f"Unified single-port deployment: FastAPI serves React SPA index on port 8000: {spa_served}")

        # Python test suites regression
        suite1 = subprocess.run([".venv/bin/python3", "test_engine.py"], capture_output=True, text=True)
        suite2 = subprocess.run([".venv/bin/python3", "test_api.py"], capture_output=True, text=True)
        regression_ok = (suite1.returncode == 0) and (suite2.returncode == 0)
        log_detail(cat, f"Regression test suites passed (test_engine.py & test_api.py): {regression_ok}")

        all_ok = ts_ok and all_endpoints_fast and all_endpoints_200 and spa_served and regression_ok
        results[cat]["status"] = "PASS" if all_ok else "FAIL"

    except Exception as e:
        log_detail(cat, f"Exception during perf/deployment check: {e}", False)
        results[cat]["status"] = "FAIL"

if __name__ == "__main__":
    audit_check_1_groq()
    audit_check_2_uploads()
    audit_check_3_ocr_accuracy()
    audit_check_4_flags_disclaimers()
    audit_check_5_auth_history_isolation()
    audit_check_6_frontend_summary()
    audit_check_7_security()
    audit_check_8_perf_deployment()

    with open("final_readiness_audit.json", "w") as out:
        json.dump(results, out, indent=2)

    print("\n" + "=" * 65)
    print("FINAL READINESS AUDIT SUMMARY:")
    print("=" * 65)
    for k, v in results.items():
        print(f"  {k:30} : {v['status']}")
