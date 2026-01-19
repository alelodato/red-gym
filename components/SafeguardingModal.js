"use client";

export default function SafeguardingModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* modal */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-soft">
        <h3 className="font-heading uppercase tracking-wide text-xl">
          Safeguarding
        </h3>

        <p className="mt-4 text-sm text-black/70 leading-relaxed">
          Red Gym si impegna a garantire un ambiente sicuro, rispettoso e inclusivo
          per tutti gli iscritti, atleti e collaboratori.
        </p>

        <p className="mt-3 text-sm text-black/70 leading-relaxed">
          Il Safeguarding ha l’obiettivo di prevenire e contrastare qualsiasi forma
          di abuso, discriminazione o comportamento inappropriato, promuovendo il
          rispetto e il benessere fisico e psicologico all’interno della struttura.
        </p>

        <p className="mt-4 text-sm text-black/70 leading-relaxed">
          Per segnalazioni o chiarimenti è possibile contattare il responsabile:
        </p>

        <p className="mt-2 text-sm font-semibold">
          Vito Lettieri <br />
          <a
            href="mailto:safeguarding@redgym.it"
            className="text-brand-red hover:underline"
          >
            safeguarding@redgym.it
          </a>
        </p>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-md px-4 py-2 text-sm font-semibold
                       bg-brand-red text-white hover:opacity-90 transition"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
}