import Image from "next/image";
import type { CSSProperties } from "react";
import Parallax from "@/components/layout/Parallax";
import Reveal from "@/components/layout/Reveal";
import { PROJECT_REFERENCES } from "@/config/project-references";
import content from "@/content/de.json";

const TAG_DELAY_START_MS = 250;
const TAG_DELAY_STEP_MS = 80;

// Phones show each photo edge to edge, with the text panel overlapping it from alternating sides
const TEXT_PANEL_CLASS_NAME =
  "relative max-tablet:-mt-14 max-tablet:bg-white max-tablet:pt-6 max-tablet:group-odd/project:-ml-4.5 max-tablet:group-odd/project:mr-8 max-tablet:group-odd/project:pr-6 max-tablet:group-odd/project:pl-4.5 max-tablet:group-even/project:-mr-4.5 max-tablet:group-even/project:ml-8 max-tablet:group-even/project:pr-4.5 max-tablet:group-even/project:pl-6 lg:col-span-5";

export default function ReferencesSection() {
  return (
    <section id="referenzen" className="bg-white">
      <div className="wrap py-28 tablet:py-36 lg:py-44">
        <Reveal
          as="h2"
          className="animate-reveal-clip text-4xl whitespace-pre-line tablet:text-6xl"
        >
          {content.references.title}
        </Reveal>
        <div
          className="mt-12 h-0.5 animate-rule-draw bg-ink"
          aria-hidden="true"
        />
        <div className="grid gap-20 pt-14 tablet:gap-24 tablet:pt-20 lg:gap-32">
          {PROJECT_REFERENCES.map((reference) => (
            <article
              key={reference.title}
              className="group/project grid items-center tablet:gap-8 lg:grid-cols-12 lg:gap-16"
            >
              <Reveal
                as="div"
                className="relative -mx-4.5 aspect-4/3 animate-reveal-up overflow-clip bg-signal tablet:mx-0 tablet:aspect-16/10 tablet:rounded-xs lg:col-span-7 lg:group-even/project:order-2"
              >
                {/* The tint lives on the moving layer too, since its transform isolates the image's blend */}
                <Parallax className="absolute inset-x-0 -inset-y-[45%] bg-signal">
                  <Image
                    draggable={false}
                    className="object-cover opacity-80 mix-blend-multiply grayscale"
                    src={reference.image.src}
                    alt={reference.image.alt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                </Parallax>
                <span className="absolute top-4 left-4 grid size-12 place-items-center rounded-xs bg-lime text-ink tablet:top-auto tablet:bottom-6 tablet:left-6">
                  <reference.icon
                    className="size-6"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
              </Reveal>
              <div className={TEXT_PANEL_CLASS_NAME}>
                <Reveal
                  as="p"
                  className="mb-4 animate-reveal-up text-sm font-semibold tracking-[0.08em] text-signal uppercase [--delay:80ms]"
                >
                  {reference.topic}
                </Reveal>
                <Reveal
                  as="h3"
                  className="animate-reveal-up text-[32px] tablet:text-[44px] [--delay:140ms]"
                >
                  {reference.title}
                </Reveal>
                <Reveal
                  as="p"
                  className="mt-5 mb-7 max-w-[52ch] animate-reveal-up text-muted [--delay:200ms]"
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
        </div>
      </div>
    </section>
  );
}
