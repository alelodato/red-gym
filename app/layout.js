export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ExcerciseGym",
    name: "Red Gym",
    url: "https://www.redgym.it",
    image: "https://www.redgym.it/og-image.jpg",
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