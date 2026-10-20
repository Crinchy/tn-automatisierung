import { useSyncExternalStore } from "react";

function subscribe(onScroll: () => void): () => void {
  window.addEventListener("scroll", onScroll, { passive: true });

  return () => window.removeEventListener("scroll", onScroll);
}

export default function useHasScrolled(threshold: number): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false,
  );
}
