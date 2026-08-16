"use client";

import { useLanguage } from "@/lib/i18n/language-provider";

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="flex h-9 items-center justify-center rounded-lg border border-border px-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      aria-label="Alternar idioma / Toggle language"
    >
      <span className={lang === "pt" ? "text-foreground" : "text-muted-foreground"}>
        PT
      </span>
      <span className="mx-1 text-muted-foreground">/</span>
      <span className={lang === "en" ? "text-foreground" : "text-muted-foreground"}>
        EN
      </span>
    </button>
  );
}
