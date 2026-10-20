import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/layout/Reveal";
import { CONTACT_EMAIL } from "@/config/contact";
import { LEGAL_DETAILS } from "@/config/legal";
import TransitionType from "@/enums/transition-type";
import SectionLink from "./SectionLink";

const FOOTER_LINKS = [
  {
    label: "Leistungen",
    href: "/#leistungen",
    transitionTypes: [TransitionType.Back],
  },
  {
    label: "Referenzen",
    href: "/#referenzen",
    transitionTypes: [TransitionType.Back],
  },
];

// Phones stack each group as a labelled column; from tablet up both groups sit in one row
const FOOTER_GROUP_LABEL_CLASS_NAME =
  "mb-3 text-xs font-semibold tracking-[0.12em] text-paper/45 uppercase tablet:sr-only";

const FOOTER_LIST_CLASS_NAME =
  "grid gap-1 text-[15px] text-paper/75 tablet:flex tablet:gap-8 tablet:text-sm";

const FOOTER_LINK_CLASS_NAME =
  "inline-block py-1.5 underline decoration-transparent decoration-2 underline-offset-6 motion-safe:transition-colors hocus:text-paper hocus:decoration-lime tablet:py-0";

const LEGAL_LINKS = [
  {
    label: "Impressum",
    href: "/impressum",
    transitionTypes: [TransitionType.Forward],
  },
  {
    label: "Datenschutz",
    href: "/datenschutz",
    transitionTypes: [TransitionType.Forward],
  },
];

export default function SiteFooter() {
  return (
    <footer id="kontakt" className="relative overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute -right-40 -bottom-10 animate-drift h-72 w-160 bg-[url(/tn-wasserzeichen.svg)] bg-contain bg-right-bottom bg-no-repeat opacity-2 tablet:-right-24 tablet:h-112 tablet:w-240"
        aria-hidden="true"
      />
      <div className="wrap relative py-28 tablet:py-36 lg:py-44">
        <Reveal
          as="h2"
          className="max-w-[12ch] animate-reveal-clip text-5xl tablet:text-7xl lg:text-8xl"
        >
          Was steht bei Ihnen an?
        </Reveal>
        <Reveal
          as="a"
          className="group mt-12 inline-flex max-w-full animate-reveal-up items-center [--delay:150ms] gap-4 border-b-2 border-lime pb-2 text-2xl font-semibold wrap-anywhere motion-safe:transition-colors hocus:text-lime tablet:mt-16 tablet:gap-6 tablet:text-4xl"
          href={`mailto:${CONTACT_EMAIL}`}
        >
          {CONTACT_EMAIL}
          <ArrowUpRight
            className="size-6 shrink-0 motion-safe:transition-transform group-hocus:translate-x-1 group-hocus:-translate-y-1"
            aria-hidden="true"
          />
        </Reveal>
      </div>
      <Reveal
        as="div"
        className="wrap relative flex animate-reveal-up flex-col gap-10 border-t border-paper/15 py-10 text-sm tablet:flex-row tablet:items-center tablet:justify-between tablet:gap-6"
      >
        <div>
          <Image
            draggable={false}
            className="block h-auto w-44 brightness-0 invert"
            src="/logo.svg"
            alt={LEGAL_DETAILS.businessName}
            width={708}
            height={131}
          />
          <p className="mt-3 font-light text-paper/60">
            Industrieautomatisierung · Selbstständig seit 2015
          </p>
        </div>
        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-8 tablet:flex tablet:items-center tablet:gap-8"
        >
          <div>
            <p className={FOOTER_GROUP_LABEL_CLASS_NAME}>Seite</p>
            <ul className={FOOTER_LIST_CLASS_NAME}>
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    className={FOOTER_LINK_CLASS_NAME}
                    href={link.href}
                    transitionTypes={link.transitionTypes}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <SectionLink
                  className={FOOTER_LINK_CLASS_NAME}
                  sectionId="kontakt"
                >
                  Kontakt
                </SectionLink>
              </li>
            </ul>
          </div>
          <div className="tablet:border-l tablet:border-paper/25 tablet:pl-8">
            <p className={FOOTER_GROUP_LABEL_CLASS_NAME}>Rechtliches</p>
            <ul className={FOOTER_LIST_CLASS_NAME}>
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    className={FOOTER_LINK_CLASS_NAME}
                    href={link.href}
                    transitionTypes={link.transitionTypes}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Reveal>
    </footer>
  );
}
