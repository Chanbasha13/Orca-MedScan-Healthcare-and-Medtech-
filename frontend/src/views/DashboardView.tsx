import React from 'react';
import {
  FileText,
  Activity,
  AlertTriangle,
  HelpCircle,
  ArrowUpRight,
  Download,
  FileCheck2,
  TrendingUp,
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
    <div className="space-y-8 animate-fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Clinical Intelligence Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Real-time biometric distribution, calibrated reference verification, and anomaly surveillance.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateAnalyze}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-all"
          >
            <Activity className="w-4 h-4" />
            Analyze New Report
          </button>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:translate-y-[-2px]">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Reports Screened</span>
            <FileText className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {totalAudits}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
            <Clock className="w-3 h-3" /> Active session enclave audits
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:translate-y-[-2px]">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Biomarkers Screened</span>
            <Activity className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {totalScreened}
          </div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1 font-semibold">
            {totalNormal} in reference interval
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:translate-y-[-2px]">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Out-of-Range Flags</span>
            <AlertTriangle className="w-4 h-4 text-rose-600" />
          </div>
          <div className={`text-3xl font-extrabold ${totalFlagged > 0 ? 'text-rose-600 dark:text-rose-400' : 'text-slate-900 dark:text-white'}`}>
            {totalFlagged}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Potentially High or Low
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:translate-y-[-2px]">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Needs Review</span>
            <HelpCircle className="w-4 h-4 text-slate-500" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {totalUncertain}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Atypical or candidate markers
          </div>
        </div>
      </div>

      {/* Empty State Banner if no audits yet */}
      {totalAudits === 0 && (
        <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 space-y-4">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600 text-2xl">
            📑
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            No Medical Reports Screened in this Session
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            Upload laboratory reports in any standard format (PDF, PNG, JPG, WEBP, BMP, TIFF) or load the pre-configured benchmark to immediately populate clinical telemetry.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onNavigateAnalyze}
              className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-all"
            >
              Analyze a Report
            </button>
            <button
              onClick={onLoadBenchmark}
              className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-xs hover:border-teal-500 transition-all"
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
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Biomarker Status Distribution
              </h3>
              <span className="text-xs font-mono text-slate-500">{totalScreened} total</span>
            </div>

            {/* Visual Progress Bar representation */}
            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    Normal (In Reference Interval)
                  </span>
                  <span className="font-mono">{totalNormal} ({normalPct}%)</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${normalPct}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    Potentially High / Low
                  </span>
                  <span className="font-mono">{totalFlagged} ({flaggedPct}%)</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full bg-rose-500 rounded-full transition-all duration-500" style={{ width: `${flaggedPct}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                    Needs Review / Atypical
                  </span>
                  <span className="font-mono">{totalUncertain} ({uncertainPct}%)</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full bg-slate-400 rounded-full transition-all duration-500" style={{ width: `${uncertainPct}%` }}></div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              💡 Reference comparison priority: Report printed laboratory intervals are applied first. Fallback standard adult norms applied when omitted.
            </div>
          </div>

          {/* Priority Out-of-Range Anomaly Cards */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-500" />
                Priority Out-of-Range Findings
              </h3>
              <span className="text-xs text-slate-500 font-mono">
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
                        <span className="font-bold text-sm text-slate-900 dark:text-white">
                          {item['Test Name']}
                        </span>
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            isHigh
                              ? 'bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-300'
                              : 'bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300'
                          }`}
                        >
                          {isHigh ? '▲ ' : '▼ '} {item.Status}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                        <span>
                          Measured: <b className="text-slate-900 dark:text-white font-mono">{item['Measured Value']} {item.Unit}</b>
                        </span>
                        <span>Ref Range: {item['Reference Range']} {item.Unit} ({item['Range Source']})</span>
                      </div>
                      <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 italic">
                        {item['Plain Explanation']}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                <FileCheck2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <p className="text-sm font-semibold">All indicators in verified reference ranges.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Active Report Table & Export Action Bar */}
      {currentReport && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                Audited Document Specimen
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {currentReport.source_name} ({currentReport.source_type})
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onExportCSV}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-teal-500 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Export CSV
              </button>
              <button
                onClick={onExportPDF}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" /> Clinical PDF
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider border-y border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="py-3 px-4">Test Name</th>
                  <th className="py-3 px-4">Measured Value</th>
                  <th className="py-3 px-4">Unit</th>
                  <th className="py-3 px-4">Reference Range</th>
                  <th className="py-3 px-4">Range Calibration</th>
                  <th className="py-3 px-4">Clinical Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {activeRecords.map((row, idx) => {
                  const isHigh = row.Status.includes('High');
                  const isLow = row.Status.includes('Low');
                  const isNorm = row.Status === 'Normal';

                  return (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                        {row['Test Name']}
                        <span className="block text-[10px] text-slate-400 font-normal">Original: {row['Original Label']}</span>
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-slate-900 dark:text-white">
                        {row['Measured Value']}
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-500">
                        {row.Unit}
                      </td>
                      <td className="py-3 px-4 font-mono">
                        {row['Reference Range']}
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                          {row['Range Source']}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold ${
                            isHigh
                              ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900'
                              : isLow
                              ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900'
                              : isNorm
                              ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
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
