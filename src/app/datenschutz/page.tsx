import type { Metadata } from "next";
import ContactDetails from "@/components/subpage/ContactDetails";
import SubpageLayout from "@/components/subpage/SubpageLayout";
import SubpageSection from "@/components/subpage/SubpageSection";
import { PRIVACY_POLICY_PLACEHOLDER } from "@/config/legal";

const DESCRIPTION =
  "Datenschutzerklärung von TN Automatisierung, Tommy Nestmann.";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: DESCRIPTION,
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <SubpageLayout title="Datenschutz" description={DESCRIPTION}>
      <SubpageSection title="Verantwortlicher">
        <ContactDetails showAddress />
      </SubpageSection>
      <SubpageSection title="Datenschutzerklärung">
        <p>{PRIVACY_POLICY_PLACEHOLDER}</p>
      </SubpageSection>
    </SubpageLayout>
  );
}
