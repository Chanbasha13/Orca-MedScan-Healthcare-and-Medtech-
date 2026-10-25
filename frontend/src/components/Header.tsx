import React from 'react';
import { Sun, Moon, ArrowRight, ShieldCheck, Activity, Lock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onNavigateSection?: (sectionId: string) => void;
  onGoToApp?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuth, onNavigateSection, onGoToApp }) => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const { t } = useLanguage();

  const handleNavClick = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-ivory-50/90 dark:bg-charcoal-950/90 backdrop-blur-md border-b border-ivory-200 dark:border-charcoal-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Identification */}
        <div
          className="flex items-center gap-3.5 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center text-white shadow-sm border border-forest-900">
            <Activity className="w-5 h-5 text-forest-200" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-xl tracking-tight text-charcoal-950 dark:text-ivory-50">
                Orca MedScan
              </span>
              <span className="hidden sm:inline-flex items-center text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-forest-50 dark:bg-forest-950 text-forest-800 dark:text-forest-300 border border-forest-200 dark:border-forest-850">
                CLINICAL ENCLAVE
              </span>
            </div>
            <p className="text-[10px] font-mono uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400 hidden sm:block">
              Laboratory Diagnostics & Biomarker Screening
            </p>
          </div>
        </div>

        {/* Editorial Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-charcoal-600 dark:text-charcoal-300">
          <button onClick={() => handleNavClick('demo-section')} className="hover:text-forest-700 dark:hover:text-forest-400 transition-colors">
            Clinical Simulator
          </button>
          <button onClick={() => handleNavClick('workflow-section')} className="hover:text-forest-700 dark:hover:text-forest-400 transition-colors">
            Pipeline Architecture
          </button>
          <button onClick={() => handleNavClick('formats-section')} className="hover:text-forest-700 dark:hover:text-forest-400 transition-colors">
            Supported Specimen
          </button>
          <button onClick={() => handleNavClick('safety-section')} className="hover:text-forest-700 dark:hover:text-forest-400 transition-colors">
            Safety Protocol
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Selector */}
          <LanguageSelector variant="header" />

          {/* Working Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className="p-2.5 rounded-xl border border-ivory-200 dark:border-charcoal-800 bg-ivory-100 dark:bg-charcoal-900 text-charcoal-700 dark:text-charcoal-200 hover:border-forest-600 transition-all shadow-paper-ivory"
            title={`Switch to ${theme === 'dark' ? t('nav_warm_light') : t('nav_charcoal_dark')}`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-charcoal-700" />
            )}
          </button>

          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <button
                onClick={onGoToApp}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-bold shadow-paper-ivory transition-all"
              >
                {t('nav_dashboard')}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={logout}
                className="hidden sm:inline-block px-3 py-2 text-xs font-semibold text-charcoal-500 hover:text-charcoal-800 dark:hover:text-charcoal-200"
              >
                {t('nav_logout')}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenAuth('login')}
                className="px-3 py-2 rounded-xl text-xs font-bold text-charcoal-700 dark:text-charcoal-200 hover:text-forest-700 dark:hover:text-forest-400 transition-colors"
              >
                {t('nav_login')}
              </button>
              <button
                onClick={() => onOpenAuth('signup')}
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-bold shadow-paper-ivory transition-all"
              >
                <span>{t('nav_launch')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
