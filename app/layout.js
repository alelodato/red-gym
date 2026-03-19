import "./globals.css";
import Script from "next/script";
import { Bebas_Neue, Anton, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTop from "@/components/BackToTop";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://www.redgym.it"),
  title: {
    default: "Red Gym | Palestra a Fonte Nuova (RM)",
    template: "%s | Red Gym",
  },
  description:
    "Palestra a Fonte Nuova (RM): sala pesi, boxe, arti marziali e allenamento funzionale. Scopri corsi, orari e abbonamenti.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Red Gym | Palestra a Fonte Nuova (RM)",
    description:
      "Sala pesi, boxe, arti marziali e allenamento funzionale a Fonte Nuova. Orari e abbonamenti.",
    url: "https://www.redgym.it",
    siteName: "Red Gym",
    images: [{ url: "/og-image2.jpg", width: 1200, height: 630, alt: "Red Gym" }],
    locale: "it_IT",
    type: "website",
  },
  other: {
    "color-scheme": "light",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ExcerciseGym",
    name: "Red Gym",
    url: "https://www.redgym.it",
    image: "https://www.redgym.it/og-image2.jpg",
    telephone: "+393496504500",
    email: "info@redgym.eu",
    description: "Palestra a Fonte Nuova con sala pesi, corsi di arti marziali, boxe, yoga e allenamento funzionale",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via delle Molette 245/247",
      addressLocality: "Fonte Nuova",
      addressRegion: "RM",
      postalCode: "00013",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "42.0094",
      longitude: "12.6252"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "13:00"
      }
    ],
    sameAs: [
      "https://www.facebook.com/RedGymPalestra",
      "https://www.instagram.com/red.gym.fontenuova"
    ]
  };

  return (
    <html lang="it" className={`${bebas.variable} ${anton.variable} ${inter.variable}`}>
      <body className="min-h-screen font-body bg-brand-offwhite text-brand-black">
        <Navbar />
        <BackToTop />
        <ScrollToTop />
        <main>{children}</main>
        <Footer />

        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CookieBanner />
      </body>
    </html>
  );
}