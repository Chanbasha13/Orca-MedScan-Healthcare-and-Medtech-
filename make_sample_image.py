"""
Generates a clear synthetic lab report image (PNG) for OCR testing and demo purposes.
"""
from PIL import Image, ImageDraw, ImageFont

def create_sample_image(filename="sample_patient_report.png"):
    width, height = 900, 750
    image = Image.new("RGB", (width, height), color=(255, 255, 255))
    draw = ImageDraw.Draw(image)

    text_lines = [
        "METROPOLIS DIAGNOSTIC PATHOLOGY LABORATORY",
        "Clinical Pathology & Hematology Report",
        "Patient: Robert Chen         Age/Sex: 52 Y / Male",
        "Sample ID: MET-77291         Date: 25-Oct-2026",
        "--------------------------------------------------------------------------------",
        "TEST NAME                           RESULT      UNIT         PRINTED REFERENCE RANGE",
        "--------------------------------------------------------------------------------",
        "Hemoglobin                           13.5        g/dL         13.0 - 17.5",
        "Total Leucocyte Count (TLC)          9800        cells/mcL    4000 - 11000",
        "Platelet Count                       190000      /mcL         150000 - 450000",
        "Fasting Blood Sugar (Glucose)        148         mg/dL        70 - 99",
        "HbA1c                                7.2         %            4.0 - 5.6",
        "Total Cholesterol                    245         mg/dL        125 - 200",
        "HDL Cholesterol                      38          mg/dL        40 - 60",
        "LDL Cholesterol                      162         mg/dL        50 - 100",
        "Triglycerides                        210         mg/dL        40 - 150",
        "Serum Creatinine                     1.4         mg/dL        0.6 - 1.2",
        "Thyroid Stimulating Hormone (TSH)    3.2         mIU/L        0.4 - 4.5",
        "--------------------------------------------------------------------------------",
        "End of report. Informational clinical laboratory screening summary."
    ]

    y = 35
    for line in text_lines:
        draw.text((45, y), line, fill=(15, 25, 40))
        y += 32

    image.save(filename, "PNG")
    print(f"Sample image report saved successfully to {filename}")

if __name__ == "__main__":
    create_sample_image()

