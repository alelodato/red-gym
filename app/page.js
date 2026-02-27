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

function DiagonalBand({ image = "palestra1.webp", kicker = "Red Gym", title = "Sport & Benessere", flip = true }) {
  return (
    <section className="relative bg-brand-red overflow-hidden">
      <div className="relative h-[230px] sm:h-[280px] lg:h-[340px]">
        <img src={toPublicSrc(image)} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <DiagonalCuts flip={flip} heightClass="h-16 sm:h-20" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className={[SHELL, "px-4 sm:px-6 lg:px-8"].join(" ")}>
          <p className="section-title text-center text-white/85">{kicker}</p>
          <h3 className="font-heading uppercase text-center tracking-wide text-white text-2xl sm:text-3xl lg:text-4xl mt-2">
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
                {/* COLONNA SINISTRA: 3 Card */}
                <div className="space-y-10">
                  {/* 1. Macchinari */}
                  <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 sm:p-6 lg:p-7">
                    <p className="section-title text-brand-red">Attrezzatura e Sport da Combattimento</p>

                    <h3 className="font-heading uppercase tracking-wide text-xl sm:text-2xl mt-2">
                      Macchinari e Sale Dedicate
                    </h3>

                    {/* Immagini sovrapposte MOBILE - al posto di palestra6 */}
                    <div className="mt-4 lg:hidden relative h-[320px]">
                      <div className="absolute top-0 left-0 w-[55%] z-10">
                        <div className="relative overflow-hidden rounded-xl shadow-lg h-[280px]">
                          <img
                            src={toPublicSrc("palestra3.webp")}
                            alt="Sala Pesi Red Gym"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/10" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-0 w-[55%]">
                        <div className="relative overflow-hidden rounded-xl shadow-lg h-[280px]">
                          <img
                            src={toPublicSrc("sala2.jpeg")}
                            alt="Sala Combattimento Red Gym"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/10" />
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-black/70 leading-relaxed text-sm sm:text-[14px]">
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

                    {/* Immagini sovrapposte MOBILE - al posto di yoga */}
                    <div className="mt-4 lg:hidden relative h-[320px]">
                      <div className="absolute top-0 left-0 w-[55%] z-10">
                        <div className="relative overflow-hidden rounded-xl shadow-lg h-[280px]">
                          <img
                            src={toPublicSrc("yoga.webp")}
                            alt="Yoga Red Gym"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/10" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-0 w-[55%]">
                        <div className="relative overflow-hidden rounded-xl shadow-lg h-[280px]">
                          <img
                            src={toPublicSrc("judo-hero.webp")}
                            alt="Judo Red Gym"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/10" />
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-black/70 leading-relaxed text-sm sm:text-[14px]">
                      Red Gym propone un percorso completo che unisce sport da combattimento, prepugilistica e allenamento funzionale a discipline dedicate al benessere come yoga e ginnastica posturale. Un approccio integrato per sviluppare forza, tecnica, mobilità ed equilibrio, adatto a ogni età e livello di preparazione.
                    </p>

                    <div className="mt-6">
                      <Button href="/courses">I nostri corsi</Button>
                    </div>
                  </div>

                  {/* 3. Trainer */}
                  <Card
                    kicker="Il Team"
                    title="Istruttori Qualificati e Appassionati"
                    imageSrc="rgym2.jpeg"
                    imageAlt="Team Red Gym"
                    text="Ogni corso è seguito da istruttori certificati, con anni di esperienza e la passione per quello che fanno. Non troverai solo tecnici preparati, ma guide attente che ti aiutano a crescere con metodo, sicurezza e motivazione costante."
                    href="/courses"
                    ctaLabel="Conosci il team"
                  />
                </div>

                {/* COLONNA DESTRA: ImageGrid + Community Image - SOLO DESKTOP */}
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

                  {/* 3. Community Image */}
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

              {/* PARAGRAFO COMMUNITY - fuori dal grid, sotto */}
              <div className="mt-10">
                <Card
                  kicker="Community"
                  title="Rispetto e mentalità"
                  imageSrc="community.jpeg"
                  imageAlt="Community Red Gym"
                  text={<>Disciplina, rispetto, autocontrollo.
                    <br />
                    Qui non sei mai 'lasciato solo': trovi un ambiente serio, accogliente e pieno di energia positiva.
                    <br />
                    Contattaci ed entra a far parte della community!</>}
                  href="/contact"
                  ctaLabel="Contattaci"
                />
              </div>
            </div>
          </WhiteSection>

          <StatsCounterBand />

          <WhiteSection id="home-courses">
            <SectionHead
              kicker="Corsi & attività"
              title="Trova il tuo percorso."
              lead="Che tu sia all'inizio o già avanzato, trovi corsi con guide competenti e progressioni chiare: sala pesi/fitness, pilates e benessere, boxe/prepugilistica, MMA, karate e judo."
            />

            <div className="mt-6 lg:mt-10 grid gap-6 lg:grid-cols-12">
              <div className="order-1 lg:order-2 lg:col-span-5 relative overflow-hidden rounded-xl shadow-soft min-h-[240px] sm:min-h-[300px] lg:min-h-[420px]">
                <img
                  src={toPublicSrc("mma.png")}
                  alt="Corsi Red Gym"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="order-2 lg:order-1 lg:col-span-7 sm:rounded-xl sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 sm:bg-white">
                <p className="section-title text-brand-red">In evidenza</p>

                {/* Aumentato spazio tra i paragrafi: space-y-8 su mobile */}
                <div className="mt-4 space-y-8 sm:space-y-4">
                  {[
                    { t: "Sala pesi & Fitness", d: "Metodo, supporto in sala e strumenti di qualità: sicurezza, efficacia e continuità per obiettivi reali." },
                    { t: "Pilates & postura", d: "Controllo, mobilità, equilibrio. Un lavoro intelligente per stare meglio e muoverti meglio." },
                    { t: "Boxe + Prepugilistica", d: "Tecnica, coordinazione, fiato e disciplina. Un percorso strutturato per imparare con metodo (con o senza esperienza)." },
                    { t: "MMA • Karate • Judo", d: "Percorsi completi per corpo e mente: disciplina, controllo e crescita personale. Adatto per atleti di tutti i livelli." },
                  ].map((x) => (
                    <div key={x.t} className="border-l-4 border-brand-red pl-4">
                      <p className="font-heading uppercase tracking-wide text-lg">{x.t}</p>
                      <p className="mt-1 text-sm text-black/70 leading-relaxed">{x.d}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button href="/courses">Vai ai corsi</Button>
                  <Button href="/contact" variant="outline">
                    Chiedi info
                  </Button>
                </div>
              </div>
            </div>
          </WhiteSection>

          <DiagonalBand image="palestra1.webp" kicker="Red Gym" title="Energia. Disciplina. Risultati." flip />

          <WhiteSection id="home-pricing">
            <SectionHead
              kicker="Abbonamenti"
              title="Scegli la formula giusta."
              lead="Prezzi chiari, nessuna sorpresa. Che tu venga una volta a settimana o ti alleni ogni giorno, c'è una soluzione pensata per te."
              ctaHref="/pricing"
              ctaLabel="Vedi piani e abbonamenti"
            />

            <div className="mt-8 lg:mt-10 grid gap-10 lg:grid-cols-3 lg:gap-6">
              <Card
                kicker="Sala Pesi & Fitness"
                title="Entra e allenati"
                text="Accesso libero alla sala pesi con fasce orarie flessibili. Scegli l'orario che fa per te — da 1 mese fino all'annuale, con sconti dedicati."
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
                {/* ORARI */}
                <div className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 sm:bg-white">
                  <p className="font-heading uppercase tracking-wide">Orari Di Apertura</p>
                  <div className="mt-3 space-y-2 text-sm text-black/70">
                    <div className="flex justify-between">
                      <span>Lun – Ven</span>
                      <span className="font-semibold text-brand-black">07:00 – 23:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabato</span>
                      <span className="font-semibold text-brand-black">08:00 – 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domenica</span>
                      <span className="font-semibold text-brand-black">09:00 – 13:00</span>
                    </div>
                  </div>
                </div>

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

                  {/* Link social eleganti */}
                  <div className="mt-6 space-y-3">
                    <a
                      href="https://wa.me/393496504500"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-semibold text-black/70 hover:text-brand-red transition-colors group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white group-hover:bg-green-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <span>Scrivici su WhatsApp</span>
                    </a>

                    <a
                      href="https://www.instagram.com/red.gym.fontenuova/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-semibold text-black/70 hover:text-brand-red transition-colors group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white group-hover:opacity-90 transition-opacity">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                      <span>Seguici su Instagram</span>
                    </a>
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