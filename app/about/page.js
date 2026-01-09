import Section from "@/components/Section";
import Button from "@/components/Button";
import { SITE } from "@/lib/site";

function toPublicSrc(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

/** Wrapper stile Home: grande card bianca sopra sfondo rosso */
function WhiteBlock({ children }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-white border border-brand-gray200 shadow-soft p-8 sm:p-12 lg:p-14">
        {children}
      </div>
    </div>
  );
}

function FeatureCard({ title, text, image, alt }) {
  return (
    <div className="rounded-xl bg-white border border-brand-gray200 overflow-hidden">
      <div className="relative h-[200px] sm:h-[240px]">
        <img
          src={toPublicSrc(image)}
          alt={alt || title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="p-6">
        <h3 className="font-heading uppercase tracking-wide text-xl">{title}</h3>
        <p className="mt-2 text-black/70 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function SplitSection({ kicker, title, text, image, alt, invert = false, cta }) {
  return (
    <section className="rounded-xl bg-white border border-brand-gray200 overflow-hidden">
      <div className="grid lg:grid-cols-12">
        {/* Immagine */}
        <div
          className={[
            "lg:col-span-5 relative h-[240px] sm:h-[320px] lg:h-[360px]",
            invert ? "lg:order-2" : "lg:order-1",
          ].join(" ")}
        >
          <img
            src={toPublicSrc(image)}
            alt={alt || title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Testo */}
        <div
          className={[
            "lg:col-span-7 p-7 sm:p-10",
            invert ? "lg:order-1" : "lg:order-2",
          ].join(" ")}
        >
          {kicker ? (
            <p className="section-title text-brand-red text-sm">{kicker}</p>
          ) : null}

          <h2 className="font-heading uppercase tracking-wide text-2xl sm:text-3xl mt-2">
            {title}
          </h2>

          <p className="mt-4 text-black/70 leading-relaxed max-w-2xl">{text}</p>

          {cta ? <div className="mt-7">{cta}</div> : null}
        </div>
      </div>
    </section>
  );
}

function DiagonalBand({
  image = "pic-diagonal.jpg",
  kicker = "Red Gym",
  title = "Energia. Disciplina. Risultati.",
}) {
  return (
    <section className="relative bg-brand-red overflow-hidden">
      {/* Fascia immagine full width */}
      <div className="relative h-[220px] sm:h-[280px] lg:h-[340px]">
        <img
          src={toPublicSrc(image)}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Tagli diagonali (sopra + sotto) */}
        <div className="absolute -top-1 left-0 right-0 h-16 sm:h-20 bg-brand-red [clip-path:polygon(0_0,100%_0,100%_55%,0_100%)]" />
        <div className="absolute -bottom-1 left-0 right-0 h-16 sm:h-20 bg-brand-red [clip-path:polygon(0_45%,100%_0,100%_100%,0_100%)]" />
      </div>

      {/* Contenuto centrato */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-title text-white/80">{kicker}</p>
          <h3 className="font-heading uppercase tracking-wide text-white text-2xl sm:text-3xl lg:text-4xl mt-2">
            {title}
          </h3>

          {/* opzionale: chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {["Sala pesi", "Combattimento", "Community"].map((x) => (
              <span
                key={x}
                className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaHero({
  image = "hero-final.jpg",
}) {
  return (
    <section className="relative bg-brand-red overflow-hidden">
      {/* Background image */}
      <div className="relative h-[420px] sm:h-[460px] lg:h-[520px]">
        <img
          src={toPublicSrc(image)}
          alt="Vieni a trovarci"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Taglio diagonale sopra (opzionale ma figo) */}
        <div className="absolute -top-1 left-0 right-0 h-16 sm:h-20 bg-brand-red [clip-path:polygon(0_0,100%_0,100%_55%,0_100%)]" />
      </div>

      {/* Contenuto */}
      <div className="absolute inset-0 flex items-end sm:items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-0">
          <div className="rounded-2xl border border-white/15 bg-black/35 p-7 sm:p-10 lg:p-12 shadow-soft">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="text-sm font-semibold text-white/70">
                  Vieni a trovarci
                </p>

                <h2 className="font-heading uppercase tracking-wide text-white text-2xl sm:text-3xl lg:text-4xl mt-2">
                  Il modo migliore per capire è vivere l’ambiente.
                </h2>

                <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
                  Passa in palestra, dai un’occhiata agli spazi, parla con lo staff e scegli il percorso più adatto.
                  Compila il form e ti rispondiamo con tutte le info su corsi, orari e abbonamenti.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center
                             w-full sm:w-auto min-w-[220px]
                             rounded-md px-5 py-3 text-sm font-semibold tracking-wide
                             bg-white text-brand-red hover:bg-white/90 transition-colors"
                >
                  Prenota / Contattaci
                </a>

                <a
                  href="/courses"
                  className="inline-flex items-center justify-center
                             w-full sm:w-auto min-w-[220px]
                             rounded-md px-5 py-3 text-sm font-semibold tracking-wide
                             border border-white text-white
                             hover:bg-white hover:text-brand-red transition-colors"
                >
                  Guarda i corsi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-brand-red">
      <Section className="bg-brand-red">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              {/* su rosso: testo in bianco */}
              <p className="section-title text-white/90">Chi siamo</p>

              <h1 className="font-heading uppercase tracking-wide text-white text-4xl sm:text-5xl mt-2">
                Una palestra grande, conosciuta, con risultati concreti.
              </h1>

              <p className="mt-5 text-white/85 leading-relaxed">
                {SITE.name} è un punto di riferimento sul territorio: sala pesi completa, aree dedicate al
                functional, cardio e una selezione di corsi pensati per ogni livello — dal principiante
                all’atleta evoluto.
              </p>

              <p className="mt-4 text-white/85 leading-relaxed">
                Metodo, disciplina e ambiente: qui l’allenamento è serio, ma la motivazione la trovi ogni giorno.
              </p>

              {/* Bottoni adattati per background rosso (testo invariato) */}
              <div className="mt-7 flex gap-3 flex-col sm:flex-row">
                <a
                  href="/courses"
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide
                             bg-white text-brand-red hover:bg-white/90 transition-colors"
                >
                  Scopri corsi e attività
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide
                             border border-white text-white hover:bg-white hover:text-brand-red transition-colors"
                >
                  Contattaci
                </a>
              </div>
            </div>

            <div className="lg:pr-0">
              <div className="rounded-2xl overflow-hidden shadow-soft border border-white/10 lg:rounded-l-2xl lg:rounded-r-none lg:ml-6">
                <div className="relative">
                  <img
                    src={toPublicSrc("about.jpg")}
                    alt="Red Gym - panoramica sala pesi"
                    className="w-full h-[380px] sm:h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Blocchi successivi: mix con WhiteBlock (layout e testi invariati) */}
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {/* AMBIENTI (WhiteBlock) */}
        <WhiteBlock>
          <div className="flex flex-col gap-2">
            <p className="section-title text-brand-red">Gli ambienti</p>
            <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl">
              Spazi reali, curati, pronti per allenarti sul serio.
            </h2>
            <p className="mt-2 text-black/70 leading-relaxed max-w-3xl">
              Ogni area della palestra è pensata per darti comfort, sicurezza e continuità: dagli spazi per la
              sala pesi alle sale dedicate agli sport da combattimento, fino a spogliatoi e docce con armadietti.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            <SplitSection
              kicker="Ambienti"
              title="Sala pesi moderna e completa"
              text="Una sala pesi ampia, organizzata e aggiornata: macchinari moderni, panche, rack e attrezzatura per lavorare in sicurezza. Gli spazi sono ottimizzati per ridurre attese e permetterti di seguire la tua scheda con continuità, sia che tu sia all’inizio sia che tu stia cercando performance."
              image="about-weights.jpg"
              alt="Sala pesi moderna"
            />

            <SplitSection
              kicker="Sport da combattimento"
              title="Due sale dedicate agli sport da combattimento"
              text="Due ambienti separati per gestire corsi e gruppi in modo ordinato, mantenendo qualità e attenzione. Spazi ideali per boxe e prepugilistica, MMA e discipline tecniche: qui puoi allenarti con la giusta atmosfera, senza sovrapposizioni e con un’organizzazione chiara."
              image="about-combat-1.jpg"
              alt="Sala sport da combattimento"
              invert
            />

            <SplitSection
              kicker="Seconda sala"
              title="Più spazio, più corsi, stessa qualità"
              text="La seconda sala permette di offrire più attività e più fasce orarie, senza sacrificare la qualità dell’allenamento. È la soluzione perfetta per una palestra avviata: più varietà per gli utenti e gestione più fluida dei corsi durante la settimana."
              image="about-combat-2.jpg"
              alt="Seconda sala sport da combattimento"
            />

            <SplitSection
              kicker="Comfort"
              title="Spogliatoi, docce e armadietti"
              text="Allenarsi bene significa anche potersi gestire con comodità. Spogliatoi funzionali con armadietti e docce, pensati per offrirti un’esperienza completa prima e dopo l’allenamento, soprattutto se vieni in pausa pranzo o dopo lavoro."
              image="about-lockers.jpg"
              alt="Spogliatoi e armadietti"
              invert
            />
          </div>
        </WhiteBlock>
        <DiagonalBand image="pic-diagonal.jpg" />
        <WhiteBlock>
          <div className="space-y-8">
            <SplitSection
              kicker="Corsi & Trainer"
              title="Varietà, qualità e guide competenti"
              text="Dalla sala pesi al pilates, dagli sport da combattimento alle discipline tecniche: in Red Gym trovi un’offerta completa e trainer presenti. L’approccio è pratico e misurabile: tecnica corretta, progressioni chiare e un supporto reale in base al tuo livello. Che tu stia iniziando o voglia portare le performance al prossimo step, qui trovi un percorso adatto."
              image="about-trainers.jpg"
              alt="Trainer e coaching"
              cta={
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button href="/courses">Vedi corsi, orari e trainer</Button>
                  <Button href="/contact" variant="outline">
                    Chiedi informazioni
                  </Button>
                </div>
              }
            />

            <SplitSection
              kicker="Community"
              title="Persone diverse, stesso mindset"
              text="In palestra non contano solo gli attrezzi: conta l’energia. La community di Red Gym è fatta di persone con obiettivi diversi — chi vuole rimettersi in forma, chi cerca performance, chi ama i corsi, chi vive gli sport da combattimento — ma con un punto in comune: la costanza. Qui trovi un ambiente motivante, rispettoso e stimolante."
              image="about-community.jpg"
              alt="Community Red Gym"
              invert
            />
          </div>
        </WhiteBlock>
        <FinalCtaHero image="hero-final.jpg" />
      </div>
    </div>
  );
}