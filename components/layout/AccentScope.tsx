import { accents, type SectionKey } from "@/content/site";

// Sets the section's accent color for everything inside it — nav hovers,
// headings, links, and selection color all read var(--accent).
export default function AccentScope({
  accent,
  children,
  className,
}: {
  accent: SectionKey;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      style={{ "--accent": accents[accent] } as React.CSSProperties}
      className={className}
    >
      {children}
    </div>
  );
}
