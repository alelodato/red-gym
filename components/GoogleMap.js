"use client";

import { useEffect, useState } from "react";

export default function GoogleMap() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent");
    if (saved === "accepted") {
      setConsent(true);
    }
  }, []);

  if (!consent) {
    return (
      <div className="bg-gray-200 p-6 text-center rounded-md">
        <p className="mb-4">
          Per visualizzare la mappa devi accettare i cookie di terze parti.
        </p>
        <button
          onClick={() => {
            localStorage.setItem("cookie-consent", "accepted");
            window.location.reload();
          }}
          className="bg-brand-red text-white px-4 py-2 rounded-md"
        >
          Accetta e visualizza mappa
        </button>
      </div>
    );
  }

  return (
    <iframe
      src="https://www.google.com/maps/embed?..."
      width="100%"
      height="450"
      loading="lazy"
      className="rounded-md"
    ></iframe>
  );
}