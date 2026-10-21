import Image from "next/image";
import { SECTION_IDS } from "@/config/navigation";
import content from "@/content/de.json";
import HeaderShell from "./HeaderShell";
import HomeLink from "./HomeLink";
import MobileMenu from "./MobileMenu";
import NavigationLinks from "./NavigationLinks";

const NAVIGATION_LINKS = SECTION_IDS.map((sectionId) => ({
  sectionId,
  label: content.navigation.sections[sectionId],
}));

const LEGAL_LINKS = [
  { href: "/impressum", label: content.navigation.imprint },
  { href: "/datenschutz", label: content.navigation.privacy },
];

const MENU_LABELS = {
  menu: content.menu.label,
  open: content.menu.open,
  close: content.menu.close,
  contact: content.navigation.contact,
};

export default function SiteHeader() {
  return (
    <HeaderShell>
      <div className="wrap flex items-center justify-between gap-6 py-4 tablet:py-5">
        <HomeLink className="shrink-0">
          <Image
            draggable={false}
            className="block h-auto w-36 animate-header-logo-scrolled brightness-0 invert group-data-[scrolled=true]/header:filter-none motion-safe:transition-[filter] motion-safe:duration-300 tablet:w-52"
            src="/logo.svg"
            alt={content.business.businessName}
            width={708}
            height={131}
            loading="eager"
          />
        </HomeLink>
        <div className="flex items-center gap-3">
          <nav aria-label={content.navigation.label}>
            <NavigationLinks
              links={NAVIGATION_LINKS}
              contactLabel={content.navigation.contact}
            />
          </nav>
          <MobileMenu
            links={NAVIGATION_LINKS}
            legalLinks={LEGAL_LINKS}
            labels={MENU_LABELS}
            logoAlt={content.business.businessName}
          />
        </div>
      </div>
    </HeaderShell>
  );
}
