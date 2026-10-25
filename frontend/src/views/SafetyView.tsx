import React from 'react';
import { ShieldCheck, AlertTriangle, Lock, Award, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const SafetyView: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl font-sans">
      <div className="pb-5 border-b border-ivory-300 dark:border-charcoal-800">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
          Clinical Governance
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1">
          Clinical Safety, Methodology & Enclave Architecture
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl">
          Detailed specification of the non-speculative screening guardrail, reference interval calibration rules, and zero-cloud data sovereignty.
        </p>
      </div>

      <div className="space-y-6 text-sm text-charcoal-700 dark:text-ivory-300 leading-relaxed">
        {/* Purpose & Scope */}
        <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3">
          <h3 className="font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2">
            <Award className="w-5 h-5 text-forest-700 dark:text-forest-400" />
            1. Purpose & Clinical Scope
          </h3>
          <p className="text-xs text-charcoal-600 dark:text-ivory-400 leading-relaxed font-sans">
            <strong>Orca MedScan</strong> is a clinical decision-support and screening prototype developed for <strong>Orcathon 2026</strong> (Healthcare & MedTech track).
            Its engineering philosophy bridges the gap between dense, unstructured laboratory reports and rapid, actionable clinical review without exposing sensitive patient health records to third-party cloud APIs.
          </p>
        </div>

        {/* Dynamic Reference Intervals */}
        <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4">
          <h3 className="font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-forest-700 dark:text-forest-400" />
            2. Dynamic Reference Interval Prioritization
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
              <strong className="text-charcoal-900 dark:text-ivory-50 font-serif text-sm">A. Printed Laboratory Ranges (Highest Priority)</strong>
              <p className="text-charcoal-500 dark:text-ivory-400 mt-1 font-sans">
                Clinical laboratories calibrate analyzers with specific assay reagents. Orca MedScan automatically detects and respects reference ranges printed directly on the patient report.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
              <strong className="text-charcoal-900 dark:text-ivory-50 font-serif text-sm">B. Documented Adult Clinical Standard (Fallback)</strong>
              <p className="text-charcoal-500 dark:text-ivory-400 mt-1 font-sans">
                When a report omits reference intervals, standard adult clinical ranges are applied and explicitly tagged as <span className="font-mono text-forest-700 dark:text-forest-400 font-bold">Standard Adult Reference</span>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
              <strong className="text-charcoal-900 dark:text-ivory-50 font-serif text-sm">C. Conservative Non-Speculative Classification</strong>
              <p className="text-charcoal-500 dark:text-ivory-400 mt-1 font-sans">
                Results are strictly categorized as Normal, Potentially High, Potentially Low, or Review Needed. Speculative clinical diagnoses are deliberately prohibited.
              </p>
            </div>
          </div>
        </div>

        {/* Zero-Cloud Privacy Enclave */}
        <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-3">
          <h3 className="font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2">
            <Lock className="w-5 h-5 text-forest-700 dark:text-forest-400" />
            3. Privacy-Preserving Enclave Architecture
          </h3>
          <ul className="space-y-2 text-xs text-charcoal-600 dark:text-ivory-400">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest-700 dark:text-forest-400 shrink-0" />
              <span><strong>100% Local Execution:</strong> All digital parsing, OCR, and reference interval comparisons execute in host memory.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest-700 dark:text-forest-400 shrink-0" />
              <span><strong>Zero External API Exposure:</strong> Patient identifiers, test results, and blood panel scans are never sent over the internet or forwarded to remote LLMs.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest-700 dark:text-forest-400 shrink-0" />
              <span><strong>PBKDF2-HMAC-SHA256 Vault:</strong> Cryptographic password protection conforming to NIST SP 800-132 recommendations.</span>
            </li>
          </ul>
        </div>

        {/* Medical Disclaimer Banner */}
        <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2 shadow-paper-ivory">
          <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-sm">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span className="font-serif">Official Medical Screening Disclaimer</span>
          </div>
          <p className="text-xs text-amber-950/80 dark:text-amber-300/80 leading-relaxed font-sans">
            This application is an educational and screening prototype. It does not provide medical diagnoses, treatment plans, or emergency clinical triaging. Patients should always consult licensed healthcare providers for diagnostic interpretation.
          </p>
        </div>
      </div>
    </div>
  );
};
