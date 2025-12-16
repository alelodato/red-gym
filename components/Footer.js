import Container from "./Container";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-gray200">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded bg-brand-red" aria-hidden />
              <div>
                <p className="font-heading tracking-wide">{SITE.name}</p>
                <p className="text-sm text-black/70">{SITE.city}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-black/70 max-w-sm">
              Palestra completa e dinamica: sala pesi, cardio, functional, corsi e coaching.
            </p>
          </div>

          <div>
            <p className="section-title text-sm">Contatti</p>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li>{SITE.email}</li>
              <li>{SITE.phone}</li>
              <li>{SITE.address}</li>
            </ul>
          </div>

          <div>
            <p className="section-title text-sm">Orari</p>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              {SITE.hours.map((h) => (
                <li key={h.label} className="flex justify-between gap-6">
                  <span>{h.label}</span>
                  <span className="font-semibold text-black/80">{h.value}</span>
                </li>
              ))}
            </ul>

            <p className="section-title text-sm mt-6">Social</p>
            <ul className="mt-3 flex gap-4 text-sm font-semibold">
              <a className="hover:text-brand-red" href={SITE.socials.instagram}>Instagram</a>
              <a className="hover:text-brand-red" href={SITE.socials.linkedin}>LinkedIn</a>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-gray200 py-6 text-xs text-black/60">
          © {new Date().getFullYear()} {SITE.name}. Tutti i diritti riservati.
        </div>
      </Container>
    </footer>
  );
}
