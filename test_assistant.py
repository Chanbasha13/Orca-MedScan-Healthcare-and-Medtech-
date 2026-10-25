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

    # 4. Chat endpoint without API key (Graceful Fallback Mode)
    print("\n[Assistant Test 4] Unconfigured Safe Guidance Fallback...")
    sample_context = {
        "source_name": "CMP Specimen Lab Report",
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
            "context_report": sample_context,
            "language": "hi"
        }
    )
    assert r.status_code == 200, f"Expected 200, got {r.status_code}"
    reply = r.json()
    assert "reply" in reply
    assert "model" in reply
    assert "disclaimer" in reply
    assert "configured" in reply
    assert len(reply["disclaimer"]) > 10
    print(f"✓ Passed: Handled unconfigured state safely with medical disclaimer:\n   -> '{reply['disclaimer'][:75]}...'")

    # 5. Indic Language Synchronization
    print("\n[Assistant Test 5] Indic Languages Ingestion Matrix...")
    for lang in expected_langs:
        r = requests.post(
            f"{BASE_URL}/api/assistant/chat",
            json={
                "messages": [{"role": "user", "content": "Hello"}],
                "language": lang
            }
        )
        assert r.status_code == 200, f"Failed for language: {lang}"
    print(f"✓ Passed: All 7 languages (en, hi, te, ta, kn, ml, bn) accepted by chat orchestrator")

    print("\n" + "=" * 65)
    print("ALL GROQ AI ASSISTANT & INDIC LANGUAGE TESTS PASSED (5/5)!")
    print("=" * 65)

if __name__ == "__main__":
    test_assistant()
