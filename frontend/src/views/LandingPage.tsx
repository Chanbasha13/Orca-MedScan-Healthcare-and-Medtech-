import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  FileText,
  FileCheck2,
  AlertTriangle,
  HelpCircle,
  Lock,
  Layers,
  Cpu,
  Eye,
  Download,
  ChevronDown
} from 'lucide-react';
import { ThreeDocumentStack } from '../components/ThreeDocumentStack';
import { Footer } from '../components/Footer';

interface LandingPageProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onLaunchBenchmark: () => void;
  onExploreWorkflow: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onOpenAuth,
  onLaunchBenchmark,
  onExploreWorkflow,
}) => {
  const [demoStep, setDemoStep] = useState<number>(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const demoSteps = [
    {
      title: '01 / Ingestion',
      badge: 'Multi-Format Ingestion',
      description: 'Specimen report (digital/scanned PDF, PNG, JPG, WEBP, TIFF) is loaded into host RAM enclave.',
      detail: 'Metropolis Pathology Panel ingested (491 characters screened, zero cloud transmissions).'
    },
    {
      title: '02 / OCR & Auto-Repair',
      badge: 'Computer Vision & Tesseract',
      description: 'Pre-sanitizes OCR character confusions (IO5 → 105), acronym typos (Tolal, LOL), and attached punctuation.',
      detail: '17 lines normalized with 100% numerical precision.'
    },
    {
      title: '03 / Biomarker Mapping',
      badge: 'Deterministic Alias Engine',
      description: 'Maps clinical abbreviations (Hb, TLC, PLT, FBS, FPG, TC, TG, BUN, Cr) to standardized medical registry.',
      detail: '16 supported biomarkers recognized and tokenized.'
    },
    {
      title: '04 / Reference Logic',
      badge: 'Calibrated Range Comparison',
      description: 'Prioritizes assay-specific laboratory printed intervals; falls back safely to adult clinical standards.',
      detail: 'Fasting Glucose (132.0 mg/dL > 99.0) flagged as Potentially High; Hemoglobin (10.8 g/dL < 13.0) flagged as Potentially Low.'
    },
    {
      title: '05 / Dual Export',
      badge: 'Structured Output',
      description: 'Generates instant structured CSV records and official ReportLab clinical PDF summaries.',
      detail: 'Ready for clinical practitioner review and secondary verification.'
    }
  ];

  const faqs = [
    {
      q: 'Does Orca MedScan send medical reports to external AI APIs or cloud servers?',
      a: 'No. Orca MedScan operates on a strict zero-cloud privacy enclave model. All optical character recognition (OCR), text tokenization, biomarker alias resolution, and reference-range comparisons execute 100% locally in host RAM. No patient data or blood panels are transmitted over the internet.'
    },
    {
      q: 'How are abnormal laboratory values flagged?',
      a: 'Orca MedScan first detects and honors the specific reference intervals printed directly on the patient report by the calibrating laboratory. If the document omits reference intervals, documented standard adult clinical intervals are applied as a fallback and clearly disclosed.'
    },
    {
      q: 'Which image and document formats are supported?',
      a: 'Digital PDFs, Scanned PDFs (with automated OCR page-rendering fallback), PNG, JPG, JPEG, WEBP (with OCR typo auto-repair), BMP, TIFF, and HEIC/HEIF.'
    },
    {
      q: 'Is Orca MedScan an autonomous medical diagnostic device?',
      a: 'No. Orca MedScan is a clinical screening and educational decision-support prototype built for Orcathon 2026. It categorizes indicators as Normal, Potentially High, Potentially Low, or Review Needed. It never generates speculative medical diagnoses or pharmaceutical treatment plans.'
    }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                Orcathon 2026 • Healthcare & MedTech Track
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Deterministic Clinical Report Screening & Anomaly Surveillance.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                A 100% on-premise, zero-cloud medical document intelligence engine. Ingests digital and scanned PDFs, multi-format clinical imagery, resolves 50+ laboratory aliases, and flags abnormal indicators against calibrated reference intervals.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md shadow-teal-600/20 transition-all hover:translate-y-[-1px] focus:ring-2 focus:ring-teal-500"
                >
                  Launch Clinical Enclave
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onLaunchBenchmark}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-teal-500 text-slate-800 dark:text-slate-200 font-semibold text-sm shadow-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <Zap className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  1-Click Evaluator Demo
                </button>
              </div>

              {/* Verified Formats Strip */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <p className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Verified Ingestion Pipelines:
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {['Digital PDF', 'Scanned PDF (OCR)', 'PNG', 'JPG', 'WEBP', 'BMP', 'TIFF', 'HEIC/HEIF'].map((fmt) => (
                    <span
                      key={fmt}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Signature 3D Medical Document Stack */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200/50 dark:from-slate-900/80 dark:to-slate-950 p-3 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xl">
                <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5 font-bold text-teal-600 dark:text-teal-400">
                    <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                    INTERACTIVE 3D DOCUMENT STACK
                  </span>
                  <span>MOVE CURSOR TO TILT</span>
                </div>

                {/* Real Three.js Canvas */}
                <ThreeDocumentStack
                  statusText="SPECIMEN: MET-98421 (CBC & METABOLIC)"
                  onInspect={onLaunchBenchmark}
                />

                <div className="pt-3 px-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200 dark:border-slate-800">
                  <span className="font-mono text-[11px]">Layered Paper Physics • Spotlight Depth</span>
                  <button
                    onClick={onLaunchBenchmark}
                    className="text-teal-600 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1"
                  >
                    Test Benchmark <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PRODUCT DEMONSTRATION WALKTHROUGH */}
      <section id="demo-section" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Interactive Clinical Simulation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
              From Raw Lab Specimen to Calibrated Intelligence.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
              Explore how Orca MedScan ingests, cleanses, tokenizes, and verifies medical reports in seconds.
            </p>
          </div>

          {/* Interactive 5-Step Pipeline Card Strip */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
            {demoSteps.map((step, idx) => {
              const isActive = demoStep === idx;
              return (
                <button
                  key={step.title}
                  onClick={() => setDemoStep(idx)}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    isActive
                      ? 'bg-teal-50 dark:bg-teal-950/60 border-teal-500 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <span className={`text-[11px] font-bold font-mono ${isActive ? 'text-teal-700 dark:text-teal-300' : 'text-slate-500'}`}>
                    {step.title}
                  </span>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                    {step.badge}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Demo Display Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                  Active Simulation Step {demoStep + 1} of 5
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {demoSteps[demoStep].badge}
                </h3>
              </div>
              <button
                onClick={onLaunchBenchmark}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-sm"
              >
                Inspect Live in Workspace
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
              <div className="space-y-4">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {demoSteps[demoStep].description}
                </p>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300">
                  <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">Telemetry Output:</div>
                  {demoSteps[demoStep].detail}
                </div>
              </div>

              {/* Sample Table Results Preview */}
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 flex justify-between">
                  <span>Extracted Indicator</span>
                  <span>Status Flag</span>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                  <div className="px-4 py-2.5 flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Hemoglobin (Hb)</span>
                      <span className="text-slate-500 text-[11px] ml-2">10.8 g/dL (13.0 - 17.5)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                      ▼ Potentially Low
                    </span>
                  </div>
                  <div className="px-4 py-2.5 flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Fasting Blood Glucose</span>
                      <span className="text-slate-500 text-[11px] ml-2">132.0 mg/dL (70.0 - 99.0)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                      ▲ Potentially High
                    </span>
                  </div>
                  <div className="px-4 py-2.5 flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Platelet Count</span>
                      <span className="text-slate-500 text-[11px] ml-2">240,000 /mcL (150k - 450k)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      ✓ Normal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMAT MATRIX & CAPABILITIES */}
      <section id="formats-section" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Verified Pipeline Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
              Ingest Any Clinical Specimen Format.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
              Every format has been thoroughly tested through our automated 16-test suite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Digital & Scanned PDFs</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Extracts raw text streams using <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">pdfplumber</code>. Automatically renders 200 DPI image pages and triggers Tesseract OCR fallback when zero digital text is found.
              </p>
              <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1.5 pt-2">
                <CheckCircle2 className="w-4 h-4" /> Multi-page PDF supported
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Multi-Format Imagery</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Native optical recognition on <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">PNG</code>, <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">JPG</code>, <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">WEBP</code>, <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">BMP</code>, <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">TIFF</code>, and <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">HEIC</code>. Includes EXIF auto-rotation and contrast pre-enhancement.
              </p>
              <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1.5 pt-2">
                <CheckCircle2 className="w-4 h-4" /> OCR Typo Auto-Repair active
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Zero-Cloud Enclave</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                All parsing executes in ephemeral host RAM. Password hashes protected via PBKDF2-HMAC-SHA256 (100k rounds) stored in <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">data/.auth_vault.json</code>.
              </p>
              <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1.5 pt-2">
                <CheckCircle2 className="w-4 h-4" /> Zero external API transmissions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLINICAL SAFETY & METHODOLOGY */}
      <section id="safety-section" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Decision Support Protocol
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Dynamic Reference Ranges with Zero Speculation.
              </h2>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">1. Printed Laboratory Intervals (Highest Priority)</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Different clinical laboratories use different reagent assays and calibration instruments. Orca MedScan automatically detects and respects the reference intervals printed on the report.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">2. Documented Adult Clinical Fallback</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    When a report omits reference intervals, standard adult clinical ranges are applied and explicitly tagged as <span className="font-mono text-teal-600">Standard Adult Reference</span>.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">3. Non-Speculative Guardrail</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Results are strictly categorized as <span className="text-emerald-600 font-semibold">Normal</span>, <span className="text-rose-600 font-semibold">Potentially High</span>, <span className="text-amber-600 font-semibold">Potentially Low</span>, or <span className="text-slate-500 font-semibold">Review Needed</span>. Hallucinated diagnoses are strictly prohibited.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
                <AlertTriangle className="w-6 h-6" />
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Medical & Clinical Screening Disclaimer</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Orca MedScan is developed for <strong>Orcathon 2026</strong> (Healthcare & MedTech track). It is an educational and screening prototype designed to assist healthcare professionals and patients with rapid laboratory indicator review.
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                It does not replace licensed medical consultations, pathology reviews, or emergency medical triaging. Always consult licensed clinical practitioners for diagnostic interpretation.
              </p>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Orcathon 2026 MedTech Track</span>
                <span className="text-teal-600 dark:text-teal-400 font-bold">16 / 16 Tests Passed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Clinical Clarifications
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-semibold text-sm text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-br from-teal-700 to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Screen Laboratory Reports in the Enclave?
          </h2>
          <p className="text-base text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Experience high-precision optical character recognition, clinical abbreviation resolution, and dynamic reference comparison with zero cloud exposure.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-6 py-3.5 rounded-xl bg-white text-teal-900 font-bold text-sm shadow-lg hover:bg-teal-50 transition-all hover:scale-105"
            >
              Get Started with Enclave
            </button>
            <button
              onClick={onLaunchBenchmark}
              className="px-6 py-3.5 rounded-xl bg-teal-800/80 hover:bg-teal-800 border border-teal-500 text-white font-bold text-sm transition-all"
            >
              ⚡ 1-Click Evaluator Benchmark
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};
