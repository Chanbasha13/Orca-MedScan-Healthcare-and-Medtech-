import React, { useEffect, useState } from 'react';
import { Settings, Lock, Eye, Trash2, ShieldCheck, CheckCircle2, Server, Key } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { SystemStatus } from '../types';

interface SettingsViewProps {
  onClearSessionCache: () => void;
  historyCount: number;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  onClearSessionCache,
  historyCount,
}) => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'vault' | 'engine' | 'session'>('vault');
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null);

  useEffect(() => {
    fetch('/api/system/status')
      .then((res) => res.json())
      .then((data) => setSystemStatus(data))
      .catch((err) => console.error('Error fetching system status:', err));
  }, []);

  return (
    <div className="space-y-8 animate-fade-in font-sans">
      <div className="pb-5 border-b border-ivory-300 dark:border-charcoal-800">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
          Enclave Infrastructure
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-ivory-50 tracking-tight mt-1">
          System Settings & Cryptographic Enclave
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-600 dark:text-ivory-400 mt-1 max-w-2xl">
          Inspect cryptographic vault parameters, OCR engine telemetry, and manage session cache.
        </p>
      </div>

      {/* Settings Navigation Tabs */}
      <div className="flex border-b border-ivory-300 dark:border-charcoal-800 space-x-6 text-xs font-mono font-bold">
        <button
          onClick={() => setActiveTab('vault')}
          className={`pb-3 transition-colors relative flex items-center gap-2 ${
            activeTab === 'vault'
              ? 'text-forest-800 dark:text-forest-300 border-b-2 border-forest-700'
              : 'text-charcoal-500 hover:text-charcoal-700 dark:hover:text-ivory-300'
          }`}
        >
          <Lock className="w-4 h-4" /> Cryptographic Enclave
        </button>
        <button
          onClick={() => setActiveTab('engine')}
          className={`pb-3 transition-colors relative flex items-center gap-2 ${
            activeTab === 'engine'
              ? 'text-forest-800 dark:text-forest-300 border-b-2 border-forest-700'
              : 'text-charcoal-500 hover:text-charcoal-700 dark:hover:text-ivory-300'
          }`}
        >
          <Eye className="w-4 h-4" /> Optical Engine & Formats
        </button>
        <button
          onClick={() => setActiveTab('session')}
          className={`pb-3 transition-colors relative flex items-center gap-2 ${
            activeTab === 'session'
              ? 'text-forest-800 dark:text-forest-300 border-b-2 border-forest-700'
              : 'text-charcoal-500 hover:text-charcoal-700 dark:hover:text-ivory-300'
          }`}
        >
          <Trash2 className="w-4 h-4" /> Session Cache
        </button>
      </div>

      {/* Tab 1: Cryptographic Enclave Vault */}
      {activeTab === 'vault' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4">
            <h3 className="font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2">
              <Key className="w-4 h-4 text-forest-700 dark:text-forest-400" />
              Active Practitioner Identity
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
                <span className="text-charcoal-500 uppercase font-bold text-[10px]">Email</span>
                <p className="font-bold text-charcoal-900 dark:text-ivory-50 mt-0.5 truncate">{user?.email}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
                <span className="text-charcoal-500 uppercase font-bold text-[10px]">Role</span>
                <p className="font-bold text-forest-800 dark:text-forest-300 mt-0.5">{user?.role || 'Lead Clinical Evaluator'}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
                <span className="text-charcoal-500 uppercase font-bold text-[10px]">Session State</span>
                <p className="font-bold text-clinical-normal mt-0.5">Authenticated (Local Vault)</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4">
            <h3 className="font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2">
              <Lock className="w-4 h-4 text-forest-700 dark:text-forest-400" />
              Cryptographic Enclave Parameters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center font-mono">
              <div className="p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
                <span className="text-[10px] text-charcoal-500 uppercase font-bold">Algorithm</span>
                <p className="text-base font-bold text-charcoal-900 dark:text-ivory-50 mt-1">PBKDF2-SHA256</p>
              </div>
              <div className="p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
                <span className="text-[10px] text-charcoal-500 uppercase font-bold">Key Iterations</span>
                <p className="text-base font-bold text-forest-800 dark:text-forest-300 mt-1">100,000</p>
              </div>
              <div className="p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
                <span className="text-[10px] text-charcoal-500 uppercase font-bold">Salt Entropy</span>
                <p className="text-base font-bold text-charcoal-900 dark:text-ivory-50 mt-1">256-bit CSPRNG</p>
              </div>
              <div className="p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
                <span className="text-[10px] text-charcoal-500 uppercase font-bold">Vault Users</span>
                <p className="text-base font-bold text-charcoal-900 dark:text-ivory-50 mt-1">
                  {systemStatus?.vault.registered_practitioners || 1}
                </p>
              </div>
            </div>
            <p className="text-xs text-charcoal-500 dark:text-ivory-400 leading-relaxed pt-2 font-sans">
              💡 <strong>Enclave Security Boundary</strong>: All credentials and PBKDF2 hashes are saved in host storage at <code className="font-mono text-forest-700 dark:text-forest-400">{systemStatus?.vault.vault_path || 'data/.auth_vault.json'}</code> with zero cloud transmissions.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Optical Engine & Formats */}
      {activeTab === 'engine' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4">
            <h3 className="font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2">
              <Server className="w-4 h-4 text-forest-700 dark:text-forest-400" />
              Optical Engine Telemetry
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
                <span className="text-charcoal-500 uppercase font-bold text-[10px]">Tesseract OCR</span>
                <p className="font-bold text-clinical-normal mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {systemStatus?.tesseract.available ? 'Active (Local Binary)' : 'Not Found'}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
                <span className="text-charcoal-500 uppercase font-bold text-[10px]">Supported Vision Formats</span>
                <p className="font-bold text-charcoal-900 dark:text-ivory-50 mt-1">
                  PDF, PNG, JPG, WEBP, BMP, TIFF, HEIC
                </p>
              </div>
              <div className="p-4 rounded-xl bg-ivory-50/60 dark:bg-charcoal-950 border border-ivory-200 dark:border-charcoal-800">
                <span className="text-charcoal-500 uppercase font-bold text-[10px]">Registry Biomarkers</span>
                <p className="font-bold text-forest-800 dark:text-forest-300 mt-1">
                  50+ Standardized Markers
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Session Cache */}
      {activeTab === 'session' && (
        <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-800 shadow-paper-ivory space-y-4">
          <h3 className="font-serif text-lg font-bold text-charcoal-900 dark:text-ivory-50 flex items-center gap-2">
            <Trash2 className="w-4 h-4 text-rose-600" />
            Session Cache Management
          </h3>
          <p className="text-xs text-charcoal-600 dark:text-ivory-400">
            Currently retaining <b>{historyCount}</b> audited laboratory reports in active browser session memory.
          </p>
          <button
            onClick={onClearSessionCache}
            className="px-4 py-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-900 text-rose-700 dark:text-rose-400 text-xs font-mono font-bold hover:bg-rose-100 transition-colors shadow-paper-ivory"
          >
            Clear Session Cache Now
          </button>
        </div>
      )}
    </div>
  );
};
