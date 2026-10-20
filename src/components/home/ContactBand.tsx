import { Globe, MapPin, MessageCircle } from "lucide-react";
import TnMark from "@/components/icons/TnMark";
import Reveal from "@/components/layout/Reveal";

const CONTACT_FACTS = [
  {
    icon: MessageCircle,
    label: "Ein Ansprechpartner, von Anfang bis Ende",
    delay: "[--delay:100ms]",
  },
  {
    icon: MapPin,
    label: "Deutschlandweit im Einsatz",
    delay: "[--delay:200ms]",
  },
  {
    icon: Globe,
    label: "Für deutsche Kunden auch im Ausland",
    delay: "[--delay:300ms]",
  },
];

export default function ContactBand() {
  return (
    <section className="relative overflow-hidden bg-lime-soft">
      <TnMark
        className="pointer-events-none absolute -top-10 -right-48 h-80 w-180 animate-drift opacity-6 tablet:-right-32 tablet:h-112 tablet:w-256"
        pathClassName="fill-ink"
      />
      <div className="wrap relative grid items-end gap-10 py-28 tablet:py-36 lg:grid-cols-[1.5fr_1fr] lg:gap-24 lg:py-44">
        <Reveal
          as="h2"
          className="animate-reveal-clip text-4xl tablet:text-6xl"
        >
          Die Technik ist komplex.
          <br />
          Der Kontakt ist direkt.
        </Reveal>
        <Reveal
          as="p"
          className="max-w-[44ch] animate-reveal-up text-lg [--delay:150ms]"
        >
          Sie sprechen mit Tommy Nestmann, vom ersten Gespräch bis zur
          Inbetriebnahme. Deutschlandweit und für Anlagen deutscher Kunden auch
          im Ausland.
        </Reveal>
        <ul className="mt-4 flex flex-col gap-5 border-t border-ink/15 pt-10 tablet:flex-row tablet:flex-wrap tablet:gap-x-12 tablet:gap-y-5 lg:col-span-2 lg:mt-0">
          {CONTACT_FACTS.map((fact) => (
            <Reveal
              as="li"
              key={fact.label}
              className={`flex animate-reveal-up items-center gap-4 ${fact.delay}`}
            >
              <Reveal
                as="span"
                className="grid size-11 shrink-0 animate-tile-in place-items-center rounded-xs bg-ink text-lime"
              >
                <fact.icon
                  className="size-5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </Reveal>
              <span className="font-semibold leading-snug">{fact.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
