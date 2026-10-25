import React, { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import { Header } from './components/Header';
import { Sidebar, NavView } from './components/Sidebar';
import { LandingPage } from './views/LandingPage';
import { AuthModal } from './views/AuthModal';
import { DashboardView } from './views/DashboardView';
import { AnalyzeView } from './views/AnalyzeView';
import { DiagnosticsView } from './views/DiagnosticsView';
import { HistoryView } from './views/HistoryView';
import { SettingsView } from './views/SettingsView';
import { SafetyView } from './views/SafetyView';
import { ReportAudit, BiomarkerRecord } from './types';

export const App: React.FC = () => {
  const { isAuthenticated, loginEvaluatorFastPass } = useAuth();

  const [route, setRoute] = useState<'landing' | 'app'>('landing');
  const [navView, setNavView] = useState<NavView>('Dashboard');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Session history state
  const [history, setHistory] = useState<ReportAudit[]>(() => {
    try {
      const saved = localStorage.getItem('orca_audits');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [currentReport, setCurrentReport] = useState<ReportAudit | null>(() => {
    return history.length > 0 ? history[history.length - 1] : null;
  });

  const [ocrActive, setOcrActive] = useState(true);

  // Sync history with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('orca_audits', JSON.stringify(history));
    } catch (err) {
      console.error('Error saving audits to localStorage:', err);
    }
  }, [history]);

  // When authenticated, default to app route
  useEffect(() => {
    if (isAuthenticated && route === 'landing') {
      setRoute('app');
    }
  }, [isAuthenticated]);

  // Check OCR engine status
  useEffect(() => {
    fetch('/api/system/status')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.tesseract) {
          setOcrActive(data.tesseract.available);
        }
      })
      .catch(() => setOcrActive(true));
  }, []);

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleAddReportToHistory = (report: ReportAudit) => {
    setHistory((prev) => [...prev, report]);
    setCurrentReport(report);
  };

  const handleClearHistory = () => {
    setHistory([]);
    setCurrentReport(null);
    localStorage.removeItem('orca_audits');
  };

  // 1-Click Benchmark action
  const handleLaunchBenchmark = async () => {
    if (!isAuthenticated) {
      await loginEvaluatorFastPass();
    }
    try {
      const res = await fetch('/api/benchmark');
      const data = await res.json();
      const report: ReportAudit = {
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
      handleAddReportToHistory(report);
      setRoute('app');
      setNavView('Dashboard');
    } catch (err) {
      console.error('Failed to load benchmark:', err);
    }
  };

  // CSV Export
  const handleExportCSV = async (recordsToExport?: BiomarkerRecord[]) => {
    const records = recordsToExport || currentReport?.records || [];
    if (!records.length) return;
    try {
      const res = await fetch('/api/export/csv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ records }),
      });
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `orca_biomarkers_${currentReport?.id || 'export'}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error('Error downloading CSV:', err);
    }
  };

  // PDF Export
  const handleExportPDF = async (metaToExport?: any, recordsToExport?: BiomarkerRecord[]) => {
    const meta = metaToExport || currentReport || { id: 'AUDIT', source_name: 'Medical Specimen' };
    const records = recordsToExport || currentReport?.records || [];
    if (!records.length) return;
    try {
      const res = await fetch('/api/export/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ meta, records }),
      });
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `orca_clinical_summary_${meta.id || 'export'}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error('Error downloading PDF:', err);
    }
  };

  // If user is on landing page or not authenticated
  if (route === 'landing' || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
        <Header
          onOpenAuth={handleOpenAuth}
          onGoToApp={() => setRoute('app')}
        />
        <main className="flex-1">
          <LandingPage
            onOpenAuth={handleOpenAuth}
            onLaunchBenchmark={handleLaunchBenchmark}
            onExploreWorkflow={() => {
              const el = document.getElementById('workflow-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </main>
        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          initialMode={authMode}
          onSuccess={() => setRoute('app')}
        />
      </div>
    );
  }

  // Authenticated Enclave Workspace
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex">
      {/* Persistent Left Sidebar */}
      <Sidebar
        currentView={navView}
        onSelectView={(v) => setNavView(v)}
        auditCount={history.length}
        ocrActive={ocrActive}
        onLoadBenchmark={handleLaunchBenchmark}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 min-h-screen flex flex-col ${
          isSidebarCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        <header className="h-16 px-6 sm:px-8 border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-teal-600 dark:text-teal-400">
              Active Workspace
            </span>
            <span className="text-slate-400">/</span>
            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
              {navView}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setRoute('landing')}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              Public Overview
            </button>
            <button
              onClick={() => {
                setNavView('Analyze Report');
              }}
              className="px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-all"
            >
              + Ingest Report
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 sm:p-8 max-w-7xl w-full mx-auto">
          {navView === 'Dashboard' && (
            <DashboardView
              history={history}
              currentReport={currentReport}
              onNavigateAnalyze={() => setNavView('Analyze Report')}
              onLoadBenchmark={handleLaunchBenchmark}
              onExportCSV={() => handleExportCSV()}
              onExportPDF={() => handleExportPDF()}
            />
          )}

          {navView === 'Analyze Report' && (
            <AnalyzeView
              onAddReportToHistory={handleAddReportToHistory}
              onExportCSV={handleExportCSV}
              onExportPDF={handleExportPDF}
            />
          )}

          {navView === 'Extraction Diagnostics' && (
            <DiagnosticsView currentReport={currentReport} />
          )}

          {navView === 'Report History' && (
            <HistoryView
              history={history}
              onSelectAudit={(report) => {
                setCurrentReport(report);
                setNavView('Dashboard');
              }}
              onClearHistory={handleClearHistory}
              onExportCSV={handleExportCSV}
              onExportPDF={handleExportPDF}
            />
          )}

          {navView === 'Settings' && (
            <SettingsView
              onClearSessionCache={handleClearHistory}
              historyCount={history.length}
            />
          )}

          {navView === 'Clinical Safety' && <SafetyView />}
        </main>
      </div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
        onSuccess={() => setRoute('app')}
      />
    </div>
  );
};
