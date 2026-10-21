import Reveal from "@/components/layout/Reveal";
import { SERVICES } from "@/config/services";
import content from "@/content/de.json";
import interpolate from "@/utils/interpolate";
import SectionLayout from "./SectionLayout";
import ServicesCarousel from "./ServicesCarousel";

const CARD_CLASS_NAME =
  "relative flex w-[85%] min-w-0 shrink-0 snap-start flex-col rounded-xs border border-rule bg-white p-6 tablet:w-auto tablet:rounded-none tablet:border-0 tablet:bg-transparent tablet:block tablet:px-0 tablet:py-14";

function counterNumber(value: number): string {
  return String(value).padStart(2, "0");
}

export default function ServicesSection() {
  return (
    <SectionLayout id="leistungen" title={content.services.title}>
      <ServicesCarousel>
        {SERVICES.map((service, index) => (
          <article key={service.label} className={CARD_CLASS_NAME}>
            {/* Separator lines sit between grid rows only, so the second service has none */}
            {index > 1 && (
              <div
                className="absolute inset-x-0 top-0 hidden h-px animate-rule-draw bg-rule tablet:block"
                aria-hidden="true"
              />
            )}
            <Reveal
              as="div"
              className="flex animate-reveal-up items-center gap-4"
            >
              <Reveal
                as="span"
                className="grid size-12 shrink-0 animate-tile-in place-items-center rounded-xs [--delay:150ms] bg-signal text-white"
              >
                <service.icon
                  className="size-6"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </Reveal>
              <p className="text-sm font-semibold tracking-[0.08em] text-signal uppercase">
                {service.label}
              </p>
            </Reveal>
            <Reveal
              as="h3"
              className="mt-7 mb-4 animate-reveal-up text-[28px] whitespace-pre-line [--delay:100ms] tablet:text-[32px]"
            >
              {service.title}
            </Reveal>
            <Reveal
              as="p"
              className="max-w-[42ch] animate-reveal-up text-muted [--delay:200ms]"
            >
              {service.description}
            </Reveal>
            <Reveal
              as="p"
              className="mt-auto animate-reveal-up pt-8 text-sm font-semibold whitespace-nowrap text-muted tabular-nums [--delay:250ms] tablet:hidden"
              aria-hidden="true"
            >
              {interpolate(content.services.counter, {
                current: counterNumber(index + 1),
                total: counterNumber(SERVICES.length),
              })}
            </Reveal>
          </article>
        ))}
      </ServicesCarousel>
    </SectionLayout>
  );
}
