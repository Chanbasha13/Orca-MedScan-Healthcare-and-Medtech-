import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  FileText,
  FileCheck2,
  AlertTriangle,
  Lock,
  Layers,
  Cpu,
  Eye,
  Download,
  ChevronDown,
  Activity,
  Microscope,
  FileSpreadsheet,
  Stethoscope,
  Terminal,
  Clock
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
  const [activeStage, setActiveStage] = useState<number>(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const workflowStages = [
    {
      num: '01',
      title: 'Multi-Format Specimen Ingestion',
      subtitle: 'Vector digital extraction or high-resolution optical scan',
      body: 'Medical documents arrive as digital PDFs, scanned printouts, or mobile photos. Orca MedScan detects the document container and routes directly to pdfplumber vector text extraction or triggers page-by-page OCR rendering at 200 DPI.',
      meta: 'Supported: PDF (digital/scanned), PNG, JPG, JPEG, WEBP, BMP, TIFF, HEIC'
    },
    {
      num: '02',
      title: 'Optical Character Recognition & Auto-Repair',
      subtitle: 'Contextual character repair and punctuation detachment',
      body: 'Raw OCR frequently merges attached units (13.5g/dL), confuses numeric digits (IO5 → 105), or introduces acronym typos (Tolal, LOL, Hate). Orca MedScan pre-sanitizes strings contextually before tokenization.',
      meta: 'OCR Engine: Tesseract v5.5 + Pillow computer vision filters'
    },
    {
      num: '03',
      title: 'Deterministic Biomarker Alias Resolution',
      subtitle: 'Over 50 clinical abbreviations mapped to standardized registry',
      body: 'Hospital reports use shorthand: Hb, TLC, PLT, FBS, FPG, TC, TG, BUN, SGPT, ALT, AST, TSH. Orca MedScan uses regex pattern matrices to resolve synonyms while isolating non-medical noise.',
      meta: 'Centralized registry: Hematology, Metabolic, Lipid, Renal, Hepatic, Thyroid'
    },
    {
      num: '04',
      title: 'Dynamic Reference Interval Prioritization',
      subtitle: 'Calibrated laboratory ranges applied first; documented adult fallback',
      body: 'Reagents and analyzer calibrations vary between clinical pathology laboratories. Orca MedScan first detects and honors intervals printed directly on the patient report, falling back safely to standard adult clinical norms when omitted.',
      meta: 'Non-speculative classification: Normal, Potentially High, Potentially Low, Review Needed'
    }
  ];

  const faqs = [
    {
      q: 'Does Orca MedScan upload patient reports to remote third-party AI APIs?',
      a: 'No. Orca MedScan operates on an isolated local privacy enclave model. Document parsing, optical character recognition (OCR), regex tokenization, and reference-range evaluations execute 100% locally in host RAM. Zero patient health data or scanned blood panels leave your machine.'
    },
    {
      q: 'How does Orca MedScan determine whether a result is out of range?',
      a: 'The engine first checks the laboratory report itself for printed reference intervals, honoring the calibrating laboratory’s assay standards. When intervals are not printed, documented adult clinical standards are applied as a secondary fallback and transparently labeled in the audit report.'
    },
    {
      q: 'Which image and document formats are verified to work?',
      a: 'Digital PDFs, Scanned PDFs (with automated OCR fallback), PNG, JPG, JPEG, WEBP (with OCR typo auto-repair), BMP, TIFF, and HEIC/HEIF (via pillow-heif).'
    },
    {
      q: 'Can Orca MedScan be used to make autonomous medical diagnoses?',
      a: 'No. Orca MedScan is a clinical decision-support and screening prototype developed for Orcathon 2026. It strictly categorizes indicators into Normal, Potentially High, Potentially Low, or Review Needed. It never provides speculative medical diagnoses or prescriptions.'
    }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-ivory-50 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-50 transition-colors duration-200">
      {/* 1. EDITORIAL ASYMMETRIC HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-ivory-200 dark:border-charcoal-800 paper-texture overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Masthead Clinical Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-ivory-200 dark:border-charcoal-800 text-[11px] font-mono text-charcoal-500 dark:text-charcoal-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-forest-700 animate-pulse"></span>
              <span className="font-bold uppercase tracking-wider text-forest-850 dark:text-forest-400">
                ORCATHON 2026 • HEALTHCARE & MEDTECH TRACK
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span>ZERO-CLOUD LOCAL ENCLAVE</span>
              <span className="hidden sm:inline">NIST PBKDF2 VAULT</span>
              <span>16 / 16 VERIFICATIONS PASSED</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typographic Editorial Headline */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="editorial-title text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-charcoal-950 dark:text-ivory-50 leading-[1.08]">
                High-precision laboratory intelligence for complex clinical documents.
              </h1>

              <p className="text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300 leading-relaxed font-normal max-w-2xl">
                A local, privacy-preserving clinical decision-support engine. Ingests digital and scanned medical reports, rectifies optical character degradation, and cross-references patient biomarkers against assay-calibrated laboratory reference intervals.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-forest-850 hover:bg-forest-800 text-white font-bold text-xs uppercase tracking-wider shadow-paper-elevated transition-all hover:translate-y-[-1px]"
                >
                  Launch Clinical Workspace
                  <ArrowRight className="w-4 h-4 text-forest-200" />
                </button>

                <button
                  onClick={onLaunchBenchmark}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-ivory-100 dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-700 hover:border-forest-600 text-charcoal-800 dark:text-ivory-100 font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:bg-white dark:hover:bg-charcoal-850"
                >
                  <Zap className="w-4 h-4 text-forest-700 dark:text-forest-400" />
                  ⚡ Evaluator 1-Click Benchmark
                </button>
              </div>

              {/* Clinical Trust Marks */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-ivory-200 dark:border-charcoal-800 text-xs">
                <div>
                  <span className="block font-serif font-bold text-lg text-charcoal-900 dark:text-ivory-50">100% Local</span>
                  <span className="text-[11px] text-charcoal-500 dark:text-charcoal-400 font-mono">RAM Enclave Privacy</span>
                </div>
                <div>
                  <span className="block font-serif font-bold text-lg text-charcoal-900 dark:text-ivory-50">50+ Aliases</span>
                  <span className="text-[11px] text-charcoal-500 dark:text-charcoal-400 font-mono">Clinical Lab Synonyms</span>
                </div>
                <div>
                  <span className="block font-serif font-bold text-lg text-charcoal-900 dark:text-ivory-50">8 Formats</span>
                  <span className="text-[11px] text-charcoal-500 dark:text-charcoal-400 font-mono">PDF, OCR, HEIC</span>
                </div>
              </div>
            </div>

            {/* Right Column: Purposeful 3D Physical Document Stack */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-ivory-100 dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800 p-4 sm:p-6 shadow-paper-elevated">
                <div className="flex items-center justify-between pb-3 px-1 border-b border-ivory-200 dark:border-charcoal-800 text-xs font-mono text-charcoal-500">
                  <span className="flex items-center gap-1.5 font-bold text-forest-800 dark:text-forest-400">
                    <Microscope className="w-3.5 h-3.5" />
                    CLINICAL SPECIMEN INSPECTOR
                  </span>
                  <span>POINTER PARALLAX</span>
                </div>

                {/* The Signature Three.js 3D Document Stack */}
                <ThreeDocumentStack
                  statusText="SPECIMEN MET-98421 • VERIFIED ASSAYS"
                  onInspect={onLaunchBenchmark}
                />

                <div className="pt-3 px-1 flex items-center justify-between text-xs text-charcoal-500 dark:text-charcoal-400 border-t border-ivory-200 dark:border-charcoal-800">
                  <span className="font-mono text-[11px]">Metropolis Diagnostic Laboratory</span>
                  <button
                    onClick={onLaunchBenchmark}
                    className="text-forest-800 dark:text-forest-400 font-bold hover:underline flex items-center gap-1 text-xs"
                  >
                    Test In Workspace <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FULL-WIDTH PATHOLOGY WORKSTATION SIMULATOR */}
      <section id="simulator-section" className="scroll-mt-16 py-20 bg-white dark:bg-charcoal-900 border-b border-ivory-200 dark:border-charcoal-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
              Interactive Clinical Simulation
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl font-bold text-charcoal-950 dark:text-ivory-50 mt-2">
              From degraded optical scan to calibrated clinical intelligence.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 mt-3 leading-relaxed">
              Step through the actual algorithmic transformation executed on specimen MET-98421. Watch how optical errors are rectified and indicators are cross-referenced with laboratory intervals.
            </p>
          </div>

          {/* Workstation Frame */}
          <div className="rounded-2xl border border-ivory-200 dark:border-charcoal-800 bg-ivory-50 dark:bg-charcoal-950 shadow-paper-elevated overflow-hidden">
            {/* Top Workspace Chrome */}
            <div className="h-12 px-6 bg-ivory-100 dark:bg-charcoal-900 border-b border-ivory-200 dark:border-charcoal-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-forest-700"></span>
                <span className="font-bold text-charcoal-800 dark:text-ivory-100">
                  ORCA WORKSTATION // SPECIMEN AUDIT MET-98421
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={onLaunchBenchmark}
                  className="px-3 py-1 rounded bg-forest-850 hover:bg-forest-800 text-white text-[11px] font-bold font-mono transition-colors"
                >
                  Open in Workspace
                </button>
              </div>
            </div>

            {/* Stage Selector Pills */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-ivory-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 text-xs font-mono">
              {workflowStages.map((stage, idx) => (
                <button
                  key={stage.num}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 text-left border-r last:border-r-0 border-ivory-200 dark:border-charcoal-800 transition-colors ${
                    activeStage === idx
                      ? 'bg-forest-50 dark:bg-forest-950 text-forest-900 dark:text-forest-200 font-bold border-b-2 border-forest-700'
                      : 'text-charcoal-600 dark:text-charcoal-400 hover:bg-ivory-50 dark:hover:bg-charcoal-850'
                  }`}
                >
                  <span className="block text-[10px] text-forest-600 dark:text-forest-400 font-bold">{stage.num} / STAGE</span>
                  <span className="font-sans font-bold text-xs truncate block mt-0.5">{stage.title}</span>
                </button>
              ))}
            </div>

            {/* Split Screen Simulator Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 p-6 sm:p-8 gap-8">
              {/* Left Column: Stage Explanation & OCR Auto-Repair Visualizer */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono font-bold uppercase text-forest-700 dark:text-forest-400">
                  {workflowStages[activeStage].subtitle}
                </span>
                <h3 className="editorial-title text-2xl font-bold text-charcoal-950 dark:text-ivory-50">
                  {workflowStages[activeStage].title}
                </h3>
                <p className="text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                  {workflowStages[activeStage].body}
                </p>

                {/* OCR Typo Correction Highlight Box */}
                <div className="p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800 font-mono text-xs space-y-2">
                  <div className="text-[10px] uppercase font-bold text-charcoal-400">Contextual Auto-Repair Demonstration:</div>
                  <div className="flex justify-between items-center text-rose-600 dark:text-rose-400 line-through">
                    <span>Raw OCR Error:</span>
                    <span>"FPG: IO5 mg/dL"</span>
                  </div>
                  <div className="flex justify-between items-center text-forest-700 dark:text-forest-400 font-bold">
                    <span>Rectified Token:</span>
                    <span>"Fasting Glucose: 105 mg/dL"</span>
                  </div>
                  <div className="flex justify-between items-center text-rose-600 dark:text-rose-400 line-through">
                    <span>Raw OCR Error:</span>
                    <span>"PLT(Platelets) 240,000/mcL"</span>
                  </div>
                  <div className="flex justify-between items-center text-forest-700 dark:text-forest-400 font-bold">
                    <span>Rectified Token:</span>
                    <span>"Platelets: 240,000 /mcL"</span>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-charcoal-500 pt-1">
                  {workflowStages[activeStage].meta}
                </div>
              </div>

              {/* Right Column: Specimen Biomarker Matrix Table */}
              <div className="lg:col-span-7 rounded-xl border border-ivory-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 overflow-hidden shadow-sm">
                <div className="px-4 py-3 bg-ivory-100 dark:bg-charcoal-850 border-b border-ivory-200 dark:border-charcoal-800 flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-charcoal-800 dark:text-ivory-100">
                    CALIBRATED BIOMARKER MATRIX
                  </span>
                  <span className="text-forest-700 dark:text-forest-400 font-bold">
                    16 Screened Assays
                  </span>
                </div>

                <div className="divide-y divide-ivory-200 dark:divide-charcoal-800 text-xs">
                  <div className="p-3.5 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-charcoal-950 dark:text-ivory-50">Hemoglobin (Hb)</span>
                      <span className="text-charcoal-500 font-mono text-[11px] ml-2">10.8 g/dL</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-charcoal-500 font-mono text-[11px]">Ref: 13.0 - 17.5</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-clinical-low-bg text-clinical-low border border-clinical-low/20">
                        ▼ Potentially Low
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-charcoal-950 dark:text-ivory-50">Fasting Blood Glucose (Sugar)</span>
                      <span className="text-charcoal-500 font-mono text-[11px] ml-2">132.0 mg/dL</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-charcoal-500 font-mono text-[11px]">Ref: 70.0 - 99.0</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-clinical-high-bg text-clinical-high border border-clinical-high/20">
                        ▲ Potentially High
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-charcoal-950 dark:text-ivory-50">Total Cholesterol</span>
                      <span className="text-charcoal-500 font-mono text-[11px] ml-2">224.0 mg/dL</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-charcoal-500 font-mono text-[11px]">Ref: 125.0 - 200.0</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-clinical-high-bg text-clinical-high border border-clinical-high/20">
                        ▲ Potentially High
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-charcoal-950 dark:text-ivory-50">Platelet Count</span>
                      <span className="text-charcoal-500 font-mono text-[11px] ml-2">240,000 /mcL</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-charcoal-500 font-mono text-[11px]">Ref: 150k - 450k</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-clinical-norm-bg text-clinical-norm border border-clinical-norm/20">
                        ✓ In Normal Range
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-charcoal-950 dark:text-ivory-50">Blood Urea Nitrogen (BUN)</span>
                      <span className="text-charcoal-500 font-mono text-[11px] ml-2">28.0 mg/dL</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-charcoal-500 font-mono text-[11px]">Ref: 7.0 - 20.0</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-clinical-high-bg text-clinical-high border border-clinical-high/20">
                        ▲ Potentially High
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCROLL-BASED PIPELINE EXPLANATION (UPLOAD → EXTRACT → VERIFY → ANALYZE) */}
      <section id="workflow-section" className="py-20 bg-ivory-50 dark:bg-charcoal-950 border-b border-ivory-200 dark:border-charcoal-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
              Deterministic Methodology
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl font-bold text-charcoal-950 dark:text-ivory-50 mt-2">
              Four verified stages of clinical document intelligence.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 mt-3 leading-relaxed">
              Every step is open to inspection: clinicians can review and edit extracted streams prior to running reference interval comparisons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowStages.map((stg) => (
              <div
                key={stg.num}
                className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div>
                  <span className="editorial-title text-3xl font-bold text-forest-800 dark:text-forest-400">
                    {stg.num}
                  </span>
                  <h3 className="font-bold text-base text-charcoal-950 dark:text-ivory-50 mt-2">
                    {stg.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 dark:text-charcoal-400 mt-2 leading-relaxed">
                    {stg.body}
                  </p>
                </div>
                <div className="pt-4 border-t border-ivory-200 dark:border-charcoal-800 text-[11px] font-mono text-charcoal-500">
                  {stg.meta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FULL-WIDTH CAPABILITIES & FORMAT MATRIX */}
      <section id="formats-section" className="py-20 bg-white dark:bg-charcoal-900 border-b border-ivory-200 dark:border-charcoal-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
              Verified Ingestion Matrix
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl font-bold text-charcoal-950 dark:text-ivory-50 mt-2">
              Engineered for genuine hospital laboratory workflows.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 mt-3 leading-relaxed">
              Medical documents arrive in a wide spectrum of visual qualities. Our ingestion pipeline has been tested across 16 regression checks to ensure zero unhandled exceptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-ivory-50 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-forest-800 text-forest-100 flex items-center justify-center font-bold">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="editorial-title text-xl font-bold text-charcoal-950 dark:text-ivory-50">
                Vector & Scanned PDFs
              </h3>
              <p className="text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed">
                Direct text stream extraction via <code className="font-mono bg-ivory-200 dark:bg-charcoal-800 px-1 py-0.5 rounded">pdfplumber</code>. When PDFs contain flattened scans without digital text, Orca MedScan automatically renders pages to 200 DPI images and activates Tesseract OCR fallback.
              </p>
              <div className="pt-2 text-xs font-semibold text-forest-800 dark:text-forest-400 flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-4 h-4 text-forest-700" /> Multi-page rendering verified
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-ivory-50 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-forest-800 text-forest-100 flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="editorial-title text-xl font-bold text-charcoal-950 dark:text-ivory-50">
                Multi-Format Clinical Vision
              </h3>
              <p className="text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed">
                Ingests PNG, JPG, JPEG, WEBP, BMP, and TIFF scans. Includes auto-EXIF rotation, contrast enhancement, and an OCR typo repair engine that rectifies alphanumeric character confusions and detached units.
              </p>
              <div className="pt-2 text-xs font-semibold text-forest-800 dark:text-forest-400 flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-4 h-4 text-forest-700" /> WEBP typo auto-repair verified
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-ivory-50 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-forest-800 text-forest-100 flex items-center justify-center font-bold">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="editorial-title text-xl font-bold text-charcoal-950 dark:text-ivory-50">
                Local RAM Enclave Vault
              </h3>
              <p className="text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed">
                100% on-premise execution. Credentials hashed with NIST-compliant PBKDF2-HMAC-SHA256 (100,000 iterations, 256-bit CSPRNG salt) stored in <code className="font-mono bg-ivory-200 dark:bg-charcoal-800 px-1 py-0.5 rounded">data/.auth_vault.json</code>.
              </p>
              <div className="pt-2 text-xs font-semibold text-forest-800 dark:text-forest-400 flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-4 h-4 text-forest-700" /> Zero cloud API exposure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRIVACY ARCHITECTURE & CLINICAL SAFETY */}
      <section id="safety-section" className="py-20 bg-ivory-50 dark:bg-charcoal-950 border-b border-ivory-200 dark:border-charcoal-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
                Clinical Safety Protocol
              </span>
              <h2 className="editorial-title text-3xl sm:text-4xl font-bold text-charcoal-950 dark:text-ivory-50">
                Non-speculative guardrail grounded in real laboratory physics.
              </h2>
              <p className="text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                Orca MedScan is strictly engineered as a <strong>clinical decision-support screening prototype</strong> for Orcathon 2026. Speculative AI diagnostic guessing is prohibited by architecture.
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800">
                  <h4 className="font-bold text-charcoal-950 dark:text-ivory-50">Calibrated Printed Intervals First</h4>
                  <p className="text-charcoal-500 mt-1">
                    Pathology analyzers calibrate results using specific reagent lots. Orca MedScan prioritizes intervals printed directly on the patient document.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800">
                  <h4 className="font-bold text-charcoal-950 dark:text-ivory-50">Documented Adult Fallback</h4>
                  <p className="text-charcoal-500 mt-1">
                    When intervals are omitted on paper, standard adult clinical ranges are applied and explicitly disclosed as <span className="font-mono text-forest-700">Standard Adult Reference</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white dark:bg-charcoal-900 p-8 rounded-2xl border border-ivory-200 dark:border-charcoal-800 shadow-paper-elevated space-y-4">
              <div className="flex items-center gap-2.5 text-clinical-high font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-clinical-high" />
                <span>Regulatory Notice & Clinical Scope</span>
              </div>
              <p className="text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed">
                Orca MedScan is developed for <strong>Orcathon 2026 (Healthcare & MedTech track)</strong>. It does not provide medical diagnoses, treatment prescriptions, or emergency triage.
              </p>
              <p className="text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed">
                Patients and practitioners should always consult licensed physicians and pathologists for diagnostic interpretation.
              </p>
              <div className="pt-4 border-t border-ivory-200 dark:border-charcoal-800 flex items-center justify-between text-xs font-mono text-charcoal-500">
                <span>Orcathon 2026 MedTech Track</span>
                <span className="text-forest-700 dark:text-forest-400 font-bold">16 / 16 Tests Passed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white dark:bg-charcoal-900 border-b border-ivory-200 dark:border-charcoal-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
              Clinical Clarifications
            </span>
            <h2 className="editorial-title text-3xl font-bold text-charcoal-950 dark:text-ivory-50 mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-ivory-200 dark:border-charcoal-800 bg-ivory-50 dark:bg-charcoal-950 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-charcoal-950 dark:text-ivory-50 hover:text-forest-700 dark:hover:text-forest-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-charcoal-600 dark:text-charcoal-400 leading-relaxed border-t border-ivory-200 dark:border-charcoal-800">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="py-20 bg-forest-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="editorial-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Ready to screen clinical laboratory reports in the enclave?
          </h2>
          <p className="text-sm sm:text-base text-forest-100 max-w-2xl mx-auto leading-relaxed">
            Experience high-precision optical character recognition, abbreviation resolution, and dynamic reference comparison with 100% on-premise local privacy.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-6 py-3.5 rounded-xl bg-ivory-50 text-forest-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-white transition-all hover:scale-105"
            >
              Get Started with Enclave
            </button>
            <button
              onClick={onLaunchBenchmark}
              className="px-6 py-3.5 rounded-xl bg-forest-800 hover:bg-forest-700 border border-forest-600 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              ⚡ Evaluator 1-Click Benchmark
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div id="footer-section" className="scroll-mt-16">
        <Footer />
      </div>
    </div>
  );
};
