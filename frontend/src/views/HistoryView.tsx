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
      <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <History className="w-10 h-10 text-teal-600 mx-auto" />
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          No Historical Audits in this Session
        </h3>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          Audit entries are generated automatically as laboratory reports are ingested and verified.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Session Audit History
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Complete audit trail of all laboratory documents screened during the active session enclave.
          </p>
        </div>
        <button
          onClick={onClearHistory}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" /> Clear Session Cache
        </button>
      </div>

      {/* Historical Summary Table */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Screened Document Audits ({history.length})
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider border-y border-slate-200 dark:border-slate-800">
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
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {history.map((row) => {
                const isSelected = selectedAuditId === row.id;
                return (
                  <tr
                    key={row.id}
                    onClick={() => setSelectedAuditId(row.id)}
                    className={`cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-teal-50/70 dark:bg-teal-950/40 font-semibold'
                        : 'hover:bg-slate-50/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <td className="py-3 px-4 font-mono text-teal-600 dark:text-teal-400">{row.id}</td>
                    <td className="py-3 px-4 font-mono text-slate-500">{row.timestamp}</td>
                    <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">{row.source_name}</td>
                    <td className="py-3 px-4">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                        {row.source_type}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono font-bold">{row.total_count}</td>
                    <td className="py-3 px-4 font-mono text-rose-600 font-bold">{row.flagged_count}</td>
                    <td className="py-3 px-4 font-mono text-emerald-600">{row.normal_count}</td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedAuditId(row.id);
                          onSelectAudit(row);
                        }}
                        className="px-2.5 py-1 rounded bg-teal-600 text-white text-[11px] font-bold hover:bg-teal-700 transition-colors"
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
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase">
                Historical Audit Inspector • {selectedAudit.id}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {selectedAudit.source_name} ({selectedAudit.timestamp})
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onExportCSV(selectedAudit.records)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:border-teal-500"
              >
                <Download className="w-3.5 h-3.5" /> CSV Export
              </button>
              <button
                onClick={() => onExportPDF(selectedAudit, selectedAudit.records)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold"
              >
                <Download className="w-3.5 h-3.5" /> Clinical PDF
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider border-y border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="py-2.5 px-3">Test Name</th>
                  <th className="py-2.5 px-3">Measured Value</th>
                  <th className="py-2.5 px-3">Unit</th>
                  <th className="py-2.5 px-3">Reference Range</th>
                  <th className="py-2.5 px-3">Range Source</th>
                  <th className="py-2.5 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {selectedAudit.records.map((r, idx) => (
                  <tr key={idx}>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">{r['Test Name']}</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-slate-900 dark:text-white">{r['Measured Value']}</td>
                    <td className="py-2.5 px-3 font-mono text-slate-500">{r.Unit}</td>
                    <td className="py-2.5 px-3 font-mono">{r['Reference Range']}</td>
                    <td className="py-2.5 px-3">{r['Range Source']}</td>
                    <td className="py-2.5 px-3 font-bold">
                      <span className={r.Status.includes('High') ? 'text-rose-600' : r.Status.includes('Low') ? 'text-amber-600' : 'text-emerald-600'}>
                        {r.Status}
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
