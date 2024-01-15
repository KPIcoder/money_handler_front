import LOCALES from '../constants/locales';
import { DEFAULT_LANGUAGE_CODE, LANGUAGE_CODES } from '../constants/locales/language-codes';
import { getUserLanguage } from '../utils/locales';

interface TranslationOptions {
  strict?: boolean;
}

export default function useTranslate(options?: TranslationOptions) {
  const langCode = getUserLanguage(LANGUAGE_CODES, DEFAULT_LANGUAGE_CODE) as 'ua';
  const locale = LOCALES[langCode][langCode];

  return function t(text: string): string {
    const { strict } = options ?? {};
    // TODO: need to transform text by removing signs
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (strict) return locale[text as keyof typeof locale] ?? text;
    const words = text.split(' ');

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return words.map((word) => locale[word as keyof typeof locale]).join(' ');
  };
}
