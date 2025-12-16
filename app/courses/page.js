import Section from "@/components/Section";
import Button from "@/components/Button";

const COURSES = [
  { name: "Sala Pesi", desc: "Allenamento forza, ipertrofia, tecnica e progressioni." },
  { name: "Functional Training", desc: "Condizionamento, circuiti, mobilità e core." },
  { name: "Boxe / Combat", desc: "Tecnica, cardio, coordinazione e resistenza." },
  { name: "Pilates", desc: "Postura, controllo, mobilità e benessere." },
];

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
            Qui trovi una panoramica. In seguito possiamo aggiungere: orari, livelli, trainer e schede corso.
          </p>
        </div>
        <Button href="/contact">Chiedi info</Button>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {COURSES.map((c) => (
          <div key={c.name} className="rounded-xl bg-white border border-brand-gray200 p-6 hover:shadow-soft transition-shadow">
            <h2 className="font-heading uppercase tracking-wide text-2xl">{c.name}</h2>
            <p className="mt-3 text-sm text-black/70 leading-relaxed">{c.desc}</p>
            <div className="mt-5">
              <Button href="/contact" variant="outline">Prenota una prova</Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
