import Image from "next/image";
import HeaderShell from "./HeaderShell";
import HomeLink from "./HomeLink";
import MobileMenu from "./MobileMenu";
import NavigationLinks from "./NavigationLinks";

export default function SiteHeader() {
  return (
    <HeaderShell>
      <div className="wrap flex items-center justify-between gap-6 py-4 tablet:py-5">
        <HomeLink className="shrink-0">
          <Image
            draggable={false}
            className="block h-auto w-36 animate-header-logo-scrolled brightness-0 invert group-data-[scrolled=true]/header:filter-none motion-safe:transition-[filter] motion-safe:duration-300 tablet:w-52"
            src="/logo.svg"
            alt="Nestmann Automatisierung"
            width={708}
            height={131}
            loading="eager"
          />
        </HomeLink>
        <div className="flex items-center gap-3">
          <nav aria-label="Hauptnavigation">
            <NavigationLinks />
          </nav>
          <MobileMenu />
        </div>
      </div>
    </HeaderShell>
  );
}
