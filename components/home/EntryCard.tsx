import Link from "next/link";
import Image from "next/image";
import AccentScope from "@/components/layout/AccentScope";
import Reveal from "@/components/ui/Reveal";
import type { SectionKey } from "@/content/site";

export default function EntryCard({
  title,
  kicker,
  blurb,
  href,
  accent,
  image,
  index,
}: {
  title: string;
  kicker: string;
  blurb: string;
  href: string;
  accent: SectionKey;
  image: { src: string; alt: string };
  index: number;
}) {
  return (
    <AccentScope accent={accent}>
      <Reveal delay={index * 0.08}>
        <Link
          href={href}
          className="group relative block aspect-[4/5] overflow-hidden border border-ink-700 bg-ink-900 sm:aspect-[3/4]"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="font-mono text-eyebrow uppercase text-[var(--accent)]">
              {kicker}
            </p>
            <h3 className="mt-3 font-display text-3xl font-black leading-none text-bone sm:text-4xl">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-snug text-bone-dim">{blurb}</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Enter →
            </p>
          </div>
        </Link>
      </Reveal>
    </AccentScope>
  );
}
