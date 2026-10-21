import type { LucideIcon } from "lucide-react";
import type { ImageAsset } from "./image-asset";

export type ProjectReference = {
  icon: LucideIcon;
  topic: string;
  title: string;
  description: string;
  technologies: string[];
  image: ImageAsset;
};
