import { cn } from "@/lib/utils";

export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-eyebrow uppercase text-[var(--accent)]",
        className
      )}
    >
      {children}
    </p>
  );
}
