import ContactBand from "@/components/home/ContactBand";
import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import ReferencesSection from "@/components/home/ReferencesSection";
import ServicesSection from "@/components/home/ServicesSection";
import SiteFooter from "@/components/home/SiteFooter";
import SiteHeader from "@/components/home/SiteHeader";
import Ticker from "@/components/home/Ticker";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Ticker />
        <ServicesSection />
        <ReferencesSection />
        <ContactBand />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
