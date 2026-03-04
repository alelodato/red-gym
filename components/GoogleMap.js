"use client";

import { useEffect, useState } from "react";

function hasConsent() {
  return localStorage.getItem("cookie-consent") === "accepted";
}

export default function MapEmbed({
  title = "Mappa",
  src,
  height = 360,
  className = "",
}) {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    setConsent(hasConsent());
  }, []);

  if (!consent) {
    return (
      <div
        className={`rounded-2xl border border-brand-gray200 bg-black/80 p-6 text-white ${className}`}
        style={{ height }}
      >
        <div className="h-full flex flex-col items-center justify-center text-center">
          <p className="text-sm text-white/80">
            Per visualizzare <span className="font-semibold">{title}</span> è necessario accettare i
            cookie di terze parti (Google Maps).
          </p>

          <button
            className="mt-4 rounded-md bg-brand-red px-4 py-2 text-sm font-semibold"
            onClick={() => {
              localStorage.setItem("cookie-consent", "accepted");
              setConsent(true);
              // facoltativo: avvisa anche altri componenti
              window.dispatchEvent(new Event("cookie-consent-updated"));
            }}
          >
            Abilita mappe
          </button>
        </div>
      </div>
    );
  }

  return (
    <iframe
      title={title}
      src={src}
      width="100%"
      height={height}
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen=""
      referrerPolicy="no-referrer-when-downgrade"
      className={`rounded-2xl ${className}`}
    />
  );
}