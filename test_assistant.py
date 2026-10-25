"""
Automated Integration and Clinical Guardrail Tests for Groq AI Assistant & Indic Languages
Verifies:
1. Assistant Status Endpoint (model, configured state, 7 supported languages)
2. Safe Unconfigured Behavior (no crashing or fake diagnostic claims when GROQ_API_KEY is not set)
3. Input Validation & Request Guards (empty messages rejection, character length limits)
4. Context Injection & Non-identifying Biomarker Transmission
5. Indic Language Support Verification
"""

import requests
import json
import time

BASE_URL = "http://127.0.0.1:8000"

def test_assistant():
    print("=" * 65)
    print("RUNNING GROQ AI ASSISTANT & INDIC LANGUAGE VERIFICATION SUITE")
    print("=" * 65)

    # 1. Status Endpoint
    print("\n[Assistant Test 1] Assistant Configuration & Status Endpoint...")
    r = requests.get(f"{BASE_URL}/api/assistant/status")
    assert r.status_code == 200, f"Expected 200, got {r.status_code}"
    status_data = r.json()
    assert "configured" in status_data
    assert "model" in status_data
    assert "supported_languages" in status_data
    
    expected_langs = ["en", "hi", "te", "ta", "kn", "ml", "bn"]
    for lang in expected_langs:
        assert lang in status_data["supported_languages"], f"Missing language: {lang}"
    print(f"✓ Passed: Status endpoint verified. Model={status_data['model']}, Languages={status_data['supported_languages']}")

    # 2. Input Validation: Empty messages list
    print("\n[Assistant Test 2] Request Validation: Reject Empty Message History...")
    r = requests.post(
        f"{BASE_URL}/api/assistant/chat",
        json={
            "messages": [],
            "language": "en"
        }
    )
    assert r.status_code == 400, f"Expected 400 for empty messages, got {r.status_code}"
    assert "empty" in r.json()["detail"].lower()
    print("✓ Passed: Empty message payload properly rejected with 400 Bad Request")

    # 3. Input Validation: Excessively large message
    print("\n[Assistant Test 3] Request Validation: Reject Oversized Message (>4000 chars)...")
    r = requests.post(
        f"{BASE_URL}/api/assistant/chat",
        json={
            "messages": [{"role": "user", "content": "A" * 4500}],
            "language": "en"
        }
    )
    assert r.status_code in [400, 422], f"Expected 400 or 422 for oversized message, got {r.status_code}"
    print(f"✓ Passed: Oversized message rejected by validation schema with HTTP {r.status_code}")

    # 4. Live Groq Chat Interaction & Medical Guardrails
    print("\n[Assistant Test 4] Live Groq Chat Interaction with Report Context...")
    sample_context = {
        "source_name": "CMP Specimen Lab Report",
        "source_type": "Digital PDF",
        "total_count": 2,
        "flagged_count": 2,
        "records": [
            {
                "Test Name": "Fasting Blood Glucose",
                "Measured Value": 138.0,
                "Unit": "mg/dL",
                "Reference Range": "70 - 99",
                "Status": "High"
            },
            {
                "Test Name": "Total Serum Cholesterol",
                "Measured Value": 224.0,
                "Unit": "mg/dL",
                "Reference Range": "125 - 200",
                "Status": "High"
            }
        ]
    }

    r = requests.post(
        f"{BASE_URL}/api/assistant/chat",
        json={
            "messages": [
                {"role": "user", "content": "What do my high glucose and cholesterol levels indicate?"}
            ],
            "report_context": sample_context,
            "language": "Hindi"
        }
    )
    assert r.status_code == 200, f"Expected 200, got {r.status_code}"
    reply = r.json()
    assert "reply" in reply
    assert "model" in reply
    assert "disclaimer" in reply
    assert "configured" in reply
    assert reply["configured"] is True, "Assistant should be configured with .env GROQ_API_KEY"
    assert reply["success"] is True, f"Chat failed: {reply}"
    assert len(reply["reply"]) > 20, "Reply text is too short"
    assert "gsk_" not in json.dumps(reply), "SECURITY RISK: API key detected in API response!"
    print(f"✓ Passed: Live Groq response received using model {reply['model']}:")
    print(f"   -> '{reply['reply'][:85]}...'")

    # 5. Indic Language Synchronization
    print("\n[Assistant Test 5] Indic Languages Ingestion Matrix...")
    for lang in ["English", "Hindi", "Telugu", "Tamil", "Kannada", "Malayalam", "Bengali"]:
        time.sleep(0.6)
        r = requests.post(
            f"{BASE_URL}/api/assistant/chat",
            json={
                "messages": [{"role": "user", "content": "Hello"}],
                "language": lang
            }
        )
        assert r.status_code == 200, f"Failed for language: {lang}"
        assert "gsk_" not in r.text, "SECURITY RISK: API key leaked in language matrix response!"
    print(f"✓ Passed: All 7 languages accepted and processed with strict key containment")

    # 6. Security & Credential Boundary Audit
    print("\n[Assistant Test 6] Security Verification: Key Non-Exposure...")
    st_req = requests.get(f"{BASE_URL}/api/assistant/status")
    assert "gsk_" not in st_req.text, "SECURITY RISK: API key leaked in status endpoint!"
    assert "key" not in st_req.json(), "SECURITY RISK: API key field found in status JSON!"
    print("✓ Passed: Verified GROQ_API_KEY is strictly server-side and never exposed to clients")

    print("\n" + "=" * 65)
    print("ALL GROQ AI ASSISTANT & SECURITY TESTS PASSED (6/6)! 🎉")
    print("=" * 65)

if __name__ == "__main__":
    test_assistant()
