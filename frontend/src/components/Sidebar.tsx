import React from 'react';
import {
  LayoutDashboard,
  FileSearch,
  Bot,
  History,
  Activity,
  ShieldCheck,
  Settings,
  LogOut,
  Zap,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { TranslationKey } from '../i18n/translations';
import { LanguageSelector } from './LanguageSelector';

export type NavView =
  | 'Dashboard'
  | 'Analyze Report'
  | 'AI Assistant'
  | 'Report History'
  | 'Extraction Diagnostics'
  | 'Clinical Safety'
  | 'Settings';

interface SidebarProps {
  currentView: NavView;
  onSelectView: (view: NavView) => void;
  auditCount: number;
  ocrActive: boolean;
  onLoadBenchmark: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onSelectView,
  auditCount,
  ocrActive,
  onLoadBenchmark,
  isCollapsed,
  onToggleCollapse,
}) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const navItems: { label: NavView; transKey: TranslationKey; icon: React.ReactNode; isAI?: boolean }[] = [
    { label: 'Dashboard', transKey: 'nav_dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: 'Analyze Report', transKey: 'nav_analyze', icon: <FileSearch className="w-4 h-4" /> },
    { label: 'AI Assistant', transKey: 'nav_assistant', icon: <Bot className="w-4 h-4" />, isAI: true },
    { label: 'Report History', transKey: 'nav_history', icon: <History className="w-4 h-4" /> },
    { label: 'Extraction Diagnostics', transKey: 'nav_diagnostics', icon: <Activity className="w-4 h-4" /> },
    { label: 'Settings', transKey: 'nav_settings', icon: <Settings className="w-4 h-4" /> },
    { label: 'Clinical Safety', transKey: 'nav_safety', icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 z-40 bg-ivory-50 dark:bg-charcoal-900 border-r border-ivory-300 dark:border-charcoal-800 flex flex-col justify-between transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Top Header */}
      <div>
        <div className="h-16 flex items-center justify-between px-4 border-b border-ivory-200 dark:border-charcoal-800">
          {!isCollapsed && (
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-forest-800 flex items-center justify-center text-ivory-50 shrink-0 shadow-paper-ivory">
                <Activity className="w-4 h-4" />
              </div>
              <div className="truncate">
                <span className="font-serif font-bold text-base tracking-tight text-charcoal-900 dark:text-ivory-50">
                  Orca MedScan
                </span>
                <p className="text-[9px] uppercase font-mono font-bold text-forest-700 dark:text-forest-400 tracking-wider">
                  {t('nav_clinical_enclave')}
                </p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="w-8 h-8 mx-auto rounded-lg bg-forest-800 flex items-center justify-center text-ivory-50">
              <Activity className="w-4 h-4" />
            </div>
          )}
          <button
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="p-1 rounded-md text-charcoal-400 hover:text-charcoal-700 dark:hover:text-ivory-200 hover:bg-ivory-200 dark:hover:bg-charcoal-800 transition-colors"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* User Card */}
        {!isCollapsed && (
          <div className="p-3 m-3 rounded-xl bg-ivory-100 dark:bg-charcoal-950/60 border border-ivory-200 dark:border-charcoal-800">
            <div className="flex items-center gap-1.5 mb-1">
              <UserCheck className="w-3.5 h-3.5 text-forest-700 dark:text-forest-400" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400">
                {t('nav_practitioner_session')}
              </span>
            </div>
            <p className="text-xs font-semibold text-charcoal-800 dark:text-ivory-100 truncate">
              {user?.email || 'evaluator@orcamed.org'}
            </p>
            <span className="inline-block mt-1 text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-forest-100/70 dark:bg-forest-950 text-forest-900 dark:text-forest-300">
              {user?.role || 'Lead Clinical Evaluator'}
            </span>
          </div>
        )}

        {/* Language Selector in Sidebar */}
        {!isCollapsed && (
          <div className="px-3 pb-2">
            <LanguageSelector variant="sidebar" />
          </div>
        )}

        {/* Navigation Items */}
        <nav className="p-2 space-y-1">
          {navItems.map((item) => {
            const active = currentView === item.label;
            const translatedLabel = t(item.transKey);
            return (
              <button
                key={item.label}
                onClick={() => onSelectView(item.label)}
                title={isCollapsed ? translatedLabel : undefined}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  active
                    ? 'bg-forest-800 text-ivory-50 shadow-paper-ivory font-bold'
                    : 'text-charcoal-600 dark:text-ivory-300 hover:bg-ivory-200/70 dark:hover:bg-charcoal-800 hover:text-charcoal-900 dark:hover:text-ivory-50'
                } ${isCollapsed ? 'justify-center' : ''}`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className={active ? 'text-ivory-50' : item.isAI ? 'text-forest-700 dark:text-forest-400' : 'text-charcoal-400 dark:text-charcoal-400'}>
                    {item.icon}
                  </span>
                  {!isCollapsed && <span className="truncate">{translatedLabel}</span>}
                </div>
                {!isCollapsed && item.isAI && (
                  <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-bold uppercase ${
                    active ? 'bg-forest-900 text-ivory-100' : 'bg-forest-100 dark:bg-forest-950 text-forest-800 dark:text-forest-300'
                  }`}>
                    Groq
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick Action */}
        {!isCollapsed && (
          <div className="px-3 pt-2">
            <button
              onClick={onLoadBenchmark}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-mono font-bold text-forest-800 dark:text-forest-300 bg-forest-50 dark:bg-forest-950/60 border border-forest-300 dark:border-forest-800 hover:bg-forest-100 dark:hover:bg-forest-900 transition-colors shadow-paper-ivory"
            >
              <Zap className="w-3.5 h-3.5" />
              {t('nav_benchmark')}
            </button>
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="p-3 border-t border-ivory-200 dark:border-charcoal-800 space-y-2">
        {!isCollapsed && (
          <div className="text-[10px] text-charcoal-500 dark:text-charcoal-400 px-1 py-0.5 flex items-center justify-between font-mono">
            <span>Audits: {auditCount}</span>
            <span className="flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${ocrActive ? 'bg-clinical-normal' : 'bg-charcoal-400'}`}></span>
              OCR: {ocrActive ? t('gen_online') : t('gen_offline')}
            </span>
          </div>
        )}

        {/* Theme Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={`w-full flex items-center gap-2 p-2 rounded-xl text-xs font-medium text-charcoal-700 dark:text-ivory-300 hover:bg-ivory-200 dark:hover:bg-charcoal-800 border border-ivory-300 dark:border-charcoal-700 ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              {!isCollapsed && <span>{t('nav_warm_light')}</span>}
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-charcoal-700" />
              {!isCollapsed && <span>{t('nav_charcoal_dark')}</span>}
            </>
          )}
        </button>

        {/* Sign Out Button */}
        <button
          onClick={logout}
          aria-label="Log Out"
          className={`w-full flex items-center gap-2 p-2 rounded-xl text-xs font-semibold text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          <LogOut className="w-3.5 h-3.5" />
          {!isCollapsed && <span>{t('nav_logout')}</span>}
        </button>
      </div>
    </aside>
  );
};
