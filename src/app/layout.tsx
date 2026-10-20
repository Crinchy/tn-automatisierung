import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nestmann Automatisierung",
  description:
    "TIA Portal, klare Programmarchitektur und das Zusammenspiel von Steuerung, Vision-Systemen und Robotern. Von der neuen Anlage bis zum Retrofit.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
