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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/70 backdrop-blur-sm animate-fade-in font-sans">
      <div className="relative w-full max-w-md bg-white dark:bg-charcoal-900 rounded-3xl shadow-paper-elevated border border-ivory-300 dark:border-charcoal-800 p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-lg text-charcoal-400 hover:text-charcoal-700 dark:hover:text-ivory-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center text-ivory-50 shadow-paper-ivory">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400">
              NIST Cryptographic Vault
            </span>
            <h3 className="font-serif text-xl font-bold text-charcoal-900 dark:text-ivory-50">
              {mode === 'login' ? 'Clinical Enclave Sign In' : 'Register Practitioner'}
            </h3>
          </div>
        </div>

        {/* Flash Messages */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-semibold">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
            {successMessage}
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal-600 dark:text-ivory-300 mb-1.5">
              Practitioner Identifier
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 w-4 h-4 text-charcoal-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="evaluator@orcamed.org"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-forest-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal-600 dark:text-ivory-300 mb-1.5">
              Passphrase
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 w-4 h-4 text-charcoal-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-forest-600"
              />
            </div>
            {mode === 'signup' && (
              <p className="text-[11px] text-charcoal-500 mt-1 font-sans">
                Minimum 8 characters with at least one letter and one number.
              </p>
            )}
          </div>

          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal-600 dark:text-ivory-300 mb-1.5">
                Confirm Passphrase
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 w-4 h-4 text-charcoal-400" />
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-50/60 dark:bg-charcoal-950 text-charcoal-900 dark:text-ivory-100 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-forest-600"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 font-bold text-xs shadow-paper-ivory transition-all flex items-center justify-center gap-2 mt-2"
          >
            {isLoading ? 'Verifying...' : mode === 'login' ? 'Sign In to Enclave' : 'Create Practitioner Account'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* 1-Click Fast Pass */}
        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-ivory-200 dark:border-charcoal-800"></div>
          </div>
          <span className="relative px-3 bg-white dark:bg-charcoal-900 text-[10px] font-mono text-charcoal-400 dark:text-charcoal-400 uppercase tracking-wider">
            OR HACKATHON EVALUATION
          </span>
        </div>

        <button
          onClick={handleFastPass}
          disabled={isLoading}
          className="w-full py-2.5 px-4 rounded-xl border border-forest-300 dark:border-forest-800 bg-forest-50 dark:bg-forest-950/60 text-forest-800 dark:text-forest-300 font-mono font-bold text-xs hover:bg-forest-100 dark:hover:bg-forest-900 transition-colors flex items-center justify-center gap-2 shadow-paper-ivory"
        >
          <Zap className="w-3.5 h-3.5" />
          ⚡ 1-Click Fast Pass ({DEFAULT_EVALUATOR_EMAIL})
        </button>

        {/* Toggle Mode Link */}
        <div className="mt-5 text-center text-xs text-charcoal-500">
          {mode === 'login' ? (
            <>
              Need a new practitioner account?{' '}
              <button onClick={() => setMode('signup')} className="font-bold text-forest-700 dark:text-forest-400 hover:underline">
                Register here
              </button>
            </>
          ) : (
            <>
              Already registered in enclave?{' '}
              <button onClick={() => setMode('login')} className="font-bold text-forest-700 dark:text-forest-400 hover:underline">
                Sign in
              </button>
            </>
          )}
        </div>

        {/* Enclave Notice */}
        <div className="mt-5 pt-3 border-t border-ivory-200 dark:border-charcoal-800 text-[10px] text-charcoal-400 leading-relaxed text-center font-mono">
          🔒 NIST PBKDF2-HMAC-SHA256 • 100k Iterations • On-Premise Vault
        </div>
      </div>
    </div>
  );
};
