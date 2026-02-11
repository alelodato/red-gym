import "./globals.css";
import { Bebas_Neue, Anton, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTop from "@/components/BackToTop";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: SITE.name,
  description: SITE.tagline,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${bebas.variable} ${anton.variable} ${inter.variable}`}>
      <body className="min-h-screen font-body bg-brand-offwhite text-brand-black">
        <Navbar />
        <BackToTop />
        <ScrollToTop />
        <main>{children}</main>
        <Footer />
      </body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            name: "Red Gym",
            image: "https://www.redgym.it/og-image.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Via delle Molette 245",
              addressLocality: "Fonte Nuova",
              addressRegion: "RM",
              postalCode: "00013",
              addressCountry: "IT",
            },
            telephone: "+39XXXXXXXXXX",
            url: "https://www.redgym.it",
          }),
        }}
      />
    </html>
  );
}
