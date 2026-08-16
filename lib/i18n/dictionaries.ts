import { pt } from "./pt";
import { en } from "./en";
import type { Language } from "./types";

export const dictionaries = { pt, en };

export function getDictionary(lang: Language) {
  return dictionaries[lang];
}

export { type Language } from "./types";
