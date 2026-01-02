import Section from "@/components/Section";
import Button from "@/components/Button";
import { SITE } from "@/lib/site";

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="section-title text-brand-red">Contatti</p>
          <h1 className="font-heading uppercase tracking-wide text-4xl sm:text-5xl mt-2">
            Vieni a trovarci o scrivici.
          </h1>
          <p className="mt-4 text-black/70 leading-relaxed">
            Compila il modulo per info su corsi, abbonamenti o per prenotare una prova.
          </p>

          <div className="mt-6 rounded-xl bg-white border border-brand-gray200 p-6">
            <p className="font-heading uppercase tracking-wide">Recapiti</p>
            <div className="mt-3 space-y-2 text-sm text-black/70">
              <p>Email: {SITE.email}</p>
              <p>Telefono: {SITE.phone}</p>
              <p>Indirizzo: {SITE.address}</p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button href="#" variant="primary">Apri WhatsApp</Button>
              <Button href="#" variant="outline">Apri Instagram</Button>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white border border-brand-gray200 p-6">
          <p className="font-heading uppercase tracking-wide text-xl">Scrivici</p>

          <form className="mt-5 space-y-4">
            <div>
              <label className="text-sm font-semibold">Nome</label>
              <input className="mt-2 w-full rounded-md border border-brand-gray200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-red" />
            </div>

            <div>
              <label className="text-sm font-semibold">Email</label>
              <input type="email" className="mt-2 w-full rounded-md border border-brand-gray200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-red" />
            </div>

            <div>
              <label className="text-sm font-semibold">Messaggio</label>
              <textarea rows={5} className="mt-2 w-full rounded-md border border-brand-gray200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-red" />
            </div>

            <button
              type="button"
              className="w-full rounded-md bg-brand-red px-5 py-3 text-sm font-semibold tracking-wide text-white hover:bg-brand-redHover transition-colors"
            >
              Invia
            </button>
          </form>

          <div className="mt-8 rounded-lg overflow-hidden border border-brand-gray200">
            <div className="bg-brand-black text-white text-sm font-semibold px-4 py-3">
              Dove Siamo
            </div>
            <div className="mt-8 rounded-lg overflow-hidden border border-brand-gray200">
              <iframe
                className="w-full h-64"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.216478787936!2d12.621904015713814!3d41.99959437921157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325c9b42fa47a3f%3A0x8e8b16b55b4b7f9e!2sVia%20delle%20Molette%2C%20245%2C%2000013%20Fonte%20Nuova%20RM%2C%20Italia!5e0!3m2!1sit!2sit!4v1704440000000!5m2!1sit!2sit"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
