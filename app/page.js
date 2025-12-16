import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureGrid from "@/components/FeatureGrid";
import CTA from "@/components/CTA";
import Button from "@/components/Button";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section className="bg-brand-offwhite">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-title text-sm text-black/70">La tua palestra, senza scuse</p>
            <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl">
              Risultati veri. Metodo serio.
            </h2>
          </div>
          <Button href="/about" variant="outline">About la palestra</Button>
        </div>

        <div className="mt-8">
          <FeatureGrid />
        </div>
      </Section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="display-title text-5xl sm:text-6xl leading-none">
            UNISCITI ALLA <span className="text-brand-red">COMMUNITY</span>
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-brand-gray200 p-6">
              <p className="section-title text-brand-red">Scopri il tuo potenziale</p>

              <div className="mt-4 space-y-4">
                {[
                  {
                    t: "Coaching di alto livello",
                    d: "Istruttori qualificati per bodybuilding, functional, boxe, arti marziali e pilates.",
                  },
                  {
                    t: "Programmi che fanno la differenza",
                    d: "Percorsi su misura per migliorare in modo concreto, con progressioni chiare.",
                  },
                  {
                    t: "Una community che ti supporta",
                    d: "Persone che si allenano davvero, ti motivano e ti fanno sentire parte di qualcosa.",
                  },
                ].map((x) => (
                  <div key={x.t} className="border-l-4 border-brand-red pl-4">
                    <p className="font-heading uppercase tracking-wide">{x.t}</p>
                    <p className="mt-1 text-sm text-black/70">{x.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button href="/courses">Vai ai corsi</Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-soft">
              <img
                src="/images/community.jpg"
                alt="Allenamento con bilanciere"
                className="h-full w-full object-cover min-h-[340px]"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
