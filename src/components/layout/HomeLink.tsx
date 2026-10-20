"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";
import TransitionType from "@/enums/transition-type";

type HomeLinkProps = {
  className?: string;
  children: ReactNode;
};

/** Links to the home page, or scrolls back to its top when already there. */
export default function HomeLink({ className, children }: HomeLinkProps) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/") {
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

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
    window.history.pushState(null, "", "/");
  }

  return (
    <Link
      href="/"
      transitionTypes={[TransitionType.Back]}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
