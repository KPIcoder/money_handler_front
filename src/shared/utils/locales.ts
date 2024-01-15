export function getUserLanguage(knownLangCodes: string[], defaultLang?: string) {
  const { language } = navigator;
  if (knownLangCodes.includes(language)) return language;

  return defaultLang;
}

export function getLocaleAsciiRange(locale: string) {
  return locale ? { start: 0, end: 1 } : { start: 1, end: 0 };
}
