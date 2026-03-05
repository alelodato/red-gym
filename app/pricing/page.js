"use client";

import { useEffect } from "react";
import Button from "@/components/Button";

function toPublicSrc(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

function WhiteBlock({ children }) {
  return (
    <div className="bg-brand-red">
      {/* Mobile: contenuto diretto senza padding/bordi */}
      <div className="sm:hidden bg-white py-8 px-4">{children}</div>

      {/* Desktop: con container e bordi */}
      <div className="hidden sm:block px-6 lg:px-8">
        <div className="bg-white border border-brand-gray200 shadow-soft rounded-2xl p-10 lg:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}

function PhotoHeroBand({
  image = "palestra4.webp",
  kicker = "Abbonamenti",
  title = (
    <>
      Formule su misura
      <br />
      Per il tuo allenamento.
    </>
  ),
  subtitle =
    "Abbonamenti su misura per ogni esigenza, con formule flessibili per sala pesi, sport da combattimento, funzionale e benessere.",
  className = "",
}) {
  return (
    <section className={`relative bg-brand-red overflow-hidden ${className}`}>
      <div className="relative h-[600px] sm:h-[620px] lg:h-[720px]">
        <img
          src={toPublicSrc(image)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
      </div>

      <div className="absolute inset-0 flex items-center sm:items-center">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="pt-24 pb-4 sm:pt-0 sm:pb-0">
            {kicker ? <p className="section-title text-white/85">{kicker}</p> : null}

            {title ? (
              <h1 className="font-heading uppercase tracking-wide text-white mt-2 leading-tight text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
                {title}
              </h1>
            ) : null}

            {subtitle ? (
              <p className="mt-4 text-white/85 max-w-2xl leading-relaxed text-sm sm:text-lg lg:text-xl">
                {subtitle}
              </p>
            ) : null}
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
    paymentNote: "Modalità di pagamento: contanti / bancomat. In 2 rate: 1ª all'acquisto, 2ª entro 30 gg.",
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
      "Modalità di pagamento: contanti / bancomat. Unica soluzione (omaggio: borsone) oppure in 2 rate: 1ª all'acquisto, 2ª entro 30 gg (omaggio: borsone).",
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
  { title: "Boxe", lines: [{ label: "Boxe", price: "70€ / mese", note: "+ iscr. annuale 20€" }] },
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
        <div key={g.duration} className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:bg-white overflow-hidden">
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
        <div key={c.title} className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:bg-white overflow-hidden">
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
  // Scroll affidabile sugli hash (#pesi, #annuale, #corsi)
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // aspetta un frame per sicurezza (render + immagini)
    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <div className="bg-brand-red">
      <PhotoHeroBand className="-mt-[var(--nav-h)]" image="palestra4.webp" />

      <div className="space-y-0 sm:space-y-8 lg:space-y-10 py-0 sm:py-10 lg:py-12 pb-0">
        {/* SALA PESI / FITNESS */}
        <section id="pesi" className="scroll-mt-[var(--nav-h)]">
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

            {/* TARGET "sconti" per i link da home */}
            <div id="sconti" className="scroll-mt-[var(--nav-h)]" />

            <div className="mt-10 grid gap-4 lg:grid-cols-3 scroll-mt-[var(--nav-h)]">
              <div className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:bg-brand-offwhite p-6">
                <p className="font-heading uppercase tracking-wide text-lg">Over 65</p>
                <p className="mt-2 text-black/70">
                  <span className="font-semibold text-brand-black">-20%</span> su tutte le soluzioni.
                </p>
              </div>

              <div className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:bg-brand-offwhite p-6">
                <p className="font-heading uppercase tracking-wide text-lg">Weekend & Festivi</p>
                <p className="mt-2 text-black/70">
                  Le opzioni con fascia oraria nel weekend e festivi{" "}
                  <span className="font-semibold text-brand-black">non hanno limiti di orario</span>.
                </p>
              </div>

              <div className="sm:rounded-xl sm:border sm:border-brand-gray200 sm:bg-brand-offwhite p-6">
                <p className="font-heading uppercase tracking-wide text-lg">Nucleo familiare</p>
                <p className="mt-2 text-black/70">
                  <span className="font-semibold text-brand-black">-10%</span> dal 2° componente (applicarsi sulla quota
                  più bassa). Non valido per Over 65 e non cumulabile con altre soluzioni.
                </p>
              </div>
            </div>

            <div className="mt-6 sm:rounded-xl sm:border sm:border-brand-gray200 sm:bg-white p-6 sm:p-7">
              <p className="font-heading uppercase tracking-wide text-lg">Convenzioni</p>
              <p className="mt-2 text-black/70 leading-relaxed">
                Convenzioni con: <span className="font-semibold text-brand-black">Forze dell'Ordine</span>,{" "}
                <span className="font-semibold text-brand-black">Dipendenti C.C. "La Fonte"</span>,{" "}
                <span className="font-semibold text-brand-black">"Conad"</span>,{" "}
                <span className="font-semibold text-brand-black">Amm. Comune Fonte Nuova</span>. Agevolazione personale
                non cedibile e non estendibile al nucleo familiare.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="/contact" variant="outline">Richiedi info</Button>
            </div>
          </WhiteBlock>
        </section>

        {/* CORSI EXTRA */}
        <section id="corsi" className="scroll-mt-[var(--nav-h)]">
          <WhiteBlock>
            <p className="section-title text-brand-red">Corsi extra</p>
            <h2 className="font-heading uppercase tracking-wide text-4xl sm:text-5xl mt-2">
              Judo, Grappling, Karate e Boxe
            </h2>
            <p className="mt-4 text-black/70 max-w-3xl leading-relaxed">
              Qui trovi le formule dedicate ai corsi extra. Se sei già socio Red Gym, puoi accedere ai corsi extra
              pagando <span className="font-semibold text-brand-black">€40</span> per ogni disciplina che scegli di
              integrare.
            </p>

            <div className="mt-10">
              <ExtraCoursesGrid />
            </div>

            <div className="mt-8 sm:rounded-xl sm:border sm:border-brand-gray200 sm:bg-brand-offwhite p-6 sm:p-7">
              <p className="font-heading uppercase tracking-wide text-lg">Certificato medico</p>
              <p className="mt-2 text-black/70 leading-relaxed">
                Consegnare il <span className="font-semibold text-brand-black">certificato medico sportivo non agonistico</span>{" "}
                rilasciato dal proprio medico di base o dal medico sportivo (altri medici non valido).
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="/contact" variant="outline">Richiedi info</Button>
            </div>
          </WhiteBlock>
        </section>
      </div>
    </div>
  );
}