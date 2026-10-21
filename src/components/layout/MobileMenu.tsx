"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import TnMark from "@/components/icons/TnMark";
import { CONTACT_EMAIL } from "@/config/contact";
import { CONTACT_SECTION_ID, SECTION_LINKS } from "@/config/navigation";
import TransitionType from "@/enums/transition-type";
import SectionLink from "./SectionLink";

const MENU_ID = "mobile-menu";

// Matches the tablet breakpoint, where the full navigation replaces the menu
const TABLET_MEDIA_QUERY = "(min-width: 43.8125rem)";

const MENU_LINK_CLASS_NAME =
  "block py-7 text-[clamp(40px,12vw,64px)] leading-[.95] font-black tracking-[-0.04em] uppercase motion-safe:transition-colors";

const MENU_ITEM_DELAY_START_MS = 80;
const MENU_ITEM_DELAY_STEP_MS = 60;

const LEGAL_LINKS = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

function menuItemDelay(index: number): CSSProperties {
  return {
    "--delay": `${MENU_ITEM_DELAY_START_MS + index * MENU_ITEM_DELAY_STEP_MS}ms`,
  } as CSSProperties;
}

/**
 * Hiding the page scrollbar would widen the page, the fixed header and the menu.
 * --scrollbar-compensation reserves its width on all three, set in the same step as the lock so nothing jumps.
 */
function lockScroll() {
  const root = document.documentElement;
  const scrollbarWidth = window.innerWidth - root.clientWidth;

  root.style.setProperty("--scrollbar-compensation", `${scrollbarWidth}px`);
  root.style.overflow = "hidden";
}

function unlockScroll() {
  const root = document.documentElement;

  root.style.removeProperty("overflow");
  root.style.removeProperty("--scrollbar-compensation");
}

export default function MobileMenu() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const tabletQuery = window.matchMedia(TABLET_MEDIA_QUERY);

    function handleBreakpointChange(event: MediaQueryListEvent) {
      if (event.matches) {
        dialogRef.current?.close();
      }
    }

    tabletQuery.addEventListener("change", handleBreakpointChange);

    return () =>
      tabletQuery.removeEventListener("change", handleBreakpointChange);
  }, [isOpen]);

  function handleOpen() {
    lockScroll();
    dialogRef.current?.showModal();
    // showModal focuses the close button, which some mobile browsers treat as focus-visible after a tap;
    // focusing the dialog itself keeps the outline for keyboard use, where Tab reaches the close button next
    dialogRef.current?.focus();
    setIsOpen(true);
  }

  // Unlocks synchronously, because the dialog's close event fires a task later and a section link scrolls right away
  function handleNavigate() {
    unlockScroll();
    dialogRef.current?.close();
  }

  function handleDialogClose() {
    unlockScroll();
    setIsOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className="grid size-10 place-items-center rounded-xs bg-ink text-paper motion-safe:transition-colors hocus:bg-white hocus:text-ink group-data-[scrolled=true]/header:hocus:bg-signal group-data-[scrolled=true]/header:hocus:text-paper tablet:hidden"
        aria-label="Menü öffnen"
        aria-expanded={isOpen}
        aria-controls={MENU_ID}
        onClick={handleOpen}
      >
        <Menu className="size-5" strokeWidth={2} aria-hidden="true" />
      </button>
      <dialog
        id={MENU_ID}
        ref={dialogRef}
        tabIndex={-1}
        aria-label="Menü"
        className="m-0 h-dvh max-h-none w-full max-w-none overflow-hidden bg-ink outline-none pr-(--scrollbar-compensation) text-paper selection:bg-lime selection:text-ink backdrop:bg-transparent [clip-path:inset(0_0_100%_0)] open:[clip-path:inset(0)] open:animate-menu-reveal motion-safe:transition-[clip-path,display,overlay] motion-safe:transition-discrete motion-safe:duration-300 motion-safe:ease-in"
        onClose={handleDialogClose}
      >
        <div className="relative flex h-full flex-col">
          <TnMark
            className="pointer-events-none absolute -right-40 bottom-24 h-64 w-150 opacity-2"
            pathClassName="fill-white"
          />
          <div className="wrap relative flex items-center justify-between gap-6 py-4">
            <Image
              draggable={false}
              className="block h-auto w-36 brightness-0 invert"
              src="/logo.svg"
              alt="Nestmann Automatisierung"
              width={708}
              height={131}
            />
            <button
              type="button"
              className="grid size-10 place-items-center rounded-xs bg-signal text-white motion-safe:transition-colors hocus:bg-lime hocus:text-ink"
              aria-label="Menü schließen"
              onClick={handleNavigate}
            >
              <X className="size-5" strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
          <nav
            aria-label="Menü"
            className="wrap relative flex flex-1 flex-col justify-center"
          >
            <ul className="border-t border-paper/15">
              {SECTION_LINKS.map((link, index) => (
                <li
                  key={link.sectionId}
                  className="animate-fade-up border-b border-paper/15"
                  style={menuItemDelay(index)}
                >
                  {pathname === "/" ? (
                    <SectionLink
                      className={`${MENU_LINK_CLASS_NAME} hocus:text-lime`}
                      sectionId={link.sectionId}
                      onClick={handleNavigate}
                    >
                      {link.label}
                    </SectionLink>
                  ) : (
                    <Link
                      className={`${MENU_LINK_CLASS_NAME} hocus:text-lime`}
                      href={`/#${link.sectionId}`}
                      transitionTypes={[TransitionType.Back]}
                      onClick={handleNavigate}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li
                className="animate-fade-up border-b border-paper/15"
                style={menuItemDelay(SECTION_LINKS.length)}
              >
                <SectionLink
                  className={`${MENU_LINK_CLASS_NAME} text-lime hocus:text-paper`}
                  sectionId={CONTACT_SECTION_ID}
                  onClick={handleNavigate}
                >
                  Kontakt
                </SectionLink>
              </li>
            </ul>
          </nav>
          <div className="wrap relative grid animate-fade-up gap-4 border-t border-paper/15 py-8 text-sm [--delay:280ms]">
            <a
              className="group inline-flex max-w-full items-center gap-3 justify-self-start border-b-2 border-lime pb-1.5 text-lg font-semibold wrap-anywhere motion-safe:transition-colors hocus:text-lime"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
              <ArrowUpRight
                className="size-6 shrink-0 motion-safe:transition-transform group-hocus:translate-x-0.5 group-hocus:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <ul className="flex gap-6 text-paper/75">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    className="underline decoration-transparent decoration-2 underline-offset-6 motion-safe:transition-colors hocus:text-paper hocus:decoration-lime"
                    href={link.href}
                    transitionTypes={[TransitionType.Forward]}
                    onClick={handleNavigate}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </dialog>
    </>
  );
}
