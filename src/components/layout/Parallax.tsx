"use client";

import { type ReactNode, useEffect, useRef } from "react";

// How far the layer travels each way, as a share of the frame's height; the layer overhang must be larger
const MAX_SHIFT_RATIO = 0.42;

type ParallaxProps = {
  className?: string;
  children: ReactNode;
};

/**
 * Moves its layer slower than the page while the parent frame crosses the viewport.
 * The layer must overhang the frame by more than MAX_SHIFT_RATIO of the frame's height (45% top and bottom) so no edge shows.
 * Runs in JavaScript because CSS scroll timelines are missing in Firefox and older Safari.
 */
export default function Parallax({ className, children }: ParallaxProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const frame = layer?.parentElement;

    if (!layer || !frame) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrame: number | null = null;

    function update() {
      animationFrame = null;

      if (!layer || !frame) {
        return;
      }

      const rect = frame.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.min(
        Math.max(
          (viewportHeight - rect.top) / (viewportHeight + rect.height),
          0,
        ),
        1,
      );
      const shift = (progress * 2 - 1) * MAX_SHIFT_RATIO * rect.height;

      layer.style.translate = `0 ${shift.toFixed(1)}px`;
    }

    function handleScroll() {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(update);
      }
    }

    // Only listen while the frame is near the viewport
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        update();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      }
    });

    observer.observe(frame);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div ref={layerRef} className={className}>
      {children}
    </div>
  );
}
