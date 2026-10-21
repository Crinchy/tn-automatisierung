import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import TnMark from "@/components/icons/TnMark";
import PageTransition from "@/components/layout/PageTransition";
import content from "@/content/de.json";
import TransitionType from "@/enums/transition-type";

type SubpageLayoutProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export default function SubpageLayout({
  title,
  description,
  children,
}: SubpageLayoutProps) {
  return (
    <PageTransition>
      <main>
        <section className="overflow-hidden bg-signal text-white selection:bg-lime selection:text-ink">
          <div className="wrap relative pt-28 pb-10 tablet:pt-52 tablet:pb-16">
            <TnMark
              className="pointer-events-none absolute top-26 -right-32 h-56 w-96 opacity-12 tablet:top-32 tablet:-right-20 tablet:h-90 tablet:w-160"
              pathClassName="fill-white"
            />
            <p className="relative mb-8 animate-fade-up text-sm font-normal tracking-[0.12em] uppercase [--delay:50ms] tablet:mb-10">
              {content.business.nameLine}
            </p>
            <h1 className="relative -my-[0.06em] overflow-hidden py-[0.06em] text-[clamp(40px,11vw,64px)] leading-[.88] font-black tracking-[-0.04em] uppercase wrap-break-word tablet:text-[clamp(64px,8vw,112px)]">
              <span className="block animate-line-rise [--delay:150ms]">
                {title}
              </span>
            </h1>
            <div className="relative mt-10 grid animate-fade-up gap-6 border-t border-white/30 pt-8 [--delay:400ms] tablet:mt-20 tablet:gap-8 tablet:pt-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
              <p className="max-w-[46ch] text-base tablet:text-lg">
                {description}
              </p>
              <Link
                className="group inline-flex items-center justify-between gap-10 justify-self-stretch rounded-xs bg-lime tablet:justify-self-start px-6 py-4 font-semibold text-ink motion-safe:transition-colors hocus:bg-white"
                href="/"
                transitionTypes={[TransitionType.Back]}
              >
                <ArrowLeft
                  className="size-5 motion-safe:transition-transform group-hocus:-translate-x-0.5"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
                {content.subpage.backToHome}
              </Link>
            </div>
          </div>
        </section>
        {children && (
          <div className="wrap py-20 tablet:py-28 lg:py-36">
            <div
              className="h-0.5 animate-rule-draw bg-ink"
              aria-hidden="true"
            />
            {children}
          </div>
        )}
      </main>
    </PageTransition>
  );
}
