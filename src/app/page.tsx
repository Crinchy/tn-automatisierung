import ContactBand from "@/components/home/ContactBand";
import Hero from "@/components/home/Hero";
import ReferencesSection from "@/components/home/ReferencesSection";
import ServicesSection from "@/components/home/ServicesSection";
import SiteFooter from "@/components/home/SiteFooter";
import SiteHeader from "@/components/home/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ServicesSection />
        <ReferencesSection />
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
