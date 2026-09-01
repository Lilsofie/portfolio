import type { Metadata } from "next";
import { Faustina, Inter } from "next/font/google";
import "./globals.css";
import ThemeScript from "../components/layout/ThemeScript";
import RouteAnnouncer from "../components/layout/RouteAnnouncer";
import VinylTransition from "../components/transition/VinylTransition";
import ThemeToggle from "../components/layout/ThemeToggle";
import { site } from "../content";

const faustina = Faustina({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-faustina",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Portfolio`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — Portfolio`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${faustina.variable} ${inter.variable}`}
      /* ThemeScript stamps `data-theme` on <html> before React hydrates —
         that is the whole point of it (no flash of the wrong theme), so the
         server HTML cannot contain the attribute and the mismatch is
         expected. This suppresses the warning for THIS element only; it does
         not propagate to children, so real mismatches are still reported. */
      suppressHydrationWarning
    >
      <body>
        <ThemeScript />
        {/* First focusable element on every page. */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <RouteAnnouncer />
        {children}
        <VinylTransition />
        <ThemeToggle />
      </body>
    </html>
  );
}
