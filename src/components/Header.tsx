import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  locale: string;
}

// Safe translation function that loads directly from JSON files
async function getNavTranslations(locale: string) {
  try {
    const messages = await import(`../../messages/${locale}.json`);
    return messages.default.navigation;
  } catch (error) {
    console.error(`Failed to load translations for ${locale}:`, error);
    // Fallback to English
    try {
      const fallback = await import(`../../messages/en.json`);
      return fallback.default.navigation;
    } catch (fallbackError) {
      console.error('Failed to load fallback translations:', fallbackError);
      // Hard fallback
      return {
        home: 'Home',
        services: 'Services',
        about: 'About',
        contact: 'Contact'
      };
    }
  }
}

export default async function Header({ locale }: HeaderProps) {
  console.log("Header - locale: ", locale);
  
  const nav = await getNavTranslations(locale);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              Jajja Salongo Ndawula
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <Link
                href={`/${locale}`}
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-base font-medium transition-colors"
              >
                {nav.home}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-base font-medium transition-colors"
              >
                {nav.services}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-base font-medium transition-colors"
              >
                {nav.about}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-base font-medium transition-colors"
              >
                {nav.contact}
              </Link>
              <LanguageSwitcher locale={locale} />
            </div>
          </nav>

          {/* Mobile menu button and language switcher */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
}
