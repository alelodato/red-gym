import Button from "./Button";
import Container from "./Container";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img src="/images/hero.jpg" alt="Allenamento in palestra" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <Container>
        <div className="relative py-16 sm:py-20 lg:py-24">
          <p className="section-title text-white/90 text-sm">
            {SITE.name} — {SITE.city}
          </p>

          <h1 className="mt-4 text-white leading-none">
            <span className="display-title block text-5xl sm:text-6xl lg:text-7xl">
              ALLENATI MEGLIO.
            </span>
            <span className="display-title block text-5xl sm:text-6xl lg:text-7xl text-brand-red">
              VIVI MEGLIO
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-white/85 text-base sm:text-lg leading-relaxed">
            Alla {SITE.name} trasformi il tuo corpo e la tua energia. Programmi su misura, tecnica,
            motivazione e un ambiente che ti spinge a dare il massimo.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="/courses">Vai ai corsi</Button>
            <Button
              href="/about"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-black"
            >
              Scopri la palestra
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
