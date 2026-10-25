import React, { useState } from 'react';
import { History, FileText, Download, Trash2, Eye, Calendar, Clock } from 'lucide-react';
import { ReportAudit, BiomarkerRecord } from '../types';

interface HistoryViewProps {
  history: ReportAudit[];
  onSelectAudit: (report: ReportAudit) => void;
  onClearHistory: () => void;
  onExportCSV: (records: BiomarkerRecord[]) => void;
  onExportPDF: (meta: any, records: BiomarkerRecord[]) => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  history,
  onSelectAudit,
  onClearHistory,
  onExportCSV,
  onExportPDF,
}) => {
  const [selectedAuditId, setSelectedAuditId] = useState<string | null>(
    history.length > 0 ? history[0].id : null
  );

  const selectedAudit = history.find((h) => h.id === selectedAuditId) || (history.length > 0 ? history[0] : null);

  if (history.length === 0) {
    return (
      <div className="p-12 text-center rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3 font-sans">
        <History className="w-10 h-10 text-forest-700 dark:text-forest-400 mx-auto" />
        <h3 className="font-serif text-2xl font-bold text-charcoal-900 dark:text-ivory-50">
          No Historical Audits in this Session
        </h3>
        <p className="text-xs text-charcoal-500 max-w-md mx-auto">
          Audit entries are generated automatically as laboratory reports are ingested and verified.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-ivory-300 dark:border-charcoal-800">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
            Pathology Enclave Ledger
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1">
            Session Audit History
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl">
            Complete audit trail of all laboratory documents screened during the active session enclave.
          </p>
        </div>
        <button
          onClick={onClearHistory}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-rose-300 dark:border-rose-900 text-rose-700 dark:text-rose-400 text-xs font-mono font-bold hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors shadow-paper-ivory"
        >
          <Trash2 className="w-3.5 h-3.5" /> Clear Session Cache
        </button>
      </div>

      {/* Historical Summary Table */}
      <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-500 dark:text-ivory-400">
          Screened Document Audits ({history.length})
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-ivory-100 dark:bg-charcoal-800/60 text-charcoal-600 dark:text-ivory-300 font-mono font-bold uppercase tracking-wider border-y border-ivory-200 dark:border-charcoal-800">
              <tr>
                <th className="py-3 px-4">Audit ID</th>
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-4">Specimen Document</th>
                <th className="py-3 px-4">Format</th>
                <th className="py-3 px-4">Screened</th>
                <th className="py-3 px-4">Out-of-Range</th>
                <th className="py-3 px-4">Normal</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ivory-200 dark:divide-charcoal-800 text-charcoal-700 dark:text-ivory-300">
              {history.map((row) => {
                const isSelected = selectedAuditId === row.id;
                return (
                  <tr
                    key={row.id}
                    onClick={() => setSelectedAuditId(row.id)}
                    className={`cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-forest-50/70 dark:bg-forest-950/40 font-semibold'
                        : 'hover:bg-ivory-50/60 dark:hover:bg-charcoal-800/40'
                    }`}
                  >
                    <td className="py-3 px-4 font-mono text-forest-800 dark:text-forest-400 font-bold">{row.id}</td>
                    <td className="py-3 px-4 font-mono text-charcoal-500 dark:text-ivory-400">{row.timestamp}</td>
                    <td className="py-3 px-4 font-medium text-charcoal-900 dark:text-ivory-50">{row.source_name}</td>
                    <td className="py-3 px-4">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-ivory-200 dark:bg-charcoal-800 text-charcoal-600 dark:text-ivory-300 font-mono">
                        {row.source_type}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-charcoal-900 dark:text-ivory-50">{row.total_count}</td>
                    <td className="py-3 px-4 font-mono text-clinical-danger font-bold">{row.flagged_count}</td>
                    <td className="py-3 px-4 font-mono text-clinical-normal">{row.normal_count}</td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedAuditId(row.id);
                          onSelectAudit(row);
                        }}
                        className="px-2.5 py-1 rounded bg-forest-800 text-ivory-50 text-[11px] font-mono font-bold hover:bg-forest-900 transition-colors shadow-paper-ivory"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Historical Audit Inspector Drilldown */}
      {selectedAudit && (
        <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-ivory-200 dark:border-charcoal-800">
            <div>
              <span className="text-[10px] font-mono font-bold text-forest-700 dark:text-forest-400 uppercase">
                Historical Audit Inspector • {selectedAudit.id}
              </span>
              <h3 className="font-serif text-xl font-bold text-charcoal-900 dark:text-ivory-50">
                {selectedAudit.source_name} ({selectedAudit.timestamp})
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onExportCSV(selectedAudit.records)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-ivory-300 dark:border-charcoal-700 text-xs font-mono font-bold text-charcoal-700 dark:text-ivory-300 hover:border-forest-700 shadow-paper-ivory"
              >
                <Download className="w-3.5 h-3.5" /> CSV Export
              </button>
              <button
                onClick={() => onExportPDF(selectedAudit, selectedAudit.records)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-mono font-bold transition-colors shadow-paper-ivory"
              >
                <Download className="w-3.5 h-3.5" /> Clinical PDF
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-ivory-100 dark:bg-charcoal-800/60 text-charcoal-600 dark:text-ivory-300 font-mono font-bold uppercase tracking-wider border-y border-ivory-200 dark:border-charcoal-800">
                <tr>
                  <th className="py-3 px-4 font-serif font-bold text-xs capitalize">Biomarker</th>
                  <th className="py-3 px-4">Measured</th>
                  <th className="py-3 px-4">Unit</th>
                  <th className="py-3 px-4">Reference Range</th>
                  <th className="py-3 px-4">Range Calibration</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ivory-200 dark:divide-charcoal-800 text-charcoal-700 dark:text-ivory-300">
                {selectedAudit.records.map((rec, i) => (
                  <tr key={i} className="hover:bg-ivory-50/50 dark:hover:bg-charcoal-800/40">
                    <td className="py-2.5 px-4 font-semibold text-charcoal-900 dark:text-ivory-50">{rec['Test Name']}</td>
                    <td className="py-2.5 px-4 font-mono font-bold text-charcoal-900 dark:text-ivory-50">{rec['Measured Value']}</td>
                    <td className="py-2.5 px-4 font-mono text-charcoal-500">{rec.Unit}</td>
                    <td className="py-2.5 px-4 font-mono">{rec['Reference Range']}</td>
                    <td className="py-2.5 px-4">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-ivory-200 dark:bg-charcoal-800 text-charcoal-600 dark:text-ivory-400 font-mono">
                        {rec['Range Source']}
                      </span>
                    </td>
                    <td className="py-2.5 px-4">
                      <span className="font-mono text-xs font-bold">
                        {rec.Status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
