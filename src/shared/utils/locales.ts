export function getUserLanguage(knownLangCodes: string[], defaultLang?: string) {
  let language = navigator.language;
  if (knownLangCodes.includes(language)) return language;

  return defaultLang;
}
