"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { photos } from "@/content/photos";
import { cn } from "@/lib/utils";

// Editorial flow: "full" photos run wide, "half" photos sit in a staggered
// two-column rhythm. Clicking any photo opens a native <dialog> lightbox
// (focus trap + Esc for free) with arrow-key navigation.
export default function PhotoFlow() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = (i: number) => {
    setActive(i);
    dialogRef.current?.showModal();
  };
  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % photos.length);
      if (e.key === "ArrowLeft")
        setActive((i) => ((i ?? 0) - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  // Group into rows: consecutive "half" photos pair up, "full" stands alone.
  const rows: number[][] = [];
  let pending: number[] = [];
  photos.forEach((photo, i) => {
    if (photo.size === "full") {
      if (pending.length) {
        rows.push(pending);
        pending = [];
      }
      rows.push([i]);
    } else {
      pending.push(i);
      if (pending.length === 2) {
        rows.push(pending);
        pending = [];
      }
    }
  });
  if (pending.length) rows.push(pending);

  return (
    <>
      <div className="space-y-4 sm:space-y-6">
        {rows.map((row, r) =>
          row.length === 1 ? (
            <Reveal key={r}>
              <PhotoButton index={row[0]} onOpen={open} full />
            </Reveal>
          ) : (
            <div key={r} className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {row.map((i, col) => (
                <Reveal
                  key={i}
                  delay={col * 0.08}
                  className={cn(col === 1 && "sm:mt-24")}
                >
                  <PhotoButton index={i} onOpen={open} />
                </Reveal>
              ))}
            </div>
          )
        )}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        aria-label={active !== null ? photos[active].alt : "Photo viewer"}
        className="h-full max-h-none w-full max-w-none bg-ink-950/95 p-0 backdrop:bg-ink-950/90 open:flex open:items-center open:justify-center"
      >
        {active !== null && (
          <figure className="relative flex h-full w-full flex-col items-center justify-center p-4 sm:p-10">
            <Image
              key={photos[active].src}
              src={photos[active].src}
              alt={photos[active].alt}
              width={photos[active].width}
              height={photos[active].height}
              sizes="100vw"
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-bone-dim">
              {photos[active].caption ?? photos[active].alt}
              <span className="ml-4 text-bone-faint">
                {active + 1} / {photos.length}
              </span>
            </figcaption>
            <div className="absolute inset-x-0 top-0 flex justify-between p-4 sm:p-6">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActive((i) => ((i ?? 0) - 1 + photos.length) % photos.length)
                  }
                  className="rounded-full border border-bone/30 px-4 py-2 font-mono text-xs uppercase text-bone hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  onClick={() => setActive((i) => ((i ?? 0) + 1) % photos.length)}
                  className="rounded-full border border-bone/30 px-4 py-2 font-mono text-xs uppercase text-bone hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Next →
                </button>
              </div>
              <button
                type="button"
                onClick={close}
                className="rounded-full border border-bone/30 px-4 py-2 font-mono text-xs uppercase text-bone hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Close
              </button>
            </div>
          </figure>
        )}
      </dialog>
    </>
  );
}

function PhotoButton({
  index,
  onOpen,
  full = false,
}: {
  index: number;
  onOpen: (i: number) => void;
  full?: boolean;
}) {
  const photo = photos[index];
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`View photo: ${photo.alt}`}
      className="group block w-full text-left"
    >
      <span
        className={cn(
          "block overflow-hidden bg-ink-900",
          full && "max-h-[85vh]"
        )}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={full ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
          className={cn(
            "w-full transition-transform duration-700 group-hover:scale-[1.02]",
            full && "max-h-[85vh] object-cover"
          )}
        />
      </span>
      <span className="mt-3 flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.15em]">
        <span className="text-bone-faint transition-colors group-hover:text-bone-dim">
          {photo.caption ?? " "}
        </span>
        <span className="text-bone-faint/60">{photo.collection.replace("-", " ")}</span>
      </span>
    </button>
  );
}
