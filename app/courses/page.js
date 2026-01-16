import Button from "@/components/Button";

function toPublicSrc(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

function WhiteBlock({ children }) {
  return (
    <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
      <div className="bg-white border border-brand-gray200 shadow-soft p-8 sm:p-12 lg:p-14 rounded-none sm:rounded-2xl border-x-0 sm:border-x">
        {children}
      </div>
    </div>
  );
}

function TripleDiagonalBand({
  images = ["yoga.jpg", "judo-hero.jpg", "kick-hero.jpg"],
  kicker = "Red Gym",
  title = "Scegli il tuo percorso.",
  subtitle = "Ogni corso ha un metodo, una guida e un obiettivo.",
  heightClass = "min-h-[420px] h-[clamp(420px,55vh,720px)]",
  className = "",
}) {
  const bottomClip = "[clip-path:polygon(0_45%,100%_0,100%_100%,0_100%)]";

  return (
    <section className={`relative bg-brand-red overflow-hidden ${className}`}>
      {/* HERO */}
      <div className={`relative ${heightClass}`}>
        {/* 3 immagini attaccate */}
        <div className="absolute inset-0 flex min-w-0">
          {images.map((src, idx) => (
            <div key={src + idx} className="relative flex-1 min-w-0">
              <img
                src={toPublicSrc(src)}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* separatore sottile (quasi invisibile) */}
              {idx < images.length - 1 ? (
                <div className="absolute inset-y-0 right-0 w-px bg-white/10" />
              ) : null}
            </div>
          ))}
        </div>

        {/* overlay per leggibilità + vibe hero */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />

        <div className={`absolute -bottom-1 left-0 right-0 h-20 sm:h-24 bg-brand-red ${bottomClip}`} />
      </div>

      {/* testo hero */}
      <div className="absolute inset-0 flex items-end sm:items-center">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="pb-14 sm:pb-0">
            {kicker ? <p className="section-title text-white/85">{kicker}</p> : null}

            {title ? (
              <h1 className="font-heading uppercase tracking-wide text-white mt-2 leading-[0.95]
                             text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
                {title}
              </h1>
            ) : null}

            {subtitle ? (
              <p className="mt-4 text-white/85 max-w-2xl leading-relaxed
                            text-base sm:text-lg lg:text-xl">
                {subtitle}
              </p>
            ) : null}
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

        <div className={`absolute -top-1 left-0 right-0 h-16 sm:h-20 bg-brand-red ${topClip}`} />
        <div className={`absolute -bottom-1 left-0 right-0 h-16 sm:h-20 bg-brand-red ${bottomClip}`} />
      </div>

      <div className="relative">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
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
    image: "sala-pesi.png",
    description:
      "Allenarsi bene significa fare le cose nel modo giusto. In sala pesi trovi spazi ampi e attrezzatura di ultima generazione selezionata per efficacia e comfort, con la possibilità di lavorare su forza, tonificazione e ricomposizione corporea.\n\nChe tu sia alle prime armi o voglia portare il livello più in alto, l’obiettivo è sempre lo stesso: progressione, tecnica corretta e continuità.",
    schedule: [
      { day: "Lun – Ven", time: "06:00 – 22:30" },
      { day: "Sabato", time: "08:00 – 16:00" },
      { day: "Domenica", time: "08:00 – 13:00" },
    ],
    trainers: [
      {
        name: "Personal Trainer 1",
        image: "pt1.jpg",
        bio: "-",
      },
      {
        name: "Personal Trainer 2",
        image: "pt2.jpg",
        bio: "-",
      },
    ],
  },
  {
    id: "pilates",
    title: "Pilates",
    subtitle: "Postura, controllo, mobilità e benessere",
    image: "salute.png",
    description:
      "Allenarsi non vuol dire sempre spingersi al limite: a volte vuol dire ascoltare il corpo e rimetterlo in equilibrio. Il Pilates aiuta a migliorare postura e controllo, aumentare mobilità e ridurre tensioni.\n\nÈ un percorso adatto a tutti e utile anche come integrazione alla sala pesi o agli sport da combattimento: più consapevolezza, più qualità di movimento.\n\n Approccio progressivo e accessibile: postura, respirazione e controllo, con attenzione ai dettagli.",
    schedule: [
      { day: "Lunedì", time: "18:30 – 19:30" },
      { day: "Mercoledì", time: "18:30 – 19:30" },
      { day: "Venerdì", time: "13:00 – 14:00" },
    ],
    trainers: [
      {
        name: "Insegnante Pilates",
        image: "pil-maestra.jpg",
        bio: "-",
      },
      {
        name: "Insegnante Pilates",
        image: "pil-maestra2.jpg",
        bio: "-",
      },
    ],
  },
  {
    id: "yoga",
    title: "Yoga",
    subtitle: "Respiro, equilibrio e movimento consapevole",
    image: "yoga.jpg",
    description:
      "Lo yoga migliora postura e mobilità, scioglie le tensioni e favorisce un benessere mentale concreto. La pratica unisce respiro consapevole e movimento fluido, per rafforzare il corpo in modo armonico.\n\nÈ un’attività adatta a tutti: puoi iniziare anche se non hai mai praticato, e usarla per completare il tuo allenamento settimanale.",
    schedule: [
      { day: "-", time: "—" },
      { day: "-", time: "—" },
    ],
    trainers: [
      {
        name: "Insegnante Yoga",
        image: "yoga-trainer.jpg",
        bio: "-",
      },
    ],
  },
  {
    id: "boxe",
    title: "Boxe & Prepugilistica",
    subtitle: "Tecnica, fiducia e autocontrollo",
    image: "boxe.png",
    description:
      "La boxe è uno degli sport più completi: migliora forza, resistenza, coordinazione e riflessi, ma soprattutto costruisce fiducia, autocontrollo e determinazione.\n\nIl percorso è guidato e strutturato: tecnica, lavoro al sacco, combinazioni e condizionamento. La prepugilistica è perfetta per chi vuole costruire basi solide (anche senza contatto) con metodo e disciplina.\n\nAllenamenti seri e progressivi: tecnica, timing e condizionamento, con attenzione alla sicurezza e alla crescita dell’allievo.",
    schedule: [
      { day: "Martedì", time: "20:00 – 21:00" },
      { day: "Giovedì", time: "20:00 – 21:00" },
    ],
    trainers: [
      {
        name: "Insegnante di Boxe",
        image: "boxe-coach.jpg",
        bio: "-",
      },
    ],
  },
  {
    id: "kickboxing",
    title: "Kickboxing",
    subtitle: "Potenza, tecnica e controllo",
    image: "kickboxing.jpg",
    description:
      "La kickboxing unisce pugni e calci in un allenamento completo, dinamico e coinvolgente. Migliora potenza e resistenza, coordinazione e agilità, tecnica e concentrazione.\n\nÈ perfetta sia per chi inizia sia per chi ha già esperienza: ogni lezione è pensata per farti crescere con metodo, in sicurezza e sempre seguito.\n\nProgressioni chiare e lavoro tecnico: migliora sicurezza nei colpi, timing e condizionamento, senza improvvisazione.",
    schedule: [
      { day: "-", time: "—" },
      { day: "-", time: "—" },
    ],
    trainers: [
      {
        name: "Insegnante di Kickboxing",
        image: "kickboxing-coach.jpg",
        bio: "-",
      },
    ],
  },
  {
    id: "mma",
    title: "MMA",
    subtitle: "Forza, tecnica e versatilità",
    image: "mma.png",
    description:
      "Tecnica, potenza, concentrazione. L’MMA è uno degli sport più completi: unisce striking e grappling e sviluppa forza, resistenza, agilità e capacità di reazione.\n\nÈ un percorso adatto a tutti i livelli: si lavora con metodo e progressione, imparando sia principi tecnici che gestione del corpo e controllo, sempre in un ambiente serio e seguito. \n\nPercorso strutturato e completo: tecnica, condizionamento e progressione, con focus su sicurezza e controllo.",
    schedule: [
      { day: "Lunedì", time: "20:00 – 21:15" },
      { day: "Mercoledì", time: "20:00 – 21:15" },
    ],
    trainers: [
      {
        name: "Insegnante di MMA",
        image: "mma-coach.jpg",
        bio: "-",
      },
    ],
  },
  {
    id: "karate",
    title: "Karate",
    subtitle: "Disciplina, rispetto e crescita personale",
    image: "karate.png",
    description:
      "Il Karate è molto più di uno sport: è un percorso che forma corpo e mente. Aiuta a sviluppare postura, equilibrio e sicurezza in sé stessi, insieme a rispetto delle regole, autocontrollo e concentrazione.\n\nUn’attività adatta a bambini, ragazzi e adulti, con un approccio serio ma sempre motivante: si cresce passo dopo passo, con passione e attenzione all’allievo.\n\nProgressioni tecniche e lavoro sulla mentalità: postura, coordinazione e controllo, con attenzione alla crescita personale.",
    schedule: [
      { day: "-", time: "—" },
      { day: "-", time: "—" },
    ],
    trainers: [
      {
        name: "Insegnante di Karate",
        image: "karate-coach.jpg",
        bio: "-",
      },
    ],
  },
  {
    id: "judo",
    title: "Judo",
    subtitle: "Tecnica, valori e controllo",
    image: "judo.png",
    description:
      "Il Judo è disciplina, tecnica e valori. Un percorso completo che sviluppa coordinazione, equilibrio e consapevolezza del corpo, con lavoro progressivo e strutturato.\n\nAdatto a bambini, ragazzi e adulti, con gruppi suddivisi per età e livello: si impara sul serio, con rispetto e passione sul tatami. \n\nAllenamenti progressivi su tecnica e controllo, con attenzione alla sicurezza e alla crescita dell’allievo.",
    schedule: [
      { day: "-", time: "—" },
      { day: "-", time: "—" },
    ],
    trainers: [
      {
        name: "Insegnante di Judo",
        image: "judo-coach.jpg",
        bio: "-",
      },
    ],
  },
];

function ScheduleTable({ schedule }) {
  return (
    <div className="mt-5 rounded-lg border border-brand-gray200 overflow-hidden">
      <div className="bg-brand-black text-white px-4 py-3 text-sm font-semibold">
        Orari
      </div>
      <div className="divide-y divide-brand-gray200 bg-white">
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

function TrainersBlock({ trainers }) {
  return (
    <div>
      <p className="section-title text-brand-red text-sm">Trainer</p>

      <div className="mt-6 space-y-6">
        {trainers.map((t, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white border border-brand-gray200 overflow-hidden"
          >
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-4 relative h-[240px] sm:h-[260px]">
                <img
                  src={toPublicSrc(t.image)}
                  alt={t.name}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="md:col-span-8 p-6 sm:p-7">
                <h3 className="font-heading uppercase tracking-wide text-xl">
                  {t.name}
                </h3>

                <p className="mt-3 text-black/70 leading-relaxed">{t.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CourseSection({ course, invert = false }) {
  return (
    <section
      id={course.id}
      className="rounded-xl bg-white border border-brand-gray200 overflow-hidden"
    >
      <div className="grid lg:grid-cols-12">
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
        </div>

        <div
          className={[
            "lg:col-span-7 p-7 sm:p-10",
            invert ? "lg:order-1" : "lg:order-2",
          ].join(" ")}
        >
          <p className="section-title text-brand-red text-sm">{course.subtitle}</p>

          <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl mt-2">
            {course.title}
          </h2>

          <p className="mt-4 text-black/70 leading-relaxed max-w-3xl whitespace-pre-line">
            {course.description}
          </p>

          <ScheduleTable schedule={course.schedule} />

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button href="/contact">Prenota / Info</Button>
            <Button href="/pricing" variant="outline">
              Vedi abbonamenti
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-gray200 bg-brand-offwhite p-7 sm:p-10">
        <TrainersBlock trainers={course.trainers} />
      </div>
    </section>
  );
}

export default function CoursesPage() {
  const TOP_BLOCK = COURSES.slice(0, 3);
  const REST_BLOCK = COURSES.slice(3);

  return (
    <div className="bg-brand-red">
      <TripleDiagonalBand
        className="-mt-[var(--nav-h)]"
        images={["yoga.jpg", "judo-hero.jpg", "kick-hero.jpg"]}
        kicker=""
        title="Scegli il tuo percorso."
        subtitle="Ogni corso ha un metodo, una guida e un obiettivo. Scegli cosa ti rappresenta e allenati con disciplina, sicurezza e continuità."
      />

      <div className="space-y-6 sm:space-y-8 lg:space-y-10 py-8 sm:py-10 lg:py-12">
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

          <div className="mt-10 space-y-10">
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
          <div className="space-y-10">
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
    </div>
  );
}