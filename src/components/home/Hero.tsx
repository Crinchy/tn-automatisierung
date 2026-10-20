export default function Hero() {
  return (
    <section className="overflow-hidden bg-signal text-white">
      <div className="wrap relative pt-8.75 pb-10 tablet:pt-13.75 tablet:pb-16.25">
        <p className="eyebrow">Tommy Nestmann / Industrieautomatisierung</p>
        <div
          className="pointer-events-none absolute top-38.75 -right-28.75 h-57.5 w-97.5 bg-[url(/tn-wasserzeichen.svg)] bg-contain bg-center bg-no-repeat opacity-12 tablet:top-41.25 tablet:-right-16.25 tablet:h-82.5 tablet:w-142.5 tablet:opacity-13"
          aria-hidden="true"
        />
        <h1 className="relative z-2 mt-8 mb-8.75 max-w-225 text-[clamp(43px,14.5vw,69px)] leading-[.88] font-black tracking-[-3px] tablet:mt-10 tablet:text-[clamp(70px,9.9vw,142px)] tablet:tracking-[-7px]">
          GUTE LOGIK.
          <br />
          STARKE
          <br />
          <span className="text-signal-light">MASCHINEN.</span>
        </h1>
        <div className="relative z-2 tablet:flex tablet:items-end tablet:justify-between tablet:gap-10">
          <p className="mb-6.25 max-w-100 text-[15px] tablet:mb-0 tablet:text-[17px]">
            TIA Portal, klare Programmarchitektur und das Zusammenspiel von
            Steuerung, Vision-Systemen und Robotern. Von der neuen Anlage bis
            zum Retrofit.
          </p>
          <a
            className="inline-flex shrink-0 items-center gap-5 bg-lime px-5 py-3.25 text-[13px] text-ink-deep tablet:gap-8"
            href="#kontakt"
          >
            Projekt besprechen <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
