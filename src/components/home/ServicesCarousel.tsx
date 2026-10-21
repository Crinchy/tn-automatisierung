"use client";

import { type PointerEvent, type ReactNode, useEffect, useRef } from "react";
import nearestIndex from "@/utils/nearest-index";

// Phones swipe through the services as cards running to the screen edges; from tablet up they form a two-column grid
const CAROUSEL_CLASS_NAME =
  "-mx-4.5 mt-10 flex snap-x snap-mandatory scroll-px-4.5 gap-x-3 overflow-x-auto overscroll-x-contain px-4.5 [scrollbar-width:none] max-tablet:pointer-fine:cursor-grab max-tablet:pointer-fine:select-none max-tablet:pointer-fine:active:cursor-grabbing tablet:mx-0 tablet:mt-0 tablet:grid tablet:snap-none tablet:grid-cols-2 tablet:gap-x-16 tablet:overflow-visible tablet:px-0";

// Share of a card's width a drag must cover to move on to the neighbouring card
const DRAG_THRESHOLD_RATIO = 0.15;

const GLIDE_DURATION_MS = 400;

type DragStart = {
  pointerX: number;
  scrollLeft: number;
};

type ServicesCarouselProps = {
  children: ReactNode;
};

/**
 * Lets a mouse drag the row like a finger swipes it, since browsers only scroll it by touch, trackpad, or Shift + wheel.
 * Snapping pauses while the row follows the pointer and glides to a card, so the browser cannot snap back midway.
 */
export default function ServicesCarousel({ children }: ServicesCarouselProps) {
  const dragStartRef = useRef<DragStart | null>(null);
  const glideFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (glideFrameRef.current !== null) {
        window.cancelAnimationFrame(glideFrameRef.current);
      }
    };
  }, []);

  function stopGlide() {
    if (glideFrameRef.current !== null) {
      window.cancelAnimationFrame(glideFrameRef.current);
      glideFrameRef.current = null;
    }
  }

  function glideTo(carousel: HTMLElement, target: number) {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      carousel.scrollLeft = target;
      carousel.style.removeProperty("scroll-snap-type");

      return;
    }

    const from = carousel.scrollLeft;
    const startTime = performance.now();

    function step(now: number) {
      const progress = Math.min((now - startTime) / GLIDE_DURATION_MS, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      carousel.scrollLeft = from + (target - from) * easedProgress;

      if (progress < 1) {
        glideFrameRef.current = window.requestAnimationFrame(step);

        return;
      }

      glideFrameRef.current = null;
      carousel.style.removeProperty("scroll-snap-type");
    }

    glideFrameRef.current = window.requestAnimationFrame(step);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    const carousel = event.currentTarget;

    if (event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }

    if (carousel.scrollWidth <= carousel.clientWidth) {
      return;
    }

    stopGlide();
    carousel.setPointerCapture(event.pointerId);
    carousel.style.scrollSnapType = "none";
    dragStartRef.current = {
      pointerX: event.clientX,
      scrollLeft: carousel.scrollLeft,
    };
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const dragStart = dragStartRef.current;

    if (!dragStart) {
      return;
    }

    event.currentTarget.scrollLeft =
      dragStart.scrollLeft - (event.clientX - dragStart.pointerX);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    const dragStart = dragStartRef.current;
    const carousel = event.currentTarget;

    if (!dragStart) {
      return;
    }

    dragStartRef.current = null;

    const cards = [...carousel.children];
    const firstCard = cards[0];

    if (!firstCard) {
      carousel.style.removeProperty("scroll-snap-type");

      return;
    }

    // Measured with subpixel precision, so turning snapping back on at the end does not nudge the row
    const firstCardLeft = firstCard.getBoundingClientRect().left;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const snapPositions = cards.map((card) =>
      Math.min(
        card.getBoundingClientRect().left - firstCardLeft,
        maxScrollLeft,
      ),
    );
    const startIndex = nearestIndex(snapPositions, dragStart.scrollLeft);
    const distance = carousel.scrollLeft - dragStart.scrollLeft;
    let targetIndex = nearestIndex(snapPositions, carousel.scrollLeft);

    if (
      targetIndex === startIndex &&
      Math.abs(distance) >
        firstCard.getBoundingClientRect().width * DRAG_THRESHOLD_RATIO
    ) {
      targetIndex = Math.min(
        Math.max(startIndex + Math.sign(distance), 0),
        snapPositions.length - 1,
      );
    }

    glideTo(carousel, snapPositions[targetIndex] ?? carousel.scrollLeft);
  }

  return (
    <div
      className={CAROUSEL_CLASS_NAME}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onLostPointerCapture={handlePointerUp}
    >
      {children}
    </div>
  );
}
