import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

// Safe translation function for About Page
async function getAboutPageTranslations(locale: string) {
  try {
    const messages = await import(`../../../../messages/${locale}.json`);
    return messages.default.aboutPage;
  } catch {
    console.log(`About page translations not found for locale: ${locale}, falling back to English`);
    try {
      const messages = await import(`../../../../messages/en.json`);
      return messages.default.aboutPage;
    } catch {
      console.log('English about page translations not found, using fallback text');
      return {
        title: "About",
        subtitle: "Jajja Salongo Ndawula Healing",
        description: "Jajja Salongo Ndawula is a renowned traditional healer, offering powerful spiritual solutions and natural remedies across Africa, the USA, UK, Australia, and Asia.",
        learnMore: "Learn More",
        aboutTitle: "Jajja Salongo Ndawula",
        aboutDescription: "Traditional healer and spell caster offering natural remedies for various life challenges.",
        servicesTitle: "Our Services",
        services: {
          healing: {
            title: "Healing and Guidance",
            description: "We provide love spells, psychic readings, and protective rituals to restore balance."
          },
          global: {
            title: "Global Reach",
            description: "Serving clients across Africa, the USA, UK, Australia, and Asia with powerful spiritual solutions."
          }
        },
        testimonialsTitle: "Customer Feedback",
        testimonials: {
          sarah: "Jajja Salongo Ndawula's spells transformed my life; I found love and success beyond expectations.",
          michael: "The psychic reading was accurate and insightful, guiding me through difficult times."
        },
        contact: {
          email: "Email",
          phone: "Phone / WhatsApp"
        }
      };
    }
  }
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const aboutPage = await getAboutPageTranslations(locale);

  const testimonials = [
    {
      quote: aboutPage.testimonials.sarah,
      author: "Sarah M.",
    },
    {
      quote: aboutPage.testimonials.michael,
      author: "Michael K.",
    },
  ];

  const services = [
    {
      title: aboutPage.services.healing.title,
      desc: aboutPage.services.healing.description,
      icon: "🌟",
    },
    {
      title: aboutPage.services.global.title,
      desc: aboutPage.services.global.description,
      icon: "🌍",
    },
  ];
  return (
    <main className="min-h-screen bg-white">
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight">
                {aboutPage.title}
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                {aboutPage.subtitle}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                {aboutPage.description}
              </p>
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white font-semibold text-base sm:text-lg rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                {aboutPage.learnMore}
              </a>
            </div>
            {/* Right side - Image */}
            <div className="relative order-first lg:order-last">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/image2.JPG"
                  alt="Jajja Salongo Ndawula - Traditional Healer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 sm:mb-16">
              {aboutPage.aboutTitle}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {aboutPage.aboutDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 sm:mb-16">
            {aboutPage.servicesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Feedback */}
      <section className="bg-amber-400 py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 sm:mb-16">
            {aboutPage.testimonialsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 sm:p-8 shadow-lg"
              >
                <blockquote className="text-base sm:text-lg md:text-xl text-gray-900 mb-4 sm:mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <cite className="text-gray-700 font-semibold text-sm sm:text-base">
                  — {testimonial.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-center">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {aboutPage.contact.email}
              </h3>
              <a
                href="mailto:jajasalongondaula@gmail.com"
                className="text-base sm:text-lg text-gray-700 hover:text-gray-900 transition-colors"
              >
                jajasalongondaula@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {aboutPage.contact.phone}
              </h3>
              <a
                href="https://wa.me/256774103036"
                className="text-base sm:text-lg text-gray-700 hover:text-gray-900 transition-colors"
              >
                +256774103036
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
      <WhatsAppButton phoneNumber="+256774103036" />
    </main>
  );
}
