import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface TraditionalHealingPageProps {
  params: Promise<{ locale: string }>;
}

// Safe translation function for Traditional Healing Page
async function getTraditionalHealingTranslations(locale: string) {
  try {
    const messages = await import(`../../../../messages/${locale}.json`);
    return messages.default.traditionalHealingPage;
  } catch {
    console.log(`Traditional healing page translations not found for locale: ${locale}, falling back to English`);
    try {
      const messages = await import(`../../../../messages/en.json`);
      return messages.default.traditionalHealingPage;
    } catch {
      console.log('English traditional healing page translations not found, using fallback text');
      return {
        title: "Traditional African Healing Ways",
        subtitle: "48 Years of Spiritual Wisdom and Cultural Heritage",
        introduction: "For the past 48 years, Jaja Salongo Ndaula has played a very important role in offering spiritual wisdom, understanding, and awakening of the different African cultures through traditional healing and casting spells.",
        sections: {
          oldWays: {
            title: "The Old Traditional African Healing Ways",
            content: "The Ancient Bantu and Bachwezi traditional healing ways are a complex system that comprises physical health and spiritual well-being. These old traditional ways have been passed on from time to time."
          },
          origin: {
            title: "Origin & Cultural Significance",
            content: "The Bantu local way of healing has its roots all the way from the south of the African continent which has a deep spiritual and community effect on the African societies. Jaja Salongo Ndaula plays a crucial role in diagnosing and treating through his spiritual practices and psychic powers and casting of African Spells."
          },
          knowledge: {
            title: "Generational Knowledge & Understanding",
            content: "Traditional / Cultural healers play a tremendous role in mentoring younger generations to keep the practices preserved and pure. This has helped teach young generations about cultural practices, presentations, offerings, sacrifices and understanding of the nature & the universe.",
            additional: "Often referred to in Africa as witchdoctors (Jaja), who believe in the interconnectedness of the physical body & spiritual worlds. Ceremonies are performed to communicate between the living and the spirits with the help of African traditional practices like the full moon Spell cast & African healing practices."
          },
          services: {
            title: "Services Offered",
            subtitle: "The desire to improve various aspects of life has driven our team to perform all these services:",
            love: {
              title: "Love & Relationship Spells",
              items: ["Attraction", "To Be Loved", "To Be Given", "Good Luck"]
            },
            cleansing: {
              title: "Cleansing & Offertory Ceremonies",
              content: "This is an essential part of healing services aimed at removing negative energies, bad souls, using African herbs and trees. These practices cleanse the mind, body & spirit."
            },
            protection: {
              title: "Protection Spells"
            },
            health: {
              title: "Health & Wellness Remedies",
              content: "Our Team aims at more than just the well-being of its Clients while using natural, organic ingredients and natural specimens from places like the source of the Nile (Bujagali Falls) waters and Organic tree specimens."
            },
            ancestral: {
              title: "Connection to Ancestral Spirits",
              content: "Through prayers, fasting and rituals, they seek their wisdom & intervention in times of need, which focuses on bringing peace, healing & balance in one's life."
            }
          },
          divineHealing: {
            title: "Divine Healing Techniques",
            content: "This aspect of African traditional healing allows the healer to gain insight into the causes of problems and possible outcomes of their interventions such as:",
            techniques: ["The Godly & Candle Spell Reading", "Salt & River Bath", "Meditation & mindfulness"]
          },
          personalizedTreatment: {
            title: "Personalised Treatment Plans",
            content: "Following the initial assessment, our healer shall create a personalized treatment plan tailored to your specific needs. Such may include: traditional rituals, herbal remedies, spiritual guidance."
          },
          remoteHealing: {
            title: "Remote & In-Person Healing Options",
            content: "Our healer offers both remote & in-person healing options depending on cultures & backgrounds. Whether you are seeking guidance from a distance or in person, we are committed to providing effective support."
          },
          followUp: {
            title: "Follow Up Support & Guidance",
            content: "After the initial consultation & treatment plan, our Team healer provides ongoing support & guidance. Follow-up support & guidance to ensure that you are on the path to healing. This will include regular check-in and communication, and site visits."
          }
        },
        conclusion: {
          title: "Conclusion",
          content: "For anyone seeking more classes and practices, healing and awakening services, can reach out to our experienced team who will be glad to provide professional, safe and personalized guidance & support regardless of your financial struggles."
        },
        contactCta: "Contact Us for Healing Services"
      };
    }
  }
}

export default async function TraditionalHealingPage({ params }: TraditionalHealingPageProps) {
  const { locale } = await params;
  const healingPage = await getTraditionalHealingTranslations(locale);

  return (
    <main className="min-h-screen bg-white">
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {healingPage.title}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-amber-700 font-semibold mb-8">
                {healingPage.subtitle}
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                {healingPage.introduction}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/image2.JPG"
                  alt="Jaja Salongo Ndaula - Traditional African Healer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Old Traditional Ways Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image3.JPG"
                  alt="Traditional African healing practices"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                1. {healingPage.sections.oldWays.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {healingPage.sections.oldWays.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin & Cultural Significance */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                2. {healingPage.sections.origin.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {healingPage.sections.origin.content}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image4.JPG"
                  alt="African cultural healing significance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generational Knowledge */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              3. {healingPage.sections.knowledge.title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {healingPage.sections.knowledge.content}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {healingPage.sections.knowledge.additional}
              </p>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/image5.JPG"
              alt="Generational knowledge transfer in traditional healing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              4. {healingPage.sections.services.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {healingPage.sections.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Love & Relationship Spells */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💕</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {healingPage.sections.services.love.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {healingPage.sections.services.love.items.map((item: string, index: number) => (
                    <li key={index} className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cleansing Ceremonies */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {healingPage.sections.services.cleansing.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {healingPage.sections.services.cleansing.content}
                </p>
              </div>
            </div>

            {/* Protection Spells */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {healingPage.sections.services.protection.title}
                </h3>
              </div>
            </div>

            {/* Health & Wellness */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {healingPage.sections.services.health.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {healingPage.sections.services.health.content}
                </p>
              </div>
            </div>

            {/* Ancestral Connection */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🙏</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {healingPage.sections.services.ancestral.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {healingPage.sections.services.ancestral.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divine Healing Techniques */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {healingPage.sections.divineHealing.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {healingPage.sections.divineHealing.content}
              </p>
              <ul className="space-y-4">
                {healingPage.sections.divineHealing.techniques.map((technique: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">{technique}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image6.JPG"
                  alt="Divine healing techniques and spiritual practices"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Personalized Treatment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                5. {healingPage.sections.personalizedTreatment.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {healingPage.sections.personalizedTreatment.content}
              </p>
            </div>

            {/* Remote & In-Person */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                6. {healingPage.sections.remoteHealing.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {healingPage.sections.remoteHealing.content}
              </p>
            </div>

            {/* Follow-up Support */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                7. {healingPage.sections.followUp.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {healingPage.sections.followUp.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion & CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            {healingPage.conclusion.title}
          </h2>
          <p className="text-xl leading-relaxed mb-12">
            {healingPage.conclusion.content}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              {healingPage.contactCta}
            </a>
            <a
              href="https://wa.me/256774103036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
      <WhatsAppButton phoneNumber="+256774103036" />
    </main>
  );
}
