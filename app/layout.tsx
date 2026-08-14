import type { Metadata } from "next";
import "./globals.css";
import { display, body, mono } from "./fonts";
import { site } from "@/content/site";
import MotionProvider from "@/components/layout/MotionProvider";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import GrainOverlay from "@/components/layout/GrainOverlay";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description:
    "I build technology and experiences around culture, people, and the real world. Founder of Giigs, New Orleans percussionist, software builder, and photographer.",
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <GrainOverlay />
        </MotionProvider>
      </body>
    </html>
  );
}
