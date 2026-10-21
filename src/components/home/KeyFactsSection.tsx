import type { CSSProperties } from "react";
import Reveal from "@/components/layout/Reveal";
import { KEY_FACTS } from "@/config/key-facts";

const FACT_DELAY_STEP_MS = 90;

export default function KeyFactsSection() {
  return (
    <section
      aria-label="Kennzahlen"
      className="wrap pt-16 pb-12 tablet:pt-24 tablet:pb-16 lg:pb-24"
    >
      <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {KEY_FACTS.map((fact, index) => (
          <Reveal
            as="div"
            key={fact.label}
            className="flex animate-reveal-up flex-col-reverse gap-3 border-rule pr-4 even:border-l even:pl-6 lg:not-first:border-l lg:not-first:pl-6"
            style={
              {
                "--delay": `${index * FACT_DELAY_STEP_MS}ms`,
              } as CSSProperties
            }
          >
            <dt className="text-xs font-medium tracking-[0.06em] text-muted uppercase tablet:text-sm tablet:tracking-[0.08em]">
              {fact.label}
            </dt>
            <dd className="text-[clamp(32px,9vw,64px)] leading-none font-black tracking-[-0.04em]">
              {fact.value}
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
