import { SERVICES } from "@/config/services";
import SectionHeadline from "./SectionHeadline";

export default function ServicesSection() {
  return (
    <section id="leistungen" className="wrap">
      <SectionHeadline
        eyebrow="01 / Was ich mache"
        title={"Steuerung. Bewegung.\nAlles im Zusammenspiel."}
      />
      <div className="grid gap-y-5 border-t-2 border-ink tablet:grid-cols-3">
        {SERVICES.map((service, index) => (
          <article
            key={service.label}
            className="border-b border-rule-strong py-6 nth-[n+4]:border-t nth-[n+4]:border-t-rule nth-[n+4]:pt-7.5 tablet:border-b-0 tablet:pt-7.5 tablet:pr-7 tablet:pb-10 tablet:not-nth-[3n+1]:border-l tablet:not-nth-[3n+1]:border-l-rule tablet:not-nth-[3n+1]:pl-7"
          >
            <strong className="text-[12px] text-signal uppercase">
              {String(index + 1).padStart(2, "0")} / {service.label}
            </strong>
            <h3 className="my-3.75 text-[27px] whitespace-pre-line tablet:mt-9.5 tablet:mb-5">
              {service.title}
            </h3>
            <p className="mb-3.5 text-[14px] text-muted">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
