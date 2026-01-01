import Image from "next/image";

interface TestimonialsProps {
  locale: string;
}

// Safe translation function for Testimonials
async function getTestimonialsTranslations(locale: string) {
  try {
    const messages = await import(`../../messages/${locale}.json`);
    return messages.default.testimonials;
  } catch {
    console.log(`Testimonials translations not found for locale: ${locale}, falling back to English`);
    try {
      const messages = await import(`../../messages/en.json`);
      return messages.default.testimonials;
    } catch {
      console.log('English testimonials translations not found, using fallback text');
      return {
        title: 'Client Voices',
        quote: "Jajja Salongo Ndawula's spells transformed my life. I regained my lost love and experienced healing beyond belief. Truly a gifted healer and a powerful presence!"
      };
    }
  }
}

export default async function Testimonials({ locale }: TestimonialsProps) {
  const testimonials = await getTestimonialsTranslations(locale);
  return (
    <section className="relative bg-amber-400 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/image6.JPG"
          alt="Client testimonial"
          fill
          className="object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-8 sm:mb-12">
            {testimonials.title}
          </h2>
          <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-relaxed max-w-4xl mx-auto">
            &ldquo;{testimonials.quote}&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
