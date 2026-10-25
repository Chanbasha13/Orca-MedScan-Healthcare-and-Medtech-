export interface BiomarkerRecord {
  "Test Name": string;
  "Original Label": string;
  "Measured Value": number;
  "Unit": string;
  "Reference Range": string;
  "Range Source": string;
  "Status": string;
  "Category": "normal" | "flagged" | "uncertain";
  "Plain Explanation": string;
  "Description": string;
}

export interface DiagnosticsData {
  total_lines: number;
  recognized_count: number;
  recognized_labels: string[];
  unrecognized_candidates: string[];
  status_code?: string;
  guidance?: string;
}

export interface ReportAudit {
  id: string;
  timestamp: string;
  source_name: string;
  source_type: string;
  extraction_method?: string;
  records: BiomarkerRecord[];
  total_count: number;
  normal_count: number;
  flagged_count: number;
  uncertain_count: number;
  raw_text: string;
  diagnostics: DiagnosticsData;
}

export interface User {
  email: string;
  role: string;
  last_login?: string;
}

export interface SystemStatus {
  tesseract: {
    available: boolean;
    binary_path: string;
  };
  decoders: {
    heif_available: boolean;
    reportlab_available: boolean;
    supported_formats: string[];
  };
  vault: {
    registered_practitioners: number;
    algorithm: string;
    iterations: number;
    salt_entropy: string;
    vault_path: string;
  };
}

