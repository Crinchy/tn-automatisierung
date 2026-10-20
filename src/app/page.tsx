import type { Metadata } from "next";
import ContactBand from "@/components/home/ContactBand";
import Hero from "@/components/home/Hero";
import ReferencesSection from "@/components/home/ReferencesSection";
import ServicesSection from "@/components/home/ServicesSection";
import StructuredData from "@/components/home/StructuredData";
import PageTransition from "@/components/layout/PageTransition";
import { SHARED_OPEN_GRAPH } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...SHARED_OPEN_GRAPH, url: "/" },
};

export default function Home() {
  return (
    <PageTransition>
      <main>
        <StructuredData />
        <Hero />
        <ServicesSection />
        <ReferencesSection />
        <ContactBand />
      </main>
    </PageTransition>
  );
}
