import type { Metadata } from "next";
import ContactDetails from "@/components/subpage/ContactDetails";
import SubpageLayout from "@/components/subpage/SubpageLayout";
import SubpageSection from "@/components/subpage/SubpageSection";
import { LEGAL_DETAILS } from "@/config/legal";
import { SHARED_OPEN_GRAPH } from "@/config/site";
import content from "@/content/de.json";

export const metadata: Metadata = {
  title: content.imprint.title,
  description: content.imprint.description,
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum" },
  openGraph: { ...SHARED_OPEN_GRAPH, url: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <SubpageLayout
      title={content.imprint.title}
      description={content.imprint.description}
    >
      <SubpageSection title={content.imprint.providerHeading}>
        <ContactDetails showAddress />
      </SubpageSection>
      <SubpageSection title={content.imprint.vatHeading}>
        <p>{content.imprint.vatText}</p>
        <p className="font-semibold">{LEGAL_DETAILS.vatId}</p>
      </SubpageSection>
    </SubpageLayout>
  );
}
