"""
Generates a standard sample PDF report for testing and demo purposes.
"""
def create_sample_pdf(filename):
    text_content = """METROPOLIS DIAGNOSTIC PATHOLOGY LABORATORY
Patient Name: Jane Smith           Age/Gender: 38 Y / Female
Date: 25-Oct-2026                  Sample ID: MET-44102

TEST NAME                           RESULT      UNIT         PRINTED REFERENCE RANGE
Hemoglobin                           11.2        g/dL         12.0 - 16.0
Total Leucocyte Count (TLC)          6500        cells/mcL    4000 - 11000
Platelet Count                       310000      /mcL         150000 - 450000
Fasting Blood Sugar (Glucose)        115         mg/dL        70 - 99
HbA1c                                6.1         %            4.0 - 5.6
Total Cholesterol                    215         mg/dL        125 - 200
Serum Creatinine                     0.9         mg/dL        0.6 - 1.2
Thyroid Stimulating Hormone (TSH)    5.4         mIU/L        0.4 - 4.5
"""
    lines = text_content.strip().split("\n")
    stream_content = "BT\n/F1 10 Tf\n30 750 Td\n15 TL\n"
    for line in lines:
        escaped = line.replace("(", "\\(").replace(")", "\\)")
        stream_content += f"({escaped}) '\n"
    stream_content += "ET"

    stream_bytes = stream_content.encode("latin-1")
    stream_len = len(stream_bytes)

    objects = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
        f"<< /Length {stream_len} >>\nstream\n".encode("latin-1") + stream_bytes + b"\nendstream",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>"
    ]

    pdf = b"%PDF-1.4\n"
    offsets = []
    for i, obj in enumerate(objects, 1):
        offsets.append(len(pdf))
        pdf += f"{i} 0 obj\n".encode("latin-1") + obj + b"\nendobj\n"

    xref_offset = len(pdf)
    pdf += f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n".encode("latin-1")
    for off in offsets:
        pdf += f"{off:010d} 00000 n \n".encode("latin-1")
    pdf += f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n".encode("latin-1")

    with open(filename, "wb") as f:
        f.write(pdf)
    print(f"Sample PDF created successfully at: {filename}")

if __name__ == "__main__":
    create_sample_pdf("sample_patient_report.pdf")
