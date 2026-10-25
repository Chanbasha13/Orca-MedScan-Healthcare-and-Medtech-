import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  FileText,
  FileCheck2,
  AlertCircle,
  Download,
  Filter,
  Search,
  Zap,
  ArrowRight
} from 'lucide-react';
import { BiomarkerRecord, ReportAudit } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface AnalyzeViewProps {
  onAddReportToHistory: (report: ReportAudit) => void;
  onExportCSV: (records: BiomarkerRecord[]) => void;
  onExportPDF: (meta: any, records: BiomarkerRecord[]) => void;
}

export const AnalyzeView: React.FC<AnalyzeViewProps> = ({
  onAddReportToHistory,
  onExportCSV,
  onExportPDF,
}) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'upload' | 'paste' | 'benchmark'>('upload');
  const [pastedText, setPastedText] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedStream, setExtractedStream] = useState('');
  const [extractionMethod, setExtractionMethod] = useState('');
  const [analysisResult, setAnalysisResult] = useState<ReportAudit | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<'all' | 'flagged' | 'normal' | 'uncertain'>('all');

  const fileInputRef = useRef<HTMLInputElement>(null);

  // File selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setErrorMessage('');
    }
  };

  // Drag & drop handlers
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
      setErrorMessage('');
    }
  };

  // Run File Extraction & Analysis
  const handleProcessFile = async () => {
    if (!selectedFile) return;
    setIsProcessing(true);
    setErrorMessage('');

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const res = await fetch('/api/analyze/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setIsProcessing(false);

      if (!res.ok) {
        setErrorMessage(data.detail || 'Extraction failed.');
        return;
      }

      const reportAudit: ReportAudit = {
        id: `AUDIT-${Date.now().toString().slice(-4)}`,
        timestamp: data.timestamp,
        source_name: data.source_name,
        source_type: data.source_type,
        extraction_method: data.extraction_method,
        records: data.records,
        total_count: data.total_count,
        normal_count: data.normal_count,
        flagged_count: data.flagged_count,
        uncertain_count: data.uncertain_count,
        raw_text: data.raw_text,
        diagnostics: data.diagnostics,
      };

      setExtractedStream(data.raw_text);
      setExtractionMethod(data.extraction_method);
      setAnalysisResult(reportAudit);
      onAddReportToHistory(reportAudit);
    } catch (err: any) {
      setIsProcessing(false);
      setErrorMessage('Network or server error: ' + err.message);
    }
  };

  // Run Pasted Text Analysis
  const handleProcessText = async (textOverride?: string) => {
    const textToAnalyze = (typeof textOverride === 'string' ? textOverride : pastedText).trim();
    if (!textToAnalyze) {
      setErrorMessage('Please enter or paste report text.');
      return;
    }
    setIsProcessing(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/analyze/text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: textToAnalyze,
          source_label: typeof textOverride === 'string' ? 'Edited Clinical Stream' : 'Direct Clinical Stream',
        }),
      });

      const data = await res.json();
      setIsProcessing(false);

      if (!res.ok) {
        setErrorMessage(data.detail || 'Analysis failed.');
        return;
      }

      const reportAudit: ReportAudit = {
        id: `AUDIT-${Date.now().toString().slice(-4)}`,
        timestamp: data.timestamp,
        source_name: data.source_name,
        source_type: data.source_type,
        extraction_method: data.extraction_method,
        records: data.records,
        total_count: data.total_count,
        normal_count: data.normal_count,
        flagged_count: data.flagged_count,
        uncertain_count: data.uncertain_count,
        raw_text: data.raw_text,
        diagnostics: data.diagnostics,
      };

      setExtractedStream(data.raw_text);
      setExtractionMethod(data.extraction_method);
      setAnalysisResult(reportAudit);
      onAddReportToHistory(reportAudit);
    } catch (err: any) {
      setIsProcessing(false);
      setErrorMessage('Network or server error: ' + err.message);
    }
  };

  // Load Benchmark Directly
  const handleLoadBenchmark = async () => {
    setIsProcessing(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/benchmark');
      const data = await res.json();
      setIsProcessing(false);

      const reportAudit: ReportAudit = {
        id: `AUDIT-BENCH`,
        timestamp: data.timestamp,
        source_name: data.source_name,
        source_type: data.source_type,
        extraction_method: 'Synthetic Clinical Benchmark',
        records: data.records,
        total_count: data.total_count,
        normal_count: data.normal_count,
        flagged_count: data.flagged_count,
        uncertain_count: data.uncertain_count,
        raw_text: data.raw_text,
        diagnostics: data.diagnostics,
      };

      setExtractedStream(data.raw_text);
      setExtractionMethod('Synthetic Benchmark');
      setAnalysisResult(reportAudit);
      onAddReportToHistory(reportAudit);
    } catch (err: any) {
      setIsProcessing(false);
      setErrorMessage('Failed to load benchmark: ' + err.message);
    }
  };

  // Filter & Search records
  const filteredRecords = (analysisResult?.records || []).filter((record) => {
    const matchesSearch =
      record['Test Name'].toLowerCase().includes(searchQuery.toLowerCase()) ||
      record['Original Label'].toLowerCase().includes(searchQuery.toLowerCase());
    if (filterCategory === 'all') return matchesSearch;
    return matchesSearch && record.Category === filterCategory;
  });

  return (
    <div className="space-y-8 animate-fade-in font-sans">
      {/* View Header */}
      <div className="pb-5 border-b border-ivory-300 dark:border-charcoal-800">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
          Document Intake Enclave
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1">
          {t('ingest_title')}
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl">
          {t('ingest_subtitle')}
        </p>
      </div>

      {/* STEP 1: Ingestion Zone */}
      <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-5">
        <div className="flex items-center justify-between border-b border-ivory-200 dark:border-charcoal-800 pb-3">
          <span className="text-xs font-mono font-bold text-forest-700 dark:text-forest-400 uppercase tracking-wider">
            {t('ingest_phase1')}
          </span>
          <div className="flex rounded-xl p-1 bg-ivory-200 dark:bg-charcoal-800 text-xs font-mono font-bold">
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeTab === 'upload' ? 'bg-white dark:bg-charcoal-900 text-forest-800 dark:text-forest-300 shadow-paper-ivory' : 'text-charcoal-500 dark:text-ivory-400'
              }`}
            >
              {t('ingest_tab_upload')}
            </button>
            <button
              onClick={() => setActiveTab('paste')}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeTab === 'paste' ? 'bg-white dark:bg-charcoal-900 text-forest-800 dark:text-forest-300 shadow-paper-ivory' : 'text-charcoal-500 dark:text-ivory-400'
              }`}
            >
              {t('ingest_tab_paste')}
            </button>
            <button
              onClick={() => setActiveTab('benchmark')}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeTab === 'benchmark' ? 'bg-white dark:bg-charcoal-900 text-forest-800 dark:text-forest-300 shadow-paper-ivory' : 'text-charcoal-500 dark:text-ivory-400'
              }`}
            >
              {t('ingest_tab_benchmark')}
            </button>
          </div>
        </div>

        {/* Tab 1: Drag-and-Drop File Upload */}
        {activeTab === 'upload' && (
          <div className="space-y-4">
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-ivory-300 dark:border-charcoal-700 hover:border-forest-700 rounded-2xl p-8 text-center cursor-pointer transition-all bg-ivory-50/60 dark:bg-charcoal-950/40"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.png,.jpg,.jpeg,.webp,.bmp,.tiff,.tif,.heic"
                onChange={handleFileChange}
                className="hidden"
              />
              <UploadCloud className="w-10 h-10 text-forest-700 dark:text-forest-400 mx-auto mb-3" />
              <p className="text-sm font-serif font-bold text-charcoal-900 dark:text-ivory-100">
                {selectedFile ? selectedFile.name : t('ingest_drop_title')}
              </p>
              <p className="text-xs text-charcoal-500 dark:text-ivory-400 mt-1 font-mono">
                {t('ingest_drop_sub')}
              </p>
            </div>

            {selectedFile && (
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-forest-50 dark:bg-forest-950/50 border border-forest-200 dark:border-forest-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-forest-950 dark:text-forest-200">
                  <FileText className="w-4 h-4 text-forest-700 dark:text-forest-400" />
                  <span>{selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)</span>
                </div>
                <button
                  onClick={handleProcessFile}
                  disabled={isProcessing}
                  className="px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-bold transition-all shadow-paper-ivory flex items-center gap-2"
                >
                  {isProcessing ? t('ingest_btn_processing') : t('ingest_btn_run')}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Paste Raw Lab Text */}
        {activeTab === 'paste' && (
          <div className="space-y-4">
            <textarea
              rows={6}
              value={pastedText}
              onChange={(e) => setPastedText(e.target.value)}
              placeholder="Paste raw laboratory panel, metabolic panel, or pathology text stream..."
              className="w-full p-4 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-forest-600"
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleProcessText()}
                disabled={isProcessing || !pastedText.trim()}
                className="px-5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-bold transition-all shadow-paper-ivory flex items-center gap-2"
              >
                {isProcessing ? t('ingest_btn_processing') : t('ingest_tab_paste')}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: 1-Click Benchmark */}
        {activeTab === 'benchmark' && (
          <div className="p-6 rounded-xl bg-ivory-100 dark:bg-charcoal-950 border border-ivory-300 dark:border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif font-bold text-base text-charcoal-900 dark:text-ivory-100 flex items-center gap-2">
                <Zap className="w-4 h-4 text-forest-700 dark:text-forest-400" />
                {t('ingest_benchmark_title')}
              </h4>
              <p className="text-xs text-charcoal-600 dark:text-ivory-400 mt-1 max-w-lg">
                {t('ingest_benchmark_desc')}
              </p>
            </div>
            <button
              onClick={handleLoadBenchmark}
              disabled={isProcessing}
              className="px-5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-mono font-bold shadow-paper-ivory transition-all whitespace-nowrap"
            >
              {isProcessing ? t('ingest_btn_processing') : t('ingest_benchmark_btn')}
            </button>
          </div>
        )}

        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>

      {/* STEP 2: Pre-Analysis Text Review & Diagnostics */}
      {extractedStream && (
        <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-ivory-200 dark:border-charcoal-800">
            <div>
              <span className="text-xs font-mono font-bold text-forest-700 dark:text-forest-400 uppercase tracking-wider">
                {t('ingest_phase2')}
              </span>
              <p className="text-xs text-charcoal-500 dark:text-ivory-400 mt-0.5">
                Engine: <b className="font-mono text-charcoal-800 dark:text-ivory-200">{extractionMethod}</b> • Editable before final commit
              </p>
            </div>
            <button
              onClick={() => handleProcessText(extractedStream)}
              disabled={isProcessing || !extractedStream.trim()}
              className="px-3.5 py-1.5 rounded-lg border border-ivory-300 dark:border-charcoal-700 text-xs font-bold text-charcoal-700 dark:text-ivory-300 hover:border-forest-700 hover:bg-forest-50 dark:hover:bg-forest-950/40 transition-colors"
            >
              {isProcessing ? 'Analyzing...' : 'Re-Analyze Text Stream'}
            </button>
          </div>

          <textarea
            rows={5}
            value={extractedStream}
            onChange={(e) => setExtractedStream(e.target.value)}
            className="w-full p-4 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 font-mono text-xs focus:outline-none"
          />
        </div>
      )}

      {/* STEP 3: Screening Results Table */}
      {analysisResult && (
        <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-ivory-200 dark:border-charcoal-800">
            <div>
              <span className="text-xs font-mono font-bold text-forest-700 dark:text-forest-400 uppercase tracking-wider">
                {t('ingest_phase3')}
              </span>
              <h3 className="font-serif text-2xl font-bold text-charcoal-900 dark:text-ivory-50 mt-1">
                {analysisResult.source_name} ({analysisResult.source_type})
              </h3>
              <p className="text-xs font-mono text-charcoal-500 dark:text-ivory-400 mt-0.5">
                {analysisResult.total_count} {t('dash_biomarkers_screened')} • {analysisResult.flagged_count} {t('dash_out_of_range')} • {analysisResult.normal_count} {t('dash_normal')}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onExportCSV(filteredRecords)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-ivory-300 dark:border-charcoal-700 hover:border-forest-700 text-xs font-mono font-bold text-charcoal-700 dark:text-ivory-300 hover:bg-ivory-100 dark:hover:bg-charcoal-800 transition-colors shadow-paper-ivory"
              >
                <Download className="w-3.5 h-3.5" /> {t('dash_export_csv')}
              </button>
              <button
                onClick={() => onExportPDF(analysisResult, filteredRecords)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-mono font-bold transition-colors shadow-paper-ivory"
              >
                <Download className="w-3.5 h-3.5" /> {t('dash_clinical_pdf')}
              </button>
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-charcoal-400" />
              <input
                type="text"
                placeholder={t('gen_search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 text-xs focus:outline-none focus:ring-1 focus:ring-forest-600"
              />
            </div>

            <div className="flex rounded-lg p-1 bg-ivory-200 dark:bg-charcoal-800 text-xs font-mono font-bold w-full sm:w-auto">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-3 py-1 rounded-md transition-all ${
                  filterCategory === 'all' ? 'bg-white dark:bg-charcoal-900 text-forest-800 dark:text-forest-300 shadow-paper-ivory' : 'text-charcoal-500'
                }`}
              >
                {t('gen_all')} ({analysisResult.total_count})
              </button>
              <button
                onClick={() => setFilterCategory('flagged')}
                className={`px-3 py-1 rounded-md transition-all ${
                  filterCategory === 'flagged' ? 'bg-white dark:bg-charcoal-900 text-clinical-danger shadow-paper-ivory' : 'text-charcoal-500'
                }`}
              >
                {t('gen_flags')} ({analysisResult.flagged_count})
              </button>
              <button
                onClick={() => setFilterCategory('normal')}
                className={`px-3 py-1 rounded-md transition-all ${
                  filterCategory === 'normal' ? 'bg-white dark:bg-charcoal-900 text-clinical-normal shadow-paper-ivory' : 'text-charcoal-500'
                }`}
              >
                {t('gen_normal')} ({analysisResult.normal_count})
              </button>
              {analysisResult.uncertain_count > 0 && (
                <button
                  onClick={() => setFilterCategory('uncertain')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    filterCategory === 'uncertain' ? 'bg-white dark:bg-charcoal-900 text-amber-700 dark:text-amber-400 shadow-paper-ivory' : 'text-charcoal-500'
                  }`}
                >
                  Review ({analysisResult.uncertain_count})
                </button>
              )}
            </div>
          </div>

          {/* Results Table or Zero-Biomarker Informational State */}
          {analysisResult.total_count === 0 ? (
            <div className="p-8 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/80 text-center space-y-3 my-4">
              <AlertCircle className="w-9 h-9 text-amber-600 dark:text-amber-400 mx-auto" />
              <h4 className="font-serif font-bold text-lg text-charcoal-900 dark:text-ivory-100">
                0 Standard Clinical Biomarkers Recognized
              </h4>
              <p className="text-xs text-charcoal-600 dark:text-ivory-300 max-w-xl mx-auto leading-relaxed">
                {analysisResult.raw_text.length > 0 ? (
                  <>
                    The document was processed and text is visible in <b>Phase 2 above ({analysisResult.raw_text.length} characters)</b>, but no supported laboratory tests (e.g., Hemoglobin, Glucose, Lipid Profile, Renal Function) were detected with parseable numeric measurements.
                  </>
                ) : (
                  <>No readable laboratory text could be recovered from this document. Please verify file format, image contrast, or scan resolution.</>
                )}
              </p>
              <p className="text-[11px] text-charcoal-500 dark:text-ivory-400 font-mono">
                Diagnostic status: {analysisResult.diagnostics?.status_code || 'INSPECT_STREAM'}
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => {
                    const el = document.querySelector('textarea');
                    el?.focus();
                  }}
                  className="px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-bold transition-all shadow-paper-ivory"
                >
                  Edit Extracted Text in Phase 2
                </button>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-ivory-100 dark:bg-charcoal-800/60 text-charcoal-600 dark:text-ivory-300 font-mono font-bold uppercase tracking-wider border-y border-ivory-200 dark:border-charcoal-800">
                  <tr>
                    <th className="py-3 px-4 font-serif font-bold text-xs capitalize">{t('dash_th_biomarker')}</th>
                    <th className="py-3 px-4">{t('dash_th_measured')}</th>
                    <th className="py-3 px-4">{t('dash_th_unit')}</th>
                    <th className="py-3 px-4">{t('dash_th_ref_interval')}</th>
                    <th className="py-3 px-4">{t('dash_th_calibration')}</th>
                    <th className="py-3 px-4">{t('dash_th_classification')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ivory-200 dark:divide-charcoal-800 text-charcoal-700 dark:text-ivory-300">
                  {filteredRecords.map((row, idx) => {
                    const isHigh = row.Status.includes('High');
                    const isLow = row.Status.includes('Low');
                    const isNorm = row.Status === 'Normal';
                    const isUncertain = row.Category === 'uncertain' || row.Status.includes('Uncertain');

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
                                : isUncertain
                                ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                                : 'bg-ivory-200 dark:bg-charcoal-800 text-charcoal-700 dark:text-ivory-300'
                            }`}
                          >
                            {isHigh && '▲ '}
                            {isLow && '▼ '}
                            {isNorm && '✓ '}
                            {isUncertain && '⚠ '}
                            {row.Status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
