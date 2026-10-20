import type { ReactNode } from "react";
import Reveal from "@/components/layout/Reveal";

type SubpageSectionProps = {
  title: string;
  children: ReactNode;
};

export default function SubpageSection({
  title,
  children,
}: SubpageSectionProps) {
  return (
    <section className="grid gap-6 border-b border-rule py-12 tablet:py-14 lg:grid-cols-[1fr_2fr] lg:gap-24">
      <Reveal as="h2" className="animate-reveal-up text-2xl tablet:text-[32px]">
        {title}
      </Reveal>
      <Reveal
        as="div"
        className="max-w-[60ch] animate-reveal-up text-lg [--delay:120ms] [&_p+p]:mt-4"
      >
        {children}
      </Reveal>
    </section>
  );
}
