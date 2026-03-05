"use client";

import { useState, useEffect, useRef } from "react";
import MapEmbed from "@/components/GoogleMap";
import SafeguardingModal from "@/components/SafeguardingModal";
import StatsCounterBand from "@/components/StatsCounterBand";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

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

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div>
            {kicker ? (
              <p className="section-title text-white/85">{kicker}</p>
            ) : null}

            {title ? (
              <h1 className="font-heading uppercase tracking-wide text-white mt-2 leading-tight text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
                {title}
              </h1>
            ) : null}

            {subtitle ? (
              <p className="mt-4 text-white/85 max-w-2xl leading-relaxed text-sm sm:text-lg lg:text-xl">
                {subtitle}
              </p>
            ) : null}

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button href="/courses" className="hero-button">I nostri corsi</Button>
              <Button href="/about" variant="white" className="hero-button">
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
      <div className="sm:hidden bg-white py-8 px-4">
        {children}
      </div>
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
    <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 lg:shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 lg:hover:shadow-xl">
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

function TrainersSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const trainers = [
    { image: "ADRIANO.jpeg", name: "Adriano Sperandio", bio: "Istruttore Allenamento Funzionale e Prepugilistica" },
    { image: "ALEX.jpeg", name: "Alex", bio: "Istruttore Funzionale/TacFit" },
    { image: "MORENA.jpeg", name: "Morena", bio: "Istruttrice Ginnastica per la Salute" },
    { image: "CLAUDIA.jpeg", name: "Claudia", bio: "Istruttrice Yoga" },
    { image: "PAOLO.jpeg", name: "Paolo Sperandio", bio: "Maestro Boxe" },
    { image: "MASSIMO.jpeg", name: "Massimo Montecchiani", bio: "Maestro Karate" },
    { image: "BARBARA.jpeg", name: "Barbara Montecchiani", bio: "Maestra Karate" },
    { image: "MICHELA.jpeg", name: "Michela Muccioli", bio: "Maestra Judo" },
    { image: "VITTORIA.jpeg", name: "Vittorina Di Vincenzo", bio: "Maestra Judo" },
    { image: "NATALINO.jpeg", name: "Anton Ioan Catalin", bio: "Maestro Kickboxing" },
    { image: "ASTERIO.jpeg", name: "Asterio Lucchesini", bio: "Maestro MMA/Grappling" },
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
    <div className="lg:hidden mt-6">
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
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <img
                  src={toPublicSrc(trainer.image)}
                  alt={trainer.name}
                  className="absolute inset-0 h-full w-full object-contain object-center bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="font-heading uppercase tracking-wide text-white text-2xl text-center">
                    {trainer.name}
                  </h4>
                  <p className="text-white/90 text-sm text-center mt-2 font-semibold">
                    {trainer.bio}
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
              aria-label={`Vai allo slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

function CoursesSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    { image: "tacfit.webp", title: "Allenamento Funzionale & TacFit" },
    { image: "pilates.jpg", title: "Ginnastica per la Salute & Yoga" },
    { image: "boxe.png", title: "Boxe • Kickboxing • Prepugilistica" },
    { image: "judo-hero.webp", title: "MMA • Karate • Judo" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    if (touchStartX.current - touchEndX.current < -50) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div className="lg:hidden mt-8">
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
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full">
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <img
                  src={toPublicSrc(slide.image)}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="font-heading uppercase tracking-wide text-white text-2xl text-center">
                    {slide.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
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

function SalaPesiTrainersCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    }, 3000);
    return () => clearInterval(timer);
  }, [trainers.length]);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-soft h-full bg-white flex flex-col">
      {trainers.map((trainer, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex flex-col transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Immagine - occupa il 65% dell'altezza */}
          <div className="h-[65%] flex items-center justify-center p-4 bg-white">
            <img
              src={toPublicSrc(trainer.image)}
              alt={trainer.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Didascalia - occupa il 35% dell'altezza */}
          <div className="h-[35%] bg-brand-offwhite flex flex-col items-center justify-center p-4">
            <p className="font-heading uppercase tracking-wide text-brand-black text-lg">
              {trainer.name}
            </p>
            <p className="text-brand-red text-xs font-semibold mt-1">
              Istruttore Sala Pesi
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function OtherTrainersCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const trainers = [
    { image: "ADRIANO.jpeg", name: "Adriano Sperandio", role: "Istruttore Funzionale e Prepugilistica" },
    { image: "ALEX.jpeg", name: "Alex", role: "Istruttore Funzionale/TacFit" },
    { image: "MORENA.jpeg", name: "Morena", role: "Istruttrice Ginnastica per la Salute" },
    { image: "CLAUDIA.jpeg", name: "Claudia", role: "Istruttrice Yoga" },
    { image: "PAOLO.jpeg", name: "Paolo Sperandio", role: "Maestro Boxe" },
    { image: "MASSIMO.jpeg", name: "Massimo Montecchiani", role: "Maestro Karate" },
    { image: "BARBARA.jpeg", name: "Barbara Montecchiani", role: "Maestra Karate" },
    { image: "MICHELA.jpeg", name: "Michela Muccioli", role: "Maestra Judo" },
    { image: "VITTORIA.jpeg", name: "Vittorina Di Vincenzo", role: "Maestra Judo" },
    { image: "NATALINO.jpeg", name: "Anton Ioan Catalin", role: "Maestro Kickboxing" },
    { image: "ASTERIO.jpeg", name: "Asterio Lucchesini", role: "Maestro MMA/Grappling" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trainers.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [trainers.length]);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-soft h-full bg-white flex flex-col">
      {trainers.map((trainer, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex flex-col transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Immagine - occupa il 65% dell'altezza */}
          <div className="h-[65%] flex items-center justify-center p-4 bg-white">
            <img
              src={toPublicSrc(trainer.image)}
              alt={trainer.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Didascalia - occupa il 35% dell'altezza */}
          <div className="h-[35%] bg-brand-offwhite flex flex-col items-center justify-center p-4">
            <p className="font-heading uppercase tracking-wide text-brand-black text-lg">
              {trainer.name}
            </p>
            <p className="text-brand-red text-xs font-semibold mt-1">
              {trainer.role}
            </p>
          </div>
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
        <img src={toPublicSrc(image)} alt={title} className="h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-black/55" />
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
              className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide bg-white text-brand-red hover:bg-white/90 transition-colors"
            >
              Chiedi info
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
        <div className="hidden sm:block absolute inset-0">
          <img src={toPublicSrc(image)} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="sm:hidden absolute inset-0">
          <img src={toPublicSrc(image)} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {showSafeguarding && (
          <div className="absolute inset-0 flex items-center">
            <div className={[SHELL, "px-4 sm:px-6 lg:px-8"].join(" ")}>
              <div className="max-w-3xl backdrop-blur-sm rounded-xl px-4 py-4 sm:px-8 sm:py-7 sm:mt-6">
                <p className="section-title text-white/80 tracking-widest">SAFEGUARDING</p>
                <h3 className="mt-2 font-heading uppercase tracking-wide text-white text-2xl sm:text-3xl lg:text-4xl leading-tight">
                  Tutela, rispetto e sicurezza
                </h3>
                <p className="mt-4 text-white/90 leading-relaxed text-sm sm:text-base lg:text-lg">
                  Red Gym promuove un ambiente sicuro, inclusivo e rispettoso per tutti. Per segnalazioni o richieste di chiarimento, è possibile consultare l'informativa sul{" "}
                  <button
                    type="button"
                    onClick={onOpenSafeguarding}
                    className="font-semibold underline underline-offset-4 hover:text-white"
                  >
                    SAFEGUARDING
                  </button>{" "}
                  oppure contattare il responsabile all'indirizzo{" "}
                  <a href={`mailto:${safeguardingEmail}`} className="font-semibold hover:text-white">
                    {safeguardingEmail}
                  </a>.
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
          <div className="flex justify-center mb-3">
            <img src={toPublicSrc("logo-negativo.png")} alt="Red Gym" className="h-12 sm:h-14 lg:h-16 w-auto" />
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
        <div className="space-y-0 sm:space-y-8 lg:space-y-10 pb-0 sm:pt-10 lg:pt-12">
          <WhiteSection id="home-about">
            <SectionHead kicker="La palestra" title="Perchè scegliere Red Gym?" />

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
                Red Gym è una palestra a Fonte Nuova (RM) con oltre 1.800 mq dedicati al fitness e agli sport da combattimento. Offriamo sale attrezzate con macchinari professionali, aree specifiche per boxe e arti marziali e un ambiente ordinato, motivante e seguito da istruttori qualificati.
                <br />
                La nostra struttura è pensata per chi cerca qualità, spazio e un allenamento efficace a Fonte Nuova.
              </p>
            </div>

            <div className="mt-10">
              <div className="grid gap-4 sm:gap-10 lg:grid-cols-2">
                {/* COLONNA SINISTRA: 4 Card con rows uguali */}
                <div className="space-y-12 sm:space-y-10 lg:space-y-0 lg:grid lg:grid-rows-4 lg:gap-10 lg:auto-rows-fr">
                  {/* 1. Macchinari */}
                  <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 lg:shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 lg:hover:shadow-xl">
                    <p className="section-title text-brand-red">La Struttura</p>
                    <h3 className="font-heading uppercase tracking-wide text-xl sm:text-2xl mt-2">
                      Attrezzature e Spazi per ogni tipo di attività
                    </h3>

                    <div className="mt-6 lg:hidden relative h-[360px]">
                      {/* TOP (dopo) */}
                      <div className="absolute top-0 left-0 w-[55%] z-10">
                        <Reveal delay={0.5}>
                          <div className="relative overflow-hidden rounded-xl shadow-lg h-[320px]">
                            <img
                              src={toPublicSrc("palestra3.webp")}
                              alt="Sala Pesi Red Gym"
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                          </div>
                        </Reveal>
                      </div>

                      {/* BOTTOM (prima) */}
                      <div className="absolute bottom-0 right-0 w-[55%]">
                        <Reveal delay={0}>
                          <div className="relative overflow-hidden rounded-xl shadow-lg h-[320px]">
                            <img
                              src={toPublicSrc("sala-funzionale.webp")}
                              alt="Sala Funzionale Red Gym"
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                          </div>
                        </Reveal>
                      </div>
                    </div>

                    <p className="mt-5 sm:mt-3 text-black/70 leading-relaxed text-sm sm:text-[14px]">
                      Sala pesi, Olicrom, funzionale e arti marziali: Red Gym offre spazi ampi attrezzati con macchinari professionali per garantire un allenamento efficace e confortevole.
                      <br />
                      Che tu voglia potenziare forza e resistenza, praticare dicipline dedicate al benessere o sport da combattimento, qui trovi tutto ciò di cui hai bisogno.
                    </p>
                    <div className="mt-6">
                      <Button href="/about#palestra">Scopri la palestra</Button>
                    </div>
                  </div>

                  {/* 2. Benessere */}
                  <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 lg:shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 lg:hover:shadow-xl">
                    <p className="section-title text-brand-red">Sport & Benessere</p>
                    <h3 className="font-heading uppercase tracking-wide text-xl sm:text-2xl mt-2">
                      Mente e Corpo in Equilibrio
                    </h3>

                    <div className="mt-6 lg:hidden relative h-[360px]">
                      {/* TOP (appare dopo) */}
                      <div className="absolute top-0 left-0 w-[55%] z-10">
                        <Reveal delay={0.5}>
                          <div className="relative overflow-hidden rounded-xl shadow-lg h-[320px]">
                            <img
                              src={toPublicSrc("yoga.webp")}
                              alt="Yoga Red Gym"
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                          </div>
                        </Reveal>
                      </div>

                      {/* BOTTOM (appare prima) */}
                      <div className="absolute bottom-0 right-0 w-[55%]">
                        <Reveal delay={0}>
                          <div className="relative overflow-hidden rounded-xl shadow-lg h-[320px]">
                            <img
                              src={toPublicSrc("judo-hero.webp")}
                              alt="Judo Red Gym"
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                          </div>
                        </Reveal>
                      </div>
                    </div>

                    <p className="mt-5 sm:mt-3 text-black/70 leading-relaxed text-sm sm:text-[14px]">
                      Red Gym offre un’ampia varietà di corsi e attività pensate per ogni livello ed esigenza: dalle discipline dedicate al benessere, come yoga e ginnastica posturale, all’allenamento funzionale, TACFIT e prepugilistica. Per gli appassionati degli sport da combattimento sono inoltre disponibili corsi di boxe, kickboxing, MMA e arti marziali.
                    </p>
                    <div className="mt-6">
                      <Button href="/courses">I nostri corsi</Button>
                    </div>
                  </div>

                  {/* 3. Trainer */}
                  <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 lg:shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 lg:hover:shadow-xl">
                    <p className="section-title text-brand-red">Il Team</p>
                    <h3 className="font-heading uppercase tracking-wide text-xl sm:text-2xl mt-2">
                      Istruttori Qualificati e Appassionati
                    </h3>

                    <TrainersSlideshow />

                    <p className="mt-5 sm:mt-3 text-black/70 leading-relaxed text-sm sm:text-[14px]">
                      Ogni corso è seguito da istruttori certificati, con anni di esperienza e la passione per quello che fanno.
                      <br />
                      Non troverai solo tecnici preparati, ma guide attente che ti aiutano a crescere con metodo, sicurezza e motivazione costante.
                    </p>
                    <div className="mt-6">
                      <Button href="/courses">Conosci il team</Button>
                    </div>
                  </div>

                  {/* 4. Community */}
                  <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 lg:shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 lg:hover:shadow-xl">
                    <p className="section-title text-brand-red">Community</p>
                    <h3 className="font-heading uppercase tracking-wide text-xl sm:text-2xl mt-2">
                      Un Ambiente Accogliente e Motivante
                    </h3>

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

                    <p className="mt-5 sm:mt-3 text-black/70 leading-relaxed text-sm sm:text-[14px]">
                      Qui alla Red Gym non sei mai 'lasciato solo': trovi un ambiente serio, accogliente e pieno di energia positiva.
                      <br />
                      Contattaci ed entra a far parte della community!
                    </p>
                    <div className="mt-6">
                      <Button href="/contact">Contattaci</Button>
                    </div>
                  </div>
                </div>

                {/* COLONNA DESTRA: ImageGrid con rows uguali - SOLO DESKTOP */}
                <div className="hidden lg:grid lg:grid-rows-4 lg:gap-10 lg:auto-rows-fr">
                  {/* Riga 1: Grid 2x2 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative overflow-hidden rounded-xl shadow-soft h-full">
                      <img
                        src={toPublicSrc("palestra3.webp")}
                        alt="Sala Pesi Red Gym"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-soft h-full">
                      <img
                        src={toPublicSrc("sala-funzionale.webp")}
                        alt="Sala Funzionale Red Gym"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  </div>

                  {/* Riga 2: Grid 2x2 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative overflow-hidden rounded-xl shadow-soft h-full">
                      <img
                        src={toPublicSrc("yoga.webp")}
                        alt="Yoga Red Gym"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-soft h-full">
                      <img
                        src={toPublicSrc("judo-hero.webp")}
                        alt="Judo Red Gym"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  </div>

                  {/* Riga 3: Grid 2x2 - Slideshow Trainer */}
                  <div className="grid grid-cols-2 gap-4">
                    <SalaPesiTrainersCarousel />
                    <OtherTrainersCarousel />
                  </div>

                  {/* Riga 4: Immagine singola */}
                  <div className="relative overflow-hidden rounded-xl shadow-soft h-full">
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
              lead="Che tu sia all'inizio o già ad un livello avanzato, trovi corsi con guide competenti e progressioni chiare: allenamento funzionale e TACFIT, ginnastica posturale e yoga, boxe/kickboxing/prepugilistica, MMA, karate e judo."
            />

            {/* SLIDESHOW - SOLO MOBILE */}
            <CoursesSlideshow />

            {/* GRID 2x2 - SOLO DESKTOP CON ALTEZZE UNIFORMI */}
            <div className="hidden lg:block mt-10">
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Card 1 */}
                <div className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 sm:bg-white flex flex-col shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="font-heading uppercase tracking-wide text-lg lg:text-xl">
                    Allenamento Funzionale • TacFit • Prepugilistica
                  </p>
                  <div className="mt-4 relative overflow-hidden rounded-xl shadow-soft h-[200px]">
                    <img
                      src={toPublicSrc("funzionale.webp")}
                      alt="Funzionale Red Gym"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <p className="mt-4 text-sm text-black/70 leading-relaxed flex-grow">
                    Forza, mobilità e condizionamento.
                    <br />
                    Allenamenti dinamici e ad alta intensità per migliorare performance, resistenza e controllo del corpo.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 sm:bg-white flex flex-col shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="font-heading uppercase tracking-wide text-lg lg:text-xl">
                    Ginnastica per la Salute & Yoga
                  </p>
                  <div className="mt-4 relative overflow-hidden rounded-xl shadow-soft h-[200px]">
                    <img
                      src={toPublicSrc("pilates.jpg")}
                      alt="Pilates Red Gym"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <p className="mt-4 text-sm text-black/70 leading-relaxed flex-grow">
                    Benessere, equilibrio e consapevolezza.
                    <br />
                    Discipline che lavorano su postura, respirazione e flessibilità per ritrovare armonia tra mente e corpo.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 sm:bg-white flex flex-col shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="font-heading uppercase tracking-wide text-lg lg:text-xl">
                    Boxe & Kickboxing
                  </p>
                  <div className="mt-4 relative overflow-hidden rounded-xl shadow-soft h-[200px]">
                    <img
                      src={toPublicSrc("boxe1.webp")}
                      alt="Boxe Red Gym"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <p className="mt-4 text-sm text-black/70 leading-relaxed flex-grow">
                    Colpi, tecnica e strategia.
                    <br />
                    Sport da ring che sviluppano potenza, velocità e concentrazione, costruendo fiducia e disciplina dentro e fuori dalla palestra.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 sm:bg-white flex flex-col shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="font-heading uppercase tracking-wide text-lg lg:text-xl">
                    MMA • Karate • Judo
                  </p>
                  <div className="mt-4 relative overflow-hidden rounded-xl shadow-soft h-[200px]">
                    <img
                      src={toPublicSrc("judo-hero.webp")}
                      alt="Arti Marziali Red Gym"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <p className="mt-4 text-sm text-black/70 leading-relaxed flex-grow">
                    Arti marziali che formano atleti completi.
                    <br />
                    Tecnica, rispetto e determinazione in percorsi che uniscono tradizione, combattimento e crescita personale.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/courses">Vai ai corsi</Button>
              <Button href="/contact" variant="outline">
                Chiedi info
              </Button>
            </div>
          </WhiteSection>

          <DiagonalBand image="palestra1.webp" title="Energia. Disciplina. Risultati." flip />

          <WhiteSection id="home-pricing">
            <SectionHead
              kicker="Abbonamenti"
              title="Scegli la formula giusta."
              lead="Pacchetti flessibili e convenienti, pensati per ogni esigenza: accesso alla sala pesi, corsi, sconti dedicati e promozioni per chi vuole allenarsi con noi a lungo termine."
            />

            <div className="mt-8 lg:mt-10 grid gap-10 lg:grid-cols-3 lg:gap-6">
              <Card
                kicker="Sala Pesi & Fitness"
                title="Entra e allenati"
                text="Accesso alla sala pesi con fasce orarie flessibili. Scegli l'orario che fa per te da 1 mese fino all'annuale, con sconti dedicati."
                href="/pricing#pesi"
                ctaLabel="Vedi gli abbonamenti"
              />
              <Card
                kicker="Corsi & Discipline"
                title="Boxe, Judo, Karate e altro"
                text="Pacchetti mensili dedicati per ogni disciplina. Già socio? Aggiungi un corso a soli 40€."
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

          <SafeguardingModal open={openSafeguarding} onClose={() => setOpenSafeguarding(false)} />

          <WhiteSection id="home-contact">
            <SectionHead
              kicker="Contatti"
              title="Scrivici o passa in sede."
              lead="Per info su corsi, orari e abbonamenti puoi contattarci: ti rispondiamo e ti aiutiamo a scegliere il percorso più adatto."
            />

            <div className="mt-8 lg:mt-10 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-6 space-y-6">
                <div className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:p-6 lg:p-7 sm:bg-white lg:shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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
                {/* COLONNA DESTRA: IFRAME - solo DESKTOP */}
                <div className="hidden lg:block mt-8 lg:mt-0">
                  <div className="relative overflow-hidden rounded-xl shadow-soft h-[360px]">
                    <MapEmbed
                      src="https://www.google.com/maps/embed?pb=!4v1772036816336!6m8!1m7!1s647rvD25mgsqmeDhXUMgoQ!2m2!1d42.00111503796409!2d12.66803763518375!3f337.2800964449892!4f6.287296922872244!5f0.7820865974627469"
                      className="block w-full h-full max-w-full pointer-events-auto"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <p className="mt-4 text-center text-sm text-black/60 italic leading-relaxed">
                    La palestra si trova all'interno del complesso del{" "}
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Centro+Commerciale+La+Fonte+Fonte+Nuova+Roma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-red hover:underline"
                    >
                      Centro Commerciale La Fonte
                    </a> a Fonte Nuova (Roma), con ampio parcheggio dedicato per i nostri soci.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 sm:rounded-xl overflow-hidden sm:border sm:border-brand-gray200 sm:bg-white lg:shadow-soft overflow-hidden 
transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="p-6 sm:p-7">
                  <p className="font-heading uppercase tracking-wide text-lg">Red Gym – Fonte Nuova</p>
                  <p className="mt-2 text-sm text-black/70">
                    Vieni a trovarci in sede: ampio parcheggio e spazi grandi per allenarti con calma, metodo e supporto reale.
                  </p>
                </div>
                <div className="relative h-[360px] sm:h-[420px] lg:h-[460px]">
                  <MapEmbed
                    title="Google Maps - Red Gym"
                    className="absolute inset-0 h-full w-full pointer-events-auto"
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