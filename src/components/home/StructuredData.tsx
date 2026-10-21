import { CONTACT_EMAIL } from "@/config/contact";
import { LEGAL_DETAILS } from "@/config/legal";
import { SERVICES } from "@/config/services";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/config/site";
import content from "@/content/de.json";

// The address is left out until the real one replaces the placeholder in config/legal.ts
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: LEGAL_DETAILS.businessName,
      alternateName: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      email: CONTACT_EMAIL,
      logo: `${SITE_URL}/logo.svg`,
      foundingDate: "2015",
      founder: { "@type": "Person", name: LEGAL_DETAILS.ownerName },
      areaServed: {
        "@type": "Country",
        name: content.structuredData.areaServed,
      },
      knowsAbout: SERVICES.map((service) => service.label),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: content.navigation.sections.leistungen,
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.label,
            description: service.description,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "de-DE",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD built from static config, with "<" escaped as Next.js recommends
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c"),
      }}
    />
  );
}
