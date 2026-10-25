import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationKey, translations, SUPPORTED_LANGUAGES, LanguageInfo } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  languages: LanguageInfo[];
  currentLanguageInfo: LanguageInfo;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const param = new URLSearchParams(window.location.search).get('lang');
      if (param && ['en', 'hi', 'te', 'ta', 'kn', 'ml', 'bn'].includes(param)) {
        return param as Language;
      }
      const saved = localStorage.getItem('orca_language');
      if (saved && ['en', 'hi', 'te', 'ta', 'kn', 'ml', 'bn'].includes(saved)) {
        return saved as Language;
      }
    } catch {
      // Fallback
    }
    return 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem('orca_language', language);
      document.documentElement.lang = language;
    } catch (e) {
      console.error('Error saving language preference:', e);
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: TranslationKey): string => {
    const langDict = translations[language] || translations.en;
    if (key in langDict) {
      return (langDict as any)[key];
    }
    // Fallback to English
    return (translations.en as any)[key] || key;
  };

  const currentLanguageInfo =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        languages: SUPPORTED_LANGUAGES,
        currentLanguageInfo,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
