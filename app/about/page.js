import Section from "@/components/Section";
import Button from "@/components/Button";
import { SITE } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

function toPublicSrc(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

function WhiteBlock({ children }) {
  return (
    <div className="mx-auto px-0 sm:px-6 lg:px-8">
      <div className="bg-white border border-brand-gray200 shadow-soft p-8 sm:p-12 lg:p-14 rounded-none sm:rounded-2xl border-x-0 sm:border-x">
        {children}
      </div>
    </div>
  );
}

function StatsBand({
  bgImage = "statsband.jpg",
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

      <div className="pointer-events-none absolute -top-1 left-0 right-0 h-16 sm:h-20 bg-brand-red [clip-path:polygon(0_0,100%_0,100%_100%,0_55%)]" />
      <div className="pointer-events-none absolute -bottom-1 left-0 right-0 h-16 sm:h-20 bg-brand-red [clip-path:polygon(0_45%,100%_0,100%_100%,0_100%)]" />

      {/* Content wrapper: enough height to avoid overflow */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={[
            // altezza: cresce su desktop per contenere heading + cards
            "py-12 sm:py-14 lg:py-16",
            // minimo: evita che “strabordi” su viewport bassi / zoom
            "min-h-[520px] sm:min-h-[540px] lg:min-h-[520px]",
            // su schermi grandi respira di più
            "2xl:min-h-[560px] 2xl:py-20",
            "flex items-center",
          ].join(" ")}
        >
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

            {/* safe area iOS / piccoli viewport */}
            <div className="h-[calc(env(safe-area-inset-bottom)+8px)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, text, image, alt }) {
  return (
    <div className="rounded-xl bg-white border border-brand-gray200 overflow-hidden">
      <div className="relative h-[200px] sm:h-[240px]">
        <Image
          src={toPublicSrc(image)}
          alt={alt || title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
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
        <div className="p-7 sm:p-10 lg:hidden">
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
            "lg:col-span-7 p-7 sm:p-10",
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
  image = "pic-diagonal.jpg",
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

        <div className="absolute -top-1 left-0 right-0 h-16 sm:h-20 bg-brand-red [clip-path:polygon(0_0,100%_0,100%_55%,0_100%)]" />
        <div className="absolute -bottom-1 left-0 right-0 h-16 sm:h-20 bg-brand-red [clip-path:polygon(0_45%,100%_0,100%_100%,0_100%)]" />
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

function FinalCtaHero({ image = "hero-final.jpg" }) {
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

        <div className="absolute -top-1 left-0 right-0 h-16 sm:h-20 bg-brand-red [clip-path:polygon(0_0,100%_0,100%_55%,0_100%)]" />
      </div>

      <div className="absolute inset-0 flex sm:hidden">
        <div
          className="
            w-full px-4
            pt-16
            pb-[calc(env(safe-area-inset-bottom)+24px)]
            flex flex-col justify-end
          "
        >
          <p className="text-sm font-semibold text-white/80">Vieni a trovarci</p>

          <h2 className="font-heading uppercase tracking-wide text-white text-3xl mt-2">
            Capisci Red Gym solo quando la vivi.
          </h2>

          <p className="mt-4 text-white/85 leading-relaxed">
            Passa in palestra, guarda gli spazi, parla con lo staff e scegli il
            percorso più adatto. Qui trovi qualità, ordine e un supporto reale —
            dal principiante all’atleta avanzato.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full rounded-md px-5 py-3 text-sm font-semibold tracking-wide
                         bg-white text-brand-red hover:bg-white/90 transition-colors"
            >
              Prenota / Contattaci
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center justify-center w-full rounded-md px-5 py-3 text-sm font-semibold tracking-wide
                         border border-white/70 text-white
                         hover:bg-white hover:text-brand-red transition-colors"
            >
              Scopri i corsi
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 hidden sm:flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/15 bg-black/35 p-7 sm:p-10 lg:p-12 shadow-soft">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="text-sm font-semibold text-white/70">
                  Vieni a trovarci
                </p>

                <h2 className="font-heading uppercase tracking-wide text-white text-2xl sm:text-3xl lg:text-4xl mt-2">
                  Capisci Red Gym solo quando la vivi.
                </h2>

                <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
                  Passa in palestra, guarda gli spazi, parla con lo staff e scegli
                  il percorso più adatto. Qui non sei mai “da solo”: trovi guide,
                  metodo e un ambiente che ti spinge a fare le cose nel modo giusto.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center
                             w-full sm:w-auto min-w-[220px]
                             rounded-md px-5 py-3 text-sm font-semibold tracking-wide
                             bg-white text-brand-red hover:bg-white/90 transition-colors"
                >
                  Prenota / Contattaci
                </Link>

                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center
                             w-full sm:w-auto min-w-[220px]
                             rounded-md px-5 py-3 text-sm font-semibold tracking-wide
                             border border-white text-white
                             hover:bg-white hover:text-brand-red transition-colors"
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
      <Section className="relative bg-brand-red overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={toPublicSrc("about.jpg")}
            alt="Red Gym - panoramica sala pesi"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-brand-red/90" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>

        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="min-h-[620px] sm:min-h-[680px] lg:min-h-[560px] flex items-end lg:items-center py-10 sm:py-14 lg:py-16">
              <div className="w-full lg:max-w-2xl rounded-2xl border border-white/10 bg-brand-red/85 backdrop-blur-[2px] shadow-soft p-6 sm:p-8 lg:p-10">
                <p className="section-title text-white/90">Chi siamo</p>

                <h1 className="font-heading uppercase tracking-wide text-white text-4xl sm:text-5xl mt-2">
                  Allenamento con metodo. <br /> Ambiente giusto. <br /> Risultati reali.
                </h1>

                <p className="mt-5 text-white/85 leading-relaxed">
                  {SITE.name} è un centro sportivo a Fonte Nuova (Roma) con ampio
                  parcheggio e circa 1.800 mq di spazio: sala pesi completa, aree
                  dedicate e corsi pensati per ogni livello, dal principiante
                  all’atleta esperto.
                </p>

                <p className="mt-4 text-white/85 leading-relaxed">
                  Qui l’obiettivo è semplice: farti allenare meglio. Con metodo,
                  disciplina e un team presente che ti segue passo dopo passo.
                </p>

                <div className="mt-7 flex gap-3 flex-col sm:flex-row">
                  <Link
                    href="/courses"
                    className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide
                               bg-white text-brand-red hover:bg-white/90 transition-colors"
                  >
                    Scopri corsi e attività
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide
                               border border-white text-white hover:bg-white hover:text-brand-red transition-colors"
                  >
                    Contattaci
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        <WhiteBlock>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="section-title text-brand-red">La nostra storia</p>

              <h2 className="font-heading uppercase tracking-wide text-3xl sm:text-4xl mt-2">
                Dal 201? la tua palestra a Fonte Nuova.
              </h2>

              <p className="mt-4 text-black/70 leading-relaxed max-w-3xl">
                Red Gym nasce con un’idea semplice: creare uno spazio ordinato,
                completo e concreto dove allenarsi bene ogni giorno, con la
                tranquillità di avere ambienti curati e percorsi chiari. In questi
                anni la palestra è cresciuta, ma l’obiettivo è rimasto lo stesso:
                qualità, metodo e costanza.
              </p>

              <div className="mt-8 rounded-xl border border-brand-gray200 bg-brand-offwhite p-6 sm:p-7">
                <p className="section-title text-brand-red">Il team di red gym</p>

                <h3 className="font-heading uppercase tracking-wide text-xl mt-2">
                  Donato e soci
                </h3>

                <p className="mt-3 text-black/70 leading-relaxed">
                  Qui pensavo di inserire un breve testo con foto per introdurre te e qualche altro collaboratore o socio della palestra.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative overflow-hidden rounded-xl shadow-soft h-[140px] sm:h-[170px]">
                    <Image
                      src={toPublicSrc("founder.jpg")}
                      alt="Fondatore Red Gym"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  <div className="relative overflow-hidden rounded-xl shadow-soft h-[140px] sm:h-[170px]">
                    <Image
                      src={toPublicSrc("team.jpg")}
                      alt="Team Red Gym"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button href="/contact">Chiedi info</Button>
                  <Button href="/courses" variant="outline">
                    Scopri i corsi
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-brand-gray200 bg-white p-6 sm:p-7">
                <p className="section-title text-brand-red">Red Gym</p>

                <ul className="mt-4 space-y-3 text-sm text-black/70">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-red shrink-0" />
                    <span>
                      7 anni di attività a Fonte Nuova, con una struttura ampia e organizzata.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-red shrink-0" />
                    <span>
                      Sala pesi completa, aree dedicate e corsi per ogni livello.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-red shrink-0" />
                    <span>
                      Trainer presenti: tecnica, progressione e sicurezza prima di tutto.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 relative overflow-hidden rounded-xl shadow-soft h-[220px] sm:h-[280px] lg:h-[320px]">
                <Image
                  src={toPublicSrc("about-intro.jpg")}
                  alt="Red Gym - panoramica"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-black/10" />
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
              Red Gym è organizzata per farti vivere l’allenamento con qualità:
              aree dedicate, attrezzatura selezionata per sicurezza e comfort, e
              un ambiente ordinato e motivante. Allenarsi “nel modo giusto” fa la
              differenza.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            <SplitSection
              kicker="Attrezzatura"
              title="Sala pesi ampia e completa"
              text="Una sala pesi grande e ben organizzata, con macchinari e postazioni selezionate per rispondere a esigenze diverse: forza, controllo, postura, resistenza. L’obiettivo è allenarti con efficacia e continuità, senza caos e con la sicurezza di fare gli esercizi nel modo corretto."
              image="sala-pesi.png"
              alt="Sala pesi moderna"
            />

            <SplitSection
              kicker="Sport da combattimento"
              title="Sale dedicate per allenarti con concentrazione"
              text="Per le discipline da combattimento servono spazio e atmosfera giusta: qui trovi ambienti dedicati per gestire corsi e gruppi in modo ordinato, con attenzione alla tecnica, alla sicurezza e al lavoro strutturato."
              image="about-combat-1.jpg"
              alt="Sala sport da combattimento"
              invert
            />

            <SplitSection
              kicker="Organizzazione"
              title="Più spazio, più qualità"
              text="Una struttura grande funziona solo se è curata: spazi pensati per ridurre confusione, migliorare l’esperienza e permetterti di allenarti con serenità. È un dettaglio che cambia tutto quando vuoi risultati concreti."
              image="about-combat-2.jpg"
              alt="Seconda sala sport da combattimento"
            />

            <SplitSection
              kicker="Comfort"
              title="Ambienti curati per ogni esigenza"
              text="Allenarsi bene significa anche gestirsi bene: spogliatoi funzionali, docce e armadietti per il tuo comfort prima e dopo la sessione, soprattutto se vieni in pausa pranzo o dopo lavoro."
              image="about-lockers.jpg"
              alt="Ambienti spogliatoi e docce"
              invert
            />
          </div>
        </WhiteBlock>

        <DiagonalBand image="pic-diagonal.jpg" />

        <WhiteBlock>
          <div className="space-y-8">
            <SplitSection
              kicker="Corsi & Trainer"
              title="Guide competenti, progressioni chiare"
              text="In Red Gym la differenza non la fa solo l’attrezzatura: la fa il supporto. I trainer sono presenti e qualificati, pronti a seguirti che tu stia iniziando o voglia alzare il livello. Tecnica, progressione, sicurezza e un percorso adatto a te."
              image="about2.jpg"
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
              text="Gli sport insegnano molto più che muoversi: insegnano mentalità. In palestra trovi persone diverse con obiettivi diversi, ma con un punto in comune: la costanza. Un ambiente serio, accogliente e stimolante dove l’energia è quella giusta."
              image="community.jpg"
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