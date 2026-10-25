import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

interface LanguageSelectorProps {
  variant?: 'header' | 'sidebar' | 'compact';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'header' }) => {
  const { language, setLanguage, languages, currentLanguageInfo } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select application language"
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all text-xs font-semibold ${
          variant === 'sidebar'
            ? 'w-full justify-between bg-ivory-100 dark:bg-charcoal-950/80 border-ivory-300 dark:border-charcoal-700 text-charcoal-800 dark:text-ivory-100 hover:border-forest-600'
            : 'bg-white/80 dark:bg-charcoal-900/80 border-ivory-300 dark:border-charcoal-700 text-charcoal-800 dark:text-ivory-100 hover:border-forest-600 shadow-paper-ivory'
        }`}
      >
        <span className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-forest-700 dark:text-forest-400" />
          <span className="font-mono text-xs">{currentLanguageInfo.flag}</span>
          <span className="font-sans font-bold">{currentLanguageInfo.nativeName}</span>
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-charcoal-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-700 shadow-paper-elevated z-50 py-1.5 animate-fade-in font-sans">
          <div className="px-3 py-1.5 border-b border-ivory-200 dark:border-charcoal-800 text-[10px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400 flex items-center justify-between">
            <span>Select Language</span>
            <span className="text-charcoal-400">7 Languages</span>
          </div>

          <div className="max-h-72 overflow-y-auto py-1">
            {languages.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs transition-colors ${
                    isSelected
                      ? 'bg-forest-50 dark:bg-forest-950/60 text-forest-800 dark:text-forest-300 font-bold'
                      : 'text-charcoal-700 dark:text-ivory-200 hover:bg-ivory-100 dark:hover:bg-charcoal-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{lang.flag}</span>
                    <div>
                      <div className="font-sans font-bold leading-tight">{lang.nativeName}</div>
                      <div className="text-[10px] text-charcoal-400 font-mono">{lang.name}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-forest-700 dark:text-forest-400" />}
                </button>
              );
            })}
          </div>

          <div className="px-3 py-1.5 border-t border-ivory-200 dark:border-charcoal-800 text-[9px] text-charcoal-400 font-sans leading-tight">
            * Medical test names and measured values remain deterministic.
          </div>
        </div>
      )}
    </div>
  );
};
