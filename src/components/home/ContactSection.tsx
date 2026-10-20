import { CONTACT_EMAIL } from "@/config/contact";

export default function ContactSection() {
  return (
    <section id="kontakt" className="wrap py-15">
      <p className="eyebrow">Keine Umwege.</p>
      <h2 className="my-5 text-[48px] tracking-[-3px] tablet:text-[64px]">
        Was steht bei Ihnen an?
      </h2>
      <a
        className="inline-block border-b pb-1.25 text-[19px] wrap-anywhere tablet:text-[25px]"
        href={`mailto:${CONTACT_EMAIL}`}
      >
        {CONTACT_EMAIL} <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
