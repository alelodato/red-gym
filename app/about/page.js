import Section from "@/components/Section";
import Button from "@/components/Button";
import { SITE } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

function toPublicSrc(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

function PhotoHeroBand({
  image = "palestra4.webp",
  kicker = "Chi Siamo",
  title = (
    <>
      Ambiente giusto. <br /> Risultati reali.
    </>
  ),
  subtitle =
  "RED GYM è un centro sportivo a Fonte Nuova (Roma) con ampio parcheggio e circa 1.800 mq di spazio: sala pesi completa, aree dedicate e corsi pensati per ogni livello, dal principiante all'atleta esperto.",
  className = "",
}) {

  return (
    <section className={`relative bg-brand-red overflow-hidden ${className}`}>
      {/* Mobile: hero più compatta */}
      <div className="relative h-[480px] sm:h-[620px] lg:h-[720px]">
        <img
          src={toPublicSrc(image)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
      </div>

      {/* Contenuto posizionato meglio su mobile con padding-top */}
      <div className="absolute inset-0 flex items-end sm:items-center">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="pt-24 pb-4 sm:pt-0 sm:pb-0">
            {kicker ? <p className="section-title text-white/85">{kicker}</p> : null}

            {title ? (
              <h1
                className="font-heading uppercase tracking-wide text-white mt-2 leading-tight
                           text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl"
              >
                {title}
              </h1>
            ) : null}

            {subtitle ? (
              <p className="mt-4 text-white/85 max-w-2xl leading-relaxed text-sm sm:text-lg lg:text-xl">
                {subtitle}
              </p>
            ) : null}

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button href="/contact">Chiedi info</Button>
              <Button href="/courses" variant="outline">
                Scopri i corsi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhiteBlock({ children }) {
  return (
    <div className="bg-brand-red">
      {/* Mobile: contenuto diretto senza padding/bordi */}
      <div className="sm:hidden bg-white py-8 px-4">
        {children}
      </div>

      {/* Desktop: con container e bordi */}
      <div className="hidden sm:block px-6 lg:px-8">
        <div className="bg-white border border-brand-gray200 shadow-soft rounded-2xl p-10 lg:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}

function StatsBand({
  bgImage = "palestra7.webp",
  kicker = "In numeri",
  title = "Spazi, esperienza e varietà. Tutto nello stesso posto.",
  lead = "Questi sono i dettagli che rendono Red Gym concreta: struttura ampia, anni di lavoro sul campo, percorsi diversi e attrezzatura pensata per allenarti bene.",
}) {
  const stats = [
    { value: "1.800", label: "mq di struttura", note: "spazi ampi e organizzati" },
    { value: "7", label: "anni di attività", note: "a Fonte Nuova" },
    { value: "8+", label: "discipline", note: "corsi e percorsi per ogni livello" },
    { value: "TOP", label: "macchinari", note: "attrezzatura di ultima generazione" },
  ];

  return (
    <section className="relative bg-brand-red overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bgImage.startsWith("/") ? bgImage : `/${bgImage}`}
          alt=""
          className="h-full w-full object-cover"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/35" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>

      {/* Tagli diagonali solo su desktop */}
      <div className="hidden sm:block pointer-events-none absolute -top-1 left-0 right-0 h-20 bg-brand-red [clip-path:polygon(0_0,100%_0,100%_100%,0_55%)]" />
      <div className="hidden sm:block pointer-events-none absolute -bottom-1 left-0 right-0 h-20 bg-brand-red [clip-path:polygon(0_45%,100%_0,100%_100%,0_100%)]" />

      {/* Content wrapper */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-20 lg:py-16 min-h-[520px] sm:min-h-[540px] lg:min-h-[520px] 2xl:min-h-[560px] 2xl:py-20 flex items-center">
          <div className="w-full">
            <div className="max-w-3xl">
              <p className="section-title text-white/80">{kicker}</p>
              <h3 className="font-heading uppercase tracking-wide text-white text-2xl sm:text-3xl lg:text-4xl mt-2">
                {title}
              </h3>
              <p className="mt-3 text-white/85 leading-relaxed">{lead}</p>
            </div>

            <div className="mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.value + s.label}
                  className="rounded-2xl border border-white/15 bg-black/30 backdrop-blur-[1px] p-6 shadow-soft"
                >
                  <div className="flex items-end gap-2">
                    <span className="font-heading uppercase tracking-wide text-white text-4xl sm:text-5xl">
                      {s.value}
                    </span>
                    <span className="text-white/90 font-semibold pb-1">
                      {s.label}
                    </span>
                  </div>
                  <p className="mt-3 text-white/75 text-sm leading-relaxed">
                    {s.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SplitSection({ kicker, title, text, image, alt, invert = false, cta }) {
  return (
    <section className="sm:rounded-xl sm:bg-white sm:border sm:border-brand-gray200 overflow-hidden">
      <div className="grid lg:grid-cols-12">
        <div className="py-7 sm:p-10 lg:hidden">
          {kicker ? (
            <p className="section-title text-brand-red text-sm">{kicker}</p>
          ) : null}
          <h2 className="font-heading uppercase tracking-wide text-2xl sm:text-3xl mt-2">
            {title}
          </h2>
        </div>

        <div
          className={[
            "lg:col-span-5 relative h-[240px] sm:h-[320px] lg:h-[360px]",
            invert ? "lg:order-2" : "lg:order-1",
          ].join(" ")}
        >
          <Image
            src={toPublicSrc(image)}
            alt={alt || title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div
          className={[
            "lg:col-span-7 py-7 sm:p-10",
            invert ? "lg:order-1" : "lg:order-2",
          ].join(" ")}
        >
          <div className="hidden lg:block">
            {kicker ? (
              <p className="section-title text-brand-red text-sm">{kicker}</p>
            ) : null}
            <h2 className="font-heading uppercase tracking-wide text-2xl sm:text-3xl mt-2">
              {title}
            </h2>
          </div>

          <p className="mt-0 lg:mt-4 text-black/70 leading-relaxed max-w-2xl">
            {text}
          </p>

          {cta ? <div className="mt-7">{cta}</div> : null}
        </div>
      </div>
    </section>
  );
}

function DiagonalBand({
  image = "diagonal3.jpg",
  kicker = "Red Gym",
  title = "Energia. Disciplina. Risultati.",
}) {
  return (
    <section className="relative bg-brand-red overflow-hidden">
      <div className="relative h-[220px] sm:h-[280px] lg:h-[340px]">
        <Image
          src={toPublicSrc(image)}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Tagli diagonali solo su desktop */}
        <div className="hidden sm:block absolute -top-1 left-0 right-0 h-20 bg-brand-red [clip-path:polygon(0_0,100%_0,100%_55%,0_100%)]" />
        <div className="hidden sm:block absolute -bottom-1 left-0 right-0 h-20 bg-brand-red [clip-path:polygon(0_45%,100%_0,100%_100%,0_100%)]" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-title text-white/80">{kicker}</p>
          <h3 className="font-heading uppercase tracking-wide text-white text-2xl sm:text-3xl lg:text-4xl mt-2">
            {title}
          </h3>
        </div>
      </div>
    </section>
  );
}

function FinalCtaHero({ image = "/hero-final.jpg" }) {
  return (
    <section className="relative bg-brand-red overflow-hidden">
      <div className="relative h-[680px] sm:h-[460px] lg:h-[520px]">
        <Image
          src={toPublicSrc(image)}
          alt="Vieni a trovarci"
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/25 sm:bg-black/60" />

        {/* Taglio diagonale solo su desktop */}
        <div className="hidden sm:block absolute -top-1 left-0 right-0 h-20 bg-brand-red [clip-path:polygon(0_0,100%_0,100%_55%,0_100%)]" />
      </div>

      <div className="absolute inset-0 flex sm:hidden">
        <div className="w-full px-4 pt-16 pb-[calc(env(safe-area-inset-bottom)+24px)] flex flex-col justify-end">
          <p className="text-sm font-semibold text-white/80">Vieni a trovarci</p>

          <h2 className="font-heading uppercase tracking-wide text-white text-3xl mt-2">
            Capisci Red Gym solo quando la vivi.
          </h2>

          <p className="mt-4 text-white/85 leading-relaxed">
            Passa in palestra, guarda gli spazi, parla con lo staff e scegli il
            percorso più adatto. Qui trovi qualità, ordine e un supporto reale —
            dal principiante all'atleta avanzato.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full rounded-md px-5 py-3 text-sm font-semibold tracking-wide bg-white text-brand-red hover:bg-white/90 transition-colors"
            >
              Prenota / Contattaci
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center justify-center w-full rounded-md px-5 py-3 text-sm font-semibold tracking-wide border border-white/70 text-white hover:bg-white hover:text-brand-red transition-colors"
            >
              Scopri i corsi
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 hidden sm:flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-7 sm:p-10 lg:p-12 shadow-soft">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="text-sm font-semibold text-white/70">Vieni a trovarci</p>

                <h2 className="font-heading uppercase tracking-wide text-white text-2xl sm:text-3xl lg:text-4xl mt-2">
                  Capisci Red Gym solo quando la vivi.
                </h2>

                <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
                  Passa in palestra, guarda gli spazi, parla con lo staff e scegli
                  il percorso più adatto. Qui non sei mai "da solo": trovi guide,
                  metodo e un ambiente che ti spinge a fare le cose nel modo giusto.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] rounded-md px-5 py-3 text-sm font-semibold tracking-wide bg-white text-brand-red hover:bg-white/90 transition-colors"
                >
                  Prenota / Contattaci
                </Link>

                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] rounded-md px-5 py-3 text-sm font-semibold tracking-wide border border-white text-white hover:bg-white hover:text-brand-red transition-colors"
                >
                  Guarda i corsi
                </Link>
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
      <PhotoHeroBand className="-mt-[var(--nav-h)]" image="palestra7.webp" />

      <div className="space-y-0 sm:space-y-8 lg:space-y-10 sm:pt-10 lg:pt-12">
        <WhiteBlock>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-12">
              <div className="grid lg:grid-cols-2 lg:gap-12 items-center">
                {/* COLONNA SINISTRA: TESTO */}
                <div>
                  <p className="section-title text-brand-red">La nostra storia</p>

                  <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl mt-2">
                    Dal 2018 la tua palestra a Fonte Nuova.
                  </h2>

                  <p className="mt-4 text-black/70 leading-relaxed">
                    Red Gym nasce nel 2018 con un'idea semplice: creare uno spazio ordinato,
                    completo e concreto dove allenarsi bene ogni giorno, con la
                    tranquillità di avere ambienti curati e percorsi chiari. In questi
                    anni la palestra è cresciuta, ma l'obiettivo è rimasto lo stesso:
                    qualità, metodo e costanza, diventando il punto di riferimento per il fitness vicino Roma.
                  </p>
                </div>

                {/* COLONNA DESTRA: FOTO */}
                <div className="mt-8 lg:mt-0">
                  <div className="relative overflow-x-hidden rounded-xl h-[280px] sm:h-[400px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!4v1772036816336!6m8!1m7!1s647rvD25mgsqmeDhXUMgoQ!2m2!1d42.00111503796409!2d12.66803763518375!3f337.2800964449892!4f6.287296922872244!5f0.7820865974627469" className="block w-full h-full max-w-full" style={{ border: 0 }} allowFullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="absolute bg-black/5 pointer-events-auto" />
                  </div>
                  <p className="mt-4 text-center text-sm sm:text-base text-black/60 italic leading-relaxed">
                    La palestra si trova all'interno del complesso del{" "}
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Centro+Commerciale+La+Fonte+Fonte+Nuova+Roma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-red hover:underline"
                    >
                      Centro Commerciale La Fonte
                    </a>
                    , un punto strategico a Fonte Nuova (Roma) con ampio parcheggio dedicato per i nostri soci.
                  </p>
                </div>
              </div>
              <div className="mt-10 sm:rounded-xl sm:border sm:border-brand-gray200 sm:bg-brand-offwhite sm:p-8 lg:p-12">
                <p className="section-title text-brand-red">Il team di red gym</p>

                <h3 className="font-heading uppercase tracking-wide text-2xl mt-2">
                  Donato e la visione Red Gym
                </h3>

                <p className="mt-4 text-black/70 leading-relaxed max-w-3xl">
                  Donato ha fondato Red Gym per offrire un ambiente dove la passione per lo sport incontra un'organizzazione professionale. Con un focus costante sulla tecnica corretta e sul supporto all'atleta, Donato e il suo team lavorano ogni giorno per garantire che ogni iscritto abbia gli strumenti giusti per raggiungere i propri obiettivi, in un clima di rispetto e disciplina.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <div className="relative overflow-hidden rounded-xl shadow-soft h-[400px] sm:h-[350px] lg:h-[450px]">
                      <Image
                        src={toPublicSrc("founder.jpg")}
                        alt="Donato Domenicone - Fondatore Red Gym"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                    <div className="mt-4">
                      <h4 className="font-heading uppercase tracking-wide text-xl text-brand-black">Donato Domenicone</h4>
                      <p className="text-xs uppercase tracking-widest text-brand-red font-bold mt-1">Fondatore e Titolare di Red Gym</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="relative overflow-hidden rounded-xl shadow-soft h-[400px] sm:h-[350px] lg:h-[450px]">
                      <Image
                        src={toPublicSrc("team.jpg")}
                        alt="Vito Lettieri - Direttore Red Gym"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                    <div className="mt-4">
                      <h4 className="font-heading uppercase tracking-wide text-xl text-brand-black">Vito Lettieri</h4>
                      <p className="text-xs uppercase tracking-widest text-brand-red font-bold mt-1">Direttore Red Gym</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button href="/contact">Chiedi info</Button>
                  <Button href="/courses" variant="outline">
                    Scopri i corsi
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 border-t border-brand-gray100 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="section-title text-brand-red">Accoglienza & Professionalità</p>
              <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl mt-2">Alla Red Gym ti senti a casa</h2>
              <p className="mt-4 text-black/70 leading-relaxed">
                Per noi l'accoglienza non è un dettaglio, è il primo passo del tuo percorso.
                Le nostre receptionist ti accolgono con professionalità e attenzione, pronte ad ascoltare le tue esigenze e a guidarti fin dal primo ingresso.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
              <div className="flex flex-col items-center sm:items-stretch">

                {/* Wrapper ristretto solo su mobile */}
                <div className="w-4/5 max-w-[320px] sm:w-full sm:max-w-none">

                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-white border border-brand-gray200 shadow-soft">
                    <Image
                      src={toPublicSrc("GAIA.jpeg")}
                      alt="Gaia - Reception Red Gym"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                  </div>

                  <div className="mt-4 text-left">
                    <h4 className="font-heading uppercase tracking-wide text-xl text-brand-black">
                      Gaia
                    </h4>
                    <p className="text-xs uppercase tracking-widest text-brand-red font-bold mt-1">
                      Reception & Segreteria
                    </p>
                  </div>

                </div>
              </div>

              <div className="hidden lg:flex flex-col items-center justify-center p-8 text-center italic text-black/60 border-x border-brand-gray200 h-full">
                <p className="text-lg leading-relaxed">
                  "Che tu venga per informarti, iniziare un nuovo allenamento o semplicemente chiedere un consiglio, troverai sempre un sorriso e una presenza disponibile. <br />
                  Per noi sentirsi a proprio agio è fondamentale quanto allenarsi bene."
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-stretch">

                {/* Wrapper ristretto solo su mobile */}
                <div className="w-4/5 max-w-[320px] sm:w-full sm:max-w-none">

                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-white border border-brand-gray200 shadow-soft">
                    <Image
                      src={toPublicSrc("ELEONORA.jpeg")}
                      alt="Eleonora - Reception Red Gym"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                  </div>

                  <div className="mt-4 text-left">
                    <h4 className="font-heading uppercase tracking-wide text-xl text-brand-black">
                      Eleonora
                    </h4>
                    <p className="text-xs uppercase tracking-widest text-brand-red font-bold mt-1">
                      Reception & Segreteria
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </WhiteBlock>

        <StatsBand />

        <WhiteBlock>
          <div className="flex flex-col gap-2">
            <p className="section-title text-brand-red">Gli ambienti</p>
            <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl">
              Spazi grandi, curati, pensati per allenarti bene.
            </h2>
            <p className="mt-2 text-black/70 leading-relaxed max-w-3xl">
              Red Gym è organizzata per farti vivere l'allenamento con qualità:
              aree dedicate, attrezzatura selezionata per sicurezza e comfort, e
              un ambiente ordinato e motivante. Allenarsi "nel modo giusto" fa la
              differenza.
            </p>
          </div>

          <div className="mt-10 space-y-0 sm:space-y-8">
            <SplitSection
              kicker="Attrezzatura"
              title="Sala pesi ampia e completa"
              text="Una sala pesi grande e ben organizzata, con macchinari e postazioni selezionate per rispondere a esigenze diverse: forza, controllo, postura, resistenza. L'obiettivo è allenarti con efficacia e continuità, senza caos e con la sicurezza di fare gli esercizi nel modo corretto."
              image="/palestra2.webp"
              alt="Sala pesi moderna"
            />

            <SplitSection
              kicker="Sport da combattimento"
              title="Sale dedicate per allenarti con concentrazione"
              text="Per le discipline da combattimento servono spazio e atmosfera giusta: qui trovi ambienti dedicati per gestire corsi e gruppi in modo ordinato, con attenzione alla tecnica, alla sicurezza e al lavoro strutturato."
              image="/sala3.JPG"
              alt="Sala sport da combattimento"
              invert
            />

            <SplitSection
              kicker="Organizzazione"
              title="Più spazio, più qualità"
              text="Una struttura grande funziona solo se è curata: spazi pensati per ridurre confusione, migliorare l'esperienza e permetterti di allenarti con serenità. È un dettaglio che cambia tutto quando vuoi risultati concreti."
              image="/sala1.jpeg"
              alt="Seconda sala sport da combattimento"
            />
          </div>
        </WhiteBlock>

        <DiagonalBand image="diagonal3.jpg" />

        <WhiteBlock>
          <div className="space-y-0 sm:space-y-8">
            <SplitSection
              kicker="Corsi & Trainer"
              title="Guide competenti, progressioni chiare"
              text="In Red Gym la differenza non la fa solo l'attrezzatura: la fa il supporto. I trainer sono presenti e qualificati, pronti a seguirti che tu stia iniziando o voglia alzare il livello. Tecnica, progressione, sicurezza e un percorso adatto a te."
              image="rgym2.jpeg"
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
              title="Disciplina, rispetto, autocontrollo"
              text="Gli sport insegnano molto più che muoversi: insegnano mentalità. In palestra trovi persone diverse con obiettivi diversi, ma con un punto in comune: la costanza. Un ambiente serio, accogliente e stimolante dove l'energia è quella giusta."
              image="/community.jpeg"
              alt="Community Red Gym"
              invert
            />
          </div>
        </WhiteBlock>

        <FinalCtaHero image="/palestra3.webp" />
      </div>
    </div>
  );
}