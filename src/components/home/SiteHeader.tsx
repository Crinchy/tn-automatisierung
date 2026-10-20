import Image from "next/image";
import ArrowUpRightIcon from "@/components/icons/ArrowUpRightIcon";
import HeaderShell from "./HeaderShell";

const NAVIGATION_LINKS = [
  { label: "Was ich mache", href: "#leistungen", hideOnMobile: true },
  { label: "Referenzen", href: "#referenzen", hideOnMobile: false },
];

export default function SiteHeader() {
  return (
    <HeaderShell>
      <div className="wrap flex items-center justify-between gap-6 py-4 tablet:py-5">
        <a href="#top" className="shrink-0">
          <Image
            className="block h-auto w-36 brightness-0 invert group-data-[scrolled=true]/header:filter-none motion-safe:transition-[filter] motion-safe:duration-300 tablet:w-52"
            src="/logo.svg"
            alt="Nestmann Automatisierung"
            width={725}
            height={145}
            loading="eager"
          />
        </a>
        <nav aria-label="Hauptnavigation">
          <ul className="flex items-center gap-5 text-[15px] font-semibold tablet:gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <li
                key={link.href}
                className={link.hideOnMobile ? "hidden tablet:block" : "block"}
              >
                <a
                  className="relative py-1 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-lime group-data-[scrolled=true]/header:after:bg-signal hocus:after:scale-x-100 motion-safe:after:transition-transform motion-safe:after:duration-300 motion-safe:after:ease-out"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="tablet:border-l tablet:border-white/30 tablet:pl-8 tablet:group-data-[scrolled=true]/header:border-rule">
              <a
                className="group inline-flex items-center gap-2 bg-ink px-4 py-2.5 text-sm text-paper motion-safe:transition-colors hocus:bg-white hocus:text-ink group-data-[scrolled=true]/header:hocus:bg-signal group-data-[scrolled=true]/header:hocus:text-paper"
                href="#kontakt"
              >
                Kontakt
                <ArrowUpRightIcon className="size-4 motion-safe:transition-transform group-hocus:translate-x-0.5 group-hocus:-translate-y-0.5" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderShell>
  );
}
