import React from 'react';
import {
  LayoutDashboard,
  FileSearch,
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

export type NavView =
  | 'Dashboard'
  | 'Analyze Report'
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

  const navItems: { label: NavView; icon: React.ReactNode }[] = [
    { label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: 'Analyze Report', icon: <FileSearch className="w-4 h-4" /> },
    { label: 'Report History', icon: <History className="w-4 h-4" /> },
    { label: 'Extraction Diagnostics', icon: <Activity className="w-4 h-4" /> },
    { label: 'Settings', icon: <Settings className="w-4 h-4" /> },
    { label: 'Clinical Safety', icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 z-40 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Top Header */}
      <div>
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200 dark:border-slate-800">
          {!isCollapsed && (
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                <Activity className="w-4 h-4" />
              </div>
              <div className="truncate">
                <span className="font-extrabold text-sm tracking-tight text-slate-900 dark:text-white">
                  ORCA MEDSCAN
                </span>
                <p className="text-[10px] uppercase font-bold text-teal-700 dark:text-teal-400 tracking-wider">
                  CLINICAL ENCLAVE
                </p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="w-8 h-8 mx-auto rounded-lg bg-teal-600 flex items-center justify-center text-white">
              <Activity className="w-4 h-4" />
            </div>
          )}
          <button
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* User Card */}
        {!isCollapsed && (
          <div className="p-3 m-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-1">
              <UserCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Practitioner Session
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-100 truncate">
              {user?.email || 'evaluator@orcamed.org'}
            </p>
            <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-teal-100/60 dark:bg-teal-950 text-teal-800 dark:text-teal-300">
              {user?.role || 'Lead Clinical Evaluator'}
            </span>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="p-2 space-y-1">
          {navItems.map((item) => {
            const active = currentView === item.label;
            return (
              <button
                key={item.label}
                onClick={() => onSelectView(item.label)}
                title={isCollapsed ? item.label : undefined}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? 'bg-teal-600 text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white'
                } ${isCollapsed ? 'justify-center' : ''}`}
              >
                <span className={active ? 'text-white' : 'text-slate-400 dark:text-slate-400'}>
                  {item.icon}
                </span>
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Quick Action */}
        {!isCollapsed && (
          <div className="px-3 pt-3">
            <button
              onClick={onLoadBenchmark}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors shadow-sm"
            >
              <Zap className="w-3.5 h-3.5" />
              1-Click Benchmark
            </button>
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
        {!isCollapsed && (
          <div className="text-[11px] text-slate-500 dark:text-slate-400 px-1 py-1 flex items-center justify-between font-mono">
            <span>Audits: {auditCount}</span>
            <span className="flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${ocrActive ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
              OCR: {ocrActive ? 'Online' : 'Offline'}
            </span>
          </div>
        )}

        {/* Theme Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={`w-full flex items-center gap-2.5 p-2 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-4 h-4 text-amber-400" />
              {!isCollapsed && <span>Light Mode</span>}
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-slate-700" />
              {!isCollapsed && <span>Night Mode</span>}
            </>
          )}
        </button>

        {/* Sign Out Button */}
        <button
          onClick={logout}
          aria-label="Log Out"
          className={`w-full flex items-center gap-2.5 p-2 rounded-lg text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          <LogOut className="w-4 h-4" />
          {!isCollapsed && <span>Log Out of Enclave</span>}
        </button>
      </div>
    </aside>
  );
};
