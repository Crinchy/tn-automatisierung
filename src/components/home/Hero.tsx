import { ArrowUpRight, Cpu, Factory } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import TnMark from "@/components/icons/TnMark";
import Parallax from "@/components/layout/Parallax";
import SectionLink from "@/components/layout/SectionLink";
import { HERO_IMAGE_SRC } from "@/config/stock-images";
import content from "@/content/de.json";

const FOCUS_AREAS = [
  {
    icon: Cpu,
    label: content.hero.focusAreas.programming,
    delay: "[--delay:750ms]",
  },
  {
    icon: Factory,
    label: content.hero.focusAreas.specialMachines,
    delay: "[--delay:850ms]",
  },
];

const HEADLINE_LINE_DELAY_START_MS = 150;
const HEADLINE_LINE_DELAY_STEP_MS = 110;

// The last headline line is highlighted
const HEADLINE_LINE_CLASS_NAME = "block animate-line-rise";
const HIGHLIGHTED_HEADLINE_LINE_CLASS_NAME = `${HEADLINE_LINE_CLASS_NAME} text-signal-light`;

function headlineLineDelay(index: number): CSSProperties {
  return {
    "--delay": `${HEADLINE_LINE_DELAY_START_MS + index * HEADLINE_LINE_DELAY_STEP_MS}ms`,
  } as CSSProperties;
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-signal text-white selection:bg-lime selection:text-ink">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* The blue moves with the photo, since the layer's transform isolates its blend */}
        <Parallax className="absolute inset-x-0 -inset-y-[45%] bg-signal">
          <Image
            draggable={false}
            className="object-cover opacity-45 mix-blend-multiply grayscale"
            src={HERO_IMAGE_SRC}
            alt=""
            fill
            sizes="100vw"
            quality={40}
            loading="eager"
            fetchPriority="high"
          />
        </Parallax>
        <div className="absolute inset-0 bg-linear-to-r from-signal via-signal/85 to-signal/10" />
      </div>
      <div className="wrap relative pt-28 pb-10 tablet:pt-52 tablet:pb-16 lg:pt-60">
        <TnMark
          className="pointer-events-none absolute top-30 -right-32 h-64 w-110 opacity-12 tablet:top-40 tablet:-right-20 tablet:h-110 tablet:w-190"
          pathClassName="fill-white animate-mark-draw"
        />
        <p className="relative mb-6 animate-fade-up text-sm font-light tracking-[0.12em] uppercase [--delay:50ms] tablet:mb-10">
          {content.business.nameLine}
        </p>
        <h1 className="relative text-[clamp(40px,13vw,69px)] leading-[.88] font-black tracking-[-0.04em] tablet:text-[clamp(70px,9.9vw,142px)]">
          {content.hero.headlineLines.map((line, index, lines) => (
            <span
              key={line}
              className="-my-[0.06em] block overflow-hidden py-[0.06em]"
            >
              <span
                className={
                  index === lines.length - 1
                    ? HIGHLIGHTED_HEADLINE_LINE_CLASS_NAME
                    : HEADLINE_LINE_CLASS_NAME
                }
                style={headlineLineDelay(index)}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>
        <div className="relative mt-10 grid animate-fade-up gap-6 border-t border-white/30 pt-8 [--delay:600ms] tablet:mt-24 tablet:gap-8 tablet:pt-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
          <p className="max-w-[46ch] text-base font-light tablet:text-lg">
            {content.hero.intro}
          </p>
          <SectionLink
            className="group inline-flex items-center justify-between gap-6 justify-self-start rounded-xs bg-lime px-5 py-3 text-[15px] font-semibold text-ink motion-safe:transition-colors hocus:bg-white tablet:gap-10 tablet:px-6 tablet:py-4 tablet:text-base"
            sectionId="kontakt"
          >
            {content.hero.cta}
            <ArrowUpRight
              className="size-4 motion-safe:transition-transform group-hocus:translate-x-0.5 group-hocus:-translate-y-0.5 tablet:size-6"
              aria-hidden="true"
            />
          </SectionLink>
        </div>
        <ul className="relative mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-normal tracking-[0.12em] text-signal-light uppercase tablet:mt-20">
          {FOCUS_AREAS.map((area) => (
            <li
              key={area.label}
              className={`flex animate-fade-up items-center gap-2.5 ${area.delay}`}
            >
              <area.icon
                className="size-4.5 shrink-0 text-lime"
                strokeWidth={2}
                aria-hidden="true"
              />
              {area.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
