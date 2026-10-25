import React from 'react';
import { ShieldCheck, AlertTriangle, Lock, Award, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const SafetyView: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl">
      <div className="pb-4 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Clinical Safety, Methodology & Enclave Architecture
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Detailed specification of the non-speculative screening guardrail, reference calibration rules, and zero-cloud data sovereignty.
        </p>
      </div>

      <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        {/* Purpose & Scope */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-teal-600" />
            1. Purpose & Clinical Scope
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            <strong>Orca MedScan</strong> is a clinical decision-support and screening prototype developed for <strong>Orcathon 2026</strong> (Healthcare & MedTech track).
            Its engineering philosophy bridges the gap between dense, unstructured laboratory reports and rapid, actionable clinical review without exposing sensitive patient health records to third-party cloud APIs.
          </p>
        </div>

        {/* Dynamic Reference Intervals */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-600" />
            2. Dynamic Reference Interval Prioritization
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <strong className="text-slate-900 dark:text-white">A. Printed Laboratory Ranges (Highest Priority)</strong>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Clinical laboratories calibrate analyzers with specific assay reagents. Orca MedScan automatically detects and respects reference ranges printed directly on the patient report.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <strong className="text-slate-900 dark:text-white">B. Documented Adult Clinical Standard (Fallback)</strong>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                When a report omits reference intervals, standard adult clinical ranges are applied and explicitly tagged as <span className="font-mono text-teal-600">Standard Adult Reference</span>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <strong className="text-slate-900 dark:text-white">C. Conservative Classification</strong>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Results are strictly categorized as Normal, Potentially High, Potentially Low, or Review Needed. Speculative clinical diagnoses are deliberately prohibited.
              </p>
            </div>
          </div>
        </div>

        {/* Zero-Cloud Privacy Enclave */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-teal-600" />
            3. Privacy-Preserving Enclave Architecture
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <strong>100% Local Execution:</strong> All digital parsing, OCR, and reference interval comparisons execute in host memory.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <strong>Zero External API Exposure:</strong> Patient identifiers, test results, and blood panel scans are never sent over the internet or forwarded to remote LLMs.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <strong>PBKDF2-HMAC-SHA256 Vault:</strong> Cryptographic password protection conforming to NIST recommendations.
            </li>
          </ul>
        </div>

        {/* Medical Disclaimer Banner */}
        <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
            <AlertTriangle className="w-5 h-5" />
            <span>Official Medical Screening Disclaimer</span>
          </div>
          <p className="text-xs text-amber-900/80 dark:text-amber-300/80 leading-relaxed">
            This application is an educational and screening prototype. It does not provide medical diagnoses, treatment plans, or emergency clinical triaging. Patients should always consult licensed healthcare providers for diagnostic interpretation.
          </p>
        </div>
      </div>
    </div>
  );
};
