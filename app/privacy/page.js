export const metadata = {
  title: "Privacy & Cookie Policy | Red Gym",
  description:
    "Informativa sulla privacy e sull'utilizzo dei cookie del sito Red Gym.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-brand-offwhite py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <h1 className="font-heading text-4xl mb-10">
          Privacy Policy
        </h1>

        <section className="space-y-6 text-black/70 leading-relaxed">

          <div>
            <h2 className="font-heading text-xl mb-2 text-brand-black">
              Titolare del trattamento
            </h2>
            <p>
              Red Gym<br />
              Via delle Molette 245, 00013 Fonte Nuova (RM)<br />
              Email: info@redgym.eu
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl mb-2 text-brand-black">
              Tipologia di dati raccolti
            </h2>
            <p>
              Il sito può raccogliere dati tecnici di navigazione come indirizzo IP,
              informazioni sul browser e dispositivo utilizzato. 
              I dati possono inoltre essere forniti volontariamente dall’utente
              tramite contatti email o telefonici indicati sul sito.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl mb-2 text-brand-black">
              Finalità del trattamento
            </h2>
            <p>
              I dati vengono utilizzati esclusivamente per fornire informazioni,
              rispondere alle richieste degli utenti e garantire il corretto
              funzionamento e la sicurezza del sito.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl mb-2 text-brand-black">
              Servizi di terze parti
            </h2>
            <p>
              Il sito può incorporare contenuti di terze parti come Google Maps.
              Questi servizi possono raccogliere dati tecnici di navigazione
              quando visualizzati.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl mb-2 text-brand-black">
              Cookie
            </h2>
            <p>
              Il sito utilizza cookie tecnici necessari al funzionamento e
              può utilizzare servizi di terze parti che installano cookie
              solo previo consenso dell’utente.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl mb-2 text-brand-black">
              Diritti dell'utente
            </h2>
            <p>
              Gli utenti possono richiedere in qualsiasi momento l’accesso,
              la rettifica o la cancellazione dei dati personali scrivendo
              all’indirizzo email indicato sopra.
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}