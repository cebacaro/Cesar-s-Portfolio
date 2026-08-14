import Link from "next/link";
import { site } from "@/content/site";

const external = [
  { label: "Giigs", href: site.links.giigs },
  { label: "Instagram", href: site.links.instagram },
  { label: "LinkedIn", href: site.links.linkedin },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-700 bg-ink-950 px-5 py-14 sm:px-8">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-mono text-eyebrow uppercase text-bone-faint">
            Building something interesting?
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-block font-display text-display-lg font-extrabold text-bone transition-colors hover:text-[var(--accent)]"
          >
            Let&rsquo;s talk.
          </a>
          <address className="mt-3 font-mono text-xs not-italic text-bone-dim">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </address>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <ul className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-[0.18em]">
            {external.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone-dim transition-colors hover:text-bone"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-bone-dim transition-colors hover:text-bone"
              >
                Contact
              </Link>
            </li>
          </ul>
          <p className="font-mono text-xs text-bone-faint">
            Built by Cesar in New Orleans · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
