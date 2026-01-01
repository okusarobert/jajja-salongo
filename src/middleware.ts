import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'sw', 'lg', 'fr', 'ar', 'de', 'mr', 'pt', 'ru', 'es', 'ta', 'te', 'tr', 'ur'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
