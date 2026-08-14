"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <nav
        aria-label="Primary"
        className="flex items-center justify-between px-5 py-4 sm:px-8"
      >
        <Link
          href="/"
          className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-bone"
        >
          Cesar&nbsp;Bacaro
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "font-mono text-xs uppercase tracking-[0.18em] text-bone/70 transition-colors hover:text-bone",
                pathname === item.href && "text-bone underline underline-offset-8"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-bone/40 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-bone transition-colors hover:bg-bone hover:text-black"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="font-mono text-xs uppercase tracking-[0.18em] text-bone lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 -z-10 flex h-screen flex-col justify-center gap-2 bg-ink-950 px-8 mix-blend-normal"
        >
          {[...nav, { label: "Contact", href: "/contact" }].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "font-display text-4xl font-extrabold text-bone/80 transition-colors hover:text-bone",
                pathname === item.href && "italic text-bone"
              )}
            >
              <span className="mr-4 font-mono text-xs text-bone-faint">
                0{i + 1}
              </span>
              {item.label}
            </Link>
          ))}
          <div className="mt-10 flex gap-6 font-mono text-xs uppercase tracking-[0.18em] text-bone-dim">
            <a href={`mailto:${site.email}`}>Email</a>
            <a href={site.links.giigs} target="_blank" rel="noopener noreferrer">
              Giigs
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
