import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  console.log("Home - locale: ", locale);
  
  return (
    <main className="min-h-screen bg-white">
      <Header locale={locale} />
      <Hero locale={locale} />
      <Services locale={locale} />
      <Gallery locale={locale} />
      <Testimonials locale={locale} />
      <Footer locale={locale} />
      <WhatsAppButton phoneNumber="+256774103036" />
    </main>
  );
}
