import { Camera, Crosshair, type LucideIcon, Wrench } from "lucide-react";
import content from "@/content/de.json";
import type { ProjectReference } from "@/types/project-reference";

type ReferenceKey = keyof typeof content.references.items;

type ReferenceAssets = {
  icon: LucideIcon;
  imageSrc: string;
};

// Icon and photo per project, in display order; the texts live in content/de.json under the same keys.
// The photos are Unsplash stock photos until real project photos are available.
const REFERENCE_ASSETS: Record<ReferenceKey, ReferenceAssets> = {
  // Aleksandr Lyaptsev, unsplash.com/photos/q0Jo_J5YxHY
  colorist: {
    icon: Wrench,
    imageSrc:
      "https://images.unsplash.com/photo-1753272691001-4d68806ac590?w=2400&q=80&auto=format&fit=crop",
  },
  // Daniel Miksha, unsplash.com/photos/K-AGcjpmU-c
  laserPortal: {
    icon: Crosshair,
    imageSrc:
      "https://images.unsplash.com/photo-1781330173666-11f8818d6eb2?w=2400&q=80&auto=format&fit=crop",
  },
  // Trans Russia, unsplash.com/photos/4nfPgBofTs4
  palletInspection: {
    icon: Camera,
    imageSrc:
      "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?w=2400&q=80&auto=format&fit=crop",
  },
};

export const PROJECT_REFERENCES: ProjectReference[] = (
  Object.keys(REFERENCE_ASSETS) as ReferenceKey[]
).map((key) => {
  const { imageAlt, ...text } = content.references.items[key];

  return {
    icon: REFERENCE_ASSETS[key].icon,
    ...text,
    image: { src: REFERENCE_ASSETS[key].imageSrc, alt: imageAlt },
  };
});
