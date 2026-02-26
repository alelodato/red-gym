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
  kicker = "RED GYM",
  title = (
    <>
      ALLENATI MEGLIO. <br /> VIVI MEGLIO.
    </>
  ),
  subtitle =
  <>
    RED GYM e' la tua palestra a Fonte Nuova:
    <br />
    sala pesi, allenamento funzionale e sport da combattimento.
    <br />
    Scopri i nostri corsi e allenati con noi!
  </>,
  className = "",
}) {
  return (
    <section className={`relative bg-brand-red overflow-hidden ${className}`}>
      {/* Mobile fullscreen | Desktop invariato */}
      <div className="relative h-[600px] sm:h-[620px] lg:h-[720px]">
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
          <p className="mt-4 text-black/70 leading-relaxed max-w-2xl text-sm sm:text-[15px] lg:text-base">
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
          <div className="relative overflow-hidden rounded-xl shadow-soft h-[170px] sm:h-[200px] md:h-[220px]">
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

function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {images.map((img) => (
        <div
          key={img.src}
          className="relative overflow-hidden rounded-xl shadow-soft h-[170px] sm:h-[190px] lg:h-[240px]"
        >
          <img
            src={toPublicSrc(img.src)}
            alt={img.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}
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
  image = "over65.jpg",
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
  image = "diagonal1.jpg",
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
  const ABOUT_IMAGES = [
    { src: "palestra6.webp", alt: "Sala pesi moderna" },
    { src: "sala1.jpeg", alt: "Sala sport da combattimento" },
    { src: "yoga.webp", alt: "Benessere" },
    { src: "community.jpeg", alt: "Community Red Gym" },
  ];
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
              title="Spazi ampi. Metodo. Supporto."
              lead="Red Gym è un centro sportivo a Fonte Nuova (Roma) con ampio parcheggio e circa 1.800 mq di spazio: sala pesi completa, aree dedicate e un ambiente ordinato, motivante e seguito da professionisti."
            />

            {/* Aumentato gap su mobile: gap-10 invece di gap-6 */}
            <div className="mt-6 lg:mt-10">
              {/* ROW 1: Macchinari (sinistra) + ImageGrid (destra) */}
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <Card
                    kicker="Attrezzatura e Sport da Combattimento"
                    title="Macchinari e Sale Dedicate"
                    imageSrc="palestra6.webp"
                    imageAlt="Sala pesi moderna e sport da combattimento"
                    text="Strumenti selezionati per sicurezza, comfort ed efficacia: qui trovi macchinari che fanno la differenza. E per chi ama il combattimento, spazi dedicati a Boxe, MMA e arti marziali organizzati e con l'atmosfera giusta per allenarti con metodo e concentrazione."
                    href="/about"
                    ctaLabel="Scopri la palestra"
                  />
                </div>
                <div className="hidden lg:block">
                  <ImageGrid images={ABOUT_IMAGES} />
                </div>
              </div>

              {/* ROW 2: Benessere (sinistra) + Community (destra) */}
              <div className="grid gap-10 lg:grid-cols-2 mt-10">
                <Card
                  kicker="Benessere"
                  title="Mente e Corpo in Equilibrio"
                  imageSrc="yoga.webp"
                  imageAlt="Corsi di yoga e ginnastica dolce"
                  text="Yoga, pilates, ginnastica posturale e corsi pensati per il tuo benessere a 360°. Un approccio più dolce all'allenamento, ideale per ritrovare equilibrio, flessibilità e serenità adatto a ogni età e livello."
                  href="/courses"
                  ctaLabel="I nostri corsi"
                />
                <Card
                  kicker="Community"
                  title="Rispetto e mentalità"
                  imageSrc="community.jpeg"
                  imageAlt="Community Red Gym"
                  text="Disciplina, rispetto, autocontrollo. Qui non sei mai 'lasciato solo': trovi un ambiente serio, accogliente e pieno di energia positiva. Contattaci ed entra a far parte della community!"
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
                  src={toPublicSrc("rgym2.jpeg")}
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
            image="over65.jpg"
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
              ctaHref="/contact"
              ctaLabel="Apri contatti"
            />

            <div className="mt-8 lg:mt-10 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-6 sm:rounded-xl sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 sm:bg-white">
                <p className="font-heading uppercase tracking-wide">Recapiti</p>
                <div className="mt-3 space-y-2 text-sm text-black/70">
                  <p>Email: info@redgym.eu</p>
                  <p>Telefono: 349 6504500</p>
                  <p>Indirizzo: Via Delle Molette 245/257, Fonte Nuova 00013(RM)</p>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button href="https://wa.me/393496504500" variant="primary">Apri WhatsApp</Button>
                  <Button href="https://www.instagram.com/red.gym.fontenuova/" variant="outline">Apri Instagram</Button>
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
            image="reception (4).webp"
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