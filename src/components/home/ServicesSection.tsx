import Reveal from "@/components/layout/Reveal";
import { SERVICES } from "@/config/services";
import SectionLayout from "./SectionLayout";

// Separator lines sit between services only; the second service starts the second column from tablet up
const SEPARATOR_CLASS_NAME =
  "absolute inset-x-0 top-0 h-px animate-rule-draw bg-rule";
const MOBILE_SEPARATOR_CLASS_NAME = `${SEPARATOR_CLASS_NAME} tablet:hidden`;

export default function ServicesSection() {
  return (
    <SectionLayout
      id="leistungen"
      title={"Steuerung. Bewegung.\nAlles im Zusammenspiel."}
    >
      <div className="grid tablet:grid-cols-2 tablet:gap-x-16">
        {SERVICES.map((service, index) => (
          <article
            key={service.label}
            className="relative min-w-0 py-12 tablet:py-14"
          >
            {index > 0 && (
              <div
                className={
                  index === 1
                    ? MOBILE_SEPARATOR_CLASS_NAME
                    : SEPARATOR_CLASS_NAME
                }
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
          </article>
        ))}
      </div>
    </SectionLayout>
  );
}
