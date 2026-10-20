"use client";

import type { ReactNode } from "react";
import useHasScrolled from "@/hooks/use-has-scrolled";

const SCROLL_THRESHOLD = 16;

type HeaderShellProps = {
  children: ReactNode;
};

export default function HeaderShell({ children }: HeaderShellProps) {
  const hasScrolled = useHasScrolled(SCROLL_THRESHOLD);

  return (
    <header
      data-scrolled={hasScrolled}
      className="group/header fixed inset-x-0 top-0 z-50 border-b border-transparent text-white selection:bg-lime selection:text-ink motion-safe:transition-[background-color,border-color,box-shadow,color] motion-safe:duration-300 data-[scrolled=true]:border-rule data-[scrolled=true]:bg-white data-[scrolled=true]:text-ink data-[scrolled=true]:shadow-[0_10px_24px_-18px_rgb(21_44_67/0.45)]"
    >
      {children}
    </header>
  );
}
