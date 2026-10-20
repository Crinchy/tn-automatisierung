import type { Metadata } from "next";
import ContactDetails from "@/components/subpage/ContactDetails";
import SubpageLayout from "@/components/subpage/SubpageLayout";
import SubpageSection from "@/components/subpage/SubpageSection";
import { LEGAL_DETAILS } from "@/config/legal";

const DESCRIPTION =
  "Impressum und Anbieterkennzeichnung von TN Automatisierung, Tommy Nestmann.";

export const metadata: Metadata = {
  title: "Impressum",
  description: DESCRIPTION,
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <SubpageLayout title="Impressum" description={DESCRIPTION}>
      <SubpageSection title="Angaben gemäß § 5 DDG">
        <ContactDetails showAddress />
      </SubpageSection>
      <SubpageSection title="Umsatzsteuer-ID">
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        </p>
        <p className="font-semibold">{LEGAL_DETAILS.vatId}</p>
      </SubpageSection>
    </SubpageLayout>
  );
}
