import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'sw', 'lg', 'fr', 'ar', 'de', 'mr', 'pt', 'ru', 'es', 'ta', 'te', 'tr', 'ur'] as const;
export type Locale = typeof locales[number];

// Type guard to check if a string is a valid locale
export function isValidLocale(locale: string | undefined): locale is Locale {
  return locale ? locales.includes(locale as Locale) : false;
}

export default getRequestConfig(async ({ locale }) => {
  // Validate locale
  if (!isValidLocale(locale)) {
    notFound();
  }

  try {
    const messages = (await import(`../messages/${locale}.json`)).default;
    return { 
      messages,
      locale 
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    notFound();
  }
});
