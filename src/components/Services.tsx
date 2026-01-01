import Image from "next/image";
import VideoPlayer from "./VideoPlayer";

interface ServicesProps {
  locale: string;
}

// Safe translation function for services content
async function getServicesTranslations(locale: string) {
  try {
    const messages = await import(`../../messages/${locale}.json`);
    return messages.default.services;
  } catch (error) {
    console.error(`Failed to load services translations for ${locale}:`, error);
    // Fallback to English
    try {
      const fallback = await import(`../../messages/en.json`);
      return fallback.default.services;
    } catch (fallbackError) {
      console.error('Failed to load fallback services translations:', fallbackError);
      // Hard fallback
      return {
        title: 'Spiritual Healing Services',
        traditional: {
          title: 'Traditional Healing & Spell Casting',
          description: 'Jajja Salongo Ndawula offers powerful traditional healing and spell casting for various life challenges.'
        },
        love: {
          title: 'Love Spells',
          description: 'Imagine a love spell that could return your Ex boyfriend or girlfriend in just a few hours. Try Jajja Salongo Ndawula\'s Love spell'
        },
        psychic: {
          title: 'Psychic Reading',
          description: 'Unlock the mysteries of past, present and future through psychic reading, get insights into my troubling situation you maybe facing'
        }
      };
    }
  }
}

export default async function Services({ locale }: ServicesProps) {
  const services = await getServicesTranslations(locale);
  return (
    <section className="bg-gray-800 py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-12 sm:mb-16 md:mb-20">
          {services.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Traditional Healing & Spell Casting */}
          <div className="text-center group">
            <div className="mb-6 sm:mb-8 space-y-4">
              {/* Service Video */}
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 relative">
                <VideoPlayer
                  src="/video2.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-full h-full"
                />
              </div>

              {/* Service Image */}
              <div className="aspect-square rounded-lg overflow-hidden mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative">
                <Image
                  src="/image3.JPG"
                  alt="Traditional healing and spell casting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-white text-base sm:text-lg leading-relaxed px-2 sm:px-4">
              {services.traditional.description}
            </p>
          </div>

          {/* Love Spell */}
          <div className="text-center group">
            <div className="mb-6 sm:mb-8 space-y-4">
              {/* Service Video */}
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 relative">
                <VideoPlayer
                  src="/video3.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-full h-full"
                />
              </div>

              {/* Service Image */}
              <div className="aspect-square rounded-lg overflow-hidden mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative">
                <Image
                  src="/image4.JPG"
                  alt="Love spell services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-white text-base sm:text-lg leading-relaxed px-2 sm:px-4">
              {services.love.description}
            </p>
          </div>

          {/* Psychic Reading */}
          <div className="text-center group md:col-span-2 lg:col-span-1">
            <div className="mb-6 sm:mb-8 space-y-4">
              {/* Service Video */}
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 relative">
                <VideoPlayer
                  src="/video1.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-full h-full"
                />
              </div>

              {/* Service Image */}
              <div className="aspect-square rounded-lg overflow-hidden mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative">
                <Image
                  src="/image5.JPG"
                  alt="Psychic reading services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-white text-base sm:text-lg leading-relaxed px-2 sm:px-4">
              {services.psychic.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
