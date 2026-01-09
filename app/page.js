import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";

function toPublicSrc(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

/** Sezione “big white block” sopra background rosso */
function WhiteSection({ children, id }) {
  return (
    <section id={id} className="bg-brand-red">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-brand-gray200 shadow-soft p-7 sm:p-10 lg:p-12">
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
          <p className="mt-4 text-black/70 leading-relaxed max-w-2xl text-sm sm:text-[15px] lg:text-base">
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

function Card({ kicker, title, text, href, ctaLabel }) {
  return (
    <div className="rounded-xl bg-white border border-brand-gray200 p-6 sm:p-7">
      {kicker ? <p className="section-title text-brand-red">{kicker}</p> : null}
      <h3 className="font-heading uppercase tracking-wide text-xl sm:text-2xl mt-2">
        {title}
      </h3>
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

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Background rosso globale sotto la hero */}
      <div className="bg-brand-red">
        {/* gap più piccolo su desktop (meno rosso “tra” le sezioni) */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 py-8 sm:py-10 lg:py-12">
          {/* ABOUT */}
          <WhiteSection id="home-about">
            <SectionHead
              kicker="La palestra"
              title="Spazi reali. Allenamento serio."
              lead="Sala pesi moderna, aree dedicate e ambienti curati: un punto di riferimento sul territorio per chi vuole risultati concreti."
              ctaHref="/about"
              ctaLabel="Scopri la palestra"
            />

            <div className="mt-8 lg:mt-10 grid gap-6 lg:grid-cols-12">
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

              {/* Grid immagini più grande (meno “vuoto” rosso attorno) */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { src: "home-weights.jpg", alt: "Sala pesi moderna" },
                  { src: "home-combat1.jpg", alt: "Sala sport da combattimento" },
                  { src: "home-lockers.jpg", alt: "Spogliatoi e docce" },
                  { src: "home-community.jpg", alt: "Community Red Gym" },
                ].map((img) => (
                  <div
                    key={img.src}
                    className="relative overflow-hidden rounded-xl shadow-soft h-[170px] sm:h-[190px] lg:h-[240px]"
                  >
                    <img
                      src={toPublicSrc(img.src)}
                      alt={img.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                ))}
              </div>
            </div>
          </WhiteSection>

          {/* COURSES */}
          <WhiteSection id="home-courses">
            <SectionHead
              kicker="Corsi & attività"
              title="Trova il tuo percorso."
              lead="Ogni corso ha descrizione, orari e trainer dedicati: sala pesi/fitness, pilates, boxe (con prepugilistica), MMA, karate e judo."
              ctaHref="/courses"
              ctaLabel="Vedi corsi e orari"
            />

            <div className="mt-8 lg:mt-10 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7 rounded-xl border border-brand-gray200 p-6 sm:p-7 bg-white">
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
                      <p className="font-heading uppercase tracking-wide text-lg">
                        {x.t}
                      </p>
                      <p className="mt-1 text-sm text-black/70 leading-relaxed">
                        {x.d}
                      </p>
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

              <div className="lg:col-span-5 relative overflow-hidden rounded-xl shadow-soft min-h-[320px] lg:min-h-[420px]">
                <img
                  src={toPublicSrc("about2.jpg")}
                  alt="Corsi Red Gym"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
          </WhiteSection>

          {/* PRICING */}
          <WhiteSection id="home-pricing">
            <SectionHead
              kicker="Abbonamenti"
              title="Scegli la formula giusta."
              lead="Opzioni mensili e annuali, pacchetti e soluzioni per corsi: trovi la formula più adatta alle tue esigenze."
              ctaHref="/pricing"
              ctaLabel="Vedi prezzi"
            />

            <div className="mt-8 lg:mt-10 grid gap-6 lg:grid-cols-3">
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
          </WhiteSection>

          {/* CONTACT */}
          <WhiteSection id="home-contact">
            <SectionHead
              kicker="Contatti"
              title="Vieni a trovarci."
              lead="Compila il form per info su corsi, orari e abbonamenti. Oppure raggiungici direttamente in sede."
              ctaHref="/contact"
              ctaLabel="Apri contatti"
            />

            <div className="mt-8 lg:mt-10 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-6 rounded-xl border border-brand-gray200 p-6 sm:p-7 bg-white">
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

                  <p className="text-xs text-black/50">
                    * Form placeholder: colleghiamo l’invio quando vuoi (EmailJS/Resend).
                  </p>
                </form>
              </div>

              <div className="lg:col-span-6 rounded-xl overflow-hidden border border-brand-gray200 bg-white">
                <div className="relative h-[360px] sm:h-[420px] lg:h-[460px]">
                  <iframe
                    title="Google Maps - Red Gym"
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.216478787936!2d12.621904015713814!3d41.99959437921157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325c9b42fa47a3f%3A0x8e8b16b55b4b7f9e!2sVia%20delle%20Molette%2C%20245%2C%2000013%20Fonte%20Nuova%20RM%2C%20Italia!5e0!3m2!1sit!2sit!4v1704440000000!5m2!1sit!2sit"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <p className="font-heading uppercase tracking-wide text-lg">
                    Red Gym – Fonte Nuova
                  </p>
                  <p className="mt-2 text-sm text-black/70">
                    Inserisci qui indirizzo completo + telefono/WhatsApp quando li hai definitivi.
                  </p>
                </div>
              </div>
            </div>
          </WhiteSection>
        </div>
      </div>
    </>
  );
}