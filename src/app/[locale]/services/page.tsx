import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

// Safe translation function for Services Page
async function getServicesPageTranslations(locale: string) {
  try {
    const messages = await import(`../../../../messages/${locale}.json`);
    return messages.default.servicesPage;
  } catch {
    console.log(`Services page translations not found for locale: ${locale}, falling back to English`);
    try {
      const messages = await import(`../../../../messages/en.json`);
      return messages.default.servicesPage;
    } catch {
      console.log('English services page translations not found, using fallback text');
      return {
        title: "Spiritual Healing Services",
        description: "Jajja Salongo Ndawula offers powerful spells and natural remedies for love, protection, and success.",
        services: {
          spellCasting: {
            title: "Effective Spell Casting",
            description: "Traditional healing and spell casting using natural remedies to address love, protection, and success across East, Central, and Southern Africa, and beyond."
          },
          businessSuccess: {
            title: "Business Success Ritual",
            description: "Elevate your business to new heights. Attract customers, increase profits, and help your ventures thrive in competitive markets."
          },
          protection: {
            title: "Protective Energy Spells",
            description: "Dispel negative energies, shield yourself from harm, and break curses to ensure a safe and positive environment for you and your loved ones."
          },
          healing: {
            title: "Spiritual Healing",
            description: "Powerful natural remedies and personalized guidance for a wide range of life challenges."
          }
        },
        cta: {
          title: "Ready to Transform Your Life?",
          description: "Get in touch for authentic traditional healing, effective spells, and personalized spiritual guidance.",
          button: "Chat on WhatsApp"
        },
        contact: {
          email: "Email",
          phone: "Phone / WhatsApp",
          hours: "Hours",
          hoursValue: "9am – 6pm"
        }
      };
    }
  }
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const servicesPage = await getServicesPageTranslations(locale);

  const services = [
    {
      title: servicesPage.services.spellCasting.title,
      desc: servicesPage.services.spellCasting.description,
      img: "/image2.JPG",
    },
    {
      title: servicesPage.services.businessSuccess.title,
      desc: servicesPage.services.businessSuccess.description,
      img: "/image3.JPG",
    },
    {
      title: servicesPage.services.protection.title,
      desc: servicesPage.services.protection.description,
      img: "/image4.JPG",
    },
    {
      title: servicesPage.services.healing.title,
      desc: servicesPage.services.healing.description,
      img: "/image5.JPG",
    },
  ];
  return (
    <main className="min-h-screen bg-white">
      <Header locale={locale} />

      {/* Hero */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            {servicesPage.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl">
            {servicesPage.description}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {services.map((s) => (
              <article
                key={s.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {s.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {s.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-400 py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {servicesPage.cta.title}
            </h3>
            <p className="text-base sm:text-lg text-gray-800">
              {servicesPage.cta.description}
            </p>
          </div>
          <div className="flex lg:justify-end">
            <a
              href="https://wa.me/256774103036?text=Hello%20Jajja%20Salongo%20Ndawula,%20I%20would%20like%20help%20with%20your%20services."
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white font-semibold text-base sm:text-lg rounded-lg border-2 border-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {servicesPage.cta.button}
            </a>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              {servicesPage.contact.email}
            </h4>
            <a
              href="mailto:jajasalongondaula@gmail.com"
              className="text-gray-700 hover:text-gray-900 text-sm sm:text-base"
            >
              jajasalongondaula@gmail.com
            </a>
          </div>
          <div className="text-center">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              {servicesPage.contact.phone}
            </h4>
            <a
              href="https://wa.me/256774103036"
              className="text-gray-700 hover:text-gray-900 text-sm sm:text-base"
            >
              +256774103036
            </a>
          </div>
          <div className="text-center">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              {servicesPage.contact.hours}
            </h4>
            <p className="text-gray-700 text-sm sm:text-base">{servicesPage.contact.hoursValue}</p>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
      <WhatsAppButton phoneNumber="+256774103036" />
    </main>
  );
}
