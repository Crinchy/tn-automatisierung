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
            <p className="text-sm font-semibold tracking-[0.08em] text-signal uppercase">
              {service.label}
            </p>
            <h3 className="mt-5 mb-4 text-[28px] whitespace-pre-line tablet:text-[32px]">
              {service.title}
            </h3>
            <p className="max-w-[42ch] text-muted">{service.description}</p>
          </article>
        ))}
      </div>
    </SectionLayout>
  );
}
