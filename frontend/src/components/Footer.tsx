import React from 'react';
import { ShieldCheck, Activity, Terminal, Lock, Heart, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-ivory-200/60 dark:bg-charcoal-950 border-t border-ivory-300 dark:border-charcoal-800 transition-colors py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-forest-800 flex items-center justify-center text-ivory-50 shadow-paper-ivory">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-lg tracking-tight text-charcoal-900 dark:text-ivory-50">
                Orca MedScan
              </span>
            </div>
            <p className="text-xs text-charcoal-600 dark:text-ivory-400 leading-relaxed font-sans">
              Autonomous clinical laboratory screening enclave for Orcathon 2026 Healthcare & MedTech track.
              Deterministic biomarker extraction with 100% on-premise cryptographic privacy.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-forest-800 dark:text-forest-400 font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-clinical-normal"></span>
              Enclave Security: Active
            </div>
          </div>

          {/* Clinical Architecture */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 dark:text-ivory-100 mb-3">
              Extraction Architecture
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-600 dark:text-ivory-400">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-forest-700 dark:text-forest-400" /> Digital PDF Vector Stream</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-forest-700 dark:text-forest-400" /> Scanned PDF with OCR Fallback</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-forest-700 dark:text-forest-400" /> Multi-Format Vision (PNG, JPG, WEBP, TIFF)</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-forest-700 dark:text-forest-400" /> OCR Typo Auto-Repair Pipeline</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-forest-700 dark:text-forest-400" /> 50+ Clinical Alias Resolution</li>
            </ul>
          </div>

          {/* Cryptography & Data Safety */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 dark:text-ivory-100 mb-3">
              Enclave Protocol
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-600 dark:text-ivory-400">
              <li className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-forest-700 dark:text-forest-400" /> PBKDF2-HMAC-SHA256 Vault</li>
              <li className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-forest-700 dark:text-forest-400" /> 100,000 Key Derivation Rounds</li>
              <li className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-forest-700 dark:text-forest-400" /> Zero Third-Party Cloud Transmissions</li>
              <li className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-forest-700 dark:text-forest-400" /> RAM-Only Ephemeral Processing</li>
              <li className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-forest-700 dark:text-forest-400" /> Signed Clinical PDF Generation</li>
            </ul>
          </div>

          {/* Clinical Disclaimer */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 dark:text-ivory-100 mb-3">
              Regulatory Notice
            </h4>
            <p className="text-xs text-charcoal-500 dark:text-ivory-400 leading-relaxed font-sans">
              Orca MedScan is a clinical screening and educational prototype. It does not provide medical diagnoses, triaging, or clinical prescriptions. Always review results with licensed medical practitioners.
            </p>
            <div className="mt-3 pt-3 border-t border-ivory-300 dark:border-charcoal-800 text-[11px] font-mono text-charcoal-400 dark:text-charcoal-400">
              Orcathon 2026 // MedTech Track
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ivory-300 dark:border-charcoal-800 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 dark:text-ivory-400 gap-4 font-mono">
          <p>© 2026 Orca MedScan. Built with Antigravity & Gemini for Orcathon 2026.</p>
          <div className="flex items-center gap-6">
            <span>Deterministic Parsing</span>
            <span>•</span>
            <span>Local Enclave Vault</span>
            <span>•</span>
            <span>Open Source Screening</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
