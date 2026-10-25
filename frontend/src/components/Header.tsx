import React from 'react';
import { Sun, Moon, ArrowRight, ShieldCheck, Activity, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onNavigateSection?: (sectionId: string) => void;
  onGoToApp?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuth, onNavigateSection, onGoToApp }) => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();

  const handleNavClick = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                ORCA MEDSCAN
              </span>
              <span className="hidden sm:inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                ENCLAVE
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 hidden sm:block">
              Clinical Intelligence Platform
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button onClick={() => handleNavClick('demo-section')} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            Product
          </button>
          <button onClick={() => handleNavClick('workflow-section')} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            Workflow
          </button>
          <button onClick={() => handleNavClick('formats-section')} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            Capabilities
          </button>
          <button onClick={() => handleNavClick('safety-section')} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            Safety & Enclave
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle interface theme"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-teal-500 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <button
                onClick={onGoToApp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold shadow-sm transition-all focus:ring-2 focus:ring-teal-500"
              >
                Open Workspace
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={logout}
                className="hidden sm:inline-block px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenAuth('login')}
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => onOpenAuth('signup')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold shadow-sm shadow-teal-600/20 transition-all"
              >
                Get Started
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
