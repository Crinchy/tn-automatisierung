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
  },
  {
    icon: Crosshair,
    topic: "Programmarchitektur & Motion",
    title: "Laser-Portal-System",
    description:
      "Berechnung und Umsetzung einer Koordinatentransformation zwischen Laserscanner und Portalachsen zur präzisen Positionierung von Werkstücken.",
    technologies: ["SCL", "Motion", "Lasersensorik"],
  },
  {
    icon: Camera,
    topic: "Vision & Anlagenintegration",
    title: "Palettenprüfung",
    description:
      "Prüfkonzept zur Bewertung von Paletten mit Kamerasystem und industrieller Bildverarbeitung. Anbindung der Prüfergebnisse an die Steuerung; KI-Auswertung als weiterer Entwicklungsschritt.",
    technologies: ["Vision-System", "Bildaufnahme", "SPS-Anbindung"],
  },
];
