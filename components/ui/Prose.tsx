import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export default function Prose({
  paragraphs,
  className,
  lead = false,
}: {
  paragraphs: readonly string[];
  className?: string;
  lead?: boolean;
}) {
  return (
    <div className={cn("max-w-measure space-y-6", className)}>
      {paragraphs.map((p, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <p
            className={cn(
              "leading-relaxed text-bone-dim",
              lead && i === 0 && "text-lg text-bone sm:text-xl"
            )}
          >
            {p}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
