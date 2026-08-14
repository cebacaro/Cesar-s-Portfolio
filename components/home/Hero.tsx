"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { home } from "@/content/home";
import { usePrefersReducedMotion } from "@/components/layout/MotionProvider";

const ROTATE_MS = 6000;

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const backgrounds = home.hero.backgrounds;

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % backgrounds.length),
      ROTATE_MS
    );
    return () => clearInterval(id);
  }, [reduced, backgrounds.length]);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <AnimatePresence initial={false}>
        <m.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <Image
            src={backgrounds[index].src}
            alt={backgrounds[index].alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </m.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/20" />

      <div className="relative z-10 w-full px-5 pb-16 pt-40 sm:px-8 sm:pb-20">
        <p className="mb-5 font-mono text-eyebrow uppercase text-bone-dim">
          {home.hero.roles.join(" · ")}
        </p>
        <h1 className="font-display text-display-2xl font-black text-bone">
          Cesar
          <br />
          Bacaro
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-bone-dim sm:text-xl">
          {home.hero.statement}
        </p>
      </div>
    </section>
  );
}
