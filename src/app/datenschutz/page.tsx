import type { Metadata } from "next";
import ContactDetails from "@/components/subpage/ContactDetails";
import SubpageLayout from "@/components/subpage/SubpageLayout";
import SubpageSection from "@/components/subpage/SubpageSection";
import { SHARED_OPEN_GRAPH } from "@/config/site";
import content from "@/content/de.json";

export const metadata: Metadata = {
  title: content.privacy.title,
  description: content.privacy.description,
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz" },
  openGraph: { ...SHARED_OPEN_GRAPH, url: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <SubpageLayout
      title={content.privacy.title}
      description={content.privacy.description}
    >
      <SubpageSection title={content.privacy.controllerHeading}>
        <ContactDetails showAddress />
      </SubpageSection>
      <SubpageSection title={content.privacy.policyHeading}>
        <p>{content.privacy.policyText}</p>
      </SubpageSection>
    </SubpageLayout>
  );
}
