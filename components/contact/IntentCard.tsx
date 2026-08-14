import AccentScope from "@/components/layout/AccentScope";
import Reveal from "@/components/ui/Reveal";
import { buildMailto } from "@/lib/mailto";
import { site } from "@/content/site";
import type { Intent } from "@/content/types";

export default function IntentCard({
  intent,
  index,
}: {
  intent: Intent;
  index: number;
}) {
  return (
    <AccentScope accent={intent.accent}>
      <Reveal delay={(index % 3) * 0.06} className="h-full">
        <a
          href={buildMailto({
            to: site.email,
            subject: intent.subject,
            body: intent.body,
          })}
          className="group flex h-full flex-col border border-ink-700 bg-ink-900 p-7 transition-colors hover:border-[var(--accent)]"
        >
          <span
            aria-hidden
            className="h-1 w-10 bg-[var(--accent)] transition-all duration-300 group-hover:w-16"
          />
          <h2 className="mt-5 font-display text-2xl font-extrabold text-bone">
            {intent.title}
          </h2>
          <p className="mt-2 flex-1 leading-relaxed text-bone-dim">
            {intent.blurb}
          </p>
          <span className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-bone-faint transition-colors group-hover:text-[var(--accent)]">
            Open email →
          </span>
        </a>
      </Reveal>
    </AccentScope>
  );
}
