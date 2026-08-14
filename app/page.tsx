import type { Metadata } from "next";
import AccentScope from "@/components/layout/AccentScope";
import Hero from "@/components/home/Hero";
import EntryCard from "@/components/home/EntryCard";
import NowPreview from "@/components/home/NowPreview";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import Eyebrow from "@/components/ui/Eyebrow";
import Prose from "@/components/ui/Prose";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Reveal from "@/components/ui/Reveal";
import CTALink from "@/components/ui/CTALink";
import { home } from "@/content/home";
import type { SectionKey } from "@/content/site";

export const metadata: Metadata = {
  openGraph: { images: ["/opt/og/home.jpg"] },
};

export default function HomePage() {
  return (
    <AccentScope accent="neutral">
      <Hero />

      <MarqueeStrip
        items={[
          "Founder of Giigs",
          "New Orleans percussionist",
          "Software builder",
          "Photographer",
          "Cuba → NOLA",
        ]}
      />

      <section
        aria-label="Explore"
        className="grid gap-4 px-5 py-24 sm:grid-cols-2 sm:px-8 lg:grid-cols-4"
      >
        {home.entries.map((entry, i) => (
          <EntryCard
            key={entry.href}
            {...entry}
            accent={entry.accent as SectionKey}
            index={i}
          />
        ))}
      </section>

      <section className="border-t border-ink-700 px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow className="mb-8">{home.story.eyebrow}</Eyebrow>
            </Reveal>
            <Prose paragraphs={home.story.paragraphs} lead />
          </div>
          <ParallaxImage
            src="/opt/street-brass-band.webp"
            alt="Brass band reflected in a rain puddle on a New Orleans street"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="hidden aspect-[3/4] max-h-[560px] lg:block"
          />
        </div>
      </section>

      <NowPreview />

      <section className="border-t border-ink-700 px-5 py-28 text-center sm:px-8">
        <Reveal>
          <p className="font-display text-display-xl font-black text-bone">
            {home.cta.line}
          </p>
          <div className="mt-10">
            <CTALink href="/contact">{home.cta.action}</CTALink>
          </div>
        </Reveal>
      </section>
    </AccentScope>
  );
}
