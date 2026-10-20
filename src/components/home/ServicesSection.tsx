import Reveal from "@/components/layout/Reveal";
import { SERVICES } from "@/config/services";
import SectionLayout from "./SectionLayout";

export default function ServicesSection() {
  return (
    <SectionLayout
      id="leistungen"
      title={"Steuerung. Bewegung.\nAlles im Zusammenspiel."}
    >
      <div className="grid tablet:grid-cols-2">
        {SERVICES.map((service) => (
          <article
            key={service.label}
            className="border-b border-rule py-12 tablet:py-14 tablet:odd:pr-12 tablet:even:border-l tablet:even:pl-12"
          >
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
