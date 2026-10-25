"""
Local Enclave Authentication Engine for Orca MedScan
Uses NIST-compliant PBKDF2-HMAC-SHA256 with cryptographically random 32-byte salts.
Stores credentials safely hashed within the local data enclave (data/.auth_vault.json).
"""

import os
import json
import re
import secrets
import hashlib
from datetime import datetime

AUTH_DIR = os.path.join(os.path.dirname(__file__), "data")
AUTH_FILE = os.path.join(AUTH_DIR, ".auth_vault.json")

# Default evaluator account for hackathon judges
DEFAULT_EVALUATOR_EMAIL = "evaluator@orcamed.org"
DEFAULT_EVALUATOR_PASS = "OrcaMed2026!"

def _hash_password(password: str, salt: bytes = None) -> tuple[str, str]:
    if salt is None:
        salt = secrets.token_bytes(32)
    pwd_bytes = password.encode("utf-8")
    derived = hashlib.pbkdf2_hmac("sha256", pwd_bytes, salt, 100000)
    return derived.hex(), salt.hex()

def _verify_password(password: str, stored_hash: str, stored_salt: str) -> bool:
    salt_bytes = bytes.fromhex(stored_salt)
    expected_bytes = bytes.fromhex(stored_hash)
    derived = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt_bytes, 100000)
    return secrets.compare_digest(derived, expected_bytes)

def init_auth_vault():
    """Initializes the local auth vault with the default clinical evaluator account if missing."""
    os.makedirs(AUTH_DIR, exist_ok=True)
    if not os.path.exists(AUTH_FILE):
        hash_hex, salt_hex = _hash_password(DEFAULT_EVALUATOR_PASS)
        initial_data = {
            "users": {
                DEFAULT_EVALUATOR_EMAIL.lower(): {
                    "email": DEFAULT_EVALUATOR_EMAIL,
                    "password_hash": hash_hex,
                    "password_salt": salt_hex,
                    "role": "Lead Clinical Evaluator",
                    "created_at": datetime.now().isoformat(),
                    "failed_attempts": 0,
                    "locked_until": None
                }
            }
        }
        with open(AUTH_FILE, "w", encoding="utf-8") as f:
            json.dump(initial_data, f, indent=2)

def _load_vault() -> dict:
    init_auth_vault()
    try:
        with open(AUTH_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {"users": {}}

def _save_vault(data: dict):
    os.makedirs(AUTH_DIR, exist_ok=True)
    with open(AUTH_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

def validate_email(email: str) -> bool:
    """Validates email format strictly."""
    if not email or len(email) > 120:
        return False
    return bool(re.match(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", email.strip()))

def validate_password_strength(password: str) -> tuple[bool, str]:
    """Ensures minimum 8 chars, at least 1 letter, and at least 1 digit."""
    if not password or len(password) < 8:
        return False, "Password must be at least 8 characters long."
    if not re.search(r"[A-Za-z]", password):
        return False, "Password must contain at least one alphabetical letter."
    if not re.search(r"[0-9]", password):
        return False, "Password must contain at least one numeric digit."
    return True, "Strong password."

def authenticate_user(email: str, password: str) -> tuple[bool, str, dict]:
    """
    Verifies user credentials against salted PBKDF2 hashes.
    Returns (success: bool, message: str, user_data: dict).
    """
    if not email or not password:
        return False, "Please enter both email and password.", {}

    email_clean = email.strip().lower()
    vault = _load_vault()
    users = vault.get("users", {})

    if email_clean not in users:
        return False, "Invalid email address or password.", {}

    user = users[email_clean]

    # Verify password with constant-time comparison
    if not _verify_password(password, user["password_hash"], user["password_salt"]):
        user["failed_attempts"] = user.get("failed_attempts", 0) + 1
        _save_vault(vault)
        return False, "Invalid email address or password.", {}

    # Successful login
    user["failed_attempts"] = 0
    user["last_login"] = datetime.now().isoformat()
    _save_vault(vault)
    return True, "Authentication successful.", {
        "email": user["email"],
        "role": user.get("role", "Clinical Practitioner"),
        "last_login": user.get("last_login")
    }

def register_user(email: str, password: str, confirm_password: str) -> tuple[bool, str]:
    """
    Registers a new practitioner account with salted PBKDF2 hashing.
    """
    if not validate_email(email):
        return False, "Please provide a valid email format (e.g., doctor@hospital.org)."

    if password != confirm_password:
        return False, "Passwords do not match."

    valid_pwd, msg = validate_password_strength(password)
    if not valid_pwd:
        return False, msg

    email_clean = email.strip().lower()
    vault = _load_vault()
    users = vault.setdefault("users", {})

    if email_clean in users:
        return False, "An account with this email address already exists. Please log in."

    hash_hex, salt_hex = _hash_password(password)
    users[email_clean] = {
        "email": email.strip(),
        "password_hash": hash_hex,
        "password_salt": salt_hex,
        "role": "Clinical Practitioner",
        "created_at": datetime.now().isoformat(),
        "failed_attempts": 0,
        "locked_until": None
    }
    _save_vault(vault)
    return True, "Account registered successfully. You can now log in."

