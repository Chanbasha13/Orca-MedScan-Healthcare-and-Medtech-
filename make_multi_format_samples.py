"""
Generates multi-format test fixtures for Orca MedScan:
- sample_patient_report.webp
- sample_patient_report.bmp
- sample_patient_report.tiff
- scanned_report.pdf (PDF containing rasterized page image with NO text layer)
"""
import io
from PIL import Image, ImageDraw

def create_base_image():
    width, height = 900, 750
    image = Image.new("RGB", (width, height), color=(255, 255, 255))
    draw = ImageDraw.Draw(image)

    lines = [
        "LABORATORY DIAGNOSTIC SERVICES",
        "Clinical Pathology Assessment",
        "Patient: Arthur Dent             Age/Sex: 42 Y / Male",
        "Sample ID: LAB-40291             Date: 25-Oct-2026",
        "--------------------------------------------------------------------------------",
        "TEST NAME                           RESULT      UNIT         PRINTED REFERENCE RANGE",
        "--------------------------------------------------------------------------------",
        "HGB (Hemoglobin)                     14.2        g/dL         13.0 - 17.5",
        "WBC (Total Leucocyte Count)          7800        cells/mcL    4000 - 11000",
        "PLT (Platelet Count)                 220000      /mcL         150000 - 450000",
        "FBS (Fasting Blood Sugar)            112         mg/dL        70 - 99",
        "HbA1c                                6.2         %            4.0 - 5.6",
        "TC (Total Cholesterol)               215         mg/dL        125 - 200",
        "HDL Cholesterol                      42          mg/dL        40 - 60",
        "LDL Cholesterol                      138         mg/dL        50 - 100",
        "TG (Triglycerides)                   175         mg/dL        40 - 150",
        "Serum Creatinine                     1.0         mg/dL        0.6 - 1.2",
        "Blood Urea                           18          mg/dL        7 - 21",
        "SGPT (ALT)                           35          U/L          7 - 55",
        "TSH                                  3.1         mIU/L        0.4 - 4.5",
        "--------------------------------------------------------------------------------",
        "Authenticated Report - Clinical Screening Summary"
    ]

    y = 35
    for line in lines:
        draw.text((45, y), line, fill=(15, 25, 40))
        y += 32
    return image

def make_all_samples():
    img = create_base_image()
    
    # 1. WEBP
    img.save("sample_patient_report.webp", "WEBP", quality=95)
    print("✓ Created sample_patient_report.webp")

    # 2. BMP
    img.save("sample_patient_report.bmp", "BMP")
    print("✓ Created sample_patient_report.bmp")

    # 3. TIFF
    img.save("sample_patient_report.tiff", "TIFF")
    print("✓ Created sample_patient_report.tiff")

    # 4. Scanned PDF (Pure image inside PDF, no text layer)
    # Convert image to PDF via Pillow (produces raster PDF without extractable text streams)
    img.convert("RGB").save("scanned_report.pdf", "PDF", resolution=150.0)
    print("✓ Created scanned_report.pdf (rasterized scanned PDF)")

if __name__ == "__main__":
    make_all_samples()
