import { NextResponse } from "next/server";

export function middleware(req) {
  const host = (req.headers.get("host") || "").toLowerCase();
  const pathname = req.nextUrl.pathname;

  const blockedHosts = ["redgym.it", "www.redgym.it"];

  // Se arriva dal dominio pubblico -> serve sempre maintenance.html
  if (blockedHosts.includes(host)) {
    // lascia passare assets di Next e file statici necessari
    const allowed =
      pathname === "/maintenance.html" ||
      pathname === "/logo-negativo.png" ||
      pathname.startsWith("/_next") ||
      pathname.startsWith("/favicon") ||
      pathname === "/robots.txt";

    if (!allowed) {
      return NextResponse.rewrite(new URL("/maintenance.html", req.url));
    }
  }

  // Preview / vercel.app -> sito normale
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api).*)"],
};