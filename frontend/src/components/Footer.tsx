import React from 'react';
import { ShieldCheck, Activity, Terminal, Lock, Heart, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white">
                ORCA MEDSCAN
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Autonomous clinical laboratory screening enclave for Orcathon 2026 Healthcare & MedTech track.
              Deterministic biomarker extraction with 100% on-premise cryptographic privacy.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-teal-700 dark:text-teal-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Enclave Security: Active
            </div>
          </div>

          {/* Clinical Architecture */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3">
              Extraction Architecture
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" /> Digital PDF Vector Stream</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" /> Scanned PDF with OCR Fallback</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" /> Multi-Format Vision (PNG, JPG, WEBP, TIFF)</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" /> OCR Typo Auto-Repair Pipeline</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" /> 50+ Clinical Alias Resolution</li>
            </ul>
          </div>

          {/* Cryptography & Data Safety */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3">
              Enclave Protocol
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-teal-600" /> PBKDF2-HMAC-SHA256 Vault</li>
              <li className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-teal-600" /> 100,000 Key Derivation Rounds</li>
              <li className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-teal-600" /> Zero Third-Party Cloud Transmissions</li>
              <li className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-teal-600" /> RAM-Only Ephemeral Processing</li>
              <li className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-teal-600" /> Signed Clinical PDF Generation</li>
            </ul>
          </div>

          {/* Clinical Disclaimer */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3">
              Regulatory Notice
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Orca MedScan is a clinical screening and educational prototype. It does not provide medical diagnoses, triaging, or clinical prescriptions. Always review results with licensed medical practitioners.
            </p>
            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-400">
              Orcathon 2026 // MedTech Track
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© 2026 Orca MedScan. Built with Antigravity & Gemini for Orcathon 2026.</p>
          <div className="flex items-center gap-6">
            <span>Deterministic Parsing</span>
            <span>Local Vault</span>
            <span>Open Source Clinical Screening</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
