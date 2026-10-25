import React from 'react';
import { Activity, AlertTriangle, CheckCircle2, FileText, Code2 } from 'lucide-react';
import { ReportAudit } from '../types';

interface DiagnosticsViewProps {
  currentReport: ReportAudit | null;
}

export const DiagnosticsView: React.FC<DiagnosticsViewProps> = ({ currentReport }) => {
  if (!currentReport || !currentReport.diagnostics) {
    return (
      <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <Activity className="w-10 h-10 text-teal-600 mx-auto" />
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          No Extraction Telemetry Active
        </h3>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          Ingest and screen a medical document or benchmark panel to view raw OCR output and candidate line telemetry.
        </p>
      </div>
    );
  }

  const { diagnostics, source_name, raw_text, id, extraction_method } = currentReport;

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="pb-4 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Extraction Diagnostics & Candidate Telemetry
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Inspect raw OCR tokenization, verified mapped lines, and candidate unmatched text segments.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Lines Processed</span>
          <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            {diagnostics.total_lines}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Total document text stream lines</div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Biomarkers Matched</span>
          <div className="text-3xl font-extrabold text-teal-600 dark:text-teal-400 mt-1">
            {diagnostics.recognized_count}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Deterministic registry mapping</div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Unmapped Candidate Lines</span>
          <div className="text-3xl font-extrabold text-amber-600 dark:text-amber-400 mt-1">
            {diagnostics.unrecognized_candidates.length}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Lines with numbers needing review</div>
        </div>
      </div>

      {/* Recognized Labels Section */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
          <CheckCircle2 className="w-4 h-4" />
          <span>Recognized Biomarker Labels ({diagnostics.recognized_labels.length})</span>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {diagnostics.recognized_labels.map((lbl, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
            >
              {lbl}
            </span>
          ))}
        </div>
      </div>

      {/* Unrecognized Candidate Lines Section */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
          <AlertTriangle className="w-4 h-4" />
          <span>Candidate Unmatched Lines ({diagnostics.unrecognized_candidates.length})</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Lines containing numeric values or possible test names that were not mapped to the central medical registry:
        </p>
        {diagnostics.unrecognized_candidates.length > 0 ? (
          <div className="space-y-2 pt-1">
            {diagnostics.unrecognized_candidates.map((cand, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-800 dark:text-slate-200"
              >
                {cand}
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            Zero unmapped candidate lines detected. All clinical rows parsed cleanly.
          </div>
        )}
      </div>

      {/* Full Raw Text Inspector */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
            <Code2 className="w-4 h-4 text-teal-600" />
            <span>Full Raw Ingested Text Stream ({extraction_method})</span>
          </div>
          <span className="text-xs font-mono text-slate-400">Audit ID: {id}</span>
        </div>
        <textarea
          readOnly
          rows={10}
          value={raw_text}
          className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-mono text-xs focus:outline-none"
        />
      </div>
    </div>
  );
};
