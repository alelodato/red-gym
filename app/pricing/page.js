import Button from "@/components/Button";

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

function PhotoHeroBand({
  image = "reception.jpg",
  kicker = "Abbonamenti",
  title = (
    <>
    Prezzi e formule. 
    <br />
    Scegli il percorso giusto per te.
    </>
  ),
  subtitle =
    "Prezzi chiari e soluzioni flessibili: sala pesi con diverse fasce orarie e corsi dedicati. Se vuoi, scrivici e ti aiutiamo a scegliere in base ai tuoi obiettivi e agli orari.",
  className = "",
}) {
  const bottomClip = "[clip-path:polygon(0_45%,100%_0,100%_100%,0_100%)]";

  return (
    <section className={`relative bg-brand-red overflow-hidden ${className}`}>
      <div className="relative h-[520px] sm:h-[620px] lg:h-[720px]">
        <img
          src={toPublicSrc(image)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />

        <div className={`absolute -bottom-1 left-0 right-0 h-20 sm:h-24 bg-brand-red ${bottomClip}`} />
      </div>

      {/* Contenuto: stessi margini delle altre pagine */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="pb-14 sm:pb-0">
            {kicker ? <p className="section-title text-white/85">{kicker}</p> : null}

            {title ? (
              <h1
                className="font-heading uppercase tracking-wide text-white mt-2 leading-[0.95]
                           text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl"
              >
                {title}
              </h1>
            ) : null}

            {subtitle ? (
              <p className="mt-4 text-white/85 max-w-2xl leading-relaxed text-base sm:text-lg lg:text-xl">
                {subtitle}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
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

const GYM_PLANS = [
  {
    duration: "1 mese",
    items: [
      { name: "Open", price: "75€", note: "+ iscr. annuale 20€" },
      { name: "2 fasce orarie (a scelta)", price: "65€", note: "+ iscr. annuale 20€" },
      { name: "1 fascia oraria (7/11 o 11/15)", price: "60€", note: "+ iscr. annuale 20€" },
      { name: "1 fascia oraria (20/23)", price: "55€", note: "+ iscr. annuale 20€" },
    ],
  },
  {
    duration: "3 mesi",
    items: [
      { name: "Open", price: "195€", note: "+ iscr. annuale 20€" },
      { name: "2 fasce orarie (a scelta)", price: "183€", note: "+ iscr. annuale 20€" },
      { name: "1 fascia oraria (7/11 o 11/15)", price: "169€", note: "+ iscr. annuale 20€" },
      { name: "1 fascia oraria (20/23)", price: "155€", note: "+ iscr. annuale 20€" },
    ],
  },
  {
    duration: "6 mesi",
    items: [
      { name: "Open", price: "370€", note: "+ iscr. annuale 20€" },
      { name: "2 fasce orarie (a scelta)", price: "351€", note: "+ iscr. annuale 20€" },
      { name: "1 fascia oraria (7/11 o 11/15)", price: "305€", note: "+ iscr. annuale 20€" },
      { name: "1 fascia oraria (20/23)", price: "280€", note: "+ iscr. annuale 20€" },
    ],
    paymentNote:
      "Modalità di pagamento: contanti / bancomat. In 2 rate: 1ª all’acquisto, 2ª entro 30 gg.",
  },
  {
    duration: "12 mesi",
    items: [
      { name: "Open", price: "610€", note: "+ iscr. inclusa" },
      { name: "2 fasce orarie (a scelta)", price: "552€", note: "+ iscr. inclusa" },
      { name: "1 fascia oraria (7/11 o 11/15)", price: "516€", note: "+ iscr. inclusa" },
      { name: "1 fascia oraria (20/23)", price: "470€", note: "+ iscr. inclusa" },
    ],
    paymentNote:
      "Modalità di pagamento: contanti / bancomat. Unica soluzione (omaggio: borsone) oppure in 2 rate: 1ª all’acquisto, 2ª entro 30 gg (omaggio: borsone).",
  },
];

const EXTRA_COURSES = [
  {
    title: "Judo",
    lines: [
      { label: "Mensile (2 volte)", price: "55€", note: "+ 10€ iscrizione + 40€ affiliazione" },
      { label: "Mensile (3 volte)", price: "65€", note: "+ 10€ iscrizione + 40€ affiliazione" },
    ],
  },
  {
    title: "Grappling",
    lines: [{ label: "Mensile + 1 fascia oraria (20/23)", price: "65€", note: "+ iscr. annuale 20€" }],
  },
  {
    title: "Karate",
    lines: [
      { label: "1 mese (2 volte)", price: "55€", note: "+ 10€ iscrizione + 40€ affiliazione" },
      { label: "1 mese (3 volte)", price: "65€", note: "+ 10€ iscrizione + 40€ affiliazione" },
      { label: "3 mesi (2 volte)", price: "150€", note: "+ 10€ iscrizione + 40€ affiliazione" },
      { label: "3 mesi (3 volte)", price: "165€", note: "+ 10€ iscrizione + 40€ affiliazione" },
    ],
    smallNote: "Sconto sorelle/fratelli: -10% dal 2° iscritto",
  },
  {
    title: "Boxe",
    lines: [{ label: "Boxe", price: "70€ / mese", note: "+ iscr. annuale 20€" }],
  },
  {
    title: "Boxe Junior (10–13)",
    lines: [{ label: "Boxe Junior", price: "60€ / mese", note: "+ iscr. annuale 20€" }],
    smallNote: "Sconto sorelle/fratelli: -10% dal 2° iscritto",
  },
];

function PriceGrid({ groups }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {groups.map((g) => (
        <div
          key={g.duration}
          className="rounded-xl border border-brand-gray200 bg-white overflow-hidden"
        >
          <div className="bg-brand-black text-white px-5 py-4">
            <p className="font-heading uppercase tracking-wide text-lg">{g.duration}</p>
          </div>

          <div className="p-6 sm:p-7 space-y-4">
            {g.items.map((it) => (
              <div
                key={g.duration + it.name}
                className="flex items-start justify-between gap-6 border-b border-brand-gray200 pb-4 last:border-b-0 last:pb-0"
              >
                <div>
                  <p className="font-semibold text-brand-black">{it.name}</p>
                  <p className="text-sm text-black/60 mt-1">{it.note}</p>
                </div>

                <p className="font-heading uppercase tracking-wide text-xl text-brand-black whitespace-nowrap">
                  {it.price}
                </p>
              </div>
            ))}

            {g.paymentNote ? (
              <div className="pt-3 text-sm text-black/70">
                <span className="font-semibold text-brand-black">Pagamento:</span> {g.paymentNote}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExtraCoursesGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {EXTRA_COURSES.map((c) => (
        <div key={c.title} className="rounded-xl border border-brand-gray200 bg-white overflow-hidden">
          <div className="bg-brand-black text-white px-5 py-4">
            <p className="font-heading uppercase tracking-wide text-lg">{c.title}</p>
          </div>

          <div className="p-6 sm:p-7 space-y-4">
            {c.lines.map((l, idx) => (
              <div
                key={c.title + idx}
                className="flex items-start justify-between gap-6 border-b border-brand-gray200 pb-4 last:border-b-0 last:pb-0"
              >
                <div>
                  <p className="font-semibold text-brand-black">{l.label}</p>
                  <p className="text-sm text-black/60 mt-1">{l.note}</p>
                </div>

                <p className="font-heading uppercase tracking-wide text-xl text-brand-black whitespace-nowrap">
                  {l.price}
                </p>
              </div>
            ))}

            {c.smallNote ? <p className="text-sm text-black/70 pt-2">{c.smallNote}</p> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="bg-brand-red">
      <PhotoHeroBand className="-mt-[var(--nav-h)]" image="reception (3).webp" />

      <div className="space-y-6 sm:space-y-8 lg:space-y-10 py-8 sm:py-10 lg:py-12">
        {/* SALA PESI / FITNESS */}
        <WhiteBlock>
          <p className="section-title text-brand-red">Sala pesi & Fitness</p>
          <h2 className="font-heading uppercase tracking-wide text-4xl sm:text-5xl mt-2">
            Abbonamenti e fasce orarie
          </h2>
          <p className="mt-4 text-black/70 max-w-3xl leading-relaxed">
            Scegli la formula più adatta alle tue esigenze: Open oppure fasce orarie. Se vuoi, ti aiutiamo a capire
            qual è la scelta migliore in base ai tuoi obiettivi e alla tua disponibilità.
          </p>

          <div className="mt-10">
            <PriceGrid groups={GYM_PLANS} />
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="rounded-xl border border-brand-gray200 bg-brand-offwhite p-6">
              <p className="font-heading uppercase tracking-wide text-lg">Over 65</p>
              <p className="mt-2 text-black/70">
                <span className="font-semibold text-brand-black">-20%</span> su tutte le soluzioni.
              </p>
            </div>

            <div className="rounded-xl border border-brand-gray200 bg-brand-offwhite p-6">
              <p className="font-heading uppercase tracking-wide text-lg">Weekend & Festivi</p>
              <p className="mt-2 text-black/70">
                Le opzioni con fascia oraria nel weekend e festivi <span className="font-semibold text-brand-black">non hanno limiti di orario</span>.
              </p>
            </div>

            <div className="rounded-xl border border-brand-gray200 bg-brand-offwhite p-6">
              <p className="font-heading uppercase tracking-wide text-lg">Nucleo familiare</p>
              <p className="mt-2 text-black/70">
                <span className="font-semibold text-brand-black">-10%</span> dal 2° componente (applicarsi sulla quota più bassa).
                Non valido per Over 65 e non cumulabile con altre soluzioni.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-brand-gray200 bg-white p-6 sm:p-7">
            <p className="font-heading uppercase tracking-wide text-lg">Convenzioni</p>
            <p className="mt-2 text-black/70 leading-relaxed">
              Convenzioni con: <span className="font-semibold text-brand-black">Forze dell’Ordine</span>,{" "}
              <span className="font-semibold text-brand-black">Dipendenti C.C. “La Fonte”</span>,{" "}
              <span className="font-semibold text-brand-black">“Conad”</span>,{" "}
              <span className="font-semibold text-brand-black">Amm. Comune Fonte Nuova</span>.{" "}
              Agevolazione personale non cedibile e non estendibile al nucleo familiare.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="/contact">Richiedi info</Button>
            <Button href="/courses" variant="outline">
              Vedi corsi
            </Button>
          </div>
        </WhiteBlock>

        {/* CORSI EXTRA */}
        <WhiteBlock>
          <p className="section-title text-brand-red">Corsi extra</p>
          <h2 className="font-heading uppercase tracking-wide text-4xl sm:text-5xl mt-2">
            Judo, Grappling, Karate e Boxe
          </h2>
          <p className="mt-4 text-black/70 max-w-3xl leading-relaxed">
            Qui trovi le formule dedicate ai corsi extra. Se sei già socio Red Gym, puoi accedere ai corsi extra
            pagando <span className="font-semibold text-brand-black">€40</span> per ogni disciplina che scegli di integrare.
          </p>

          <div className="mt-10">
            <ExtraCoursesGrid />
          </div>

          <div className="mt-8 rounded-xl border border-brand-gray200 bg-brand-offwhite p-6 sm:p-7">
            <p className="font-heading uppercase tracking-wide text-lg">Certificato medico</p>
            <p className="mt-2 text-black/70 leading-relaxed">
              Consegnare il <span className="font-semibold text-brand-black">certificato medico sportivo non agonistico</span>{" "}
              rilasciato dal proprio medico di base o dal medico sportivo (altri medici non valido).
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="/contact">Chiedi disponibilità</Button>
            <Button href="/courses" variant="outline">
              Scopri le attività
            </Button>
          </div>
        </WhiteBlock>
      </div>
    </div>
  );
}