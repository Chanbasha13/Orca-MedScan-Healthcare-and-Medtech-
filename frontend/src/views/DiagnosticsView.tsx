import React from 'react';
import { Activity, AlertTriangle, CheckCircle2, FileText, Code2 } from 'lucide-react';
import { ReportAudit } from '../types';

interface DiagnosticsViewProps {
  currentReport: ReportAudit | null;
}

export const DiagnosticsView: React.FC<DiagnosticsViewProps> = ({ currentReport }) => {
  if (!currentReport || !currentReport.diagnostics) {
    return (
      <div className="p-12 text-center rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3 font-sans">
        <Activity className="w-10 h-10 text-forest-700 dark:text-forest-400 mx-auto" />
        <h3 className="font-serif text-2xl font-bold text-charcoal-900 dark:text-ivory-50">
          No Extraction Telemetry Active
        </h3>
        <p className="text-xs text-charcoal-500 max-w-md mx-auto">
          Ingest and screen a medical document or benchmark panel to view raw OCR output and candidate line telemetry.
        </p>
      </div>
    );
  }

  const { diagnostics, source_name, raw_text, id, extraction_method } = currentReport;

  return (
    <div className="space-y-8 animate-fade-in font-sans">
      <div className="pb-5 border-b border-ivory-300 dark:border-charcoal-800">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
          OCR Telemetry & Token Parsing
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1">
          Extraction Diagnostics & Candidate Telemetry
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl">
          Inspect raw OCR tokenization, verified mapped lines, and candidate unmatched text segments.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-charcoal-500">Lines Processed</span>
          <div className="text-3xl font-mono font-bold text-charcoal-900 dark:text-ivory-50 mt-1">
            {diagnostics.total_lines}
          </div>
          <div className="text-[11px] text-charcoal-500 mt-1 font-sans">Total document text stream lines</div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-clinical-normal">Biomarkers Matched</span>
          <div className="text-3xl font-mono font-bold text-clinical-normal mt-1">
            {diagnostics.recognized_count}
          </div>
          <div className="text-[11px] text-charcoal-500 mt-1 font-sans">Deterministic registry mapping</div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-clinical-warning">Unmapped Candidate Lines</span>
          <div className="text-3xl font-mono font-bold text-clinical-warning mt-1">
            {diagnostics.unrecognized_candidates.length}
          </div>
          <div className="text-[11px] text-charcoal-500 mt-1 font-sans">Lines with numbers needing review</div>
        </div>
      </div>

      {/* Recognized Labels Section */}
      <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3">
        <div className="flex items-center gap-2 text-clinical-normal font-bold text-sm">
          <CheckCircle2 className="w-4 h-4" />
          <span>Recognized Biomarker Labels ({diagnostics.recognized_labels.length})</span>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {diagnostics.recognized_labels.map((lbl, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
            >
              {lbl}
            </span>
          ))}
        </div>
      </div>

      {/* Unrecognized Candidate Lines Section */}
      <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3">
        <div className="flex items-center gap-2 text-clinical-warning font-bold text-sm">
          <AlertTriangle className="w-4 h-4" />
          <span>Candidate Unmatched Lines ({diagnostics.unrecognized_candidates.length})</span>
        </div>
        <p className="text-xs text-charcoal-500 dark:text-ivory-400">
          Lines containing numeric values or possible test names that were not mapped to the central medical registry:
        </p>
        {diagnostics.unrecognized_candidates.length > 0 ? (
          <div className="space-y-2 pt-1">
            {diagnostics.unrecognized_candidates.map((cand, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800 font-mono text-xs text-charcoal-800 dark:text-ivory-200"
              >
                {cand}
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-ivory-100 dark:bg-charcoal-950 text-xs font-semibold text-clinical-normal">
            Zero unmapped candidate lines detected. All clinical rows parsed cleanly.
          </div>
        )}
      </div>

      {/* Full Raw Text Inspector */}
      <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-charcoal-900 dark:text-ivory-50 font-bold text-sm">
            <Code2 className="w-4 h-4 text-forest-700 dark:text-forest-400" />
            <span>Full Raw Ingested Text Stream ({extraction_method})</span>
          </div>
          <span className="text-xs font-mono text-charcoal-400">Audit ID: {id}</span>
        </div>
        <textarea
          readOnly
          rows={10}
          value={raw_text}
          className="w-full p-4 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-800 dark:text-ivory-200 font-mono text-xs focus:outline-none"
        />
      </div>
    </div>
  );
};
