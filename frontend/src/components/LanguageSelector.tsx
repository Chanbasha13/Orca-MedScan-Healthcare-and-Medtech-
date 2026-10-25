import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

interface LanguageSelectorProps {
  variant?: 'header' | 'sidebar' | 'compact';
}

const LANGUAGE_DISPLAY_NAMES: Record<Language, { native: string; english: string; combined: string }> = {
  en: { native: 'English', english: 'English', combined: 'English' },
  hi: { native: 'हिन्दी', english: 'Hindi', combined: 'हिन्दी — Hindi' },
  te: { native: 'తెలుగు', english: 'Telugu', combined: 'తెలుగు — Telugu' },
  ta: { native: 'தமிழ்', english: 'Tamil', combined: 'தமிழ் — Tamil' },
  kn: { native: 'ಕನ್ನಡ', english: 'Kannada', combined: 'ಕನ್ನಡ — Kannada' },
  ml: { native: 'മലയാളം', english: 'Malayalam', combined: 'മലയാളം — Malayalam' },
  bn: { native: 'বাংলা', english: 'Bengali', combined: 'বাংলা — Bengali' },
};

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'header' }) => {
  const { language, setLanguage, languages, currentLanguageInfo } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownCoords, setDropdownCoords] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Calculate coordinates with viewport clamping
  const updatePosition = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const menuWidth = 288; // 18rem (w-72)
    const margin = 8;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let left = rect.left;
    if (variant === 'header') {
      left = rect.right - menuWidth;
    } else if (variant === 'compact') {
      left = rect.right + 6;
    }

    // Clamp within horizontal viewport
    if (left + menuWidth > viewportWidth - margin) {
      left = viewportWidth - menuWidth - margin;
    }
    if (left < margin) {
      left = margin;
    }

    // Vertical positioning with flip support if close to bottom
    const estimatedHeight = 440;
    let top = rect.bottom + 6;
    if (top + estimatedHeight > viewportHeight - margin && rect.top > estimatedHeight) {
      top = Math.max(margin, rect.top - estimatedHeight - 6);
    }

    setDropdownCoords({ top, left });
  }, [variant]);

  useEffect(() => {
    if (!isOpen) return;
    updatePosition();

    const handleScrollOrResize = () => {
      updatePosition();
    };

    window.addEventListener('resize', handleScrollOrResize);
    window.addEventListener('scroll', handleScrollOrResize, true);

    return () => {
      window.removeEventListener('resize', handleScrollOrResize);
      window.removeEventListener('scroll', handleScrollOrResize, true);
    };
  }, [isOpen, updatePosition]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setFocusedIndex(languages.findIndex((l) => l.code === language));
      } else {
        const nextIndex =
          e.key === 'ArrowDown'
            ? (focusedIndex + 1) % languages.length
            : (focusedIndex - 1 + languages.length) % languages.length;
        setFocusedIndex(nextIndex);
        itemRefs.current[nextIndex]?.focus();
      }
    }
  };

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const currentDisplay = LANGUAGE_DISPLAY_NAMES[language] || {
    native: currentLanguageInfo.nativeName,
    english: currentLanguageInfo.name,
    combined: currentLanguageInfo.code === 'en' ? 'English' : `${currentLanguageInfo.nativeName} — ${currentLanguageInfo.name}`,
  };

  return (
    <div className={variant === 'sidebar' ? 'w-full' : 'relative inline-block'}>
      {variant === 'sidebar' ? (
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          aria-label="Select application language"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-100 dark:bg-charcoal-950/80 text-charcoal-800 dark:text-ivory-100 hover:border-forest-600 transition-all text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-forest-600 focus:ring-offset-1 dark:focus:ring-offset-charcoal-900 shadow-sm"
        >
          <span className="flex items-center gap-2 truncate">
            <Globe className="w-3.5 h-3.5 text-forest-700 dark:text-forest-400 shrink-0" />
            <span className="text-sm select-none">{currentLanguageInfo.flag}</span>
            <span className="font-sans font-bold text-xs truncate">
              {currentDisplay.combined}
            </span>
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-charcoal-400 shrink-0 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      ) : variant === 'compact' ? (
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          title={`Language: ${currentDisplay.combined}`}
          aria-label="Select application language"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-ivory-100 dark:bg-charcoal-950/80 text-charcoal-800 dark:text-ivory-100 hover:border-forest-600 transition-all text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-forest-600 shadow-sm"
        >
          <span className="text-base select-none">{currentLanguageInfo.flag}</span>
        </button>
      ) : (
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          aria-label="Select application language"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-ivory-300 dark:border-charcoal-700 bg-white/90 dark:bg-charcoal-900/90 text-charcoal-800 dark:text-ivory-100 hover:border-forest-600 transition-all text-xs font-semibold shadow-paper-ivory focus:outline-none focus:ring-2 focus:ring-forest-600"
        >
          <Globe className="w-3.5 h-3.5 text-forest-700 dark:text-forest-400 shrink-0" />
          <span className="text-sm select-none">{currentLanguageInfo.flag}</span>
          <span className="font-sans font-bold text-xs">{currentDisplay.combined}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-charcoal-400 shrink-0 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      )}

      {/* Portal Dropdown Menu */}
      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            style={{
              position: 'fixed',
              top: `${dropdownCoords.top}px`,
              left: `${dropdownCoords.left}px`,
              width: '288px',
              zIndex: 99999,
            }}
            className="rounded-2xl bg-white dark:bg-charcoal-900 border border-ivory-300 dark:border-charcoal-700 shadow-paper-elevated py-2 animate-fade-in font-sans"
            role="listbox"
            aria-label="Application Language Selection"
          >
            {/* Header */}
            <div className="px-3.5 py-1.5 border-b border-ivory-200 dark:border-charcoal-800 text-[10px] font-mono font-bold uppercase tracking-wider text-forest-700 dark:text-forest-400 flex items-center justify-between">
              <span>Select Language</span>
              <span className="text-charcoal-400">7 Regional Options</span>
            </div>

            {/* List */}
            <div className="max-h-[440px] overflow-y-auto py-1.5 px-1.5 space-y-1">
              {languages.map((lang, idx) => {
                const isSelected = language === lang.code;
                const display = LANGUAGE_DISPLAY_NAMES[lang.code];
                return (
                  <button
                    key={lang.code}
                    ref={(el) => (itemRefs.current[idx] = el)}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(lang.code)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        const next = (idx + 1) % languages.length;
                        itemRefs.current[next]?.focus();
                      } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        const prev = (idx - 1 + languages.length) % languages.length;
                        itemRefs.current[prev]?.focus();
                      } else if (e.key === 'Escape') {
                        setIsOpen(false);
                        buttonRef.current?.focus();
                      }
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs transition-colors rounded-xl font-sans ${
                      isSelected
                        ? 'bg-forest-50 dark:bg-forest-950/70 text-forest-800 dark:text-forest-300 font-bold border border-forest-200 dark:border-forest-850/80 shadow-xs'
                        : 'text-charcoal-800 dark:text-ivory-100 hover:bg-ivory-100 dark:hover:bg-charcoal-800/80 focus:bg-ivory-100 dark:focus:bg-charcoal-800/80 focus:outline-none'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base select-none leading-none">{lang.flag}</span>
                      <div className="flex flex-col text-left">
                        <span className="font-bold text-xs tracking-tight">
                          {display.combined}
                        </span>
                        <span className="text-[10px] text-charcoal-400 dark:text-ivory-400 font-mono">
                          {lang.code === 'en' ? 'Default Clinical Protocol' : `${lang.name} Vernacular`}
                        </span>
                      </div>
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-forest-700 dark:text-forest-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-3 py-1.5 border-t border-ivory-200 dark:border-charcoal-800 text-[9px] text-charcoal-400 font-sans leading-tight">
              * Medical test names and measured values remain deterministic.
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
