import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import Parallax from "@/components/layout/Parallax";
import Reveal from "@/components/layout/Reveal";
import SectionLink from "@/components/layout/SectionLink";
import { CONTACT_SECTION_ID } from "@/config/navigation";
import { MIGRATION_IMAGE_SRC } from "@/config/stock-images";
import content from "@/content/de.json";

const STEP_DELAY_START_MS = 150;
const STEP_DELAY_STEP_MS = 70;

export default function MigrationSection() {
  return (
    <section
      aria-labelledby="migration-title"
      className="relative overflow-clip bg-ink text-paper selection:bg-lime selection:text-ink"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* The ink background moves with the photo, since the layer's transform isolates its blend */}
        <Parallax className="absolute inset-x-0 -inset-y-[45%] bg-ink">
          <Image
            draggable={false}
            className="object-cover opacity-35 mix-blend-luminosity grayscale"
            src={MIGRATION_IMAGE_SRC}
            alt=""
            fill
            sizes="100vw"
            quality={25}
          />
        </Parallax>
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/85 to-ink/40 tablet:bg-linear-to-r" />
      </div>
      <div className="wrap relative grid gap-14 py-28 tablet:py-36 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20 lg:py-44">
        <div>
          <Reveal
            as="p"
            className="mb-6 animate-reveal-up text-sm font-semibold tracking-[0.12em] text-lime uppercase"
          >
            {content.migration.label}
          </Reveal>
          <Reveal
            as="h2"
            id="migration-title"
            className="animate-reveal-clip text-4xl tablet:text-6xl"
          >
            {content.migration.titleFrom}
            <ArrowRight
              className="mx-3 inline-block size-[0.8em] align-[-0.08em] text-lime"
              strokeWidth={2.5}
              aria-hidden="true"
            />
            <span className="sr-only">{content.migration.titleConnector} </span>
            {content.migration.titleTo}
          </Reveal>
          <Reveal
            as="div"
            className="mt-8 max-w-[52ch] animate-reveal-up text-lg font-light text-paper/80 [--delay:120ms] [&_p+p]:mt-4"
          >
            {content.migration.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
          <Reveal as="div" className="mt-10 animate-reveal-up [--delay:200ms]">
            <SectionLink
              className="group inline-flex w-full items-center justify-between gap-10 rounded-xs bg-lime px-6 py-4 font-semibold text-ink motion-safe:transition-colors hocus:bg-white tablet:w-auto"
              sectionId={CONTACT_SECTION_ID}
            >
              {content.migration.cta}
              <ArrowUpRight
                className="size-6 motion-safe:transition-transform group-hocus:translate-x-0.5 group-hocus:-translate-y-0.5"
                aria-hidden="true"
              />
            </SectionLink>
          </Reveal>
        </div>
        <Reveal
          as="div"
          className="animate-reveal-up rounded-xs border border-paper/15 bg-ink/80 p-6 [--delay:150ms] tablet:p-8"
        >
          <p className="text-sm font-semibold tracking-[0.12em] text-paper/60 uppercase">
            {content.migration.planTitle}
          </p>
          <ul className="mt-6">
            {content.migration.steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.from}
                className="grid animate-reveal-up grid-cols-[1fr_auto_1fr] items-center gap-4 border-t border-paper/15 py-4"
                style={
                  {
                    "--delay": `${STEP_DELAY_START_MS + index * STEP_DELAY_STEP_MS}ms`,
                  } as CSSProperties
                }
              >
                <span className="text-paper/60">{step.from}</span>
                <ArrowRight
                  className="size-5 text-lime"
                  strokeWidth={2}
                  aria-label={content.migration.stepArrowLabel}
                />
                <span className="font-semibold">{step.to}</span>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
