import type { CSSProperties } from "react";
import Reveal from "@/components/layout/Reveal";
import { PROJECT_REFERENCES } from "@/config/project-references";
import SectionLayout from "./SectionLayout";

const TAG_DELAY_START_MS = 250;
const TAG_DELAY_STEP_MS = 80;

export default function ReferencesSection() {
  return (
    <SectionLayout id="referenzen" title={"Aufgaben aus\nder Praxis."}>
      {PROJECT_REFERENCES.map((reference) => (
        <article
          key={reference.title}
          className="grid gap-6 border-b border-rule py-12 tablet:grid-cols-[1fr_1.2fr] tablet:gap-12 tablet:py-14"
        >
          <Reveal as="div" className="animate-reveal-up">
            <p className="mb-4 flex items-center gap-2.5 text-sm font-semibold tracking-[0.08em] text-signal uppercase">
              <reference.icon
                className="size-4.5 shrink-0"
                strokeWidth={2}
                aria-hidden="true"
              />
              {reference.topic}
            </p>
            <h3 className="text-[28px] tablet:text-[34px]">
              {reference.title}
            </h3>
          </Reveal>
          <div>
            <Reveal
              as="p"
              className="mb-6 max-w-[52ch] animate-reveal-up text-muted [--delay:120ms]"
            >
              {reference.description}
            </Reveal>
            <ul className="flex flex-wrap gap-2">
              {reference.technologies.map((technology, index) => (
                <Reveal
                  as="li"
                  key={technology}
                  className="animate-reveal-up rounded-xs border border-rule px-3 py-1 text-sm font-medium"
                  style={
                    {
                      "--delay": `${TAG_DELAY_START_MS + index * TAG_DELAY_STEP_MS}ms`,
                    } as CSSProperties
                  }
                >
                  {technology}
                </Reveal>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </SectionLayout>
  );
}
