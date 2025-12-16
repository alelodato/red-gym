import Link from "next/link";
import Container from "./Container";
import Button from "./Button";
import { SITE } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Corsi" },
  { href: "/pricing", label: "Abbonamenti" },
  { href: "/contact", label: "Contatti" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-brand-gray200">
      <Container>
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded bg-brand-red" aria-hidden />
            <span className="font-heading text-lg tracking-wide">{SITE.name}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="text-sm font-semibold hover:text-brand-red">
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/contact" className="hidden sm:inline-flex">Prenota / Info</Button>
            <Link href="/contact" className="sm:hidden text-sm font-semibold text-brand-red">
              Contatti
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
