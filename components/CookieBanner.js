"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setVisible(false);
        window.location.reload();
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-brand-black text-white p-4 z-50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm max-w-xl">
                Questo sito utilizza contenuti di terze parti come Google Maps che
                potrebbero installare cookie tecnici. Continuando accetti l'utilizzo
                di questi servizi.
            </p>

            <button
                onClick={acceptCookies}
                className="bg-brand-red text-white px-4 py-2 rounded-md"
            >
                Accetta
            </button>
            <button
                onClick={() => window.location.href = "/cookies"}
                className="bg-brand-red text-white px-4 py-2 rounded-md"
            >
                Cookie Policy
            </button>
            <button
                onClick={() => setVisible(false)}
                className="border border-white/40 px-4 py-2 rounded-md"
            >
                Rifiuta
            </button>
        </div>
    );
}