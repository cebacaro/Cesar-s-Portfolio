import Reveal from "@/components/ui/Reveal";

export default function JourneyTimeline({
  steps,
}: {
  steps: readonly { label: string; body: string }[];
}) {
  return (
    <ol className="relative space-y-12 border-l border-ink-600 pl-8">
      {steps.map((step, i) => (
        <li key={step.label} className="relative">
          <span
            aria-hidden
            className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]"
          />
          <Reveal delay={i * 0.05}>
            <p className="font-mono text-eyebrow uppercase text-[var(--accent)]">
              {step.label}
            </p>
            <p className="mt-2 max-w-xl leading-relaxed text-bone-dim">
              {step.body}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
