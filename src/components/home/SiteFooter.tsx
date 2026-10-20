import ArrowUpRightIcon from "@/components/icons/ArrowUpRightIcon";
import { CONTACT_EMAIL } from "@/config/contact";

const FOOTER_LINKS = [
  { label: "Was ich mache", href: "#leistungen" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function SiteFooter() {
  return (
    <footer id="kontakt" className="relative overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute -right-40 -bottom-10 h-72 w-160 bg-[url(/tn-wasserzeichen.svg)] bg-contain bg-right-bottom bg-no-repeat opacity-6 tablet:-right-24 tablet:h-112 tablet:w-240"
        aria-hidden="true"
      />
      <div className="wrap relative py-28 tablet:py-36 lg:py-44">
        <h2 className="max-w-[12ch] text-5xl tablet:text-7xl lg:text-8xl">
          Was steht bei Ihnen an?
        </h2>
        <a
          className="group mt-12 inline-flex max-w-full items-center gap-4 border-b-2 border-lime pb-2 text-2xl font-semibold wrap-anywhere motion-safe:transition-colors hocus:text-lime tablet:mt-16 tablet:gap-6 tablet:text-4xl"
          href={`mailto:${CONTACT_EMAIL}`}
        >
          {CONTACT_EMAIL}
          <ArrowUpRightIcon className="size-6 shrink-0 motion-safe:transition-transform group-hocus:translate-x-1 group-hocus:-translate-y-1 tablet:size-8" />
        </a>
      </div>
      <div className="wrap relative flex flex-col gap-6 border-t border-paper/15 py-10 text-sm tablet:flex-row tablet:items-center tablet:justify-between">
        <p className="font-semibold">Nestmann Automatisierung</p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-paper/75">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className="decoration-lime decoration-2 underline-offset-6 hocus:text-paper hocus:underline"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
