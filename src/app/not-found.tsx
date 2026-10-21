import type { Metadata } from "next";
import SubpageLayout from "@/components/subpage/SubpageLayout";
import content from "@/content/de.json";

export const metadata: Metadata = {
  title: content.notFound.title,
};

export default function NotFound() {
  return (
    <SubpageLayout
      title={content.notFound.title}
      description={content.notFound.description}
    />
  );
}
