"use client"

import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const SHELL = "mx-auto w-full";

function toPublicSrc(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

function PhotoHeroBand({
  image = "palestra4.webp",
  kicker = "Chi Siamo",
  title = (
    <>
      Il tuo centro sportivo. <br /> Pensato per i tuoi obiettivi.
    </>
  ),
  subtitle = (
    <>
      Alla RED GYM crediamo che l'allenamento sia molto più di una semplice attività fisica.
      <br />
      Per questo abbiamo creato uno spazio dove ambiente, staff qualificato e passione per lo sport aiutano chi si allena con noi a raggiungere i propri obiettivi.
    </>
  ),
  className = "",
}) {

  return (
    <section className={`relative bg-brand-red overflow-hidden ${className}`}>
      {/* Mobile: hero più compatta */}
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

      {/* Contenuto posizionato meglio su mobile con padding-top */}
      <div className="absolute inset-0 flex items-center sm:items-center">
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
              <Button href="/contact" className="hero-button">Chiedi info</Button>
              <Button href="/courses" variant="white" className="hero-button">
                Corsi e attività
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhiteBlock({ children }) {
  return (
    <div className="bg-brand-red">
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
    </div>
  );
}

function GymRoomSlideshow({ images, title }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }
    if (touchStartX.current - touchEndX.current < -50) {
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="lg:hidden">
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full">
              <div className="relative h-[300px] overflow-hidden rounded-xl">
                <img
                  src={toPublicSrc(image)}
                  alt={`${title} ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-brand-red" : "w-2 bg-brand-gray200"
                }`}
              aria-label={`Vai alla slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

function SalaPesiTrainersSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const trainers = [
    { image: "DANIELE.jpeg", name: "Daniele" },
    { image: "EMANUELE.jpeg", name: "Emanuele" },
    { image: "ROBERTO.jpeg", name: "Roberto" },
    { image: "EUGENIA.jpeg", name: "Eugenia" },
    { image: "GARY.jpeg", name: "Gary" },
    { image: "JACOPO.jpeg", name: "Jacopo" },
    { image: "LUIGI.jpeg", name: "Luigi" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trainers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [trainers.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setCurrentSlide((prev) => (prev + 1) % trainers.length);
    }
    if (touchStartX.current - touchEndX.current < -50) {
      setCurrentSlide((prev) => (prev - 1 + trainers.length) % trainers.length);
    }
  };

  return (
    <div className="lg:hidden">
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {trainers.map((trainer, index) => (
            <div key={index} className="min-w-full">
              <div className="relative h-[400px] overflow-hidden rounded-xl bg-white border border-brand-gray200">
                <img
                  src={toPublicSrc(trainer.image)}
                  alt={trainer.name}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <h4 className="font-heading uppercase tracking-wide text-white text-2xl text-center">
                    {trainer.name}
                  </h4>
                  <p className="text-white/90 text-sm text-center mt-1 font-semibold">
                    Istruttore Sala Pesi
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {trainers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-brand-red" : "w-2 bg-brand-gray200"
                }`}
              aria-label={`Vai alla slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatsBand({
  bgImage = "palestra7.webp",
  kicker="",
  title = (
    <>
      I dettagli che fanno la differenza.
    </>
  ),
  lead = "",
}) {
  const stats = [
    { value: "1.800", label: "mq di struttura", note: "spazi ampi e organizzati" },
    { value: "7", label: "anni di attività", note: "a Fonte Nuova" },
    { value: "8+", label: "discipline", note: "corsi e percorsi per ogni livello" },
    { value: "TOP", label: "attrezzature", note: "Macchinari professionali all'avanguardia" },
  ];

  return (
    <section className="relative bg-brand-red overflow-hidden" id="palestra">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bgImage.startsWith("/") ? bgImage : `/${bgImage}`}
          alt=""
          className="h-full w-full object-cover"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/35" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>

      {/* Tagli diagonali solo su desktop */}
      <div className="hidden sm:block pointer-events-none absolute -top-1 left-0 right-0 h-20 bg-brand-red [clip-path:polygon(0_0,100%_0,100%_100%,0_55%)]" />
      <div className="hidden sm:block pointer-events-none absolute -bottom-1 left-0 right-0 h-20 bg-brand-red [clip-path:polygon(0_45%,100%_0,100%_100%,0_100%)]" />

      {/* Content wrapper */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-20 lg:py-16 min-h-[520px] sm:min-h-[540px] lg:min-h-[520px] 2xl:min-h-[560px] 2xl:py-20 flex items-center">
          <div className="w-full">
            <div className="max-w-3xl">
              <p className="section-title text-white/80">{kicker}</p>
              <h3 className="font-heading uppercase tracking-wide text-white text-2xl sm:text-3xl lg:text-4xl mt-2">
                {title}
              </h3>
              <p className="mt-3 text-white/85 leading-relaxed">{lead}</p>
            </div>

            <div className="mt-5 mb-5 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.value + s.label}
                  className="rounded-2xl border border-white/15 bg-black/30 backdrop-blur-[1px] p-6 shadow-soft"
                >
                  <div className="flex items-end gap-2">
                    <span className="font-heading uppercase tracking-wide text-white text-4xl sm:text-5xl">
                      {s.value}
                    </span>
                    <span className="text-white/90 font-semibold pb-1">
                      {s.label}
                    </span>
                  </div>
                  <p className="mt-3 text-white/75 text-sm leading-relaxed">
                    {s.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SplitSection({ kicker, title, text, image, alt, invert = false, cta }) {
  return (
    <section className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 overflow-hidden">
      <div className="grid lg:grid-cols-12">
        <div className="py-7 sm:p-10 lg:hidden">
          {kicker ? (
            <p className="section-title text-brand-red text-sm">{kicker}</p>
          ) : null}
          <h2 className="font-heading uppercase tracking-wide text-2xl sm:text-3xl mt-2">
            {title}
          </h2>
        </div>

        <div
          className={[
            "lg:col-span-5 relative h-[240px] sm:h-[320px] lg:h-[360px]",
            invert ? "lg:order-2" : "lg:order-1",
          ].join(" ")}
        >
          <Image
            src={toPublicSrc(image)}
            alt={alt || title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div
          className={[
            "lg:col-span-7 py-7 sm:p-10",
            invert ? "lg:order-1" : "lg:order-2",
          ].join(" ")}
        >
          <div className="hidden lg:block">
            {kicker ? (
              <p className="section-title text-brand-red text-sm">{kicker}</p>
            ) : null}
            <h2 className="font-heading uppercase tracking-wide text-2xl sm:text-3xl mt-2">
              {title}
            </h2>
          </div>

          <p className="mt-0 lg:mt-4 text-black/70 leading-relaxed max-w-2xl">
            {text}
          </p>

          {cta ? <div className="mt-7">{cta}</div> : null}
        </div>
      </div>
    </section>
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

function DiagonalBand({ image = "pilates.webp", title = "Respiro. Armonia. Benessere.", flip = true }) {
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

function FinalCtaHero({ image = "/hero-final.jpg" }) {
  return (
    <section className="relative bg-brand-red overflow-hidden">
      <div className="relative h-[680px] sm:h-[460px] lg:h-[520px]">
        <Image
          src={toPublicSrc(image)}
          alt="Vieni a trovarci"
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/25 sm:bg-black/60" />

        {/* Taglio diagonale solo su desktop */}
        <div className="hidden sm:block absolute -top-1 left-0 right-0 h-20 bg-brand-red [clip-path:polygon(0_0,100%_0,100%_55%,0_100%)]" />
      </div>

      <div className="absolute inset-0 flex sm:hidden">
        <div className="w-full px-4 pt-16 pb-[calc(env(safe-area-inset-bottom)+24px)] flex flex-col justify-end">
          <p className="text-sm font-semibold text-white/80">Vieni a trovarci</p>

          <h2 className="font-heading uppercase tracking-wide text-white text-3xl mt-2">
            Capisci RED GYM solo quando la vivi.
          </h2>

          <p className="mt-4 text-white/85 leading-relaxed">
            Passa in palestra, conosci il nostro staff e scegli il
            percorso più adatto a te.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full rounded-md px-5 py-3 text-sm font-semibold tracking-wide bg-white text-brand-red hover:bg-white/90 transition-colors"
            >
              Contattaci
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center justify-center w-full rounded-md px-5 py-3 text-sm font-semibold tracking-wide border border-white/70 text-white hover:bg-white hover:text-brand-red transition-colors"
            >
              Scopri i corsi
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 hidden sm:flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-7 sm:p-10 lg:p-12 shadow-soft">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="text-sm font-semibold text-white/70">Vieni a trovarci</p>

                <h2 className="font-heading uppercase tracking-wide text-white text-2xl sm:text-3xl lg:text-4xl mt-2">
                  Capisci RED GYM solo quando la vivi.
                </h2>

                <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
                  Passa in palestra, conosci il nostro staff e scegli il
                  percorso più adatto a te.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] rounded-md px-5 py-3 text-sm font-semibold tracking-wide bg-white text-brand-red hover:bg-white/90 transition-colors"
                >
                  Contattaci
                </Link>

                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] rounded-md px-5 py-3 text-sm font-semibold tracking-wide border border-white text-white hover:bg-white hover:text-brand-red transition-colors"
                >
                  Corsi e Attività
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-brand-red">
      <PhotoHeroBand className="-mt-[var(--nav-h)]" image="palestra7.webp" />

      <div className="space-y-0 sm:space-y-8 lg:space-y-10 sm:pt-10 lg:pt-12">
        <WhiteBlock>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-12">
              <div className="lg:items-center">
                {/* COLONNA SINISTRA: TESTO */}
                <div>
                  <p className="section-title text-brand-red">La nostra storia</p>

                  <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl mt-2">
                    Dal 2018 la tua palestra a Fonte Nuova.
                  </h2>

                  {/* Immagine MOBILE - dopo il titolo */}
                  <div className="mt-6 lg:hidden">
                    <div className="relative overflow-hidden rounded-xl shadow-soft h-[250px] sm:h-[300px]">
                      <img
                        src={toPublicSrc("palestra1.webp")}
                        alt="Red Gym Fonte Nuova"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  </div>

                  <p className="mt-4 text-black/70 leading-relaxed">
                    Red Gym nasce nel 2018 con un'idea semplice: creare uno spazio ordinato,
                    completo e concreto dove allenarsi bene ogni giorno, con la
                    tranquillità di avere ambienti curati e supporto costante.
                    <br />
                    In questi
                    anni la palestra è cresciuta, ma l'obiettivo è rimasto lo stesso:
                    qualità, metodo e costanza, diventando il punto di riferimento per il fitness a Fonte Nuova.
                  </p>
                </div>
              </div>



              {/* IFRAME - solo MOBILE */}
              <div className="lg:hidden mt-6">
                <div className="relative overflow-hidden rounded-xl shadow-soft h-[280px] sm:h-[350px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1772036816336!6m8!1m7!1s647rvD25mgsqmeDhXUMgoQ!2m2!1d42.00111503796409!2d12.66803763518375!3f337.2800964449892!4f6.287296922872244!5f0.7820865974627469"
                    className="block w-full h-full max-w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                </div>
                {/* DIDASCALIA - solo MOBILE */}
                <p className="mt-4 lg:hidden text-center text-sm sm:text-base text-black/60 italic leading-relaxed">
                  La palestra si trova all'interno del complesso del{" "}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Centro+Commerciale+La+Fonte+Fonte+Nuova+Roma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-red hover:underline"
                  >
                    Centro Commerciale La Fonte
                  </a>
                  , un punto strategico a Fonte Nuova (Roma) con ampio parcheggio dedicato per i nostri soci.
                </p>
              </div>

              {/* IMMAGINE PALESTRA1 FULL-WIDTH - solo DESKTOP */}
              <div className="hidden lg:block mt-10">
                <div className="relative overflow-hidden rounded-xl shadow-soft h-[400px]">
                  <img
                    src={toPublicSrc("palestra1.webp")}
                    alt="Red Gym Fonte Nuova"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
              <div className="mt-10 sm:rounded-xl sm:border sm:border-brand-gray200 sm:bg-brand-offwhite sm:p-8 lg:p-12">
                <p className="section-title text-brand-red">Il team di red gym</p>

                <h3 className="font-heading uppercase tracking-wide text-2xl mt-2">
                  -
                </h3>

                <p className="mt-4 text-black/70 leading-relaxed max-w-3xl">
                  -
                </p>

                {/* FOUNDERS - object-contain per vedere tutta la figura */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="flex flex-col">
                    <div className="relative overflow-hidden rounded-xl shadow-soft h-[400px] sm:h-[350px] lg:h-[400px] bg-brand-offwhite">
                      <Image
                        src={toPublicSrc("founder.jpg")}
                        alt="Donato Domenicone - Fondatore Red Gym"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="mt-4">
                      <h4 className="font-heading uppercase tracking-wide text-xl text-brand-black">Donato Domenicone</h4>
                      <p className="text-xs uppercase tracking-widest text-brand-red font-bold mt-1">Fondatore e Titolare di Red Gym</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="relative overflow-hidden rounded-xl shadow-soft h-[400px] sm:h-[350px] lg:h-[400px] bg-brand-offwhite">
                      <Image
                        src={toPublicSrc("VITO.webp")}
                        alt="Vito Lettieri - Direttore Red Gym"
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="mt-4">
                      <h4 className="font-heading uppercase tracking-wide text-xl text-brand-black">Vito Lettieri</h4>
                      <p className="text-xs uppercase tracking-widest text-brand-red font-bold mt-1">Direttore Red Gym</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </WhiteBlock>

        <StatsBand />

        <WhiteBlock>
          <div className="flex flex-col gap-2">
            <p className="section-title text-brand-red">Gli ambienti</p>
            <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl">
              Spazi grandi, curati, pensati per allenarti bene.
            </h2>
            <p className="mt-2 text-black/70 leading-relaxed max-w-3xl">
              Red Gym è organizzata per farti vivere l'allenamento con qualità:
              aree dedicate, attrezzatura selezionata per sicurezza e comfort, e
              un ambiente ordinato e motivante.
              <br />
              Allenarsi "nel modo giusto" fa la
              differenza.
            </p>
          </div>

          <div className="mt-10 space-y-8 sm:space-y-8">
            {/* SALA PESI */}
            <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 sm:p-8 lg:p-10">
              <p className="section-title text-brand-red text-sm">La Palestra</p>
              <h3 className="font-heading uppercase tracking-wide text-2xl sm:text-3xl mt-2">
                Sala Pesi
              </h3>

              {/* SLIDESHOW MOBILE - 5 immagini */}
              <div className="mt-6">
                <GymRoomSlideshow
                  images={["palestra1.webp", "palestra2.webp", "palestra3.webp", "palestra4.webp", "palestra5.webp"]}
                  title="Sala Pesi"
                />
              </div>

              {/* GRID 2 FOTO DESKTOP */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 mt-6">
                <div className="relative overflow-hidden rounded-xl  h-[300px] shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={toPublicSrc("palestra2.webp")}
                    alt="Sala Pesi Red Gym"
                    className="absolute inset-0 h-full w-full object-cover "
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-soft h-[300px] shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={toPublicSrc("palestra3.webp")}
                    alt="Sala Pesi Red Gym"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>

              <p className="mt-6 text-black/70 leading-relaxed">
                La sala pesi è ideale per chi desidera rimettersi in forma e migliorare le proprie performance sportive, all'interno troverete un'ampia gamma di macchine Panatta.
              </p>
            </div>

            {/* SALA OLICROM */}
            <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 sm:p-8 lg:p-10">
              <p className="section-title text-brand-red text-sm">La Palestra</p>
              <h3 className="font-heading uppercase tracking-wide text-2xl sm:text-3xl mt-2">
                Sala Olicrom
              </h3>

              {/* SLIDESHOW MOBILE - 3 immagini */}
              <div className="mt-6">
                <GymRoomSlideshow
                  images={["sala-olicrom.webp", "palestra6.webp", "palestra7.webp"]}
                  title="Sala Olicrom"
                />
              </div>

              {/* GRID 2 FOTO DESKTOP */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 mt-6">
                <div className="relative overflow-hidden rounded-xl shadow-soft h-[300px] shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={toPublicSrc("sala-olicrom.webp")}
                    alt="Sala Olicrom Red Gym"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-soft h-[300px] shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={toPublicSrc("palestra7.webp")}
                    alt="Sala Olicrom Red Gym"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>

              <p className="mt-6 text-black/70 leading-relaxed">
                La sala Olicrom è una novità assoluta, puoi allenarti e ottenere risultati importanti, con le macchine della linea CableQuad e TwinStrength.
              </p>
            </div>

            {/* ISTRUTTORI SALA PESI/OLICROM */}
            <div className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:bg-brand-offwhite sm:p-8 lg:p-12 2xl:p-32">
              <p className="section-title text-brand-red text-center mb-8">Gli istruttori di sala pesi/Olicrom</p>

              {/* SLIDESHOW MOBILE - 7 trainer */}
              <SalaPesiTrainersSlideshow />

              {/* GRID DESKTOP */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { name: "DANIELE", image: "DANIELE.jpeg" },
                    { name: "EMANUELE", image: "EMANUELE.jpeg" },
                    { name: "ROBERTO", image: "ROBERTO.jpeg" },
                    { name: "EUGENIA", image: "EUGENIA.jpeg" },
                  ].map((t) => (
                    <div key={t.name} className="flex flex-col items-center">
                      <div className="relative w-full aspect-[3/4] rounded-none sm:rounded-lg overflow-hidden bg-white border-y sm:border border-brand-gray200 shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <Image
                          src={toPublicSrc(t.image)}
                          alt={t.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <p className="my-3 font-heading uppercase tracking-wide text-center text-xs sm:text-sm text-brand-black">
                        {t.name}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6 max-w-4xl mx-auto">
                  {[
                    { name: "GARY", image: "GARY.jpeg" },
                    { name: "JACOPO", image: "JACOPO.jpeg" },
                    { name: "LUIGI", image: "LUIGI.jpeg" },
                  ].map((t) => (
                    <div key={t.name} className="flex flex-col items-center">
                      <div className="relative w-full aspect-[3/4] rounded-none sm:rounded-lg overflow-hidden bg-white border-y sm:border border-brand-gray200 shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <Image
                          src={toPublicSrc(t.image)}
                          alt={t.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <p className="my-3 font-heading uppercase tracking-wide text-center text-xs sm:text-sm text-brand-black">
                        {t.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SALA FUNZIONALE */}
            <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 sm:p-8 lg:p-10">
              <p className="section-title text-brand-red text-sm">La Palestra</p>
              <h3 className="font-heading uppercase tracking-wide text-2xl sm:text-3xl mt-2">
                Sala Funzionale
              </h3>

              {/* SLIDESHOW MOBILE - 2 immagini */}
              <div className="mt-6">
                <GymRoomSlideshow
                  images={["sala-funzionale.webp", "sala-funzionale2.webp"]}
                  title="Sala Funzionale"
                />
              </div>

              {/* GRID 2 FOTO DESKTOP */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 mt-6">
                <div className="relative overflow-hidden rounded-xl shadow-soft h-[300px] shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={toPublicSrc("sala-funzionale.webp")}
                    alt="Sala Funzionale Red Gym"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-soft h-[300px] shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={toPublicSrc("sala-funzionale2.webp")}
                    alt="Sala Funzionale Red Gym"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>

              <p className="mt-6 text-black/70 leading-relaxed">
                Nella sala funzionale troverai tutte le attrezzature per diversi tipi di allenamenti specifici, utilizzando esercizi basati sui movimenti naturali del corpo per migliorare forza, coordinazione, equilibrio e stabilità.
              </p>
            </div>

            {/* SALA ARTI MARZIALI */}
            <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 sm:p-8 lg:p-10">
              <p className="section-title text-brand-red text-sm">La Palestra</p>
              <h3 className="font-heading uppercase tracking-wide text-2xl sm:text-3xl mt-2">
                Sala Arti Marziali
              </h3>

              {/* SLIDESHOW MOBILE - 2 immagini */}
              <div className="mt-6">
                <GymRoomSlideshow
                  images={["sala-arti-marziali.webp", "sala-arti-marziali2.webp"]}
                  title="Sala Arti Marziali"
                />
              </div>

              {/* GRID 2 FOTO DESKTOP */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 mt-6">
                <div className="relative overflow-hidden rounded-xl shadow-soft h-[300px] shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={toPublicSrc("sala-arti-marziali.webp")}
                    alt="Sala Arti Marziali Red Gym"
                    className="absolute inset-0 h-full w-full object-cover 2xl:object-top"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-soft h-[300px] shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={toPublicSrc("sala-arti-marziali2.webp")}
                    alt="Sala Arti Marziali Red Gym"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>

              <p className="mt-6 text-black/70 leading-relaxed">
                L'ampia sala di arti marziali è dotata di tatami, ideale per le diverse discipline presenti all'interno dei corsi.
              </p>
            </div>
          </div>

          {/* CTA FINALE */}
          <div className="space-y-3 text-center mt-10">
            <h2 className="font-heading uppercase tracking-wide text-2xl sm:text-3xl">
              SCOPRI TUTTI I CORSI E LE ATTIVITÀ.
            </h2>
            <p className="mt-2 text-black/70 leading-relaxed text-center">
              Scopri tutti i corsi, le attività e gli altri istruttori nella pagina dedicata.
            </p>
            <Button href="/courses">Vai ai corsi</Button>
          </div>
        </WhiteBlock>

        <DiagonalBand image="pilates.webp" />

        <WhiteBlock>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="section-title text-brand-red">Accoglienza & Professionalità</p>
            <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl mt-2">Alla Red Gym ti senti a casa</h2>
            <p className="mt-4 text-black/70 leading-relaxed">
              Per noi l'accoglienza non è un dettaglio, è il primo passo del tuo percorso.
              <br />
              Gaia ed Eleonora ti accolgono con professionalità e attenzione, pronte ad ascoltare le tue esigenze e a guidarti fin dal primo ingresso.
            </p>
          </div>

          {/* SEGRETERIA - object-contain, più piccole e basse */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
            <div className="flex flex-col items-center sm:items-stretch">
              <div className="w-4/5 max-w-[280px] sm:w-full sm:max-w-none lg:max-w-[280px]">
                <div className="relative rounded-xl overflow-hidden bg-white border border-brand-gray200 shadow-soft h-[350px] sm:h-[320px] lg:h-[340px] 2xl:h-[420px]">
                  <Image
                    src={toPublicSrc("GAIA.jpeg")}
                    alt="Gaia - Reception Red Gym"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                </div>

                <div className="my-4 mx-4 text-left">
                  <h4 className="font-heading uppercase tracking-wide text-xl text-brand-black">
                    Gaia
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-brand-red font-bold mt-1">
                    Segreteria
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center px-6 text-center italic text-black/60 border-x border-brand-gray200 self-center">
              <p className="text-base leading-relaxed">
                "Che tu venga per informarti, iniziare un nuovo allenamento o semplicemente chiedere un consiglio, troverai sempre un sorriso e una presenza disponibile. <br />
                Per noi sentirsi a proprio agio è fondamentale quanto allenarsi bene."
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-stretch">
              <div className="w-4/5 max-w-[280px] sm:w-full sm:max-w-none lg:max-w-[280px] ">
                <div className="relative rounded-xl overflow-hidden bg-white border border-brand-gray200 shadow-soft h-[350px] sm:h-[320px] lg:h-[340px] 2xl:h-[420px]">
                  <Image
                    src={toPublicSrc("ELEONORA.jpeg")}
                    alt="Eleonora - Reception Red Gym"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                </div>

                <div className="my-4 mx-4 text-left">
                  <h4 className="font-heading uppercase tracking-wide text-xl text-brand-black">
                    Eleonora
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-brand-red font-bold mt-1">
                    Segreteria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </WhiteBlock>

        <FinalCtaHero image="/palestra3.webp" />
      </div>
    </div>
  );
}