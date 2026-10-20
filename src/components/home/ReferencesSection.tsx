import { PROJECT_REFERENCES } from "@/config/project-references";
import SectionHeadline from "./SectionHeadline";

export default function ReferencesSection() {
  return (
    <section id="referenzen" className="wrap pb-10 tablet:pb-16.25">
      <SectionHeadline
        eyebrow="02 / Referenzen"
        title={"Aufgaben aus\nder Praxis."}
      />
      <div className="border-t-2 border-ink">
        {PROJECT_REFERENCES.map((reference, index) => (
          <article
            key={reference.title}
            className="grid grid-cols-[25px_1fr] gap-3 border-b border-rule py-6.25 tablet:grid-cols-[55px_1fr_1.2fr] tablet:gap-6.25 tablet:py-8"
          >
            <span className="font-mono text-[12px] text-signal">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="mb-2.5 font-mono text-[9px] tracking-[1px] text-muted uppercase tablet:mb-3.5 tablet:text-[10px]">
                {reference.topic}
              </p>
              <h3 className="text-[26px] leading-[1.15] tracking-[-1px] tablet:text-[29px]">
                {reference.title}
              </h3>
            </div>
            <div className="col-start-2 tablet:col-start-auto">
              <p className="mb-4 text-[13px] text-muted tablet:text-[14px]">
                {reference.description}
              </p>
              <span className="font-mono text-[10px] text-signal">
                {reference.technologies.join(" · ")}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
