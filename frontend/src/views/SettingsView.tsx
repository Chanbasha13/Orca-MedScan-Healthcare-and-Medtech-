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
    <div className="space-y-8 animate-fade-in">
      <div className="pb-4 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          System Settings & Enclave Vault
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Inspect cryptographic vault integrity, OCR engine telemetry, and manage session cache.
        </p>
      </div>

      {/* Settings Navigation Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 space-x-6 text-sm font-bold">
        <button
          onClick={() => setActiveTab('vault')}
          className={`pb-3 transition-colors relative flex items-center gap-2 ${
            activeTab === 'vault'
              ? 'text-teal-600 dark:text-teal-400 border-b-2 border-teal-500'
              : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <Lock className="w-4 h-4" /> Cryptographic Enclave
        </button>
        <button
          onClick={() => setActiveTab('engine')}
          className={`pb-3 transition-colors relative flex items-center gap-2 ${
            activeTab === 'engine'
              ? 'text-teal-600 dark:text-teal-400 border-b-2 border-teal-500'
              : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <Eye className="w-4 h-4" /> Optical Engine & Formats
        </button>
        <button
          onClick={() => setActiveTab('session')}
          className={`pb-3 transition-colors relative flex items-center gap-2 ${
            activeTab === 'session'
              ? 'text-teal-600 dark:text-teal-400 border-b-2 border-teal-500'
              : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <Trash2 className="w-4 h-4" /> Session Cache
        </button>
      </div>

      {/* Tab 1: Cryptographic Enclave Vault */}
      {activeTab === 'vault' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Key className="w-4 h-4 text-teal-600" />
              Active Practitioner Identity
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 uppercase font-bold">Email</span>
                <p className="font-semibold text-slate-900 dark:text-white mt-0.5 truncate">{user?.email}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 uppercase font-bold">Role</span>
                <p className="font-semibold text-teal-600 dark:text-teal-400 mt-0.5">{user?.role || 'Lead Clinical Evaluator'}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 uppercase font-bold">Session State</span>
                <p className="font-semibold text-emerald-600 mt-0.5">Authenticated (Local)</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-teal-600" />
              Cryptographic Parameters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-xs text-slate-500 uppercase font-bold">Algorithm</span>
                <p className="text-lg font-mono font-bold text-slate-900 dark:text-white mt-1">PBKDF2-SHA256</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-xs text-slate-500 uppercase font-bold">Key Iterations</span>
                <p className="text-lg font-mono font-bold text-teal-600 dark:text-teal-400 mt-1">100,000</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-xs text-slate-500 uppercase font-bold">Salt Entropy</span>
                <p className="text-lg font-mono font-bold text-slate-900 dark:text-white mt-1">256-bit CSPRNG</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-xs text-slate-500 uppercase font-bold">Vault Users</span>
                <p className="text-lg font-mono font-bold text-slate-900 dark:text-white mt-1">
                  {systemStatus?.vault.registered_practitioners || 1}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-2">
              💡 <strong>Enclave Security Boundary</strong>: All credentials are saved in host storage at <code className="font-mono text-teal-600">{systemStatus?.vault.vault_path || 'data/.auth_vault.json'}</code> with zero cloud transmissions.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Optical Engine & Formats */}
      {activeTab === 'engine' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Server className="w-4 h-4 text-teal-600" />
              Optical Engine Telemetry
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 uppercase font-bold">Tesseract OCR</span>
                <p className="font-mono font-bold text-emerald-600 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {systemStatus?.tesseract.available ? 'Active (Local Binary)' : 'Not Found'}
                </p>
                <span className="text-[10px] text-slate-400 font-mono mt-1 block truncate">
                  {systemStatus?.tesseract.binary_path}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 uppercase font-bold">HEIF / HEIC Decoder</span>
                <p className="font-mono font-bold text-emerald-600 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Active (pillow-heif)
                </p>
                <span className="text-[10px] text-slate-400 font-mono mt-1 block">Apple iPhone Live Specimen Support</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 uppercase font-bold">ReportLab PDF Engine</span>
                <p className="font-mono font-bold text-emerald-600 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Active (ReportLab v4.x)
                </p>
                <span className="text-[10px] text-slate-400 font-mono mt-1 block">Clinical Summary Generator</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Session Cache */}
      {activeTab === 'session' && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Trash2 className="w-4 h-4 text-rose-500" />
            Session Data & Cache Purge
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Orca MedScan maintains session audits purely in memory. Clearing the session cache wipes all scanned reports, candidate telemetry, and historical entries from the browser memory.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
              Active Session Audits: {historyCount} reports
            </span>
            <button
              onClick={onClearSessionCache}
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-sm"
            >
              Purge Session Cache
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
