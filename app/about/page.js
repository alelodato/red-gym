import Section from "@/components/Section";
import Button from "@/components/Button";
import { SITE } from "@/lib/site";

export default function AboutPage() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="section-title text-brand-red">Chi siamo</p>
          <h1 className="font-heading uppercase tracking-wide text-4xl sm:text-5xl mt-2">
            Una palestra grande, conosciuta, con risultati concreti.
          </h1>
          <p className="mt-5 text-black/70 leading-relaxed">
            {SITE.name} è un punto di riferimento sul territorio: sala pesi completa, aree dedicate al functional,
            cardio e una selezione di corsi pensati per ogni livello — dal principiante all’atleta evoluto.
          </p>
          <p className="mt-4 text-black/70 leading-relaxed">
            Metodo, disciplina e ambiente: qui l’allenamento è serio, ma la motivazione la trovi ogni giorno.
          </p>

          <div className="mt-7 flex gap-3 flex-col sm:flex-row">
            <Button href="/courses">Scopri corsi e attività</Button>
            <Button href="/contact" variant="outline">Contattaci</Button>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-soft">
          <img src="/images/grid-2.jpg" alt="Sala pesi" className="w-full h-[420px] object-cover" />
        </div>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {[
          { t: "Macchinari moderni", d: "Attrezzature e spazi aggiornati per performance e sicurezza." },
          { t: "Staff qualificato", d: "Trainer presenti, competenti, focalizzati su progressi reali." },
          { t: "Ambiente motivante", d: "Community attiva: ti alleni meglio perché non sei solo." },
        ].map((x) => (
          <div key={x.t} className="rounded-xl bg-white border border-brand-gray200 p-6">
            <p className="font-heading uppercase tracking-wide text-xl">{x.t}</p>
            <p className="mt-2 text-sm text-black/70">{x.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
