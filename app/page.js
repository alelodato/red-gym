import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";

function toPublicSrc(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

function Card({ kicker, title, text, href, ctaLabel }) {
  return (
    <div className="rounded-xl bg-white border border-brand-gray200 p-6 sm:p-7">
      {kicker ? <p className="section-title text-brand-red">{kicker}</p> : null}
      <h3 className="font-heading uppercase tracking-wide text-2xl mt-2">{title}</h3>
      <p className="mt-3 text-black/70 leading-relaxed">{text}</p>
      {href ? (
        <div className="mt-6">
          <Button href={href}>{ctaLabel || "Scopri di più"}</Button>
        </div>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ABOUT SUMMARY */}
      <Section className="bg-brand-offwhite">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-title text-sm text-black/70">La palestra</p>
            <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl">
              Spazi reali. Allenamento serio.
            </h2>
            <p className="mt-3 text-black/70 max-w-2xl leading-relaxed">
              Sala pesi moderna, aree dedicate e ambienti curati: un punto di riferimento sul territorio per chi vuole risultati concreti.
            </p>
          </div>

          <Button href="/about" variant="outline">
            Scopri la palestra
          </Button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 grid gap-6 md:grid-cols-2">
            <Card
              kicker="Ambienti"
              title="Sala pesi moderna"
              text="Attrezzature aggiornate e spazi ottimizzati per allenarti bene, senza perdere tempo."
              href="/about"
              ctaLabel="Vedi gli ambienti"
            />
            <Card
              kicker="Sport da combattimento"
              title="2 sale dedicate"
              text="Spazi separati per gestire più corsi e livelli mantenendo qualità e organizzazione."
              href="/courses"
              ctaLabel="Scopri i corsi"
            />
            <Card
              kicker="Comfort"
              title="Spogliatoi & docce"
              text="Armadietti, docce e spazi comodi: allenati con serenità prima e dopo la sessione."
              href="/about"
              ctaLabel="Dettagli"
            />
            <Card
              kicker="Community"
              title="Ambiente motivante"
              text="Persone diverse, stesso mindset: costanza, rispetto e energia positiva."
              href="/about"
              ctaLabel="Leggi la storia"
            />
          </div>

          <div className="lg:col-span-5 relative overflow-hidden rounded-xl shadow-soft min-h-[360px]">
            <img
              src={toPublicSrc("about4.jpg")}
              alt="Red Gym - ambienti palestra"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </Section>

      {/* COURSES SUMMARY */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-title text-brand-red">Corsi & attività</p>
              <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl">
                Trova il tuo percorso.
              </h2>
              <p className="mt-3 text-black/70 max-w-2xl leading-relaxed">
                Ogni corso ha descrizione, orari e trainer dedicati: sala pesi/fitness, pilates, boxe (con prepugilistica), MMA, karate e judo.
              </p>
            </div>

            <Button href="/courses" variant="outline">
              Vedi corsi e orari
            </Button>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7 rounded-xl border border-brand-gray200 p-6 sm:p-7">
              <p className="section-title text-brand-red">In evidenza</p>

              <div className="mt-4 space-y-4">
                {[
                  {
                    t: "Sala pesi & Fitness",
                    d: "Forza, ipertrofia, tonificazione e programmi su misura con supporto reale.",
                  },
                  {
                    t: "Pilates",
                    d: "Postura, mobilità e controllo: ideale per benessere e integrazione all’allenamento.",
                  },
                  {
                    t: "Boxe + Prepugilistica",
                    d: "Tecnica, coordinazione e condizionamento. Percorso propedeutico per costruire basi solide.",
                  },
                  {
                    t: "MMA • Karate • Judo",
                    d: "Discipline tecniche e complete: progressioni chiare e lavoro strutturato.",
                  },
                ].map((x) => (
                  <div key={x.t} className="border-l-4 border-brand-red pl-4">
                    <p className="font-heading uppercase tracking-wide">{x.t}</p>
                    <p className="mt-1 text-sm text-black/70">{x.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button href="/courses">Vai ai corsi</Button>
                <Button href="/contact" variant="outline">
                  Chiedi info
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative overflow-hidden rounded-xl shadow-soft min-h-[340px]">
              <img
                src={toPublicSrc("about2.jpg")}
                alt="Corsi Red Gym"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SUMMARY */}
      <Section className="bg-brand-offwhite">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-title text-sm text-black/70">Abbonamenti</p>
            <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl">
              Scegli la formula giusta.
            </h2>
            <p className="mt-3 text-black/70 max-w-2xl leading-relaxed">
              Opzioni mensili e annuali, pacchetti e soluzioni per corsi: trovi la formula più adatta alle tue esigenze.
            </p>
          </div>

          <Button href="/pricing" variant="outline">
            Vedi prezzi
          </Button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Card
            kicker="Flessibile"
            title="Mensile"
            text="Perfetto per iniziare e prendere ritmo. Entra in palestra e prova l’ambiente."
            href="/pricing"
            ctaLabel="Scopri"
          />
          <Card
            kicker="Conveniente"
            title="Annuale"
            text="La scelta migliore se vuoi continuità e risultati nel tempo."
            href="/pricing"
            ctaLabel="Dettagli"
          />
          <Card
            kicker="Corsi"
            title="Attività"
            text="Pacchetti e accessi dedicati alle discipline e agli orari che preferisci."
            href="/pricing"
            ctaLabel="Vedi opzioni"
          />
        </div>
      </Section>

      {/* CONTACT + MAP */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-title text-brand-red">Contatti</p>
              <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl">
                Vieni a trovarci.
              </h2>
              <p className="mt-3 text-black/70 max-w-2xl leading-relaxed">
                Compila il form per info su corsi, orari e abbonamenti. Oppure raggiungici direttamente in sede.
              </p>
            </div>

            <Button href="/contact" variant="outline">
              Apri pagina contatti
            </Button>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            {/* FORM (semplice) */}
            <div className="lg:col-span-6 rounded-xl border border-brand-gray200 p-6 sm:p-7">
              <form className="grid gap-4">
                <div>
                  <label className="text-sm font-semibold text-black/70">Nome</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border border-brand-gray200 px-4 py-3 outline-none focus:border-brand-red"
                    placeholder="Il tuo nome"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-black/70">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border border-brand-gray200 px-4 py-3 outline-none focus:border-brand-red"
                    placeholder="nome@email.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-black/70">Messaggio</label>
                  <textarea
                    rows="5"
                    className="mt-1 w-full rounded-md border border-brand-gray200 px-4 py-3 outline-none focus:border-brand-red"
                    placeholder="Scrivi qui la tua richiesta..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold
                               bg-brand-red text-white hover:opacity-90 transition"
                  >
                    Invia richiesta
                  </button>

                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold
                               border border-brand-gray200 text-black/70 hover:border-brand-red hover:text-brand-red transition"
                  >
                    Contatti completi
                  </a>
                </div>
              </form>
            </div>

            {/* MAP */}
            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-brand-gray200">
              <div className="relative h-[420px]">
                <iframe
                className="w-full h-64"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.216478787936!2d12.621904015713814!3d41.99959437921157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325c9b42fa47a3f%3A0x8e8b16b55b4b7f9e!2sVia%20delle%20Molette%2C%20245%2C%2000013%20Fonte%20Nuova%20RM%2C%20Italia!5e0!3m2!1sit!2sit!4v1704440000000!5m2!1sit!2sit"
              />
              </div>

              <div className="p-6 sm:p-7 bg-white">
                <p className="font-heading uppercase tracking-wide text-lg">Red Gym – Fonte Nuova</p>
                <p className="mt-2 text-sm text-black/70">
                  Inserisci qui indirizzo completo + telefono/WhatsApp quando li hai definitivi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}