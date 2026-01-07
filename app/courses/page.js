import Section from "@/components/Section";
import Button from "@/components/Button";

function toPublicSrc(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

const COURSES = [
  {
    id: "sala-pesi",
    title: "Sala Pesi & Fitness",
    subtitle: "Forza, ipertrofia, tonificazione e ricomposizione corporea",
    image: "sala-pesi.png",
    description:
      "Allenamenti strutturati per migliorare forza, massa muscolare e forma fisica generale. Programmi su misura in base al tuo livello, con focus su tecnica corretta, progressioni e risultati misurabili.",
    schedule: [
      { day: "Lun – Ven", time: "06:00 – 22:30" },
      { day: "Sabato", time: "08:00 – 16:00" },
      { day: "Domenica", time: "08:00 – 13:00" },
    ],
    trainers: [
      {
        name: "Personal Trainer – Sala Pesi",
        image: "pt1.jpg",
        bio: "Specializzato in forza e ipertrofia. Ti segue su tecnica, schede e progressioni per aumentare performance e sicurezza.",
      },
      {
        name: "Personal Trainer – Fitness",
        image: "pt2.jpg",
        bio: "Percorsi per dimagrimento, tonificazione e miglioramento della condizione fisica, adattati a obiettivi e disponibilità.",
      },
    ],
  },
  {
    id: "pilates",
    title: "Pilates",
    subtitle: "Postura, controllo, mobilità e benessere",
    image: "salute.png",
    description:
      "Lezioni ideali per migliorare postura e stabilità, aumentare mobilità e ridurre tensioni. Adatto sia a principianti che a chi vuole integrare un lavoro più tecnico e controllato nel proprio allenamento.",
    schedule: [
      { day: "Lunedì", time: "18:30 – 19:30" },
      { day: "Mercoledì", time: "18:30 – 19:30" },
      { day: "Venerdì", time: "13:00 – 14:00" },
    ],
    trainers: [
      {
        name: "Insegnante Pilates",
        image: "pil-maestra.jpg",
        bio: "Focus su postura, respirazione e controllo. Lavoro progressivo e adattabile a ogni livello.",
      },
      {
        name: "Insegnante Pilates",
        image: "pil-maestra2.jpg",
        bio: "Percorsi per benessere generale e prevenzione, con attenzione a mobilità e stabilità del core.",
      },
    ],
  },
  {
    id: "boxe",
    title: "Boxe",
    subtitle: "Tecnica, coordinazione, resistenza e condizionamento",
    image: "boxe.png",
    description:
      "Allenamenti dedicati a tecnica di base e avanzata, lavoro al sacco, combinazioni, coordinazione e condizionamento fisico. Disponibile anche un percorso di prepugilistica (propedeutica) per costruire basi tecniche, ritmo e disciplina.",
    schedule: [
      { day: "Martedì", time: "20:00 – 21:00" },
      { day: "Giovedì", time: "20:00 – 21:00" },
    ],
    trainers: [
      {
        name: "Insegnante di Boxe",
        image: "boxe-coach.jpg",
        bio: "Allenamenti progressivi su tecnica, timing e condizionamento. Approccio serio e adatto a ogni livello.",
      },
    ],
  },
  {
    id: "mma",
    title: "MMA",
    subtitle: "Striking, grappling e preparazione completa",
    image: "mma.png",
    description:
      "Percorsi che uniscono striking e grappling, con lavoro atletico e condizionamento. Allenamento completo per sviluppare tecnica, forza, resistenza e mentalità.",
    schedule: [
      { day: "Lunedì", time: "20:00 – 21:15" },
      { day: "Mercoledì", time: "20:00 – 21:15" },
    ],
    trainers: [
      {
        name: "Insegnante di MMA",
        image: "mma-coach.jpg",
        bio: "Struttura lezioni per sviluppare basi solide e progressione tecnica, con attenzione a preparazione atletica e sicurezza.",
      },
    ],
  },
  {
    id: "karate",
    title: "Karate",
    subtitle: "Disciplina, coordinazione e crescita tecnica",
    image: "karate.png",
    description:
      "Un corso completo per sviluppare tecnica, coordinazione, controllo e disciplina. Adatto a diversi livelli, con progressione strutturata e attenzione alla sicurezza.",
    schedule: [
      { day: "Da definire", time: "—" },
      { day: "Da definire", time: "—" },
    ],
    trainers: [
      {
        name: "Insegnante di Karate",
        image: "karate-coach.jpg",
        bio: "Percorsi tecnici con progressioni chiare, lavoro su postura, coordinazione e controllo, adatti a principianti e avanzati.",
      },
    ],
  },
  {
    id: "judo",
    title: "Judo",
    subtitle: "Tecnica, controllo e preparazione fisica",
    image: "judo.png",
    description:
      "Allenamenti dedicati a tecnica, equilibrio e controllo, con un lavoro progressivo su preparazione fisica e coordinazione. Ideale per sviluppare sicurezza e consapevolezza del corpo.",
    schedule: [
      { day: "Da definire", time: "—" },
      { day: "Da definire", time: "—" },
    ],
    trainers: [
      {
        name: "Insegnante di Judo",
        image: "judo-coach.jpg",
        bio: "Allenamenti strutturati su tecnica e progressione, con attenzione a sicurezza, controllo e preparazione.",
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
              {/* Immagine */}
              <div className="md:col-span-4 relative h-[240px] sm:h-[260px]">
                <img
                  src={toPublicSrc(t.image)}
                  alt={t.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Contenuto */}
              <div className="md:col-span-8 p-6 sm:p-7">
                <h3 className="font-heading uppercase tracking-wide text-xl">
                  {t.name}
                </h3>

                <p className="mt-3 text-black/70 leading-relaxed">
                  {t.bio}
                </p>

                {/* spazio pronto per info extra */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-brand-gray200 px-3 py-1 text-xs font-semibold text-black/60">
                    Qualifica certificata
                  </span>
                  <span className="rounded-full border border-brand-gray200 px-3 py-1 text-xs font-semibold text-black/60">
                    Esperienza sul campo
                  </span>
                </div>
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
      {/* RIGA 1 */}
      <div className="grid lg:grid-cols-12">
        {/* IMMAGINE */}
        <div
          className={[
            "lg:col-span-5",
            "border-b lg:border-b-0",
            invert ? "lg:order-2 lg:border-l" : "lg:order-1 lg:border-r",
            "border-brand-gray200",
          ].join(" ")}
        >
          {/* Altezza fissa: più facile trovare foto adatta */}
          <div className="relative h-[260px] sm:h-[320px] lg:h-[380px]">
            <img
              src={course.image}
              alt={course.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* CONTENUTI */}
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

          <p className="mt-4 text-black/70 leading-relaxed max-w-3xl">
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

      {/* RIGA 2: TRAINER FULL WIDTH */}
      <div className="border-t border-brand-gray200 bg-brand-offwhite p-7 sm:p-10">
        <TrainersBlock trainers={course.trainers} />
      </div>
    </section>
  );
}

export default function CoursesPage() {
  return (
    <Section>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-title text-brand-red">Corsi & Attività</p>
          <h1 className="font-heading uppercase tracking-wide text-4xl sm:text-5xl mt-2">
            Scegli il tuo percorso.
          </h1>
          <p className="mt-4 text-black/70 max-w-2xl">
            Ogni corso ha descrizione, orari e trainer dedicati. Per informazioni e prove, contattaci.
          </p>
        </div>
        <Button href="/contact">Chiedi info</Button>
      </div>

      {/* Quick navigation */}
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
        {COURSES.map((course, idx) => (
          // Prima sezione: immagine a sinistra (invert false)
          // Poi alterniamo per rendere tutto più interessante
          <CourseSection key={course.id} course={course} invert={idx % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}