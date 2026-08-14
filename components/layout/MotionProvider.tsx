"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { LazyMotion, domAnimation, useReducedMotion } from "framer-motion";
import Lenis from "lenis";

const ReducedMotionContext = createContext(false);

export function usePrefersReducedMotion() {
  return useContext(ReducedMotionContext);
}

export default function MotionProvider({ children }: { children: ReactNode }) {
  const prefersReduced = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (prefersReduced) return;
    const lenis = new Lenis({ lerp: 0.12 });
    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [prefersReduced]);

  return (
    <ReducedMotionContext.Provider value={mounted ? prefersReduced : false}>
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </ReducedMotionContext.Provider>
  );
}
