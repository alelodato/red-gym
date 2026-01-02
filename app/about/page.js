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
          <img src="about.jpg" alt="Sala pesi" className="w-full h-[420px] object-cover" />
        </div>
      </div>

      <div className="mt-14 space-y-8">
        {/* Sezione 1 */}
        <section className="rounded-xl bg-white border border-brand-gray200 overflow-hidden">
          <div className="grid lg:grid-cols-12">
            {/* Testo */}
            <div className="lg:col-span-7 p-7 sm:p-10">
              <p className="section-title text-brand-red text-sm">Macchinari moderni</p>
              <h2 className="font-heading uppercase tracking-wide text-2xl sm:text-3xl mt-2">
                Attrezzature e spazi aggiornati
              </h2>
              <p className="mt-3 text-black/70 leading-relaxed max-w-2xl">
                Investiamo in macchinari moderni e spazi ottimizzati per offrirti un allenamento efficace e sicuro.
                Dalla sala pesi alle aree functional e cardio: ogni zona è pensata per farti lavorare bene, senza attese inutili.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-brand-gray200 px-3 py-1 text-xs font-semibold text-black/70">
                  Sala pesi completa
                </span>
                <span className="rounded-full border border-brand-gray200 px-3 py-1 text-xs font-semibold text-black/70">
                  Area cardio
                </span>
                <span className="rounded-full border border-brand-gray200 px-3 py-1 text-xs font-semibold text-black/70">
                  Functional zone
                </span>
              </div>

              <div className="mt-7 h-[3px] w-16 bg-brand-red rounded" />
            </div>

            {/* Immagine */}
            <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[320px]">
              <img
                src="about4.jpg"
                alt="Macchinari e sala pesi"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </section>

        {/* Sezione 2 */}
        <section className="rounded-xl bg-white border border-brand-gray200 overflow-hidden">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7 p-7 sm:p-10">
              <p className="section-title text-brand-red text-sm">Staff qualificato</p>
              <h2 className="font-heading uppercase tracking-wide text-2xl sm:text-3xl mt-2">
                Trainer presenti, competenti, concreti
              </h2>
              <p className="mt-3 text-black/70 leading-relaxed max-w-2xl">
                Il nostro staff ti segue davvero: tecnica corretta, progressioni chiare e consigli utili in base al tuo livello.
                Che tu stia iniziando o che tu sia già avanzato, l’obiettivo è uno: farti migliorare in modo misurabile.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-brand-gray200 px-3 py-1 text-xs font-semibold text-black/70">
                  Tecnica corretta
                </span>
                <span className="rounded-full border border-brand-gray200 px-3 py-1 text-xs font-semibold text-black/70">
                  Programmi su misura
                </span>
                <span className="rounded-full border border-brand-gray200 px-3 py-1 text-xs font-semibold text-black/70">
                  Progressi misurabili
                </span>
              </div>

              <div className="mt-7 h-[3px] w-16 bg-brand-red rounded" />
            </div>

            <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[320px]">
              <img
                src="about2.jpg"
                alt="Trainer e coaching"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </section>

        {/* Sezione 3 */}
        <section className="rounded-xl bg-white border border-brand-gray200 overflow-hidden">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7 p-7 sm:p-10">
              <p className="section-title text-brand-red text-sm">Ambiente motivante</p>
              <h2 className="font-heading uppercase tracking-wide text-2xl sm:text-3xl mt-2">
                Una community che ti spinge in alto
              </h2>
              <p className="mt-3 text-black/70 leading-relaxed max-w-2xl">
                Allenarsi è più facile quando l’ambiente è quello giusto. In Red Gym trovi persone determinate,
                energia positiva e un clima che ti aiuta a restare costante. Qui non vieni “solo a fare presenza”: vieni a crescere.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-brand-gray200 px-3 py-1 text-xs font-semibold text-black/70">
                  Energia
                </span>
                <span className="rounded-full border border-brand-gray200 px-3 py-1 text-xs font-semibold text-black/70">
                  Costanza
                </span>
                <span className="rounded-full border border-brand-gray200 px-3 py-1 text-xs font-semibold text-black/70">
                  Supporto reale
                </span>
              </div>

              <div className="mt-7 h-[3px] w-16 bg-brand-red rounded" />
            </div>

            <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[320px]">
              <img
                src="about3.jpg"
                alt="Community e allenamento"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </section>
      </div>
    </Section>
  );
}
