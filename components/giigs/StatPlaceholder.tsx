// Renders a stat whose value is still a [PLACEHOLDER]. The dashed border
// makes unfinished numbers impossible to miss before launch.
export default function StatPlaceholder({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const isPlaceholder = value.includes("PLACEHOLDER");
  return (
    <div
      className={
        isPlaceholder
          ? "border border-dashed border-bone-faint/50 p-6"
          : "border border-ink-700 p-6"
      }
    >
      <p className="font-display text-4xl font-black text-[var(--accent)] sm:text-5xl">
        {isPlaceholder ? "—" : value}
      </p>
      <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-bone-dim">
        {label}
      </p>
      {isPlaceholder && (
        <p className="mt-2 font-mono text-[10px] text-bone-faint">{value}</p>
      )}
    </div>
  );
}
