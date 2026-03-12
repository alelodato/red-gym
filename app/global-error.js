"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-brand-red flex items-center justify-center px-4">
          <div className="max-w-2xl text-center">
            <h1 className="font-heading uppercase text-white text-6xl mb-4">
              Errore Critico
            </h1>
            
            <p className="text-white/80 text-lg mb-8">
              Si è verificato un errore critico. Ricarica la pagina.
            </p>
            
            <button
              onClick={() => reset()}
              className="bg-white text-brand-red px-6 py-3 rounded-md font-semibold"
            >
              Riprova
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}