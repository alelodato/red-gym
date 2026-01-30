"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";

const nav = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "CHI SIAMO" },
  { href: "/courses", label: "CORSI" },
  { href: "/pricing", label: "ABBONAMENTI" },
  { href: "/contact", label: "CONTATTI" },
];

// Gabbia coerente con il resto del sito
const SHELL = "mx-auto w-full max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8";

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

  // Chiudi menu al cambio pagina
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Blocca scroll sotto al drawer
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC per chiudere
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // CSS var --nav-h (serve alle hero)
  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;

    const setVar = () => {
      const h = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--nav-h", `${Math.round(h)}px`);
    };

    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(header);
    window.addEventListener("resize", setVar);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  return (
    <>
      <header
        id="site-header"
        className="sticky top-0 z-50 bg-white border-b border-brand-gray200"
      >
        <div className={SHELL}>
          {/* Navbar più alta */}
          <div className="flex items-center justify-between py-4 lg:py-6">
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-positivo.png"
                alt="Red Gym"
                width={200}
                height={64}
                priority
                className="
                  h-8 w-auto
                  sm:h-9
                  lg:h-12
                  xl:h-14
                "
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {nav.map((i) => {
                const active = pathname === i.href;
                return (
                  <Link
                    key={i.href}
                    href={i.href}
                    className={[
                      "text-sm lg:text-base font-semibold tracking-wide transition-colors",
                      active
                        ? "text-brand-red"
                        : "text-brand-black/80 hover:text-brand-red",
                    ].join(" ")}
                  >
                    {i.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA desktop */}
            <div className="hidden md:flex">
              <Link
                href="/contact"
                className="rounded-md bg-brand-red px-5 py-3 text-sm lg:text-base font-semibold text-white hover:opacity-90 transition"
              >
                Richiedi info
              </Link>
            </div>

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
        </div>
      </header>

      {/* OVERLAY MOBILE */}
      <div
        className={[
          "fixed inset-0 z-[60] md:hidden transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* sfondo */}
        <button
          className="absolute inset-0 bg-black/55"
          onClick={() => setOpen(false)}
          aria-label="Chiudi menu"
        />

        {/* drawer */}
        <div
          className={[
            "absolute left-0 right-0 top-0",
            "bg-white border-b border-brand-gray200 shadow-soft",
            "transition-transform duration-200",
            open ? "translate-y-0" : "-translate-y-4",
          ].join(" ")}
        >
          <div className={SHELL}>
            <div className="flex items-center justify-between py-4">
              <Image
                src="/logo-positivo.png"
                alt="Red Gym"
                width={140}
                height={40}
                className="h-8 w-auto"
              />

              <button
                className="text-sm font-semibold text-black/60 hover:text-brand-red transition-colors"
                onClick={() => setOpen(false)}
              >
                Chiudi
              </button>
            </div>

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
                        "rounded-xl border px-4 py-4 font-heading uppercase tracking-wide transition-colors",
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

              <div className="h-[calc(env(safe-area-inset-bottom)+12px)]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}