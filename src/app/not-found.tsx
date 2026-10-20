import type { Metadata } from "next";
import SubpageLayout from "@/components/subpage/SubpageLayout";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
};

export default function NotFound() {
  return (
    <SubpageLayout
      title="Seite nicht gefunden"
      description="Diese Seite gibt es nicht oder nicht mehr."
    />
  );
}
