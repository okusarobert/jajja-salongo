const locales = ['en', 'sw', 'lg', 'fr', 'ar', 'de', 'mr', 'pt', 'ru', 'es', 'ta', 'te', 'tr', 'ur'];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  console.log("Layout - locale:", locale);
  
  // Simple validation
  if (!locale || !locales.includes(locale)) {
    console.log("Invalid locale:", locale);
    return <div>Invalid locale: {locale}</div>;
  }

  console.log("Layout - rendering children without NextIntlClientProvider");
  
  return <div>{children}</div>;
}
