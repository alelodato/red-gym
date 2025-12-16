import "./globals.css";
import { Bebas_Neue, Anton, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${bebas.variable} ${anton.variable} ${inter.variable}`}>
      <body className="min-h-screen font-body bg-brand-offwhite text-brand-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
