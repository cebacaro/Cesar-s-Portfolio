import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CTALink({
  href,
  children,
  variant = "solid",
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
}) {
  const styles = cn(
    "inline-block rounded-full px-7 py-3 font-mono text-sm uppercase tracking-[0.15em] transition-colors",
    variant === "solid"
      ? "bg-[var(--accent)] text-ink-950 hover:bg-bone"
      : "border border-bone/30 text-bone hover:border-[var(--accent)] hover:text-[var(--accent)]",
    className
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
