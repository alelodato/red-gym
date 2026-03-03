"use client";

import { useEffect } from "react";
import Button from "@/components/Button";
import Image from "next/image";

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
  images = ["yoga.webp", "judo-hero.webp", "kick-hero.webp"],
  mobileImage = "judo-hero.webp",
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
              <Button href="/pricing" variant="white">
                I nostri piani e abbonamenti
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const WELLNESS_COURSES = [
  {
    id: "allenamento-funzionale",
    title: "Allenamento Funzionale",
    subtitle: "Movimento naturale, forza e performance",
    image: "tacfit.webp",
    description:
      "L'allenamento funzionale si basa su movimenti naturali del corpo: spingere, tirare, sollevare, saltare e ruotare. È un metodo che migliora forza, mobilità, stabilità e resistenza in modo completo e integrato.\n\nSi lavora con pesi liberi, kettlebell, TRX, corpo libero e attrezzi specifici.",
    schedules: [
      {
        title: "Funzionale",
        schedule: [
          { day: "Lunedì", time: "10:00, 13:30, 18:00, 19:00, 20:00" },
          { day: "Mercoledì", time: "10:00, 13:30, 18:00, 19:00, 20:00" },
          { day: "Venerdì", time: "10:00, 13:30, 17:30, 18:30, 21:00" },
        ],
      },
      
    ],
    trainers: [
      { name: "ADRIANO SPERANDIO", image: "ADRIANO.jpeg", bio: "ISTRUTTORE PREPUGILISTICA/FUNZIONALE" },
    ],
  },
  {
    id: "tacfit",
    title: "TacFit",
    subtitle: "Allenamento tattico ad alta intensitá",
    image: "tacfit.webp",
    description:
      "TACFIT è una specializzazione dell'allenamento funzionale con focus tattico e ad alta intensità. Nato per preparare operatori militari e di sicurezza, combina mobilità, forza esplosiva e condizionamento cardiovascolare in protocolli strutturati e progressivi. Ideale per chi vuole portare il funzionale a un livello superiore.\n\nPerfetto per chi cerca un allenamento dinamico, vario e ad alta intensità, con focus su tecnica, sicurezza e progressione costante.",
    schedules: [
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
    image: "yoga.webp",
    description:
      "Lo yoga migliora postura e mobilità, scioglie le tensioni e favorisce un benessere mentale concreto. La pratica unisce respiro consapevole e movimento fluido, per rafforzare il corpo in modo armonico.\n\nÈ un'attività adatta a tutti: puoi iniziare anche se non hai mai praticato, e usarla per completare il tuo allenamento settimanale.",
    schedule: [
      { day: "Sabato", time: "11:00" },
    ],
    trainers: [{ name: "CLAUDIA", image: "CLAUDIA.jpeg", bio: "ISTRUTTRICE YOGA" }],
  },
  {
    id: "prepugilistica",
    title: "Prepugilistica",
    subtitle: "Tecnica, fiducia e autocontrollo",
    image: "boxe.png",
    description:
      "La prepugilistica è perfetta per chi vuole costruire basi solide (anche senza contatto) con metodo e disciplina. Si lavora su tecnica, lavoro al sacco, combinazioni e condizionamento.\n\nAllenamenti seri e progressivi: tecnica, timing e condizionamento, con attenzione alla sicurezza e alla crescita dell'allievo.",
    schedule: [
      { day: "Martedì", time: "10:00, 13:30" },
      { day: "Giovedì", time: "10:00, 13:30" },
      { day: "Sabato", time: "10:00" },
    ],
    trainers: [
      { name: "ADRIANO SPERANDIO", image: "ADRIANO.jpeg", bio: "ISTRUTTORE PREPUGILISTICA/FUNZIONALE" },
    ],
  },
];

const MARTIAL_ARTS_COURSES = [
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
    image: "judo-hero.webp",
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
  {
    id: "kickboxing",
    title: "Kick Boxing",
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
    id: "boxe",
    title: "Boxe",
    subtitle: "Tecnica, fiducia e autocontrollo",
    image: "boxe.png",
    description:
      "La boxe è uno degli sport più completi: migliora forza, resistenza, coordinazione e riflessi, ma soprattutto costruisce fiducia, autocontrollo e determinazione.\n\nIl percorso è guidato e strutturato: tecnica, lavoro al sacco, combinazioni e condizionamento.\n\nAllenamenti seri e progressivi: tecnica, timing e condizionamento, con attenzione alla sicurezza e alla crescita dell'allievo.",
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
    ],
    trainers: [
      { name: "PAOLO SPERANDIO", image: "PAOLO.jpeg", bio: "MAESTRO BOXE" },
    ],
  },
  {
    id: "grappling",
    title: "Grappling (MMA)",
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
];

const ALL_COURSES = [...WELLNESS_COURSES, ...MARTIAL_ARTS_COURSES];

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

function CourseSection({ course, invert = false }) {
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

      <div className="border-t border-brand-gray200 bg-brand-offwhite py-7 sm:p-10">
        {hasSingleTrainer ? (
          <SingleTrainerBlock trainer={course.trainers[0]} />
        ) : (
          <MultipleTrainersBlock trainers={course.trainers} />
        )}
      </div>
    </section>
  );
}

