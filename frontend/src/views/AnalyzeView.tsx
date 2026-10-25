import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  FileText,
  FileCheck2,
  AlertCircle,
  Download,
  Filter,
  Search,
  Sparkles,
  Zap,
  ArrowRight,
  RefreshCw,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { BiomarkerRecord, ReportAudit } from '../types';
import { ThreeDocumentStack } from '../components/ThreeDocumentStack';

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
  const handleProcessText = async () => {
    if (!pastedText.trim()) {
      setErrorMessage('Please enter or paste report text.');
      return;
    }
    setIsProcessing(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/analyze/text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: pastedText, source_label: 'Direct Clinical Stream' }),
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
    <div className="space-y-8 animate-fade-in">
      {/* View Header */}
      <div className="pb-4 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Clinical Report Ingestion & Verification
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Upload multi-format clinical documents or paste laboratory text for optical character recognition and reference-range screening.
        </p>
      </div>

      {/* STEP 1: Ingestion Zone */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
            Step 1 • Document Ingestion Zone
          </span>
          <div className="flex rounded-lg p-1 bg-slate-100 dark:bg-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-3 py-1 rounded-md transition-all ${
                activeTab === 'upload' ? 'bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-xs' : 'text-slate-500'
              }`}
            >
              Upload Document
            </button>
            <button
              onClick={() => setActiveTab('paste')}
              className={`px-3 py-1 rounded-md transition-all ${
                activeTab === 'paste' ? 'bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-xs' : 'text-slate-500'
              }`}
            >
              Paste Text
            </button>
            <button
              onClick={() => setActiveTab('benchmark')}
              className={`px-3 py-1 rounded-md transition-all ${
                activeTab === 'benchmark' ? 'bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-xs' : 'text-slate-500'
              }`}
            >
              1-Click Benchmark
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
              className="border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-teal-500 rounded-2xl p-8 text-center cursor-pointer transition-all bg-slate-50/50 dark:bg-slate-950/50"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.png,.jpg,.jpeg,.webp,.bmp,.tiff,.tif,.heic"
                onChange={handleFileChange}
                className="hidden"
              />
              <UploadCloud className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {selectedFile ? selectedFile.name : 'Drag and drop medical report here, or click to browse'}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Supported: PDF (digital & scanned OCR), PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC
              </p>
            </div>

            {selectedFile && (
              <div className="flex items-center justify-between p-3 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-teal-900 dark:text-teal-200">
                  <FileText className="w-4 h-4 text-teal-600" />
                  <span>{selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)</span>
                </div>
                <button
                  onClick={handleProcessFile}
                  disabled={isProcessing}
                  className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2"
                >
                  {isProcessing ? 'Screening Document...' : 'Run Extraction & Verification'}
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
              className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div className="flex justify-end">
              <button
                onClick={handleProcessText}
                disabled={isProcessing || !pastedText.trim()}
                className="px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2"
              >
                {isProcessing ? 'Analyzing...' : 'Parse Clinical Text'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: 1-Click Benchmark */}
        {activeTab === 'benchmark' && (
          <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-teal-600" />
                Metropolis Pathology Benchmark (MET-98421)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Pre-configured 16-biomarker panel with mixed normal, low, and elevated results.
              </p>
            </div>
            <button
              onClick={handleLoadBenchmark}
              disabled={isProcessing}
              className="px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-sm whitespace-nowrap"
            >
              {isProcessing ? 'Loading Benchmark...' : 'Load Benchmark Panel'}
            </button>
          </div>
        )}

        {/* Error Callout */}
        {errorMessage && (
          <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-medium flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>

      {/* STEP 2: Pre-Analysis Text Stream & 3D Sheet Preview */}
      {extractedStream && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase">
                3D Document Sheet Inspection
              </span>
              <span className="text-[10px] text-slate-400 font-mono">POINTER TILT ACTIVE</span>
            </div>
            <ThreeDocumentStack statusText={`INGESTED: ${extractionMethod}`} />
          </div>

          <div className="lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase">
                Extracted Stream Buffer ({extractionMethod})
              </span>
              <span className="text-[11px] text-slate-500 font-mono">{extractedStream.length} chars screened</span>
            </div>
            <textarea
              rows={11}
              value={extractedStream}
              onChange={(e) => setExtractedStream(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div className="flex justify-between items-center text-xs text-slate-500 pt-1">
              <span>Edit any OCR misread character above if needed.</span>
              <button
                onClick={() => {
                  setPastedText(extractedStream);
                  handleProcessText();
                }}
                className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-teal-500 font-bold text-xs text-slate-700 dark:text-slate-300"
              >
                Re-screen Stream
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3 & 4: Verified Biomarker Results Table */}
      {analysisResult && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                Step 3 & 4 • Verified Clinical Findings
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {analysisResult.source_name} ({analysisResult.records.length} Recognized Biomarkers)
              </h3>
            </div>

            {/* Export Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onExportCSV(analysisResult.records)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-teal-500 text-xs font-bold text-slate-700 dark:text-slate-300"
              >
                <Download className="w-3.5 h-3.5" /> CSV Export
              </button>
              <button
                onClick={() => onExportPDF(analysisResult, analysisResult.records)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5" /> Clinical PDF
              </button>
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search biomarker or label..."
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="flex rounded-lg p-1 bg-slate-100 dark:bg-slate-800 text-xs font-bold w-full sm:w-auto">
              <button
                onClick={() => setFilterCategory('all')}
                className={`flex-1 sm:flex-none px-3 py-1 rounded-md transition-all ${
                  filterCategory === 'all' ? 'bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-xs' : 'text-slate-500'
                }`}
              >
                All ({analysisResult.records.length})
              </button>
              <button
                onClick={() => setFilterCategory('flagged')}
                className={`flex-1 sm:flex-none px-3 py-1 rounded-md transition-all ${
                  filterCategory === 'flagged' ? 'bg-white dark:bg-slate-900 text-rose-600 shadow-xs' : 'text-slate-500'
                }`}
              >
                Out-of-Range ({analysisResult.flagged_count})
              </button>
              <button
                onClick={() => setFilterCategory('normal')}
                className={`flex-1 sm:flex-none px-3 py-1 rounded-md transition-all ${
                  filterCategory === 'normal' ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-xs' : 'text-slate-500'
                }`}
              >
                Normal ({analysisResult.normal_count})
              </button>
            </div>
          </div>

          {/* Results Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider border-y border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="py-3 px-4">Standardized Biomarker</th>
                  <th className="py-3 px-4">Measured Value</th>
                  <th className="py-3 px-4">Unit</th>
                  <th className="py-3 px-4">Calibrated Interval</th>
                  <th className="py-3 px-4">Calibration Source</th>
                  <th className="py-3 px-4">Clinical Classification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {filteredRecords.map((row, idx) => {
                  const isHigh = row.Status.includes('High');
                  const isLow = row.Status.includes('Low');
                  const isNorm = row.Status === 'Normal';

                  return (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-900 dark:text-white">
                          {row['Test Name']}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          OCR Matched: {row['Original Label']}
                        </div>
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
