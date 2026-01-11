"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { SITE } from "@/lib/site";

const nav = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "CHI SIAMO" },
  { href: "/courses", label: "CORSI" },
  { href: "/pricing", label: "ABBONAMENTI" },
  { href: "/contact", label: "CONTATTI" },
];

function BurgerIcon({ open }) {
  return (
    <div className="relative h-5 w-6" aria-hidden>
      <span
        className={[
          "absolute left-0 top-0 h-[2px] w-6 rounded bg-brand-black transition",
          open ? "translate-y-[9px] rotate-45" : "",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-[9px] h-[2px] w-6 rounded bg-brand-black transition",
          open ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-[18px] h-[2px] w-6 rounded bg-brand-black transition",
          open ? "-translate-y-[9px] -rotate-45" : "",
        ].join(" ")}
      />
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Chiudi menu quando cambi pagina
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Blocca scroll sotto quando menu è aperto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Chiudi con ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-brand-gray200">
        <Container>
          <div className="flex items-center justify-between py-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded bg-brand-red" aria-hidden />
              <span className="font-heading text-lg tracking-wide">
                {SITE.name}
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="text-sm font-semibold text-brand-black/80 hover:text-brand-red transition-colors"
                >
                  {i.label}
                </Link>
              ))}
            </nav>

            {/* Mobile burger */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-brand-gray200 bg-white px-3 py-2 shadow-soft"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Chiudi menu" : "Apri menu"}
              aria-expanded={open}
            >
              <BurgerIcon open={open} />
            </button>
          </div>
        </Container>
      </header>

      {/* OVERLAY FULLSCREEN (fuori dall'header) */}
      <div
        className={[
          "fixed inset-0 z-[60] md:hidden transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* sfondo scuro */}
        <button
          type="button"
          className="absolute inset-0 bg-black/55"
          onClick={() => setOpen(false)}
          aria-label="Chiudi menu"
        />

        {/* pannello bianco (drawer) */}
        <div
          className={[
            "absolute left-0 right-0 top-0",
            "bg-white border-b border-brand-gray200 shadow-soft",
            "transition-transform duration-200",
            open ? "translate-y-0" : "-translate-y-4",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            {/* top row */}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded bg-brand-red" aria-hidden />
                <span className="font-heading tracking-wide">MENU</span>
              </div>

              <button
                type="button"
                className="text-sm font-semibold text-black/60 hover:text-brand-red transition-colors"
                onClick={() => setOpen(false)}
              >
                Chiudi
              </button>
            </div>

            {/* links */}
            <div className="pb-5">
              <div className="grid gap-3">
                {nav.map((i) => {
                  const active = pathname === i.href;
                  return (
                    <Link
                      key={i.href}
                      href={i.href}
                      onClick={() => setOpen(false)}
                      className={[
                        "rounded-xl border px-4 py-4",
                        "font-heading uppercase tracking-wide",
                        "transition-colors",
                        active
                          ? "border-brand-red bg-brand-red text-white"
                          : "border-brand-gray200 bg-white text-brand-black hover:border-brand-red hover:text-brand-red",
                      ].join(" ")}
                    >
                      {i.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-5 rounded-xl border border-brand-gray200 bg-brand-offwhite p-4">
                <p className="text-sm font-semibold text-black/70">
                  Vuoi informazioni rapide?
                </p>
                <p className="mt-1 text-sm text-black/60">
                  Scrivici e ti rispondiamo con corsi, orari e abbonamenti.
                </p>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-brand-red px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
                >
                  Contattaci
                </Link>
              </div>

              {/* safe area iOS */}
              <div className="h-[calc(env(safe-area-inset-bottom)+12px)]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}