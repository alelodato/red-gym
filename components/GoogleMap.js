"use client";

import { useEffect, useState } from "react";

function hasConsent() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("cookie-consent") === "accepted";
}

export default function MapEmbed({
  src,
  className = "",
  title = "Google Maps",
}) {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const sync = () => {
      setAccepted(hasConsent());
    };

    sync();

    window.addEventListener("cookie-consent-updated", sync);

    return () =>
      window.removeEventListener("cookie-consent-updated", sync);
  }, []);

  if (!accepted) {
    return (
      <div
        className={`flex items-center justify-center bg-black/5 border border-black/10 rounded-xl ${className}`}
      >
        <p className="text-sm text-black/70 text-center px-6">
          Per visualizzare la mappa è necessario accettare i cookie di terze parti.
        </p>
      </div>
    );
  }

  return (
    <iframe
      key="maps-active"
      src={src}
      title={title}
      className={`w-full h-full ${className}`}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}