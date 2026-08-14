export const site = {
  name: "Cesar Bacaro",
  tagline: "Founder. Musician. Builder. Photographer.",
  email: "cebacaro@gmail.com",
  // TODO(cesar): set the real production domain before launch
  url: "https://cesarbacaro.com",
  location: "New Orleans, LA",
  links: {
    giigs: "https://giigsapp.com/",
    // TODO(cesar): replace with your real profile URLs
    instagram: "[PLACEHOLDER: https://instagram.com/your-handle]",
    linkedin: "[PLACEHOLDER: https://linkedin.com/in/your-handle]",
  },
} as const;

export type SectionKey = "giigs" | "music" | "photo" | "build" | "neutral";

export const accents: Record<SectionKey, string> = {
  giigs: "#7B61FF",
  music: "#FF3D5A",
  photo: "#FFB454",
  build: "#3DE8B0",
  neutral: "#EDE8E0",
};

export const nav = [
  { label: "Work", href: "/builds" },
  { label: "Giigs", href: "/giigs" },
  { label: "Music", href: "/music" },
  { label: "Photography", href: "/photography" },
  { label: "About", href: "/about" },
  { label: "Now", href: "/now" },
] as const;
