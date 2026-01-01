import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import GoogleMap from "@/components/GoogleMap";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

// Safe translation function for Contact Page
async function getContactPageTranslations(locale: string) {
  try {
    const messages = await import(`../../../../messages/${locale}.json`);
    return messages.default.contactPage;
  } catch {
    console.log(`Contact page translations not found for locale: ${locale}, falling back to English`);
    try {
      const messages = await import(`../../../../messages/en.json`);
      return messages.default.contactPage;
    } catch {
      console.log('English contact page translations not found, using fallback text');
      return {
        title: "Contact Us",
        description: "Get in touch with Jajja Salongo Ndawula for spiritual guidance, healing services, and personalized consultations.",
        formTitle: "Send us a Message"
      };
    }
  }
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const contactPage = await getContactPageTranslations(locale);
  return (
    <main className="min-h-screen bg-white">
      <Header locale={locale} />

      {/* Header Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {contactPage.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              {contactPage.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <ContactInfo />
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                  {contactPage.formTitle}
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleMap />
        </div>
      </section>

      <Footer locale={locale} />

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="+256774103036" />
    </main>
  );
}
