import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

// Impressum and Datenschutz are noindex, so only the home page is listed
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL, changeFrequency: "monthly", priority: 1 }];
}
