import Button from "./Button";

export default function CTA() {
  return (
    <section className="bg-brand-red">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
        <h2 className="display-title text-white text-4xl sm:text-5xl">
          UNISCITI OGGI A RED GYM
        </h2>
        <p className="mt-3 text-white/85 max-w-2xl mx-auto">
          Vieni a provare una sessione o chiedi informazioni sugli abbonamenti. Ti rispondiamo subito.
        </p>
        <div className="mt-7 flex justify-center">
          <Button
            href="/pricing"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-brand-black"
          >
            Scopri i nostri abbonamenti
          </Button>
        </div>
      </div>
    </section>
  );
}
