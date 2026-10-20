import type { ReactNode } from "react";
import Reveal from "@/components/layout/Reveal";

type SectionLayoutProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function SectionLayout({
  id,
  title,
  children,
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className="wrap grid py-28 tablet:py-36 lg:py-44 gap-14 tablet:gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24"
    >
      <Reveal
        as="h2"
        className="animate-reveal-clip text-4xl whitespace-pre-line tablet:text-5xl lg:sticky lg:top-32 lg:self-start"
      >
        {title}
      </Reveal>
      <div>
        <div className="h-0.5 animate-rule-draw bg-ink" aria-hidden="true" />
        {children}
      </div>
    </section>
  );
}
