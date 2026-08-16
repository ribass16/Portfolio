"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Language } from "./dictionaries";
import type { Dictionary } from "./types";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  dict: Dictionary;
}

const STORAGE_KEY = "portfolio-lang";
const DEFAULT_LANG: Language = "pt";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(DEFAULT_LANG);

  // Lê a preferência guardada (ou o idioma do browser) apenas uma vez, no
  // cliente, depois da hidratação — por isso o setState acontece no efeito.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === "pt" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- lê preferência persistida uma única vez após montar
      setLangState(stored);
      return;
    }
    const browserLang = window.navigator.language.toLowerCase().startsWith("pt")
      ? "pt"
      : "en";
    setLangState(browserLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "pt" ? "en" : "pt");
  }, [lang, setLang]);

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, dict: dictionaries[lang] }),
    [lang, setLang, toggleLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
