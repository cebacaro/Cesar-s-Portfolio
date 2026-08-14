import type { Metadata } from "next";
import Image from "next/image";
import AccentScope from "@/components/layout/AccentScope";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Prose from "@/components/ui/Prose";
import Reveal from "@/components/ui/Reveal";
import { about } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cuba → music → New Orleans → technology → Giigs. The story and operating philosophy of Cesar Bacaro.",
  openGraph: { images: ["/opt/og/about.jpg"] },
};

const resumeReady = !about.resume.href.includes("PLACEHOLDER");

export default function AboutPage() {
  return (
    <AccentScope accent="neutral">
      {/* Hero */}
      <section className="grid gap-10 px-5 pb-16 pt-36 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <Eyebrow>{about.hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-display-xl font-black text-bone">
            {about.hero.title}
          </h1>
        </div>
        <Reveal>
          <Image
            src={about.hero.portrait.src}
            alt={about.hero.portrait.alt}
            width={768}
            height={1024}
            priority
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="max-h-[60vh] w-auto"
          />
        </Reveal>
      </section>

      {/* Story */}
      <section className="border-t border-ink-700 px-5 py-24 sm:px-8">
        <SectionHeading title={about.story.heading} />
        <Prose paragraphs={about.story.paragraphs} lead className="mt-10" />
      </section>

      {/* Philosophy */}
      <section className="border-t border-ink-700 px-5 py-24 sm:px-8">
        <SectionHeading title={about.philosophy.heading} />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {about.philosophy.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.08}>
              <h3 className="font-display text-2xl font-extrabold text-bone">
                {item.title}
              </h3>
              <p className="mt-3 max-w-measure leading-relaxed text-bone-dim">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Milestones + recognition */}
      <section className="grid gap-16 border-t border-ink-700 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading title={about.milestones.heading} />
          <ul className="mt-10 space-y-4">
            {about.milestones.items.map((item) => (
              <li
                key={item}
                className="border-l-2 border-dashed border-bone-faint/50 pl-5 font-mono text-sm text-bone-dim"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading title={about.recognition.heading} />
          <Reveal className="mt-10">
            <p className="max-w-measure font-mono text-sm text-bone-faint">
              {about.recognition.note}
            </p>
          </Reveal>
          {resumeReady && (
            <Reveal className="mt-10">
              <a
                href={about.resume.href}
                className="inline-block rounded-full border border-bone/30 px-7 py-3 font-mono text-sm uppercase tracking-[0.15em] text-bone transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {about.resume.label}
              </a>
            </Reveal>
          )}
        </div>
      </section>

      {/* Human */}
      <section className="border-t border-ink-700 px-5 py-24 sm:px-8">
        <SectionHeading title={about.human.heading} />
        <ul className="mt-10 flex max-w-3xl flex-wrap gap-3">
          {about.human.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-dashed border-bone-faint/50 px-5 py-2 font-mono text-sm text-bone-dim"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </AccentScope>
  );
}
