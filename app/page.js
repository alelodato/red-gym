"use client";

import { useState } from "react";
import SafeguardingModal from "@/components/SafeguardingModal";
import StatsCounterBand from "@/components/StatsCounterBand";
import Button from "@/components/Button";

function toPublicSrc(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

const SHELL = "mx-auto w-full";

function Hero({
  image = "hero1.webp",
  kicker = "",
  title = (
    <>
      <span className="text-brand-red text-4xl sm:text-6xl lg:text-7xl">RED GYM</span>
      <br />
      LA TUA PALESTRA <br /> A FONTE NUOVA.
    </>
  ),
  subtitle = (
    <>
      Red Gym è la tua palestra a Fonte Nuova (RM) con sala pesi attrezzata, corsi di arti marziali, boxe e allenamento funzionale per ogni livello.
    </>
  ),
  className = "",
}) {
  return (
    <section className={`relative bg-brand-red overflow-hidden ${className}`}>
      {/* Mobile fullscreen | Desktop invariato */}
      <div className="relative h-[600px] sm:h-[620px] lg:h-[800px]">
        <img
          src={toPublicSrc(image)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
      </div>

      {/* Contenuto centrato verticalmente su mobile */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div>
            {kicker ? (
              <p className="section-title text-white/85">
                {kicker}
              </p>
            ) : null}

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
              <Button href="/about" variant="white">
                Scopri la palestra
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhiteSection({ children, id }) {
  return (
    <section id={id} className="bg-brand-red">
      {/* Mobile: contenuto diretto senza padding/bordi */}
      <div className="sm:hidden bg-white py-8 px-4">
        {children}
      </div>

      {/* Desktop: con container e bordi */}
      <div className="hidden sm:block px-6 lg:px-8">
        <div className="bg-white border border-brand-gray200 shadow-soft rounded-2xl p-10 lg:p-12">
          {children}
        </div>
      </div>
    </section>
  );
}

function SectionHead({ kicker, title, lead, ctaHref, ctaLabel }) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="section-title text-brand-red text-sm">{kicker}</p>
        <h2 className="font-heading uppercase tracking-wide mt-2 text-3xl sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {lead ? (
          <p className="mt-4 text-black/70 leading-relaxed max-w-2xl text-sm sm:text-[15px] lg:text-[18px]">
            {lead}
          </p>
        ) : null}
      </div>

      {ctaHref ? (
        <div className="shrink-0">
          <Button href={ctaHref} variant="outline">
            {ctaLabel || "Scopri"}
          </Button>
        </div>
      ) : null}
    </div>
  );
}

function Card({ kicker, title, text, href, ctaLabel, imageSrc, imageAlt }) {
  return (
    <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 sm:p-6 lg:p-7">
      {kicker ? <p className="section-title text-brand-red">{kicker}</p> : null}

      <h3 className="font-heading uppercase tracking-wide text-xl sm:text-2xl mt-2">
        {title}
      </h3>

      {imageSrc ? (
        <div className="mt-4 lg:hidden">
          <div className="relative overflow-hidden rounded-xl shadow-soft h-[250px] md:h-[220px]">
            <img
              src={toPublicSrc(imageSrc)}
              alt={imageAlt || title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      ) : null}

      <p className="mt-3 text-black/70 leading-relaxed text-sm sm:text-[14px]">
        {text}
      </p>

      {href ? (
        <div className="mt-6">
          <Button href={href}>{ctaLabel || "Scopri di più"}</Button>
        </div>
      ) : null}
    </div>
  );
}

function DiagonalCuts({ flip = false, heightClass = "h-16 sm:h-20" }) {
  const topClip = flip
    ? "[clip-path:polygon(0_0,100%_0,100%_100%,0_55%)]"
    : "[clip-path:polygon(0_0,100%_0,100%_55%,0_100%)]";

  const bottomClip = flip
    ? "[clip-path:polygon(0_0,100%_45%,100%_100%,0_100%)]"
    : "[clip-path:polygon(0_45%,100%_0,100%_100%,0_100%)]";

  return (
    <>
      <div className={`hidden sm:block absolute -top-1 left-0 right-0 bg-brand-red ${heightClass} ${topClip}`} />
      <div className={`hidden sm:block absolute -bottom-1 left-0 right-0 bg-brand-red ${heightClass} ${bottomClip}`} />
    </>
  );
}

function DiagonalPromoOver65({
  image = "over65.webp",
  kicker = "Benessere",
  title = "Sconto Over 65",
  subtitle = "Tariffe dedicate: chiedi in reception o contattaci per tutti i dettagli.",
  reverse = false,
}) {
  const topClip = reverse
    ? "[clip-path:polygon(0_0,100%_0,100%_100%,0_55%)]"
    : "[clip-path:polygon(0_0,100%_0,100%_55%,0_100%)]";

  const bottomClip = reverse
    ? "[clip-path:polygon(0_0,100%_45%,100%_100%,0_100%)]"
    : "[clip-path:polygon(0_45%,100%_0,100%_100%,0_100%)]";

  return (
    <section className="relative bg-brand-red overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={toPublicSrc(image)}
          alt={title}
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/55" />

        {/* Tagli diagonali solo desktop */}
        <div className={`hidden sm:block absolute -top-1 left-0 right-0 h-20 bg-brand-red ${topClip}`} />
        <div className={`hidden sm:block absolute -bottom-1 left-0 right-0 h-20 bg-brand-red ${bottomClip}`} />
      </div>

      <div className="relative">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-20">
          <p className="section-title text-white/85">{kicker}</p>

          <h3 className="font-heading uppercase tracking-wide text-white text-4xl sm:text-5xl mt-2">
            {title}
          </h3>

          <p className="mt-4 text-white/85 max-w-2xl leading-relaxed text-base sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-6 grid gap-3 sm:flex sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide
                         bg-white text-brand-red hover:bg-white/90 transition-colors"
            >
              Chiedi info
            </a>

            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide
                         border border-white/70 text-white hover:bg-white hover:text-brand-red transition-colors"
            >
              Vedi abbonamenti
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiagonalPhoto({
  image = "safeguarding.webp",
  alt = "Red Gym",
  flip = false,
  heightClass = "h-[280px] sm:h-[340px] lg:h-[430px]",
  showSafeguarding = false,
  onOpenSafeguarding,
  safeguardingEmail = "vito.lettieri@email.it",
}) {
  return (
    <section className="relative bg-brand-red overflow-hidden">
      <div className={["relative", heightClass].join(" ")}>
        {/* Desktop: foto con taglio diagonale */}
        <div className="hidden sm:block absolute inset-0">
          <img
            src={toPublicSrc(image)}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Mobile: foto dritta come background */}
        <div className="sm:hidden absolute inset-0">
          <img
            src={toPublicSrc(image)}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {showSafeguarding && (
          <div className="absolute inset-0 flex items-center">
            <div className={[SHELL, "px-4 sm:px-6 lg:px-8"].join(" ")}>
              <div className="max-w-3xl backdrop-blur-sm rounded-xl px-4 py-4 sm:px-8 sm:py-7 sm:mt-6">
                <p className="section-title text-white/80 tracking-widest">
                  SAFEGUARDING
                </p>

                <h3 className="mt-2 font-heading uppercase tracking-wide text-white
                               text-2xl sm:text-3xl lg:text-4xl leading-tight">
                  Tutela, rispetto e sicurezza
                </h3>

                <p className="mt-4 text-white/90 leading-relaxed
                              text-sm sm:text-base lg:text-lg">
                  Red Gym promuove un ambiente sicuro, inclusivo e rispettoso per
                  tutti. Per segnalazioni o richieste di chiarimento, è possibile
                  consultare l'informativa sul{" "}
                  <button
                    type="button"
                    onClick={onOpenSafeguarding}
                    className="font-semibold underline underline-offset-4 hover:text-white"
                  >
                    SAFEGUARDING
                  </button>{" "}
                  oppure contattare il responsabile all'indirizzo{" "}
                  <a
                    href={`mailto:${safeguardingEmail}`}
                    className="font-semibold hover:text-white"
                  >
                    {safeguardingEmail}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function DiagonalBand({ image = "palestra1.webp", title = "Sport & Benessere", flip = true }) {
  return (
    <section className="relative bg-brand-red overflow-hidden">
      <div className="relative h-[230px] sm:h-[280px] lg:h-[340px]">
        <img src={toPublicSrc(image)} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <DiagonalCuts flip={flip} heightClass="h-16 sm:h-20" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className={[SHELL, "px-4 sm:px-6 lg:px-8"].join(" ")}>
          {/* Logo al posto del kicker */}
          <div className="flex justify-center mb-3">
            <img
              src={toPublicSrc("logo-negativo.png")}
              alt="Red Gym"
              className="h-12 sm:h-14 lg:h-16 w-auto"
            />
          </div>
          <h3 className="font-heading uppercase text-center tracking-wide text-white text-2xl sm:text-3xl lg:text-4xl">
            {title}
          </h3>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [openSafeguarding, setOpenSafeguarding] = useState(false);

  return (
    <>
      <Hero className="-mt-[var(--nav-h)]" image="hero1.webp" />

      <div className="bg-brand-red">
        {/* Eliminato space-y su mobile */}
        <div className="space-y-0 sm:space-y-8 lg:space-y-10 pb-0 sm:pt-10 lg:pt-12">
          <WhiteSection id="home-about">
            <SectionHead
              kicker="La palestra"
              title="Perchè scegliere Red Gym?"
            />

            {/* IMMAGINE PALESTRA2 + PARAGRAFO */}
            <div className="mt-6">
              <div className="relative overflow-hidden rounded-xl shadow-soft h-[250px] sm:h-[300px] lg:h-[360px]">
                <img
                  src={toPublicSrc("palestra4.webp")}
                  alt="Red Gym Fonte Nuova"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <p className="mt-4 text-black/70 leading-relaxed text-sm sm:text-[15px] lg:text-[18px]">
                Red Gym è una palestra a Fonte Nuova (RM) con oltre 1.800 mq dedicati al fitness e agli sport da combattimento. Offriamo sala pesi attrezzata con macchinari professionali, aree specifiche per boxe e arti marziali e un ambiente ordinato, motivante e seguito da istruttori qualificati. La nostra struttura è pensata per chi cerca qualità, spazio e un allenamento efficace nel cuore di Fonte Nuova.
              </p>
            </div>

            <div className="mt-10">
              <div className="grid gap-4 sm:gap-10 lg:grid-cols-2">
                {/* COLONNA SINISTRA: 4 Card */}
                <div className="space-y-12 sm:space-y-10">
                  {/* 1. Macchinari */}
                  <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 sm:p-6 lg:p-7">
                    <p className="section-title text-brand-red">Attrezzatura e Sport da Combattimento</p>

                    <h3 className="font-heading uppercase tracking-wide text-xl sm:text-2xl mt-2">
                      Macchinari e Sale Dedicate
                    </h3>

                    {/* Immagini sovrapposte MOBILE */}
                    <div className="mt-6 lg:hidden relative h-[360px]">
                      <div className="absolute top-0 left-0 w-[55%] z-10">
                        <div className="relative overflow-hidden rounded-xl shadow-lg h-[320px]">
                          <img
                            src={toPublicSrc("palestra3.webp")}
                            alt="Sala Pesi Red Gym"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/10" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-0 w-[55%]">
                        <div className="relative overflow-hidden rounded-xl shadow-lg h-[320px]">
                          <img
                            src={toPublicSrc("sala2.jpeg")}
                            alt="Sala Combattimento Red Gym"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/10" />
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 sm:mt-3 text-black/70 leading-relaxed text-sm sm:text-[14px]">
                      Strumenti selezionati per sicurezza, comfort ed efficacia: qui trovi macchinari che fanno la differenza. E per chi ama il combattimento, spazi dedicati a Boxe, MMA e arti marziali organizzati e con l'atmosfera giusta per allenarti con metodo e concentrazione.
                    </p>

                    <div className="mt-6">
                      <Button href="/about#palestra">Scopri la palestra</Button>
                    </div>
                  </div>

                  {/* 2. Benessere */}
                  <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 sm:p-6 lg:p-7">
                    <p className="section-title text-brand-red">Sport & Benessere</p>

                    <h3 className="font-heading uppercase tracking-wide text-xl sm:text-2xl mt-2">
                      Mente e Corpo in Equilibrio
                    </h3>

                    {/* Immagini sovrapposte MOBILE */}
                    <div className="mt-6 lg:hidden relative h-[360px]">
                      <div className="absolute top-0 left-0 w-[55%] z-10">
                        <div className="relative overflow-hidden rounded-xl shadow-lg h-[320px]">
                          <img
                            src={toPublicSrc("yoga.webp")}
                            alt="Yoga Red Gym"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/10" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-0 w-[55%]">
                        <div className="relative overflow-hidden rounded-xl shadow-lg h-[320px]">
                          <img
                            src={toPublicSrc("judo-hero.webp")}
                            alt="Judo Red Gym"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/10" />
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 sm:mt-3 text-black/70 leading-relaxed text-sm sm:text-[14px]">
                      Red Gym propone un percorso completo che unisce sport da combattimento, prepugilistica e allenamento funzionale a discipline dedicate al benessere come yoga e ginnastica posturale. Un approccio integrato per sviluppare forza, tecnica, mobilità ed equilibrio, adatto a ogni età e livello di preparazione.
                    </p>

                    <div className="mt-6">
                      <Button href="/courses">I nostri corsi</Button>
                    </div>
                  </div>

                  {/* 3. Trainer */}
                  <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 sm:p-6 lg:p-7">
                    <p className="section-title text-brand-red">Il Team</p>

                    <h3 className="font-heading uppercase tracking-wide text-xl sm:text-2xl mt-2">
                      Istruttori Qualificati e Appassionati
                    </h3>

                    {/* Immagine MOBILE */}
                    <div className="mt-4 lg:hidden">
                      <div className="relative overflow-hidden rounded-xl shadow-soft h-[250px] md:h-[220px]">
                        <img
                          src={toPublicSrc("rgym2.jpeg")}
                          alt="Team Red Gym"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                      </div>
                    </div>

                    <p className="mt-5 sm:mt-3 text-black/70 leading-relaxed text-sm sm:text-[14px]">
                      Ogni corso è seguito da istruttori certificati, con anni di esperienza e la passione per quello che fanno. Non troverai solo tecnici preparati, ma guide attente che ti aiutano a crescere con metodo, sicurezza e motivazione costante.
                    </p>

                    <div className="mt-6">
                      <Button href="/courses">Conosci il team</Button>
                    </div>
                  </div>

                  {/* 4. Community */}
                  <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 sm:p-6 lg:p-7">
                    <p className="section-title text-brand-red">Community</p>

                    <h3 className="font-heading uppercase tracking-wide text-xl sm:text-2xl mt-2">
                      Un Ambiente Accogliente e Motivante
                    </h3>

                    {/* Immagine MOBILE */}
                    <div className="mt-4 lg:hidden">
                      <div className="relative overflow-hidden rounded-xl shadow-soft h-[250px] md:h-[220px]">
                        <img
                          src={toPublicSrc("community.jpeg")}
                          alt="Community Red Gym"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                      </div>
                    </div>

                    <p className="mt-5 sm:mt-3 text-black/70 leading-relaxed text-sm sm:text-[14px] whitespace-pre-line">
                      Qui alla Red Gym non sei mai 'lasciato solo': trovi un ambiente serio, accogliente e pieno di energia positiva. Contattaci ed entra a far parte della community!
                    </p>

                    <div className="mt-6">
                      <Button href="/contact">Contattaci</Button>
                    </div>
                  </div>
                </div>

                {/* COLONNA DESTRA: ImageGrid - SOLO DESKTOP */}
                <div className="hidden lg:block space-y-10">
                  {/* 1. ImageGrid superiore: palestra3 + sala2 */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="relative overflow-hidden rounded-xl shadow-soft h-[320px]">
                      <img
                        src={toPublicSrc("palestra3.webp")}
                        alt="Sala Pesi Red Gym"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-soft h-[320px]">
                      <img
                        src={toPublicSrc("sala2.jpeg")}
                        alt="Sala Combattimento Red Gym"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  </div>

                  {/* 2. ImageGrid inferiore: yoga + judo-hero */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="relative overflow-hidden rounded-xl shadow-soft h-[320px]">
                      <img
                        src={toPublicSrc("yoga.webp")}
                        alt="Yoga Red Gym"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-soft h-[320px]">
                      <img
                        src={toPublicSrc("judo-hero.webp")}
                        alt="Judo Red Gym"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  </div>

                  {/* 3. Immagine singola rgym2.jpeg - allineata con "Istruttori" */}
                  <div className="relative overflow-hidden rounded-xl shadow-soft h-[320px]">
                    <img
                      src={toPublicSrc("rgym2.jpeg")}
                      alt="Team Red Gym"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  {/* 4. Immagine singola community.jpeg - allineata con "Community" */}
                  <div className="relative overflow-hidden rounded-xl shadow-soft h-[320px]">
                    <img
                      src={toPublicSrc("community.jpeg")}
                      alt="Community Red Gym"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                </div>
              </div>
            </div>
          </WhiteSection>

          <StatsCounterBand />

          <WhiteSection id="home-courses">
            <SectionHead
              kicker="Corsi & attività"
              title="Trova il tuo percorso."
              lead="Che tu sia all’inizio o già ad un livello avanzato, trovi corsi con guide competenti e progressioni chiare: allenamento funzionale e TACFIT, ginnastica posturale e yoga, boxe/kickboxing/prepugilistica, MMA, karate e judo."
            />

            {/* Grid 2x2 Desktop, colonna singola Mobile */}
            <div className="mt-8 lg:mt-10 grid gap-8 lg:grid-cols-2">
              {/* 1. Sala pesi & Fitness */}
              <div className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 sm:bg-white">
                <p className="font-heading uppercase tracking-wide text-lg lg:text-xl">
                  Allenamento Funzionale & TacFit
                </p>

                <div className="mt-4 relative overflow-hidden rounded-xl shadow-soft h-[200px] sm:h-[220px]">
                  <img
                    src={toPublicSrc("tacfit.webp")}
                    alt="Sala pesi Red Gym"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <p className="mt-4 text-sm text-black/70 leading-relaxed">
                  Forza, mobilità e condizionamento in un unico percorso. Allenamenti dinamici e ad alta intensità per migliorare performance, resistenza e controllo del corpo.
                </p>
              </div>

              {/* 2. Pilates & postura */}
              <div className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 sm:bg-white">
                <p className="font-heading uppercase tracking-wide text-lg lg:text-xl">
                  Ginnastica Per La Salute & Yoga
                </p>

                <div className="mt-4 relative overflow-hidden rounded-xl shadow-soft h-[200px] sm:h-[220px]">
                  <img
                    src={toPublicSrc("pilates.jpg")}
                    alt="Pilates Red Gym"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <p className="mt-4 text-sm text-black/70 leading-relaxed">
                  Benessere, equilibrio e consapevolezza. Discipline che lavorano su postura, respirazione e flessibilità per ritrovare armonia tra mente e corpo.
                </p>
              </div>

              {/* 3. Boxe + Prepugilistica */}
              <div className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 sm:bg-white">
                <p className="font-heading uppercase tracking-wide text-lg lg:text-xl">
                  Boxe • Kickboxing • Prepugilistica
                </p>

                <div className="mt-4 relative overflow-hidden rounded-xl shadow-soft h-[200px] sm:h-[220px]">
                  <img
                    src={toPublicSrc("boxe.webp")}
                    alt="Boxe Red Gym"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <p className="mt-4 text-sm text-black/70 leading-relaxed">
                  Colpi, tecnica e strategia. Sport da ring che sviluppano potenza, velocità e concentrazione, costruendo fiducia e disciplina dentro e fuori dalla palestra.
                </p>
              </div>

              {/* 4. MMA • Karate • Judo */}
              <div className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 sm:bg-white">
                <p className="font-heading uppercase tracking-wide text-lg lg:text-xl">
                  MMA • Karate • Judo
                </p>

                <div className="mt-4 relative overflow-hidden rounded-xl shadow-soft h-[200px] sm:h-[220px]">
                  <img
                    src={toPublicSrc("mma.webp")}
                    alt="Arti Marziali Red Gym"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <p className="mt-4 text-sm text-black/70 leading-relaxed">
                  Arti marziali che formano atleti completi. Tecnica, rispetto e determinazione in percorsi che uniscono tradizione, combattimento e crescita personale.
                </p>
              </div>
            </div>

            {/* Bottoni CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/courses">Vai ai corsi</Button>
              <Button href="/contact" variant="outline">
                Chiedi info
              </Button>
            </div>
          </WhiteSection>

          <DiagonalBand image="palestra1.webp" kicker="Red Gym" title="Energia. Disciplina. Risultati." flip />

          <WhiteSection id="home-pricing">
            <SectionHead
              kicker="Abbonamenti"
              title="Scegli la formula giusta."
              lead="Prezzi chiari, nessuna sorpresa. Che tu venga una volta a settimana o ti alleni ogni giorno, c'è una soluzione pensata per te."
            />

            <div className="mt-8 lg:mt-10 grid gap-10 lg:grid-cols-3 lg:gap-6">
              <Card
                kicker="Sala Pesi & Fitness"
                title="Entra e allenati"
                text="Accesso libero alla sala pesi con fasce orarie flessibili. Scegli l'orario che fa per te da 1 mese fino all'annuale, con sconti dedicati."
                href="/pricing#pesi"
                ctaLabel="Vedi gli abbonamenti"
              />
              <Card
                kicker="Corsi & Discipline"
                title="Boxe, Judo, Karate e altro"
                text="Pacchetti mensili dedicati per ogni disciplina: Boxe, Judo, Grappling, Karate. Già socio? Aggiungi un corso a soli 40€."
                href="/pricing#corsi"
                ctaLabel="Esplora i corsi"
              />
              <Card
                kicker="Massimo risparmio"
                title="Sconti E Promozioni"
                text="Sconti Over 65, convenzioni e agevolazioni per il nucleo familiare e non solo."
                href="/pricing#sconti"
                ctaLabel="Scopri sconti e agevolazioni"
              />
            </div>
          </WhiteSection>

          <DiagonalPromoOver65
            image="over65.webp"
            kicker="Benessere"
            title="Sconto Over 65"
            subtitle="Tariffe dedicate: chiedi in reception o contattaci per tutti i dettagli."
          />

          <SafeguardingModal
            open={openSafeguarding}
            onClose={() => setOpenSafeguarding(false)}
          />

          <WhiteSection id="home-contact">
            <SectionHead
              kicker="Contatti"
              title="Scrivici o passa in sede."
              lead="Per info su corsi, orari e abbonamenti puoi contattarci: ti rispondiamo e ti aiutiamo a scegliere il percorso più adatto."
            />

            <div className="mt-8 lg:mt-10 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-6 space-y-6">

                {/* RECAPITI */}
                <div className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 sm:bg-white">
                  <p className="font-heading uppercase tracking-wide">Recapiti</p>
                  <div className="mt-3 space-y-2 text-sm text-black/70">
                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      <a href="mailto:info@redgym.eu" className="hover:text-brand-red transition-colors">
                        info@redgym.eu
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Telefono:</span>{" "}
                      <a href="tel:3496504500" className="hover:text-brand-red transition-colors">
                        349 6504500
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Indirizzo:</span> Via Delle Molette 245/247, Fonte Nuova 00013 (RM)
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 sm:rounded-xl overflow-hidden sm:border sm:border-brand-gray200 sm:bg-white">
                <div className="p-6 sm:p-7">
                  <p className="font-heading uppercase tracking-wide text-lg">Red Gym – Fonte Nuova</p>
                  <p className="mt-2 text-sm text-black/70">
                    Vieni a trovarci in sede: ampio parcheggio e spazi grandi per allenarti con calma, metodo e supporto reale.
                  </p>
                </div>
                <div className="relative h-[360px] sm:h-[420px] lg:h-[460px]">
                  <iframe
                    title="Google Maps - Red Gym"
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.216478787936!2d12.621904015713814!3d41.99959437921157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325c9b42fa47a3f%3A0x8e8b16b55b4b7f9e!2sVia%20delle%20Molette%2C%20245%2C%2000013%20Fonte%20Nuova%20RM%2C%20Italia!5e0!3m2!1sit!2sit!4v1704440000000!5m2!1sit!2sit"
                  />
                </div>
              </div>
            </div>
          </WhiteSection>

          <DiagonalPhoto
            image="safeguarding.webp"
            alt="Red Gym - energia"
            flip={false}
            showSafeguarding
            safeguardingEmail="vito.lettieri@email.it"
            onOpenSafeguarding={() => setOpenSafeguarding(true)}
          />
        </div>
      </div>
    </>
  );
}