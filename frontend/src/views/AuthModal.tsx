import React, { useState } from 'react';
import { X, Lock, Mail, ShieldCheck, Zap, ArrowRight, Activity } from 'lucide-react';
import { useAuth, DEFAULT_EVALUATOR_EMAIL, DEFAULT_EVALUATOR_PASS } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
  onSuccess?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
  onSuccess,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { login, register, loginEvaluatorFastPass, isLoading } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (mode === 'login') {
      const res = await login(email, password);
      if (res.success) {
        if (onSuccess) onSuccess();
        onClose();
      } else {
        setErrorMessage(res.message);
      }
    } else {
      const res = await register(email, password, confirmPassword);
      if (res.success) {
        setSuccessMessage('Account registered successfully! You may now sign in.');
        setMode('login');
      } else {
        setErrorMessage(res.message);
      }
    }
  };

  const handleFastPass = async () => {
    setErrorMessage('');
    const ok = await loginEvaluatorFastPass();
    if (ok) {
      if (onSuccess) onSuccess();
      onClose();
    } else {
      setErrorMessage('Evaluator fast-pass failed.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-600/20">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              {mode === 'login' ? 'Clinical Enclave Sign In' : 'Register Practitioner'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {mode === 'login' ? 'Access authenticated laboratory telemetry' : 'Create an isolated cryptographic enclave account'}
            </p>
          </div>
        </div>

        {/* Flash Messages */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-medium">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
            {successMessage}
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
              Practitioner Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="doctor@hospital.org"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            {mode === 'signup' && (
              <p className="text-[11px] text-slate-500 mt-1">
                Minimum 8 characters with at least one letter and one number.
              </p>
            )}
          </div>

          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? 'Processing...' : mode === 'login' ? 'Sign In to Enclave' : 'Create Practitioner Account'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* 1-Click Fast Pass */}
        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
          </div>
          <span className="relative px-3 bg-white dark:bg-slate-900 text-[11px] font-mono text-slate-500 uppercase">
            OR HACKATHON EVALUATION
          </span>
        </div>

        <button
          onClick={handleFastPass}
          disabled={isLoading}
          className="w-full py-2.5 px-4 rounded-xl border border-teal-500/30 bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-bold text-xs hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          <Zap className="w-4 h-4" />
          ⚡ 1-Click Evaluator Fast Pass ({DEFAULT_EVALUATOR_EMAIL})
        </button>

        {/* Toggle Mode Link */}
        <div className="mt-5 text-center text-xs text-slate-500">
          {mode === 'login' ? (
            <>
              Need a new practitioner account?{' '}
              <button onClick={() => setMode('signup')} className="font-bold text-teal-600 dark:text-teal-400 hover:underline">
                Register here
              </button>
            </>
          ) : (
            <>
              Already registered in enclave?{' '}
              <button onClick={() => setMode('login')} className="font-bold text-teal-600 dark:text-teal-400 hover:underline">
                Sign in
              </button>
            </>
          )}
        </div>

        {/* Enclave Notice */}
        <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed text-center font-mono">
          🔒 NIST PBKDF2-HMAC-SHA256 • 100k Iterations • Local Host Vault
        </div>
      </div>
    </div>
  );
};
