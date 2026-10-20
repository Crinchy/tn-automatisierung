"use client";

import {
  type ComponentPropsWithoutRef,
  type ElementType,
  useEffect,
  useRef,
  useState,
} from "react";

// Starts a reveal once an element is 40px into view; a fixed offset keeps short rows at the page bottom reachable
const REVEAL_ROOT_MARGIN = "0px 0px -40px 0px";

type RevealState = "hidden" | "visible";

type RevealProps<T extends ElementType> = {
  as: T;
} & ComponentPropsWithoutRef<T>;

/**
 * Renders `as` with a React-managed data-reveal-state, so server and client HTML match during hydration.
 * Content on screen after mount stays as rendered; content below the fold hides, then animates in
 * through the animate-reveal-* utilities when it scrolls into view.
 */
export default function Reveal<T extends ElementType>({
  as,
  ...props
}: RevealProps<T>) {
  const Component: ElementType = as;
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<RevealState>();

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (element.getBoundingClientRect().top < window.innerHeight) {
      return;
    }

    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { rootMargin: REVEAL_ROOT_MARGIN },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return <Component ref={ref} data-reveal-state={state} {...props} />;
}
