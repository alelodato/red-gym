// app/cookies/page.jsx

import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Red Gym",
  description: "Informativa sui cookie utilizzati dal sito Red Gym.",
};

export default function CookiePolicyPage() {
  return (
    <main className="bg-brand-offwhite py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl mb-10">Cookie Policy</h1>

        <section className="space-y-6 text-black/70 leading-relaxed">
          <p>
            La presente Cookie Policy descrive l&apos;utilizzo dei cookie e di tecnologie
            similari sul sito <strong className="text-brand-black">Red Gym</strong>.
          </p>

          <div>
            <h2 className="font-heading text-xl mb-2 text-brand-black">
              Cosa sono i cookie
            </h2>
            <p>
              I cookie sono piccoli file di testo che i siti possono salvare sul dispositivo
              dell&apos;utente (computer, smartphone, tablet) per garantire il corretto
              funzionamento delle pagine, migliorare l&apos;esperienza di navigazione e,
              in alcuni casi, fornire servizi di terze parti.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl mb-2 text-brand-black">
              Cookie tecnici (necessari)
            </h2>
            <p>
              Il sito può utilizzare cookie tecnici indispensabili per il corretto
              funzionamento e la sicurezza. Questi cookie non richiedono consenso
              preventivo.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl mb-2 text-brand-black">
              Cookie e contenuti di terze parti (Google Maps)
            </h2>
            <p>
              Il sito può integrare contenuti di terze parti, come <strong className="text-brand-black">Google Maps</strong>,
              per visualizzare la posizione della palestra. Quando l&apos;utente sceglie di
              visualizzare la mappa, Google può trattare dati tecnici di navigazione (es.
              indirizzo IP, informazioni sul dispositivo e cookie) secondo le proprie policy.
            </p>
            <p className="mt-3">
              Per questo motivo la mappa viene visualizzata solo dopo aver espresso il
              consenso (quando previsto dal banner).
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl mb-2 text-brand-black">
              Come gestire o disabilitare i cookie
            </h2>
            <p>
              Puoi gestire o disabilitare i cookie dalle impostazioni del tuo browser.
              Disabilitando alcuni cookie, alcune funzionalità (come la visualizzazione
              della mappa) potrebbero non essere disponibili.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl mb-2 text-brand-black">
              Aggiornamenti
            </h2>
            <p>
              La presente Cookie Policy può essere soggetta ad aggiornamenti. Ti invitiamo
              a consultarla periodicamente.
            </p>
            <p className="mt-2 text-sm text-black/60">
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
            </p>
          </div>

          <p className="pt-4">
            Per maggiori informazioni sul trattamento dei dati personali, consulta la{" "}
            <Link href="/privacy" className="underline text-brand-black hover:text-brand-red">
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}