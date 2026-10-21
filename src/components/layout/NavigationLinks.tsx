"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { CONTACT_SECTION_ID } from "@/config/navigation";
import TransitionType from "@/enums/transition-type";
import useActiveSection from "@/hooks/use-active-section";
import type { NavigationLink } from "@/types/navigation";
import SectionLink from "./SectionLink";

type NavigationLinksProps = {
  links: NavigationLink[];
  contactLabel: string;
};

export default function NavigationLinks({
  links,
  contactLabel,
}: NavigationLinksProps) {
  const observedSectionIds = useMemo(
    () => [...links.map((link) => link.sectionId), CONTACT_SECTION_ID],
    [links],
  );
  const activeSectionId = useActiveSection(observedSectionIds);

  return (
    <ul className="flex items-center gap-5 text-[15px] font-semibold lg:gap-8">
      {links.map((link) => (
        <li key={link.sectionId} className="hidden tablet:block">
          <Link
            className="relative py-1 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-lime group-data-[scrolled=true]/header:after:bg-signal hocus:after:scale-x-100 aria-[current=true]:after:scale-x-100 motion-safe:after:transition-transform motion-safe:after:duration-300 motion-safe:after:ease-out"
            href={`/#${link.sectionId}`}
            transitionTypes={[TransitionType.Back]}
            aria-current={activeSectionId === link.sectionId}
          >
            {link.label}
          </Link>
        </li>
      ))}
      <li className="hidden animate-header-divider-scrolled min-[420px]:block lg:border-l lg:border-white/30 lg:pl-8 lg:group-data-[scrolled=true]/header:border-rule">
        <SectionLink
          className="group inline-flex items-center gap-2 rounded-xs bg-ink px-4 py-2.5 text-sm text-paper motion-safe:transition-colors hocus:bg-white hocus:text-ink group-data-[scrolled=true]/header:hocus:bg-signal group-data-[scrolled=true]/header:hocus:text-paper aria-[current=true]:bg-signal aria-[current=true]:text-paper"
          sectionId={CONTACT_SECTION_ID}
          aria-current={activeSectionId === CONTACT_SECTION_ID}
        >
          {contactLabel}
          <ArrowUpRight
            className="size-4 motion-safe:transition-transform group-hocus:translate-x-0.5 group-hocus:-translate-y-0.5"
            strokeWidth={2.25}
            aria-hidden="true"
          />
        </SectionLink>
      </li>
    </ul>
  );
}
