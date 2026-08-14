import Link from "next/link";
import { now } from "@/content/now";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function NowPreview() {
  const preview = now.items.slice(0, 4);
  return (
    <section className="border-t border-ink-700 px-5 py-24 sm:px-8">
      <Reveal>
        <Eyebrow>Currently — {now.updated}</Eyebrow>
      </Reveal>
      <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {preview.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.06}>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone-faint">
              {item.label}
            </p>
            <p className="mt-2 leading-relaxed text-bone-dim">{item.body}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10">
        <Link
          href="/now"
          className="font-mono text-sm uppercase tracking-[0.15em] text-bone underline decoration-[var(--accent)] underline-offset-8 transition-colors hover:text-[var(--accent)]"
        >
          Everything I&rsquo;m doing now →
        </Link>
      </Reveal>
    </section>
  );
}
