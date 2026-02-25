import Image from "next/image";
import Button from "@/components/Button";
import { SITE } from "@/lib/site";

function toPublicSrc(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen -mt-[var(--nav-h)]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={toPublicSrc("hero1.webp")}
          alt="Red Gym"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative pt-[calc(var(--nav-h)+3rem)] pb-16 sm:pt-[calc(var(--nav-h)+4rem)] sm:pb-20 lg:pt-[calc(var(--nav-h)+5rem)] lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Colonna Sinistra: Info */}
            <div>
              <p className="section-title text-white/85">Contatti</p>
              <h1 className="font-heading uppercase tracking-wide text-white text-4xl sm:text-5xl mt-2">
                Vieni a trovarci o scrivici.
              </h1>

              <div className="mt-6 rounded-xl bg-white border border-brand-gray200 p-6 shadow-lg">
                <p className="font-heading uppercase tracking-wide">Recapiti</p>
                <div className="mt-3 space-y-2 text-sm text-black/70">
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    <a href={`mailto:${SITE.email}`} className="hover:text-brand-red transition-colors">
                      {SITE.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Telefono:</span>{" "}
                    <a href={`tel:${SITE.phone}`} className="hover:text-brand-red transition-colors">
                      {SITE.phone}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Indirizzo:</span> {SITE.address}
                  </p>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button 
                    href={`https://wa.me/${SITE.phone.replace(/\s/g, '')}`}
                    variant="primary"
                    target="_blank"
                  >
                    Apri WhatsApp
                  </Button>
                  <Button 
                    href="https://www.instagram.com/redgym_fonenuova"
                    variant="outline"
                    target="_blank"
                  >
                    Apri Instagram
                  </Button>
                </div>
              </div>

              {/* Orari di Apertura */}
              <div className="mt-6 rounded-xl bg-white border border-brand-gray200 p-6 shadow-lg">
                <p className="font-heading uppercase tracking-wide">Orari Segreteria</p>
                <div className="mt-3 space-y-2 text-sm text-black/70">
                  <div className="flex justify-between">
                    <span>Lun – Ven</span>
                    <span className="font-semibold">07:00 – 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabato</span>
                    <span className="font-semibold">08:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domenica</span>
                    <span className="font-semibold">09:00 – 13:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonna Destra: Mappa */}
            <div className="rounded-xl bg-white border border-brand-gray200 p-6 shadow-lg">
              <p className="font-heading uppercase tracking-wide">Dove Siamo</p>
              
              <div className="mt-6 rounded-lg overflow-hidden border border-brand-gray200">
                <iframe
                  className="w-full h-[400px] lg:h-[500px]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.216478787936!2d12.621904015713814!3d41.99959437921157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325c9b42fa47a3f%3A0x8e8b16b55b4b7f9e!2sVia%20delle%20Molette%2C%20245%2C%2000013%20Fonte%20Nuova%20RM%2C%20Italia!5e0!3m2!1sit!2sit!4v1704440000000!5m2!1sit!2sit"
                />
              </div>

              <p className="mt-4 text-sm text-black/60 leading-relaxed">
                Ci trovi all'interno del{" "}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Centro+Commerciale+La+Fonte+Fonte+Nuova+Roma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-red hover:underline"
                >
                  Centro Commerciale La Fonte
                </a>
                , con ampio parcheggio gratuito dedicato ai nostri soci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}