import { getUserLanguage } from '../utils/locales';
import { DEFAULT_LANGUAGE_CODE, LANGUAGE_CODES } from '../constants/locales/language-codes';
import { LOCALES } from '../constants/locales';

type TranslationOptions = {
  strict?: boolean;
};

export const useTranslate = (options?: TranslationOptions) => {
  const langCode = getUserLanguage(LANGUAGE_CODES, DEFAULT_LANGUAGE_CODE) as 'ua';
  const locale = LOCALES[langCode];

  return function t(text: string, options?: TranslationOptions) {
    const { strict } = options ?? {};
    // TODO: need to transform text by removing signs
    if (strict) return locale[text as keyof typeof locale] ?? text;
    const words = text.split(' ');

    return words.map((word) => locale[word as keyof typeof locale]).join(' ');
  };
};
