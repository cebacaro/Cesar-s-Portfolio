// Duplicated content scrolls at constant speed; pauses on hover, disabled
// entirely under prefers-reduced-motion (see globals.css).
export default function MarqueeStrip({
  items,
  duration = 40,
}: {
  items: string[];
  duration?: number;
}) {
  const row = items.join("  ·  ") + "  ·  ";
  return (
    <div
      aria-hidden
      className="overflow-hidden whitespace-nowrap border-y border-ink-700 py-4"
    >
      <div
        className="animate-marquee inline-block font-mono text-sm uppercase tracking-[0.2em] text-bone-faint"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <span>{row}</span>
        <span>{row}</span>
      </div>
    </div>
  );
}
