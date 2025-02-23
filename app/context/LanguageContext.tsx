"use client";
import { createContext, useContext, useState } from "react";
import { defaultLocale, translations } from "../i18n/config";

type LanguageContextType = {
  locale: string;
  language: string; // Add language type
  setLocale: (locale: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  language: defaultLocale, // Add default language
  setLocale: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState(defaultLocale);

  // Get language from locale
  const language = locale.split('-')[0]; // This will give 'en' from 'en-US' or 'fr' from 'fr-FR'

  const t = (key: string) => {
    return translations[locale]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, language, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);