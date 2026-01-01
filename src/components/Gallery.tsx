import Image from "next/image";

interface GalleryProps {
  locale: string;
}

const galleryImages = [
  { src: "/image2.JPG", alt: "Traditional healing session" },
  { src: "/image3.JPG", alt: "Spiritual consultation" },
  { src: "/image4.JPG", alt: "Healing ceremony" },
  { src: "/image5.JPG", alt: "Traditional medicine" },
  { src: "/image6.JPG", alt: "Spiritual guidance" },
  { src: "/image2.JPG", alt: "Healing practices" },
  { src: "/image3.JPG", alt: "Traditional rituals" },
  { src: "/image4.JPG", alt: "Spiritual healing" },
  { src: "/image5.JPG", alt: "Traditional consultation" },
  { src: "/image6.JPG", alt: "Healing wisdom" },
  { src: "/image2.JPG", alt: "Spiritual traditions" },
  { src: "/image3.JPG", alt: "Traditional healing methods" },
];

// Safe translation function for Gallery
async function getGalleryTranslations(locale: string) {
  try {
    const messages = await import(`../../messages/${locale}.json`);
    return messages.default.gallery;
  } catch {
    console.log(`Gallery translations not found for locale: ${locale}, falling back to English`);
    try {
      const messages = await import(`../../messages/en.json`);
      return messages.default.gallery;
    } catch {
      console.log('English gallery translations not found, using fallback text');
      return {
        title: 'Gallery of Healing',
        description: 'Explore the traditional healing practices and spiritual wisdom of Jajja Salongo Ndawula'
      };
    }
  }
}

export default async function Gallery({ locale }: GalleryProps) {
  const gallery = await getGalleryTranslations(locale);
  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            {gallery.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            {gallery.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group">
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-lg px-3 sm:px-4 py-2">
                      <p className="text-gray-800 font-medium text-xs sm:text-sm">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
