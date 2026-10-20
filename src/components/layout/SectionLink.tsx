"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";

type SectionLinkProps = {
  sectionId: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href">;

/**
 * Links to a section on the current page and scrolls there smoothly in every browser.
 * CSS smooth scrolling alone misses Safari (links do not take focus on click) and router navigations.
 */
export default function SectionLink({
  sectionId,
  onClick,
  ...props
}: SectionLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    const section = document.getElementById(sectionId);

    if (event.defaultPrevented || !section) {
      return;
    }

    // Leave modified clicks (new tab or window) to the browser
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    section.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
    window.history.pushState(null, "", `#${sectionId}`);
  }

  return <a href={`#${sectionId}`} onClick={handleClick} {...props} />;
}
