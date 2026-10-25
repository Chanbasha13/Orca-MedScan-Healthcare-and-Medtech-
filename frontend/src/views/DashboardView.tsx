import React from 'react';
import {
  FileText,
  Activity,
  AlertTriangle,
  HelpCircle,
  Download,
  FileCheck2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { ReportAudit, BiomarkerRecord } from '../types';

interface DashboardViewProps {
  history: ReportAudit[];
  currentReport: ReportAudit | null;
  onNavigateAnalyze: () => void;
  onLoadBenchmark: () => void;
  onExportCSV: () => void;
  onExportPDF: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  history,
  currentReport,
  onNavigateAnalyze,
  onLoadBenchmark,
  onExportCSV,
  onExportPDF,
}) => {
  const totalAudits = history.length;
  const totalScreened = history.reduce((sum, h) => sum + h.total_count, 0);
  const totalFlagged = history.reduce((sum, h) => sum + h.flagged_count, 0);
  const totalUncertain = history.reduce((sum, h) => sum + h.uncertain_count, 0);
  const totalNormal = history.reduce((sum, h) => sum + h.normal_count, 0);

  const activeRecords = currentReport?.records || [];
  const flaggedItems = activeRecords.filter((r) => r.Category === 'flagged');

  // Calculate percentages for distribution chart
  const normalPct = totalScreened > 0 ? Math.round((totalNormal / totalScreened) * 100) : 0;
  const flaggedPct = totalScreened > 0 ? Math.round((totalFlagged / totalScreened) * 100) : 0;
  const uncertainPct = totalScreened > 0 ? Math.round((totalUncertain / totalScreened) * 100) : 0;

  return (
    <div className="space-y-8 animate-fade-in font-sans">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-ivory-300 dark:border-charcoal-800">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
            Pathologist Workstation
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1">
            Clinical Telemetry Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl">
            Real-time biometric distribution, printed laboratory reference interval verification, and anomaly surveillance.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateAnalyze}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 font-bold text-xs shadow-paper-ivory transition-all"
          >
            <Activity className="w-4 h-4" />
            Analyze New Report
          </button>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory transition-all hover:-translate-y-0.5">
          <div className="flex items-center justify-between text-charcoal-500 dark:text-ivory-400 mb-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Reports Screened</span>
            <FileText className="w-4 h-4 text-forest-700 dark:text-forest-400" />
          </div>
          <div className="text-3xl font-mono font-bold text-charcoal-900 dark:text-ivory-50">
            {totalAudits}
          </div>
          <div className="text-[11px] text-charcoal-500 dark:text-ivory-400 mt-1 flex items-center gap-1 font-sans">
            <Clock className="w-3 h-3 text-forest-700" /> Active session enclave audits
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory transition-all hover:-translate-y-0.5">
          <div className="flex items-center justify-between text-charcoal-500 dark:text-ivory-400 mb-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Biomarkers Screened</span>
            <Activity className="w-4 h-4 text-forest-700 dark:text-forest-400" />
          </div>
          <div className="text-3xl font-mono font-bold text-charcoal-900 dark:text-ivory-50">
            {totalScreened}
          </div>
          <div className="text-[11px] text-clinical-normal mt-1 flex items-center gap-1 font-semibold">
            {totalNormal} in reference interval
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory transition-all hover:-translate-y-0.5">
          <div className="flex items-center justify-between text-charcoal-500 dark:text-ivory-400 mb-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Out-of-Range Flags</span>
            <AlertTriangle className="w-4 h-4 text-clinical-danger" />
          </div>
          <div className={`text-3xl font-mono font-bold ${totalFlagged > 0 ? 'text-clinical-danger' : 'text-charcoal-900 dark:text-ivory-50'}`}>
            {totalFlagged}
          </div>
          <div className="text-[11px] text-charcoal-500 dark:text-ivory-400 mt-1 font-sans">
            Potentially High or Low
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory transition-all hover:-translate-y-0.5">
          <div className="flex items-center justify-between text-charcoal-500 dark:text-ivory-400 mb-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Needs Review</span>
            <HelpCircle className="w-4 h-4 text-charcoal-400" />
          </div>
          <div className="text-3xl font-mono font-bold text-charcoal-900 dark:text-ivory-50">
            {totalUncertain}
          </div>
          <div className="text-[11px] text-charcoal-500 dark:text-ivory-400 mt-1 font-sans">
            Atypical or candidate markers
          </div>
        </div>
      </div>

      {/* Empty State Banner if no audits yet */}
      {totalAudits === 0 && (
        <div className="p-12 text-center rounded-2xl bg-white dark:bg-charcoal-900 border-2 border-dashed border-ivory-300 dark:border-charcoal-800 space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-forest-50 dark:bg-forest-950 flex items-center justify-center text-forest-800 dark:text-forest-300 text-2xl shadow-paper-ivory">
            📑
          </div>
          <h3 className="font-serif text-2xl font-bold text-charcoal-900 dark:text-ivory-50">
            No Medical Reports Screened in this Session
          </h3>
          <p className="text-sm text-charcoal-600 dark:text-ivory-400 max-w-lg mx-auto leading-relaxed">
            Upload laboratory reports in any standard format (PDF, PNG, JPG, WEBP, BMP, TIFF) or load the pre-configured benchmark to immediately populate clinical telemetry.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onNavigateAnalyze}
              className="px-5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 font-bold text-xs shadow-paper-ivory transition-all"
            >
              Analyze a Report
            </button>
            <button
              onClick={onLoadBenchmark}
              className="px-5 py-2.5 rounded-xl border border-ivory-400 dark:border-charcoal-700 bg-white dark:bg-charcoal-800 text-charcoal-800 dark:text-ivory-200 font-bold text-xs hover:border-forest-700 transition-all font-mono shadow-paper-ivory"
            >
              ⚡ Load 1-Click Benchmark (16 Biomarkers)
            </button>
          </div>
        </div>
      )}

      {/* Mid Section: Status Distribution Chart & Priority Out-of-Range Anomaly Cards */}
      {totalAudits > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Biomarker Status Distribution */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50">
                Biomarker Status Distribution
              </h3>
              <span className="text-xs font-mono text-charcoal-500 dark:text-ivory-400">{totalScreened} total</span>
            </div>

            {/* Visual Progress Bar representation */}
            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-clinical-normal flex items-center gap-1.5 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-clinical-normal"></span>
                    Normal (In Reference Interval)
                  </span>
                  <span className="font-mono text-charcoal-800 dark:text-ivory-200">{totalNormal} ({normalPct}%)</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-ivory-200 dark:bg-charcoal-800 overflow-hidden">
                  <div className="h-full bg-clinical-normal rounded-full transition-all duration-500" style={{ width: `${normalPct}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-clinical-danger flex items-center gap-1.5 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-clinical-danger"></span>
                    Potentially High / Low
                  </span>
                  <span className="font-mono text-charcoal-800 dark:text-ivory-200">{totalFlagged} ({flaggedPct}%)</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-ivory-200 dark:bg-charcoal-800 overflow-hidden">
                  <div className="h-full bg-clinical-danger rounded-full transition-all duration-500" style={{ width: `${flaggedPct}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-charcoal-500 dark:text-ivory-400 flex items-center gap-1.5 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-charcoal-400"></span>
                    Needs Review / Atypical
                  </span>
                  <span className="font-mono text-charcoal-800 dark:text-ivory-200">{totalUncertain} ({uncertainPct}%)</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-ivory-200 dark:bg-charcoal-800 overflow-hidden">
                  <div className="h-full bg-charcoal-400 rounded-full transition-all duration-500" style={{ width: `${uncertainPct}%` }}></div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-ivory-200 dark:border-charcoal-800 text-[11px] text-charcoal-500 dark:text-ivory-400 leading-relaxed font-sans">
              💡 <strong>Prioritization Protocol</strong>: Printed report intervals take precedent over general population standard ranges.
            </div>
          </div>

          {/* Priority Out-of-Range Anomaly Cards */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-clinical-danger" />
                Priority Out-of-Range Findings
              </h3>
              <span className="text-xs text-charcoal-500 dark:text-ivory-400 font-mono">
                Active: {currentReport?.source_name || 'Specimen'}
              </span>
            </div>

            {flaggedItems.length > 0 ? (
              <div className="space-y-3">
                {flaggedItems.slice(0, 4).map((item, idx) => {
                  const isHigh = item.Status.includes('High');
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border transition-all ${
                        isHigh
                          ? 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/60'
                          : 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-charcoal-900 dark:text-ivory-50">
                          {item['Test Name']}
                        </span>
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                            isHigh
                              ? 'bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-300'
                              : 'bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300'
                          }`}
                        >
                          {isHigh ? '▲ ' : '▼ '} {item.Status}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-xs text-charcoal-600 dark:text-ivory-400">
                        <span>
                          Measured: <b className="text-charcoal-900 dark:text-ivory-50 font-mono">{item['Measured Value']} {item.Unit}</b>
                        </span>
                        <span className="font-mono text-[11px]">Ref: {item['Reference Range']} {item.Unit}</span>
                      </div>
                      <p className="mt-1 text-[11px] text-charcoal-500 dark:text-ivory-400 italic">
                        {item['Plain Explanation']}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 text-center text-charcoal-500 dark:text-ivory-400">
                <FileCheck2 className="w-8 h-8 text-clinical-normal mx-auto mb-2" />
                <p className="text-sm font-semibold">All indicators within verified reference ranges.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Active Report Table & Export Action Bar */}
      {currentReport && (
        <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-ivory-200 dark:border-charcoal-800">
            <div>
              <span className="text-[10px] font-mono font-bold text-forest-700 dark:text-forest-400 uppercase tracking-wider">
                Audited Document Specimen
              </span>
              <h3 className="font-serif text-xl font-bold text-charcoal-900 dark:text-ivory-50">
                {currentReport.source_name} ({currentReport.source_type})
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onExportCSV}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-ivory-300 dark:border-charcoal-700 hover:border-forest-700 text-xs font-mono font-bold text-charcoal-700 dark:text-ivory-300 hover:bg-ivory-100 dark:hover:bg-charcoal-800 transition-colors shadow-paper-ivory"
              >
                <Download className="w-3.5 h-3.5" /> Export CSV
              </button>
              <button
                onClick={onExportPDF}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-mono font-bold transition-colors shadow-paper-ivory"
              >
                <Download className="w-3.5 h-3.5" /> Clinical PDF
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-ivory-100 dark:bg-charcoal-800/60 text-charcoal-600 dark:text-ivory-300 font-mono font-bold uppercase tracking-wider border-y border-ivory-200 dark:border-charcoal-800">
                <tr>
                  <th className="py-3 px-4 font-serif font-bold text-xs capitalize">Biomarker</th>
                  <th className="py-3 px-4">Measured</th>
                  <th className="py-3 px-4">Unit</th>
                  <th className="py-3 px-4">Reference Interval</th>
                  <th className="py-3 px-4">Calibration Source</th>
                  <th className="py-3 px-4">Clinical Classification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ivory-200 dark:divide-charcoal-800 text-charcoal-700 dark:text-ivory-300">
                {activeRecords.map((row, idx) => {
                  const isHigh = row.Status.includes('High');
                  const isLow = row.Status.includes('Low');
                  const isNorm = row.Status === 'Normal';

                  return (
                    <tr key={idx} className="hover:bg-ivory-50/50 dark:hover:bg-charcoal-800/40 transition-colors">
                      <td className="py-3 px-4 font-semibold text-charcoal-900 dark:text-ivory-50">
                        {row['Test Name']}
                        <span className="block text-[10px] text-charcoal-400 font-mono font-normal">Orig: {row['Original Label']}</span>
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-charcoal-900 dark:text-ivory-50">
                        {row['Measured Value']}
                      </td>
                      <td className="py-3 px-4 font-mono text-charcoal-500 dark:text-ivory-400">
                        {row.Unit}
                      </td>
                      <td className="py-3 px-4 font-mono">
                        {row['Reference Range']}
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-ivory-200 dark:bg-charcoal-800 text-charcoal-600 dark:text-ivory-400 font-mono">
                          {row['Range Source']}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-mono font-bold ${
                            isHigh
                              ? 'bg-rose-50 dark:bg-rose-950/60 text-clinical-danger border border-rose-200 dark:border-rose-900'
                              : isLow
                              ? 'bg-amber-50 dark:bg-amber-950/60 text-clinical-warning border border-amber-200 dark:border-amber-900'
                              : isNorm
                              ? 'bg-emerald-50 dark:bg-emerald-950/60 text-clinical-normal border border-emerald-200 dark:border-emerald-900'
                              : 'bg-ivory-200 dark:bg-charcoal-800 text-charcoal-700 dark:text-ivory-300'
                          }`}
                        >
                          {isHigh && '▲ '}
                          {isLow && '▼ '}
                          {isNorm && '✓ '}
                          {row.Status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
