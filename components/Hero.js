function Hero({
  image = "hero1.webp",
  kicker = "RED GYM - FONTE NUOVA",
  title = (
    <>
      ALLENATI MEGLIO. <br /> VIVI MEGLIO.
    </>
  ),
  subtitle =
  "RED GYM e' la tua palestra a Fonte Nuova: sala pesi, allenamento funzionale e sport da combattimento. Scopri i nostri corsi e allenati con noi!",
  className = "",
}) {

  return (
    <section className={`relative bg-brand-red overflow-hidden ${className}`}>
      {/* Mobile: hero più compatta */}
      <div className="relative h-[480px] sm:h-[620px] lg:h-[720px]">
        <img
          src={toPublicSrc(image)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
      </div>

      {/* Contenuto posizionato meglio su mobile con padding-top */}
      <div className="absolute inset-0 flex items-end sm:items-center">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="pt-24 pb-4 sm:pt-0 sm:pb-0">
            {kicker ? <p className="section-title text-white/85">{kicker}</p> : null}

            {title ? (
              <h1
                className="font-heading uppercase tracking-wide text-white mt-2 leading-tight
                           text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl"
              >
                {title}
              </h1>
            ) : null}

            {subtitle ? (
              <p className="mt-4 text-white/85 max-w-2xl leading-relaxed text-sm sm:text-lg lg:text-xl">
                {subtitle}
              </p>
            ) : null}

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button href="/courses">I nostri corsi</Button>
              <Button href="/about" variant="outline">
                Scopri la palestra
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}