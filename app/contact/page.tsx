import type { Metadata } from "next";
import AccentScope from "@/components/layout/AccentScope";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import IntentCard from "@/components/contact/IntentCard";
import { contactIntro, intents } from "@/content/contact";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Giigs partnerships, investment, music, photography, software, press — pick the door that fits and talk to Cesar directly.",
  openGraph: { images: ["/opt/og/contact.jpg"] },
};

const directLinks = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "Giigs", href: site.links.giigs },
  { label: "Instagram", href: site.links.instagram },
  { label: "LinkedIn", href: site.links.linkedin },
];

export default function ContactPage() {
  return (
    <AccentScope accent="neutral">
      <section className="px-5 pb-16 pt-36 sm:px-8">
        <Eyebrow>{contactIntro.eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl font-display text-display-xl font-black text-bone">
          {contactIntro.title}
        </h1>
        <p className="mt-6 max-w-measure text-lg text-bone-dim">
          {contactIntro.note}
        </p>
      </section>

      <section
        aria-label="Reasons to get in touch"
        className="grid items-stretch gap-5 px-5 pb-20 sm:grid-cols-2 sm:px-8 lg:grid-cols-3"
      >
        {intents.map((intent, i) => (
          <IntentCard key={intent.title} intent={intent} index={i} />
        ))}
      </section>

      <section className="border-t border-ink-700 px-5 py-20 sm:px-8">
        <Reveal>
          <p className="font-mono text-eyebrow uppercase text-bone-faint">
            The places I actually check
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {directLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="font-display text-2xl font-extrabold text-bone underline decoration-ink-600 underline-offset-8 transition-colors hover:decoration-[var(--accent)] sm:text-3xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </AccentScope>
  );
}
