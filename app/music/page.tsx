import type { Metadata } from "next";
import Image from "next/image";
import AccentScope from "@/components/layout/AccentScope";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Prose from "@/components/ui/Prose";
import Reveal from "@/components/ui/Reveal";
import CTALink from "@/components/ui/CTALink";
import ParallaxImage from "@/components/ui/ParallaxImage";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import { music } from "@/content/music";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Percussionist in the New Orleans scene — Latin, funk, jazz, and Afro-Caribbean. The lived experience behind Giigs.",
  openGraph: { images: ["/opt/og/music.jpg"] },
};

export default function MusicPage() {
  return (
    <AccentScope accent="music">
      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <Image
          src={music.hero.image.src}
          alt={music.hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />
        <div className="relative z-10 w-full px-5 pb-16 pt-40 sm:px-8">
          <Eyebrow>{music.hero.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-display-2xl font-black text-bone">
            {music.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-bone sm:text-2xl sm:leading-relaxed">
            {music.hero.opening}
          </p>
        </div>
      </section>

      <MarqueeStrip
        items={["Latin", "Funk", "Jazz", "Afro-Caribbean", "Havana", "New Orleans"]}
        duration={30}
      />

      {/* Bio */}
      <section className="px-5 py-24 sm:px-8">
        <SectionHeading title={music.bio.heading} />
        <Prose paragraphs={music.bio.paragraphs} lead className="mt-10" />
      </section>

      {/* Photo band */}
      <section aria-label="Performance photography" className="grid gap-4 px-5 sm:grid-cols-2 sm:px-8">
        {music.gallery.slice(0, 2).map((img) => (
          <ParallaxImage
            key={img.src}
            src={img.src}
            alt={img.alt}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="aspect-[3/4] sm:aspect-[4/5]"
          />
        ))}
      </section>

      {/* Credits */}
      <section className="px-5 py-24 sm:px-8">
        <SectionHeading title={music.credits.heading} />
        <Reveal className="mt-6">
          <p className="max-w-measure font-mono text-sm text-bone-faint">
            {music.credits.note}
          </p>
        </Reveal>
        <ul className="mt-10 flex max-w-3xl flex-wrap gap-3">
          {music.credits.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-dashed border-bone-faint/50 px-5 py-2 font-mono text-sm text-bone-dim"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Wide photo */}
      <ParallaxImage
        src={music.gallery[3].src}
        alt={music.gallery[3].alt}
        className="h-[50vh] sm:h-[75vh]"
      />

      {/* Media + current */}
      <section className="grid gap-16 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading title={music.media.heading} />
          <Reveal className="mt-6">
            <p className="max-w-measure font-mono text-sm text-bone-faint">
              {music.media.note}
            </p>
          </Reveal>
        </div>
        <div>
          <SectionHeading title={music.current.heading} />
          <Reveal className="mt-6">
            <p className="max-w-measure leading-relaxed text-bone-dim">
              {music.current.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Photo band 2 */}
      <section aria-label="More performance photography" className="grid gap-4 px-5 sm:grid-cols-2 sm:px-8">
        {music.gallery.slice(4, 6).map((img) => (
          <ParallaxImage
            key={img.src}
            src={img.src}
            alt={img.alt}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="aspect-[16/10]"
          />
        ))}
      </section>

      {/* Bridge to Giigs */}
      <section className="px-5 py-28 sm:px-8">
        <SectionHeading title={music.bridge.heading} />
        <Prose paragraphs={music.bridge.paragraphs} lead className="mt-10" />
        <Reveal className="mt-12">
          <CTALink href={music.bridge.cta.href} variant="outline">
            {music.bridge.cta.label}
          </CTALink>
        </Reveal>
      </section>
    </AccentScope>
  );
}
