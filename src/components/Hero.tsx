import Link from "next/link";
import VideoPlayer from "./VideoPlayer";

interface HeroProps {
  locale: string;
}

// Safe translation function for hero content
async function getHeroTranslations(locale: string) {
  try {
    const messages = await import(`../../messages/${locale}.json`);
    return messages.default.hero;
  } catch (error) {
    console.error(`Failed to load hero translations for ${locale}:`, error);
    // Fallback to English
    try {
      const fallback = await import(`../../messages/en.json`);
      return fallback.default.hero;
    } catch (fallbackError) {
      console.error('Failed to load fallback hero translations:', fallbackError);
      // Hard fallback
      return {
        title: 'Jajja Salongo Ndawula Healing',
        description: 'Jajja Salongo Ndawula is a renowned traditional healer and spell caster, offering natural remedies and spiritual guidance across Africa and beyond to solve life\'s challenges.',
        cta: 'Get Help'
      };
    }
  }
}

export default async function Hero({ locale }: HeroProps) {
  const hero = await getHeroTranslations(locale);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width background video */}
      <div className="absolute inset-0 w-full h-full">
        <VideoPlayer
          src="/video1.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full"
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10 leading-tight drop-shadow-lg">
          {hero.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
          {hero.description}
        </p>
        <Link href={`/${locale}/contact`}>
          <button className="inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-white text-gray-900 font-semibold text-lg sm:text-xl rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-white">
            {hero.cta}
          </button>
        </Link>
      </div>
    </section>
  );
}
