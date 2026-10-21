import content from "@/content/de.json";

export const SITE_URL =
  "https://tn-automatisierung.lukas-buettner.workers.dev/";

export const SITE_NAME = content.site.name;

const SITE_HOST = new URL(SITE_URL).host;

export const SITE_TAGLINE = content.site.tagline;

export const SITE_DESCRIPTION = content.site.description;

export const THEME_COLOR = "#3572c2";

// Pages that set their own openGraph replace the layout's, so they spread these shared fields
export const SHARED_OPEN_GRAPH = {
  type: "website",
  locale: "de_DE",
  siteName: SITE_HOST,
  images: {
    url: "/opengraph-image.png",
    width: 1200,
    height: 630,
    alt: content.openGraphImage.alt,
  },
} as const;
