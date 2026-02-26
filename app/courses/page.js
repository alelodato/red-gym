"use client";

import { useEffect } from "react";
import Button from "@/components/Button";

function toPublicSrc(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
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

function TripleDiagonalBand({
  images = ["yoga.jpg", "judo-hero.jpg", "kick-hero.jpg"],
  mobileImage = "judo-hero.jpg",
  kicker = "Red Gym",
  title = "Scegli il tuo percorso.",
  subtitle = "Ogni corso ha un metodo, una guida e un obiettivo.",
  className = "",
}) {
  return (
    <section className={`relative bg-brand-red overflow-hidden ${className}`}>
      {/* HERO: stessa altezza delle altre pagine */}
      <div className="relative h-[600px] sm:h-[620px] lg:h-[720px]">
        {/* MOBILE: 1 immagine (judo-hero) */}
        <div className="absolute inset-0 sm:hidden">
          <img
            src={toPublicSrc(mobileImage)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        {/* DESKTOP/TABLET: 3 immagini */}
        <div className="absolute inset-0 hidden sm:grid sm:grid-cols-3">
          {images.slice(0, 3).map((src, idx) => (
            <div key={src + idx} className="relative">
              <img
                src={toPublicSrc(src)}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Overlay (stesso identico della Hero standard) */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
      </div>

      {/* Contenuto: identico alla Hero standard */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div>
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
              <Button href="/contact">Chiedi maggiori info</Button>
              <Button href="/pricing" variant="outline">
                I nostri piani e abbonamenti
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
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

const COURSES = [
  {
    id: "sala-pesi",
    title: "Sala Pesi & Fitness",
    subtitle: "Qualità, sicurezza e risultati concreti",
    image: "palestra5.webp",
    description:
      "Allenarsi bene significa fare le cose nel modo giusto. In sala pesi trovi spazi ampi e attrezzatura di ultima generazione selezionata per efficacia e comfort, con la possibilità di lavorare su forza, tonificazione e ricomposizione corporea.\n\nChe tu sia alle prime armi o voglia portare il livello più in alto, l'obiettivo è sempre lo stesso: progressione, tecnica corretta e continuità.",
    schedule: [
      { day: "Lun – Ven", time: "07:00 – 23:00" },
      { day: "Sabato", time: "08:00 – 18:00" },
      { day: "Domenica", time: "09:00 – 13:00" },
    ],
    trainers: [
      { name: "DANIELE", image: "DANIELE.jpeg", bio: "-" },
      { name: "EMANUELE", image: "EMANUELE.jpeg", bio: "-" },
      { name: "ROBERTO", image: "ROBERTO.jpeg", bio: "-" },
      { name: "EUGENIA", image: "EUGENIA.jpeg", bio: "-" },
      { name: "GARY", image: "GARY.jpeg", bio: "-" },
      { name: "JACOPO", image: "JACOPO.jpeg", bio: "-" },
      { name: "LUIGI", image: "LUIGI.jpeg", bio: "-" },
    ],
  },
  {
    id: "allenamento-funzionale",
    title: "Allenamento Funzionale & TacFit",
    subtitle: "Movimento naturale, forza e performance",
    image: "tacfit.webp",
    description:
      "L'allenamento funzionale si basa su movimenti naturali del corpo: spingere, tirare, sollevare, saltare e ruotare. È un metodo che migliora forza, mobilità, stabilità e resistenza in modo completo e integrato.\n\nSi lavora con pesi liberi, kettlebell, TRX, corpo libero e attrezzi specifici.\n\nTACFIT è una specializzazione dell'allenamento funzionale con focus tattico e ad alta intensità. Nato per preparare operatori militari e di sicurezza, combina mobilità, forza esplosiva e condizionamento cardiovascolare in protocolli strutturati e progressivi. Ideale per chi vuole portare il funzionale a un livello superiore.\n\nPerfetto per chi cerca un allenamento dinamico, vario e ad alta intensità, con focus su tecnica, sicurezza e progressione costante.",
    schedules: [
      {
        title: "Funzionale",
        schedule: [
          { day: "Lunedì", time: "10:00, 13:30, 18:00, 19:00, 20:00" },
          { day: "Mercoledì", time: "10:00, 13:30, 18:00, 19:00, 20:00" },
          { day: "Venerdì", time: "10:00, 13:30, 17:30, 18:30, 21:00" },
        ],
      },
      {
        title: "TACFIT",
        schedule: [
          { day: "Lunedì", time: "21:00" },
          { day: "Mercoledì", time: "21:00" },
        ],
      },
    ],
    trainers: [
      { name: "ALEX", image: "ALEX.jpeg", bio: "ISTRUTTORE FUNZIONALE/TAC FIT" },
      { name: "ADRIANO SPERANDIO", image: "ADRIANO.jpeg", bio: "ISTRUTTORE PREPUGILISTICA/FUNZIONALE" },
    ],
  },
  {
    id: "ginnastica-salute",
    title: "Ginnastica per la Salute",
    subtitle: "Postura, controllo, mobilità e benessere",
    image: "pilates.jpg",
    description:
      "Allenarsi non vuol dire sempre spingersi al limite: a volte vuol dire ascoltare il corpo e rimetterlo in equilibrio. La ginnastica per la salute aiuta a migliorare postura e controllo, aumentare mobilità e ridurre tensioni.\n\nÈ un percorso adatto a tutti e utile anche come integrazione alla sala pesi o agli sport da combattimento: più consapevolezza, più qualità di movimento.\n\nApproccio progressivo e accessibile: postura, respirazione e controllo, con attenzione ai dettagli.",
    schedule: [
      { day: "Lunedì", time: "09:00" },
      { day: "Martedì", time: "09:00" },
      { day: "Mercoledì", time: "09:00, 11:00" },
      { day: "Giovedì", time: "09:00" },
      { day: "Venerdì", time: "09:00, 11:00" },
      { day: "Sabato", time: "11:00" },
    ],
    trainers: [
      { name: "MORENA", image: "MORENA.jpeg", bio: "ISTRUTTRICE GINNASTICA PER LA SALUTE" },
    ],
  },
  {
    id: "yoga",
    title: "Yoga",
    subtitle: "Respiro, equilibrio e movimento consapevole",
    image: "yoga.jpg",
    description:
      "Lo yoga migliora postura e mobilità, scioglie le tensioni e favorisce un benessere mentale concreto. La pratica unisce respiro consapevole e movimento fluido, per rafforzare il corpo in modo armonico.\n\nÈ un'attività adatta a tutti: puoi iniziare anche se non hai mai praticato, e usarla per completare il tuo allenamento settimanale.",
    schedule: [
      { day: "Sabato", time: "11:00" },
    ],
    trainers: [{ name: "CLAUDIA", image: "CLAUDIA.jpeg", bio: "ISTRUTTRICE YOGA" }],
  },
  {
    id: "boxe",
    title: "Boxe & Prepugilistica",
    subtitle: "Tecnica, fiducia e autocontrollo",
    image: "boxe.png",
    description:
      "La boxe è uno degli sport più completi: migliora forza, resistenza, coordinazione e riflessi, ma soprattutto costruisce fiducia, autocontrollo e determinazione.\n\nIl percorso è guidato e strutturato: tecnica, lavoro al sacco, combinazioni e condizionamento. La prepugilistica è perfetta per chi vuole costruire basi solide (anche senza contatto) con metodo e disciplina.\n\nAllenamenti seri e progressivi: tecnica, timing e condizionamento, con attenzione alla sicurezza e alla crescita dell'allievo.",
    schedules: [

      {
        title: "Boxe",
        trainer: "Sperandio",
        schedule: [
          { day: "Martedì", time: "19:00" },
          { day: "Giovedì", time: "19:00" },
          { day: "Sabato", time: "19:30" },
        ],
      },
      {
        title: "Boxe Agonisti",
        trainer: "Sperandio",
        schedule: [
          { day: "Lunedì", time: "16:00" },
          { day: "Martedì", time: "16:00" },
          { day: "Mercoledì", time: "16:00" },
          { day: "Giovedì", time: "16:00" },
          { day: "Sabato", time: "16:00" },
        ],
      },
      {
        title: "Boxe Amatoriale Bambini",
        trainer: "Sperandio",
        schedule: [
          { day: "Martedì", time: "17:30" },
          { day: "Giovedì", time: "17:30" },
        ],
      },
      {
        title: "Prepugilistica",
        schedule: [
          { day: "Martedì", time: "10:00, 13:30" },
          { day: "Giovedì", time: "10:00, 13:30" },
          { day: "Sabato", time: "10:00" },
        ],
      },
    ],
    trainers: [
      { name: "ADRIANO SPERANDIO", image: "ADRIANO.jpeg", bio: "ISTRUTTORE PREPUGILISTICA/FUNZIONALE" },
      { name: "PAOLO SPERANDIO", image: "PAOLO.jpeg", bio: "MAESTRO BOXE" },
    ],
  },
  {
    id: "kickboxing",
    title: "Kickboxing",
    subtitle: "Potenza, tecnica e controllo",
    image: "kick.jpeg",
    description:
      "La kickboxing unisce pugni e calci in un allenamento completo, dinamico e coinvolgente. Migliora potenza e resistenza, coordinazione e agilità, tecnica e concentrazione.\n\nÈ perfetta sia per chi inizia sia per chi ha già esperienza: ogni lezione è pensata per farti crescere con metodo, in sicurezza e sempre seguito.\n\nProgressioni chiare e lavoro tecnico: migliora sicurezza nei colpi, timing e condizionamento, senza improvvisazione.",
    schedule: [
      { day: "Martedì", time: "20:30" },
      { day: "Giovedì", time: "20:30" },
    ],
    trainers: [{ name: "ANTON IOAN CATALIN", image: "NATALINO.jpeg", bio: "MAESTRO KICKBOXING" }],
  },
  {
    id: "mma",
    title: "MMA/Grappling",
    subtitle: "Forza, tecnica e versatilità",
    image: "mma.png",
    description:
      "Tecnica, potenza, concentrazione. L'MMA è uno degli sport più completi: unisce striking e grappling e sviluppa forza, resistenza, agilità e capacità di reazione.\n\nÈ un percorso adatto a tutti i livelli: si lavora con metodo e progressione, imparando sia principi tecnici che gestione del corpo e controllo, sempre in un ambiente serio e seguito.\n\nPercorso strutturato e completo: tecnica, condizionamento e progressione, con focus su sicurezza e controllo.",
    schedule: [
      { day: "Lunedì", time: "19:45" },
      { day: "Mercoledì", time: "19:45" },
      { day: "Venerdì", time: "19:45" },
    ],
    trainers: [{ name: "ASTERIO LUCCHESINI", image: "ASTERIO.jpeg", bio: "MAESTRO MMA/GRAPPLING" }],
  },
  {
    id: "karate",
    title: "Karate",
    subtitle: "Disciplina, rispetto e crescita personale",
    image: "karate.png",
    description:
      "Il Karate è molto più di uno sport: è un percorso che forma corpo e mente. Aiuta a sviluppare postura, equilibrio e sicurezza in sé stessi, insieme a rispetto delle regole, autocontrollo e concentrazione.\n\nUn'attività adatta a bambini, ragazzi e adulti, con un approccio serio ma sempre motivante: si cresce passo dopo passo, con passione e attenzione all'allievo.\n\nProgressioni tecniche e lavoro sulla mentalità: postura, coordinazione e controllo, con attenzione alla crescita personale.",
    schedules: [
      {
        title: "Karate Bambini 4-6 Anni",
        schedule: [
          { day: "Martedì", time: "17:00" },
          { day: "Giovedì", time: "17:00" },
        ],
      },
      {
        title: "Karate Bambini 7-11 Anni",
        schedule: [
          { day: "Martedì", time: "18:00" },
          { day: "Giovedì", time: "18:00" },
        ],
      },
      {
        title: "Karate Ragazzi",
        schedule: [
          { day: "Martedì", time: "19:00" },
          { day: "Giovedì", time: "19:00" },
        ],
      },
      {
        title: "Karate Agonisti/Pre-Agonisti",
        schedule: [
          { day: "Sabato", time: "10:00" },
        ],
      },
    ],
    trainers: [
      { name: "MASSIMO MONTECCHIANI", image: "MASSIMO.jpeg", bio: "MAESTRO KARATE" },
      { name: "BARBARA MONTECCHIANI", image: "BARBARA.jpeg", bio: "MAESTRA KARATE" },
    ],
  },
  {
    id: "judo",
    title: "Judo",
    subtitle: "Tecnica, valori e controllo",
    image: "judo-hero.jpg",
    description:
      "Il Judo è disciplina, tecnica e valori. Un percorso completo che sviluppa coordinazione, equilibrio e consapevolezza del corpo, con lavoro progressivo e strutturato.\n\nAdatto a bambini, ragazzi e adulti, con gruppi suddivisi per età e livello: si impara sul serio, con rispetto e passione sul tatami.\n\nAllenamenti progressivi su tecnica e controllo, con attenzione alla sicurezza e alla crescita dell'allievo.",
    schedules: [
      {
        title: "Judo Bambini 4-7 Anni",
        schedule: [
          { day: "Lunedì", time: "17:00" },
          { day: "Mercoledì", time: "17:00" },
          { day: "Venerdì", time: "17:00" },
        ],
      },
      {
        title: "Judo Ragazzi 8-12 Anni",
        schedule: [
          { day: "Lunedì", time: "18:00" },
          { day: "Mercoledì", time: "18:00" },
          { day: "Venerdì", time: "18:00" },
        ],
      },
      {
        title: "Judo Adulti",
        schedule: [
          { day: "Lunedì", time: "19:45" },
          { day: "Mercoledì", time: "19:45" },
          { day: "Venerdì", time: "19:45" },
        ],
      },
    ],
    trainers: [
      { name: "MICHELA MUCCIOLI", image: "MICHELA.jpeg", bio: "MAESTRA JUDO" },
      { name: "VITTORINA DI VINCENZO", image: "VITTORIA.jpeg", bio: "MAESTRA JUDO" },
    ],
  },
];

function ScheduleTable({ schedule }) {
  return (
    <div className="sm:rounded-lg sm:border sm:border-brand-gray200 overflow-hidden">
      <div className="bg-brand-black text-white px-4 py-3 text-sm font-semibold">Orari</div>
      <div className="divide-y divide-brand-gray200 sm:bg-white">
        {schedule.map((s) => (
          <div
            key={s.day + s.time}
            className="flex items-center justify-between px-4 py-3 text-sm"
          >
            <span className="text-black/70">{s.day}</span>
            <span className="font-semibold text-brand-black">{s.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SingleScheduleBlock({ item }) {
  return (
    <div>
      <p className="font-heading uppercase tracking-wide text-base mb-3">{item.title}</p>
      <div className="sm:rounded-lg sm:border sm:border-brand-gray200 overflow-hidden">
        <div className="bg-brand-black text-white px-4 py-3 text-sm font-semibold">Orari</div>
        <div className="divide-y divide-brand-gray200 sm:bg-white">
          {item.schedule.map((s) => (
            <div
              key={s.day + s.time}
              className="flex items-center justify-between px-4 py-3 text-sm"
            >
              <span className="text-black/70">{s.day}</span>
              <span className="font-semibold text-brand-black">{s.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleTrainerBlock({ trainer }) {
  return (
    <div>
      <p className="section-title text-brand-red text-sm mb-6">Trainer</p>

      <div className="max-w-2xl mx-auto">
        <div className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 overflow-hidden">
          <div className="grid sm:grid-cols-5">
            <div className="sm:col-span-2 relative h-[380px] sm:h-[420px]">
              <img
                src={toPublicSrc(trainer.image)}
                alt={trainer.name}
                className="absolute inset-0 h-full w-full object-contain object-center bg-white"
              />
            </div>

            <div className="sm:col-span-3 p-6 sm:p-7 flex flex-col justify-center">
              <h3 className="font-heading uppercase tracking-wide text-xl">
                {trainer.name}
              </h3>

              <p className="text-brand-red font-bold mt-1">{trainer.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MultipleTrainersBlock({ trainers }) {
  return (
    <div>
      <p className="section-title text-brand-red text-sm mb-5">Trainer</p>

      <div className="grid sm:grid-cols-2 gap-5">
        {trainers.map((t, idx) => (
          <div
            key={idx}
            className="sm:rounded-lg sm:bg-white sm:border sm:border-brand-gray200 overflow-hidden"
          >
            <div className="relative h-[400px]">
              <img
                src={toPublicSrc(t.image)}
                alt={t.name}
                className="absolute inset-0 h-full w-full object-contain object-center bg-white"
              />
            </div>

            <div className="p-5">
              <h3 className="font-heading uppercase tracking-wide text-lg">
                {t.name}
              </h3>

              <p className="text-brand-red font-bold mt-1">{t.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeightRoomTrainersBlock({ trainers }) {
  return (
    <div className="px-4 sm:px-0">
      <p className="font-heading uppercase tracking-wide text-2xl sm:text-3xl text-brand-black text-center mb-8">
        I NOSTRI ISTRUTTORI DI SALA PESI
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {trainers.slice(0, 4).map((t, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="relative w-full aspect-[3/4] rounded-none sm:rounded-lg overflow-hidden bg-white border-y sm:border border-brand-gray200">
              <img
                src={toPublicSrc(t.image)}
                alt={t.name}
                className="absolute inset-0 h-full w-full object-contain object-center"
              />
            </div>
            <p className="my-3 font-heading uppercase tracking-wide text-center text-xs sm:text-sm text-brand-black">
              {t.name}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6 max-w-4xl mx-auto">
        {trainers.slice(4, 7).map((t, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="relative w-full aspect-[3/4] rounded-none sm:rounded-lg overflow-hidden bg-white border-y sm:border border-brand-gray200">
              <img
                src={toPublicSrc(t.image)}
                alt={t.name}
                className="absolute inset-0 h-full w-full object-contain object-center"
              />
            </div>
            <p className="my-3 font-heading uppercase tracking-wide text-center text-xs sm:text-sm text-brand-black">
              {t.name}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6 max-w-4xl mx-auto">
        {trainers.slice(7).map((t, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="relative w-full aspect-[3/4] rounded-none sm:rounded-lg overflow-hidden bg-white border-y sm:border border-brand-gray200">
              <img
                src={toPublicSrc(t.image)}
                alt={t.name}
                className="absolute inset-0 h-full w-full object-contain object-center"
              />
            </div>
            <p className="my-3 font-heading uppercase tracking-wide text-center text-xs sm:text-sm text-brand-black">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CourseSection({ course, invert = false }) {
  const isWeightRoom = course.id === "sala-pesi";
  const hasSingleTrainer = course.trainers.length === 1;
  const hasMultipleSchedules = course.schedules && course.schedules.length > 0;

  // Calcola distribuzione tabelle se presenti più schedule
  let leftSchedules = [];
  let rightSchedules = [];

  if (hasMultipleSchedules) {
    const totalSchedules = course.schedules.length;
    const leftCount = Math.ceil(totalSchedules / 2);
    leftSchedules = course.schedules.slice(0, leftCount);
    rightSchedules = course.schedules.slice(leftCount);
  }

  return (
    <section
      id={course.id}
      className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 overflow-hidden scroll-mt-32"
    >
      {/* Mobile: Titolo prima della foto */}
      <div className="lg:hidden py-7 px-4">
        <p className="section-title text-brand-red text-sm">{course.subtitle}</p>
        <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl mt-2">
          {course.title}
        </h2>
      </div>

      <div className="grid lg:grid-cols-12">
        {/* FOTO */}
        <div
          className={[
            "lg:col-span-5",
            "border-b lg:border-b-0",
            invert ? "lg:order-2 lg:border-l" : "lg:order-1 lg:border-r",
            "border-brand-gray200",
          ].join(" ")}
        >
          <div className="relative h-[260px] sm:h-[320px] lg:h-[380px]">
            <img
              src={toPublicSrc(course.image)}
              alt={course.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* TABELLE DESTRA (sotto la foto) - solo su desktop con più tabelle */}
          {hasMultipleSchedules && rightSchedules.length > 0 && (
            <div className="hidden lg:block p-10 space-y-6">
              {rightSchedules.map((item, idx) => (
                <SingleScheduleBlock key={idx} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* TESTO + TABELLE SINISTRA */}
        <div
          className={[
            "lg:col-span-7 py-7 sm:p-10",
            invert ? "lg:order-1" : "lg:order-2",
          ].join(" ")}
        >
          {/* Desktop: titolo qui */}
          <div className="hidden lg:block">
            <p className="section-title text-brand-red text-sm">{course.subtitle}</p>
            <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl mt-2">
              {course.title}
            </h2>
          </div>

          <p className="mt-4 text-black/70 leading-relaxed max-w-3xl whitespace-pre-line">
            {course.description}
          </p>

          {/* TABELLE */}
          {hasMultipleSchedules ? (
            <div className="mt-5 space-y-6">
              {/* Mobile: tutte le tabelle in colonna */}
              <div className="lg:hidden space-y-6">
                {course.schedules.map((item, idx) => (
                  <SingleScheduleBlock key={idx} item={item} />
                ))}
              </div>

              {/* Desktop: solo tabelle sinistra */}
              <div className="hidden lg:block space-y-6">
                {leftSchedules.map((item, idx) => (
                  <SingleScheduleBlock key={idx} item={item} />
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-5">
              <ScheduleTable schedule={course.schedule} />
            </div>
          )}

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button href="/contact">Prenota / Info</Button>
            <Button href="/pricing" variant="outline">
              Vedi abbonamenti
            </Button>
          </div>
        </div>
      </div>

      <div className={`border-t border-brand-gray200 bg-brand-offwhite ${isWeightRoom ? 'p-0 py-8 sm:p-10' : 'py-7 sm:p-10'}`}>
        {isWeightRoom ? (
          <WeightRoomTrainersBlock trainers={course.trainers} />
        ) : hasSingleTrainer ? (
          <SingleTrainerBlock trainer={course.trainers[0]} />
        ) : (
          <MultipleTrainersBlock trainers={course.trainers} />
        )}
      </div>
    </section>
  );
}

export default function CoursesPage() {
  const TOP_BLOCK = COURSES.slice(0, 5);
  const REST_BLOCK = COURSES.slice(5);

  useEffect(() => {
    // Gestisce il click sui link di navigazione
    const handleHashClick = (e) => {
      const target = e.target.closest('a');
      const hash = target?.hash;

      if (hash && hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(hash);

        if (element) {
          const offset = 120; // Offset per navbar + margine
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, []);

  return (
    <div className="bg-brand-red">
      <TripleDiagonalBand
        className="-mt-[var(--nav-h)]"
        images={["yoga.jpg", "judo-hero.jpg", "kick-hero.jpg"]}
        kicker="Corsi"
        title="Scegli il tuo percorso."
        subtitle="Ogni corso ha un metodo, una guida e un obiettivo. Scegli cosa ti rappresenta e allenati con disciplina, sicurezza e continuità."
      />
      {/* Eliminato space-y su mobile */}
      <div className="space-y-0 sm:space-y-8 lg:space-y-10 pb-8 sm:py-10 lg:py-12 pb-0">
        <WhiteBlock>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-title text-brand-red">RED GYM</p>
              <h2 className="font-heading uppercase tracking-wide text-4xl sm:text-5xl mt-2">
                Corsi & Attività
              </h2>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {COURSES.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="rounded-full border border-brand-gray200 bg-white px-4 py-2 text-sm font-semibold text-black/70 hover:border-brand-red hover:text-brand-red transition-colors"
              >
                {c.title}
              </a>
            ))}
          </div>

          <div className="mt-10 space-y-0 sm:space-y-10">
            {TOP_BLOCK.map((course) => {
              const idx = COURSES.findIndex((x) => x.id === course.id);
              return (
                <CourseSection
                  key={course.id}
                  course={course}
                  invert={idx % 2 === 1}
                />
              );
            })}
          </div>
        </WhiteBlock>

        <DiagonalPromoOver65
          image="over65.jpg"
          kicker="Benessere"
          title="Sconto Over 65"
          subtitle="Tariffe dedicate: chiedi in reception o contattaci per tutti i dettagli."
        />

        <WhiteBlock>
          <div className="space-y-0 sm:space-y-10">
            {REST_BLOCK.map((course) => {
              const idx = COURSES.findIndex((x) => x.id === course.id);
              return (
                <CourseSection
                  key={course.id}
                  course={course}
                  invert={idx % 2 === 1}
                />
              );
            })}
          </div>
        </WhiteBlock>
      </div>

      {/* Sezione finale CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div>
            <img
              src={toPublicSrc("combat.jpg")}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-y-0 left-1/2 w-[22vw] -translate-x-1/2">
            <div className="h-full w-full [clip-path:polygon(0_0,100%_0,0_100%)] bg-black/0" />
          </div>
        </div>

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative py-16 sm:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading uppercase tracking-wide text-white text-3xl sm:text-4xl lg:text-5xl">
              Inizia il tuo percorso
            </h2>

            <p className="mt-6 text-white/85 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Hai trovato il corso che fa per te? Siamo qui per rispondere a ogni tua domanda e
              aiutarti a scegliere il percorso più adatto ai tuoi obiettivi. Contattaci per maggiori
              informazioni, orari dettagliati o per prenotare una lezione di prova.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md px-8 py-4 text-base font-semibold tracking-wide
                     bg-brand-red text-white hover:bg-brand-red/90 transition-colors"
              >
                Contattaci
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}