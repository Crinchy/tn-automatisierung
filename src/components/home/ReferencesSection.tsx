import { PROJECT_REFERENCES } from "@/config/project-references";
import SectionLayout from "./SectionLayout";

export default function ReferencesSection() {
  return (
    <SectionLayout id="referenzen" title={"Aufgaben aus\nder Praxis."}>
      {PROJECT_REFERENCES.map((reference) => (
        <article
          key={reference.title}
          className="grid gap-6 border-b border-rule py-12 tablet:grid-cols-[1fr_1.2fr] tablet:gap-12 tablet:py-14"
        >
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.08em] text-signal uppercase">
              {reference.topic}
            </p>
            <h3 className="text-[28px] tablet:text-[34px]">
              {reference.title}
            </h3>
          </div>
          <div>
            <p className="mb-6 max-w-[52ch] text-muted">
              {reference.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {reference.technologies.map((technology) => (
                <li
                  key={technology}
                  className="border border-rule px-3 py-1 text-sm font-medium"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </SectionLayout>
  );
}
