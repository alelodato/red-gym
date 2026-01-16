import Button from "./Button";
import Container from "./Container";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section
      className="relative"
      style={{
        minHeight: "calc(100svh - var(--nav-h))",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ minHeight: "calc(100vh - var(--nav-h))" }}
        aria-hidden="true"
      />

      <div className="absolute inset-0">
        <img
          src="hero.jpg"
          alt="Allenamento in palestra"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <Container>
        <div
          className="
            relative
            min-h-[inherit]
            flex
            items-end sm:items-center
            py-16 sm:py-20 lg:py-24
          "
        >
          <div>
            <p className="section-title text-white/90 text-sm">
              {SITE.name} — {SITE.city}
            </p>

            <h1 className="font-heading uppercase tracking-wide text-white mt-2 leading-[0.95]
               text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
              <span className="display-title block text-5xl sm:text-6xl lg:text-7xl">
                ALLENATI MEGLIO.
              </span>
              <span className="display-title block text-5xl sm:text-6xl lg:text-7xl text-brand-red">
                VIVI MEGLIO
              </span>
            </h1>

            <p className="mt-4 text-white/85 max-w-2xl 2xl:max-w-3xl leading-relaxed
              text-base sm:text-lg lg:text-xl 2xl:text-2xl">
              Alla {SITE.name} trasformi il tuo corpo e la tua energia. Programmi su
              misura, tecnica, motivazione e un ambiente che ti spinge a dare il massimo.
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
        </div>
      </Container>
    </section>
  );
}