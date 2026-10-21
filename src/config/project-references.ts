import { Camera, Crosshair, Wrench } from "lucide-react";
import type { ProjectReference } from "@/types/project-reference";

export const PROJECT_REFERENCES: ProjectReference[] = [
  {
    icon: Wrench,
    topic: "Inbetriebnahme & Betreuung",
    title: "Colorist-Anlage USA",
    description:
      "Inbetriebnahme, Fehlersuche und Optimierung einer Colorist-Anlage in den USA. Anschließender Remote-Support bei Anpassungen und Erweiterungen.",
    technologies: ["TIA Portal", "Inbetriebnahme", "Support"],
    // Stock photo until a real project photo is available: Aleksandr Lyaptsev, unsplash.com/photos/q0Jo_J5YxHY
    image: {
      src: "https://images.unsplash.com/photo-1753272691001-4d68806ac590?w=2400&q=80&auto=format&fit=crop",
      alt: "Schaltschrank mit Verdrahtung und Komponenten",
    },
  },
  {
    icon: Crosshair,
    topic: "Programmarchitektur & Motion",
    title: "Laser-Portal-System",
    description:
      "Berechnung und Umsetzung einer Koordinatentransformation zwischen Laserscanner und Portalachsen zur präzisen Positionierung von Werkstücken.",
    technologies: ["SCL", "Motion", "Lasersensorik"],
    // Stock photo until a real project photo is available: Daniel Miksha, unsplash.com/photos/K-AGcjpmU-c
    image: {
      src: "https://images.unsplash.com/photo-1781330173666-11f8818d6eb2?w=2400&q=80&auto=format&fit=crop",
      alt: "Reihe komplexer Industriemaschinen in einer modernen Halle",
    },
  },
  {
    icon: Camera,
    topic: "Vision & Anlagenintegration",
    title: "Palettenprüfung",
    description:
      "Prüfkonzept zur Bewertung von Paletten mit Kamerasystem und industrieller Bildverarbeitung. Anbindung der Prüfergebnisse an die Steuerung; KI-Auswertung als weiterer Entwicklungsschritt.",
    technologies: ["Vision-System", "Bildaufnahme", "SPS-Anbindung"],
    // Stock photo until a real project photo is available: Trans Russia, unsplash.com/photos/4nfPgBofTs4
    image: {
      src: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?w=2400&q=80&auto=format&fit=crop",
      alt: "Automatisiertes Fördersystem in einem Lager",
    },
  },
];
