import type { Metadata } from "next";
import AccentScope from "@/components/layout/AccentScope";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CTALink from "@/components/ui/CTALink";
import { now } from "@/content/now";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Cesar Bacaro is building, playing, shooting, and looking for right now. Updated monthly.",
  openGraph: { images: ["/opt/og/now.jpg"] },
};

export default function NowPage() {
  return (
    <AccentScope accent="neutral">
      <section className="px-5 pb-16 pt-36 sm:px-8">
        <Eyebrow>Now — {now.updated}</Eyebrow>
        <h1 className="mt-5 max-w-4xl font-display text-display-xl font-black text-bone">
          What I&rsquo;m doing now.
        </h1>
        <p className="mt-6 max-w-measure text-lg text-bone-dim">{now.intro}</p>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <dl className="max-w-3xl divide-y divide-ink-700 border-y border-ink-700">
          {now.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.04}>
              <div className="grid gap-2 py-8 sm:grid-cols-[180px_1fr] sm:gap-8">
                <dt className="font-mono text-eyebrow uppercase text-bone-faint">
                  {item.label}
                </dt>
                <dd className="leading-relaxed text-bone-dim">{item.body}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
        <Reveal className="mt-14">
          <CTALink href="/contact" variant="outline">
            Fit one of these? Say hello
          </CTALink>
        </Reveal>
      </section>
    </AccentScope>
  );
}
