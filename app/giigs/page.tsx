import type { Metadata } from "next";
import Image from "next/image";
import AccentScope from "@/components/layout/AccentScope";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Prose from "@/components/ui/Prose";
import Reveal from "@/components/ui/Reveal";
import CTALink from "@/components/ui/CTALink";
import ParallaxImage from "@/components/ui/ParallaxImage";
import StatPlaceholder from "@/components/giigs/StatPlaceholder";
import JourneyTimeline from "@/components/giigs/JourneyTimeline";
import { giigs } from "@/content/giigs";

export const metadata: Metadata = {
  title: "Giigs — rebuilding how live music gets booked and paid",
  description:
    "The flagship case study: why a working New Orleans percussionist founded Giigs, what the product does, and where it's going.",
  openGraph: { images: ["/opt/og/giigs.jpg"] },
};

export default function GiigsPage() {
  return (
    <AccentScope accent="giigs">
      {/* Hero */}
      <section className="grid min-h-screen items-center gap-10 overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-2">
        <div>
          <Eyebrow>{giigs.hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-display-2xl font-black text-bone">
            {giigs.hero.title}
          </h1>
          <p className="mt-6 max-w-md text-xl leading-relaxed text-bone-dim sm:text-2xl">
            {giigs.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTALink href={giigs.ctas.primary.href} external>
              {giigs.ctas.primary.label}
            </CTALink>
            <CTALink href={giigs.ctas.secondary.href} variant="outline">
              {giigs.ctas.secondary.label}
            </CTALink>
          </div>
        </div>
        <Reveal className="relative">
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-accent-giigs/20 blur-3xl" />
          <Image
            src={giigs.hero.image.src}
            alt={giigs.hero.image.alt}
            width={2000}
            height={2000}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="relative mx-auto max-h-[70vh] w-auto"
          />
        </Reveal>
      </section>

      {/* Problem */}
      <section className="border-t border-ink-700 px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="01" title={giigs.problem.heading} />
        <Prose paragraphs={giigs.problem.paragraphs} lead className="mt-10" />
      </section>

      {/* Insight */}
      <section className="border-t border-ink-700">
        <ParallaxImage
          src={giigs.insight.image.src}
          alt={giigs.insight.image.alt}
          className="h-[50vh] sm:h-[70vh]"
        />
        <div className="px-5 py-24 sm:px-8">
          <SectionHeading eyebrow="02" title={giigs.insight.heading} />
          <Prose paragraphs={giigs.insight.paragraphs} lead className="mt-10" />
        </div>
      </section>

      {/* Product */}
      <section className="border-t border-ink-700 px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="03" title={giigs.product.heading} />
        <Reveal className="mt-6">
          <p className="max-w-measure text-lg text-bone-dim">
            {giigs.product.intro}
          </p>
        </Reveal>
        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {giigs.product.features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.07}>
              <div className="bg-ink-900 p-4">
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  width={2000}
                  height={2000}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl font-extrabold text-bone">
                {feature.title}
              </h3>
              <p className="mt-3 leading-relaxed text-bone-dim">
                {feature.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="border-t border-ink-700 px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="04" title={giigs.journey.heading} />
        <div className="mt-14">
          <JourneyTimeline steps={giigs.journey.steps} />
        </div>
      </section>

      {/* Role */}
      <section className="border-t border-ink-700 px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="05" title={giigs.role.heading} />
        <Reveal className="mt-6">
          <p className="max-w-measure text-lg text-bone-dim">
            {giigs.role.intro}
          </p>
        </Reveal>
        <ul className="mt-10 flex max-w-3xl flex-wrap gap-3">
          {giigs.role.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-ink-600 px-5 py-2 font-mono text-sm text-bone-dim"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Proof */}
      <section className="border-t border-ink-700 px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="06" title={giigs.proof.heading} />
        <Reveal className="mt-6">
          <p className="max-w-measure font-mono text-sm text-bone-faint">
            {giigs.proof.note}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {giigs.proof.stats.map((stat) => (
            <StatPlaceholder key={stat.label} {...stat} />
          ))}
        </div>
        <div className="mt-12 max-w-2xl">
          {giigs.proof.testimonials.map((t) => (
            <Reveal key={t.attribution}>
              <blockquote className="border-l-2 border-[var(--accent)] pl-6">
                <p className="font-display text-xl italic text-bone-dim">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-bone-faint">
                  {t.attribution}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Vision + CTA */}
      <section className="border-t border-ink-700 px-5 py-28 sm:px-8">
        <SectionHeading eyebrow="07" title={giigs.vision.heading} />
        <Prose paragraphs={giigs.vision.paragraphs} lead className="mt-10" />
        <Reveal className="mt-14 flex flex-wrap gap-4">
          <CTALink href={giigs.ctas.primary.href} external>
            {giigs.ctas.primary.label}
          </CTALink>
          <CTALink href={giigs.ctas.secondary.href} variant="outline">
            {giigs.ctas.secondary.label}
          </CTALink>
        </Reveal>
      </section>
    </AccentScope>
  );
}