function DiagonalBand({
  image = "sala3.JPG",
  title = "Energia. Disciplina. Risultati.",
}) {
  return (
    <section className="relative bg-brand-red overflow-hidden">
      <div className="relative h-[220px] sm:h-[280px] lg:h-[340px]">
        <Image
          src={toPublicSrc(image)}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Tagli diagonali solo su desktop */}
        <div className="hidden sm:block absolute -top-1 left-0 right-0 h-20 bg-brand-red [clip-path:polygon(0_0,100%_0,100%_55%,0_100%)]" />
        <div className="hidden sm:block absolute -bottom-1 left-0 right-0 h-20 bg-brand-red [clip-path:polygon(0_45%,100%_0,100%_100%,0_100%)]" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-3">
            <img
              src={toPublicSrc("logo-negativo.png")}
              alt="Red Gym"
              className="h-12 sm:h-14 lg:h-16 w-auto"
            />
          </div>
          <h3 className="font-heading uppercase tracking-wide text-white text-2xl sm:text-3xl lg:text-4xl mt-2 text-center">
            {title}
          </h3>
        </div>
      </div>
    </section>
  );
}

export default function CoursesPage() {
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
        images={["yoga.webp", "judo-hero.webp", "kick-hero.webp"]}
        kicker="Corsi"
        title="Scegli il tuo percorso."
        subtitle="Ogni corso ha un metodo, una guida e un obiettivo. Scegli cosa ti rappresenta e allenati con disciplina, sicurezza e continuità."
      />

      <div className="space-y-0 sm:space-y-8 lg:space-y-10 sm:py-10 lg:py-12 pb-0">
        {/* CORSI BENESSERE */}
        <WhiteBlock>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-title text-brand-red">Corsi & Attività</p>
              <h2 className="font-heading uppercase tracking-wide text-4xl sm:text-5xl mt-2">
                Corsi Benessere
              </h2>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {WELLNESS_COURSES.map((c) => (
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
            {WELLNESS_COURSES.map((course, idx) => (
              <CourseSection
                key={course.id}
                course={course}
                invert={idx % 2 === 1}
              />
            ))}
          </div>
        </WhiteBlock>

        <DiagonalBand image="sala3.JPG" />

        {/* CORSI ARTI MARZIALI */}
        <WhiteBlock>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-title text-brand-red">Corsi & Attività</p>
              <h2 className="font-heading uppercase tracking-wide text-4xl sm:text-5xl mt-2">
                Corsi Arti Marziali
              </h2>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {MARTIAL_ARTS_COURSES.map((c) => (
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
            {MARTIAL_ARTS_COURSES.map((course, idx) => (
              <CourseSection
                key={course.id}
                course={course}
                invert={idx % 2 === 1}
              />
            ))}
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