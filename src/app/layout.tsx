import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { LEGAL_DETAILS } from "@/config/legal";
import {
  SHARED_OPEN_GRAPH,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  THEME_COLOR,
} from "@/config/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: LEGAL_DETAILS.ownerName, url: SITE_URL }],
  creator: LEGAL_DETAILS.ownerName,
  publisher: LEGAL_DETAILS.businessName,
  keywords: [
    "Industrieautomatisierung",
    "SPS-Programmierung",
    "TIA Portal",
    "Programmarchitektur",
    "Retrofit",
    "S7-300",
    "S7-400",
    "Vision-Systeme",
    "Bildverarbeitung",
    "Roboterintegration",
    "Inbetriebnahme",
    "Sondermaschinenbau",
  ],
  category: "Industrieautomatisierung",
  openGraph: SHARED_OPEN_GRAPH,
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} antialiased`}
    >
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
