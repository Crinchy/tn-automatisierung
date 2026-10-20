import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="wrap flex items-center justify-between py-6.75">
      <Image
        className="block h-auto w-46.25 tablet:w-56.25"
        src="/logo.svg"
        alt="Nestmann Automatisierung"
        width={725}
        height={145}
        loading="eager"
      />
      <nav className="flex gap-3.75 text-[12px] tablet:gap-7.5">
        <a className="hidden tablet:inline" href="#leistungen">
          Was ich mache
        </a>
        <a href="#referenzen">Referenzen</a>
        <a href="#kontakt">Kontakt ↗</a>
      </nav>
    </header>
  );
}
