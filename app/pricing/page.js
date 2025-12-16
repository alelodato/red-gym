import Section from "@/components/Section";
import Button from "@/components/Button";

const PLANS = [
  { name: "Mensile", price: "€XX", perks: ["Accesso sala pesi", "Area cardio e functional", "Supporto trainer in sala"], featured: false },
  { name: "Trimestrale", price: "€XX", perks: ["Tutto incluso", "Risparmio rispetto al mensile", "Priorità prenotazioni corsi"], featured: true },
  { name: "Annuale", price: "€XX", perks: ["Massimo risparmio", "Check progress periodici", "Opzioni corsi add-on"], featured: false },
];

export default function PricingPage() {
  return (
    <Section>
      <p className="section-title text-brand-red">Abbonamenti</p>
      <h1 className="font-heading uppercase tracking-wide text-4xl sm:text-5xl mt-2">
        Prezzi chiari. Risultati seri.
      </h1>
      <p className="mt-4 text-black/70 max-w-2xl">
        Sostituisci €XX con i prezzi reali e aggiungi eventuali promo.
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={`rounded-xl border p-7 ${
              p.featured ? "bg-brand-red text-white border-brand-red shadow-soft" : "bg-white border-brand-gray200"
            }`}
          >
            <p className="font-heading uppercase tracking-wide text-xl">{p.name}</p>
            <p className={`mt-2 text-4xl font-extrabold ${p.featured ? "text-white" : "text-brand-black"}`}>
              {p.price}
            </p>

            <ul className={`mt-6 space-y-3 text-sm ${p.featured ? "text-white/85" : "text-black/70"}`}>
              {p.perks.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`mt-1 h-2 w-2 rounded-full ${p.featured ? "bg-white" : "bg-brand-red"}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <Button
                href="/contact"
                variant={p.featured ? "outline" : "primary"}
                className={p.featured ? "border-white text-white hover:bg-white hover:text-brand-black" : ""}
              >
                Richiedi info
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
