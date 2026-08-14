import type { NowItem } from "./types";

// Edit this file monthly. Update `updated`, rewrite items, push. That's it.
export const now: { updated: string; intro: string; items: NowItem[] } = {
  updated: "August 2026",
  intro:
    "What I'm actually doing right now — updated monthly, so this site stays a living thing instead of a brochure.",
  items: [
    {
      label: "Building",
      body: "Scaling Giigs — deepening venue operations and [PLACEHOLDER: current product focus].",
    },
    {
      label: "Expanding",
      body: "[PLACEHOLDER: where Giigs is expanding right now — city, venue count, milestone]",
    },
    {
      label: "Shipping",
      body: "Private operational software for a renovation business — real tools for a real operator.",
    },
    {
      label: "Playing",
      body: "[PLACEHOLDER: current bands, gigs, or sessions]",
    },
    {
      label: "Shooting",
      body: "[PLACEHOLDER: current photography project or subject]",
    },
    {
      label: "Looking to meet",
      body: "Venue operators in [PLACEHOLDER: target cities], investors who understand real-world marketplaces, and musicians who want the logistics to disappear.",
    },
  ],
};
