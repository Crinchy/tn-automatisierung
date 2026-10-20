import ArrowUpRightIcon from "@/components/icons/ArrowUpRightIcon";

const FOCUS_AREAS = [
  "TIA Portal / Programmarchitektur",
  "Sondermaschinenbau",
  "Selbstständig seit 2015",
];

export default function Hero() {
  return (
    <section className="overflow-hidden bg-signal text-white selection:bg-lime selection:text-ink">
      <div className="wrap relative pt-38 pb-12 tablet:pt-52 tablet:pb-16 lg:pt-60">
        <div
          className="pointer-events-none absolute top-42 -right-32 h-64 w-110 bg-[url(/tn-wasserzeichen.svg)] bg-contain bg-center bg-no-repeat opacity-12 tablet:top-40 tablet:-right-20 tablet:h-110 tablet:w-190"
          aria-hidden="true"
        />
        <p className="relative mb-8 text-sm font-semibold tracking-[0.12em] uppercase tablet:mb-10">
          Tommy Nestmann / Industrieautomatisierung
        </p>
        <h1 className="relative text-[clamp(40px,13vw,69px)] leading-[.88] font-black tracking-[-0.04em] tablet:text-[clamp(70px,9.9vw,142px)]">
          GUTE LOGIK.
          <br />
          STARKE
          <br />
          <span className="text-signal-light">MASCHINEN.</span>
        </h1>
        <div className="relative mt-16 grid gap-8 border-t border-white/30 pt-10 tablet:mt-24 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
          <p className="max-w-[46ch] text-lg">
            TIA Portal, klare Programmarchitektur und das Zusammenspiel von
            Steuerung, Vision-Systemen und Robotern. Von der neuen Anlage bis
            zum Retrofit.
          </p>
          <a
            className="group inline-flex items-center justify-between gap-10 justify-self-start bg-lime px-6 py-4 font-semibold text-ink motion-safe:transition-colors hocus:bg-white"
            href="#kontakt"
          >
            Projekt besprechen
            <ArrowUpRightIcon className="size-5 motion-safe:transition-transform group-hocus:translate-x-0.5 group-hocus:-translate-y-0.5" />
          </a>
        </div>
        <ul className="relative mt-16 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold tracking-[0.12em] text-signal-light uppercase tablet:mt-20">
          {FOCUS_AREAS.map((area) => (
            <li
              key={area}
              className="flex items-center gap-3 before:size-1.5 before:bg-lime"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
