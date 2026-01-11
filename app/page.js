import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";

function toPublicSrc(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

/**
 * ✅ WhiteSection responsiva:
 * - default: full width su mobile (px-0, no rounded, no border-x)
 * - da sm in su: torna boxed come prima
 * - puoi disattivare con fullOnMobile={false} (per il blocco Contact)
 */
function WhiteSection({ children, id, fullOnMobile = true }) {
  return (
    <section id={id} className="bg-brand-red">
      <div
        className={[
          "mx-auto max-w-6xl",
          fullOnMobile ? "px-0 sm:px-6 lg:px-8" : "px-4 sm:px-6 lg:px-8",
        ].join(" ")}
      >
        <div
          className={[
            "bg-white border border-brand-gray200 shadow-soft",
            fullOnMobile
              ? "rounded-none sm:rounded-2xl border-x-0 sm:border-x p-7 sm:p-10 lg:p-12"
              : "rounded-2xl p-7 sm:p-10 lg:p-12",
          ].join(" ")}
        >
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

function Card({ kicker, title, text, href, ctaLabel, imageSrc, imageAlt }) {
  return (
    <div className="rounded-xl bg-white border border-brand-gray200 p-6 sm:p-7">
      {kicker ? <p className="section-title text-brand-red">{kicker}</p> : null}

      <h3 className="font-heading uppercase tracking-wide text-xl sm:text-2xl mt-2">
        {title}
      </h3>

      {imageSrc ? (
        <div className="mt-4 lg:hidden">
          <div className="relative overflow-hidden rounded-xl shadow-soft h-[170px] sm:h-[200px] md:h-[220px]">
            <img
              src={toPublicSrc(imageSrc)}
              alt={imageAlt || title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      ) : null}

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

function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {images.map((img) => (
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
  );
}

function DiagonalCuts({ flip = false, heightClass = "h-16 sm:h-20" }) {
  const topClip = flip
    ? "[clip-path:polygon(0_0,100%_0,100%_100%,0_55%)]"
    : "[clip-path:polygon(0_0,100%_0,100%_55%,0_100%)]";

  const bottomClip = flip
    ? "[clip-path:polygon(0_0,100%_45%,100%_100%,0_100%)]"
    : "[clip-path:polygon(0_45%,100%_0,100%_100%,0_100%)]";

  return (
    <>
      <div
        className={[
          "absolute -top-1 left-0 right-0 bg-brand-red",
          heightClass,
          topClip,
        ].join(" ")}
      />
      <div
        className={[
          "absolute -bottom-1 left-0 right-0 bg-brand-red",
          heightClass,
          bottomClip,
        ].join(" ")}
      />
    </>
  );
}

function DiagonalPhoto({
  image = "diagonal1.jpg",
  alt = "Red Gym",
  flip = false,
  heightClass = "h-[280px] sm:h-[340px] lg:h-[430px]",
}) {
  return (
    <section className="relative bg-brand-red overflow-hidden">
      <div className={["relative", heightClass].join(" ")}>
        <img
          src={toPublicSrc(image)}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <DiagonalCuts flip={flip} heightClass="h-20 sm:h-24" />
      </div>
    </section>
  );
}

function DiagonalBand({
  image = "diagonal2.jpg",
  kicker = "Red Gym",
  title = "Energia. Disciplina. Risultati.",
  chips = ["Sala pesi", "Combattimento", "Community"],
  flip = true,
}) {
  return (
    <section className="relative bg-brand-red overflow-hidden">
      <div className="relative h-[230px] sm:h-[280px] lg:h-[340px]">
        <img
          src={toPublicSrc(image)}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <DiagonalCuts flip={flip} heightClass="h-16 sm:h-20" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-title text-white/85">{kicker}</p>
          <h3 className="font-heading uppercase tracking-wide text-white text-2xl sm:text-3xl lg:text-4xl mt-2">
            {title}
          </h3>

          {chips?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {chips.map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85"
                >
                  {x}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const ABOUT_IMAGES = [
    { src: "pesi.jpg", alt: "Sala pesi moderna" },
    { src: "combat.jpg", alt: "Sala sport da combattimento" },
    { src: "sala.jpg", alt: "Spogliatoi e docce" },
    { src: "community.jpg", alt: "Community Red Gym" },
  ];

  return (
    <>
      <Hero />

      <div className="bg-brand-red">
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 py-8 sm:py-10 lg:py-12">
          {/* ABOUT (full width mobile) */}
          <WhiteSection id="home-about" fullOnMobile>
            <SectionHead
              kicker="La palestra"
              title="Spazi reali. Allenamento serio."
              lead="Sala pesi moderna, aree dedicate e ambienti curati: un punto di riferimento sul territorio per chi vuole risultati concreti."
              ctaHref="/about"
              ctaLabel="Scopri la palestra"
            />

            <div className="mt-6 lg:mt-10 grid gap-6 lg:grid-cols-12">
              <div className="order-1 lg:order-2 lg:col-span-5 hidden lg:block">
                <ImageGrid images={ABOUT_IMAGES} />
              </div>

              <div className="order-2 lg:order-1 lg:col-span-7 grid gap-6 md:grid-cols-2">
                <Card
                  kicker="Ambienti"
                  title="Sala pesi moderna"
                  imageSrc="pesi.jpg"
                  imageAlt="Sala pesi moderna"
                  text="Attrezzature aggiornate e spazi ottimizzati per allenarti bene, senza perdere tempo."
                  href="/about"
                  ctaLabel="Vedi gli ambienti"
                />
                <Card
                  kicker="Sport da combattimento"
                  title="2 sale dedicate"
                  imageSrc="combat.jpg"
                  imageAlt="Sala sport da combattimento"
                  text="Spazi separati per gestire più corsi e livelli mantenendo qualità e organizzazione."
                  href="/courses"
                  ctaLabel="Scopri i corsi"
                />
                <Card
                  kicker="Comfort"
                  title="Spogliatoi & docce"
                  imageSrc="sala.jpg"
                  imageAlt="Spogliatoi e docce"
                  text="Armadietti, docce e spazi comodi: allenati con serenità prima e dopo la sessione."
                  href="/about"
                  ctaLabel="Dettagli"
                />
                <Card
                  kicker="Community"
                  title="Ambiente motivante"
                  imageSrc="community.jpg"
                  imageAlt="Community Red Gym"
                  text="Persone diverse, stesso mindset: costanza, rispetto e energia positiva."
                  href="/about"
                  ctaLabel="Leggi la storia"
                />
              </div>
            </div>
          </WhiteSection>

          <DiagonalPhoto image="diagonal1.jpg" alt="Red Gym - energia" flip={false} />

          {/* COURSES (full width mobile) */}
          <WhiteSection id="home-courses" fullOnMobile>
            <SectionHead
              kicker="Corsi & attività"
              title="Trova il tuo percorso."
              lead="Ogni corso ha descrizione, orari e trainer dedicati: sala pesi/fitness, pilates, boxe (con prepugilistica), MMA, karate e judo."
              ctaHref="/courses"
              ctaLabel="Vedi corsi e orari"
            />

            <div className="mt-6 lg:mt-10 grid gap-6 lg:grid-cols-12">
              <div className="order-1 lg:order-2 lg:col-span-5 relative overflow-hidden rounded-xl shadow-soft min-h-[240px] sm:min-h-[300px] lg:min-h-[420px]">
                <img
                  src={toPublicSrc("about2.jpg")}
                  alt="Corsi Red Gym"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="order-2 lg:order-1 lg:col-span-7 rounded-xl border border-brand-gray200 p-6 sm:p-7 bg-white">
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
            </div>
          </WhiteSection>

          <DiagonalBand
            image="diagonal2.jpg"
            kicker="Red Gym"
            title="Energia. Disciplina. Risultati."
            chips={["Sala pesi", "Corsi", "Supporto"]}
            flip={true}
          />

          {/* PRICING (full width mobile) */}
          <WhiteSection id="home-pricing" fullOnMobile>
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

          <DiagonalPhoto image="diagonal3.jpg" alt="Red Gym - community" flip={false} />

          {/* CONTACT (boxed anche su mobile) */}
          <WhiteSection id="home-contact" fullOnMobile={false}>
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
                    <label className="text-sm font-semibold text-black/70">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-md border border-brand-gray200 px-4 py-3 outline-none focus:border-brand-red"
                      placeholder="Il tuo nome"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-black/70">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 w-full rounded-md border border-brand-gray200 px-4 py-3 outline-none focus:border-brand-red"
                      placeholder="nome@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-black/70">
                      Messaggio
                    </label>
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
                    * Form placeholder: colleghiamo l’invio quando vuoi
                    (EmailJS/Resend).
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
                    Inserisci qui indirizzo completo + telefono/WhatsApp quando li
                    hai definitivi.
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