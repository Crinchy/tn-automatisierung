export const SITE_URL = "https://tn-automatisierung.lukas-buettner.workers.dev";

export const SITE_NAME = "TN Automatisierung";

export const SITE_TAGLINE = "Gute Logik. Starke Maschinen.";

export const SITE_DESCRIPTION =
  "SPS-Programmierung mit TIA Portal, Retrofit, Vision-Systeme und Roboterintegration von Tommy Nestmann. Inbetriebnahme deutschlandweit und im Ausland.";

export const THEME_COLOR = "#3572c2";

// Pages that set their own openGraph replace the layout's, so they spread these shared fields
export const SHARED_OPEN_GRAPH = {
  type: "website",
  locale: "de_DE",
  siteName: SITE_NAME,
} as const;
