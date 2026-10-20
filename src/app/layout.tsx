import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nestmann Automatisierung",
  description:
    "TIA Portal, klare Programmarchitektur und das Zusammenspiel von Steuerung, Vision-Systemen und Robotern. Von der neuen Anlage bis zum Retrofit.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${archivo.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
