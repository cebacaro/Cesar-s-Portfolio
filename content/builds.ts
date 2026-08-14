import type { Project } from "./types";

export const buildsIntro = {
  eyebrow: "Builds",
  title: "Software, experiments, and unusual ideas.",
  note: "A home for everything that doesn't fit inside Giigs.",
};

export const projects: Project[] = [
  {
    slug: "giigs",
    title: "Giigs",
    oneLiner: "Rebuilding how live music gets booked and paid.",
    problem:
      "Live music booking runs on scattered messages, spreadsheets, and trust.",
    built:
      "A platform for booking, payments, discovery, and venue operations — designed, built, and taken to market.",
    role: "Founder — strategy, product, design, development, sales, fundraising.",
    status: "Active — scaling across New Orleans, Chicago, and Atlanta.",
    accent: "giigs",
    image: {
      src: "/opt/giigs-venue-profile.webp",
      alt: "Giigs app showing a venue profile",
      width: 2000,
      height: 2000,
    },
    href: "/giigs",
  },
  {
    slug: "renovation-ops",
    title: "Private renovation ops software",
    oneLiner: "Operational software for real-world renovation projects.",
    problem:
      "Renovation work runs on the same chaos as live music: quotes, crews, materials, and schedules scattered across texts and paper.",
    built:
      "[PLACEHOLDER: one sentence on what the tool does — tracking, scheduling, budgets]",
    role: "Design and development.",
    constraints:
      "Built for one demanding real-world operator, not a hypothetical user.",
    status: "Private — in active use.",
    accent: "build",
  },
  {
    slug: "jorge-perez-law",
    title: "Jorge Perez Law Firm",
    oneLiner: "A full web presence for a New Orleans law practice.",
    problem:
      "A working law firm needed a site that could carry its practice areas — taxation, personal injury, immigration — with credibility.",
    built:
      "Design and development of the firm's website, end to end.",
    role: "Design and development.",
    status: "Live.",
    accent: "build",
    image: {
      src: "/opt/lawfirm-injury.webp",
      alt: "Practice-area page of the Jorge Perez Law Firm website",
      width: 1320,
      height: 749,
    },
    href: "https://www.jorgeperezlaw.com/",
    external: true,
  },
  {
    slug: "this-site",
    title: "This site",
    oneLiner: "The digital headquarters you're standing in.",
    problem:
      "A founder-musician-photographer doesn't fit on a résumé template.",
    built:
      "Next.js, Tailwind, and a design system built around real photography — editorial type, per-section color, film grain, smooth scroll.",
    role: "Design and development.",
    status: "You're looking at it.",
    accent: "build",
  },
];
