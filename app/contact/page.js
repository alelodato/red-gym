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
                  <div className="mt-6 space-y-3">
                    <a
                      href="https://wa.me/393496504500"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-semibold text-black/70 hover:text-brand-red transition-colors group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white group-hover:bg-green-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <span>Scrivici su WhatsApp</span>
                    </a>

                    <a
                      href="https://www.instagram.com/red.gym.fontenuova/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-semibold text-black/70 hover:text-brand-red transition-colors group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white group-hover:opacity-90 transition-opacity">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                      <span>Seguici su Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Orari di Apertura */}
              <div className="mt-6 rounded-xl bg-white border border-brand-gray200 p-6 shadow-lg">
                <p className="font-heading uppercase tracking-wide">Orari di Apertura</p>
                <div className="mt-3 space-y-2 text-sm text-black/70">
                  <div className="flex justify-between">
                    <span>Lun – Ven</span>
                    <span className="font-semibold">07:00 – 23:00</span>
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