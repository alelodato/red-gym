"use client";

import { useState, useEffect } from "react";

function hasConsent() {
    if (typeof window === "undefined") return false;
    const value = localStorage.getItem("cookie-consent");
    return value === "accepted";
}

export default function CookieBanner() {
    const [consent, setConsent] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem("cookie-consent");

        // se non esiste nessuna scelta → mostra banner
        if (!saved) {
            setConsent(false);
        }

        const sync = () => {
            const updated = localStorage.getItem("cookie-consent");
            setConsent(updated !== null);
        };

        window.addEventListener("cookie-consent-updated", sync);

        return () =>
            window.removeEventListener("cookie-consent-updated", sync);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setConsent(true);
        window.dispatchEvent(new Event("cookie-consent-updated"));
    };

    const rejectCookies = () => {
        localStorage.setItem("cookie-consent", "rejected");
        setConsent(true);
        window.dispatchEvent(new Event("cookie-consent-updated"));
    };

    if (consent) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 z-50
  rounded-2xl border border-white/10 bg-brand-black/80 text-white
  backdrop-blur-md shadow-2xl p-4
  flex flex-col md:flex-row items-center justify-between gap-4
  animate-[slideUp_.25s_ease-out]">
            <p className="text-sm max-w-xl">
                Questo sito utilizza contenuti di terze parti come Google Maps che
                utilizzano cookies tecnici.
                <br />
                Continuando accetti l'utilizzo di questi servizi.
            </p>

            <div className="flex gap-3 flex-wrap justify-center">

                <button
                    onClick={acceptCookies}
                    className="bg-brand-red text-white px-4 py-2 rounded-md"
                >
                    Accetta
                </button>

                <button
                    onClick={() => (window.location.href = "/cookies")}
                    className="text-white/80 underline underline-offset-4 hover:text-white transition"
                >
                    Cookie Policy
                </button>

                <button
                    onClick={rejectCookies}
                    className="border border-white/30 text-white/90 px-4 py-2 rounded-md hover:border-white/60 transition"
                >
                    Rifiuta
                </button>

            </div>
        </div>
    );
}