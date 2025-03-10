import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        "4000": "4000ms",
        "5000": "5000ms",
        "6000": "6000ms",
        "7000": "6000ms",
        "3000": "3000ms",
        "8000": "8000ms",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "bungee-hairline": ["Bungee Hairline", "sans-serif"],
        "geist-mono": ["Geist Mono", "monospace"],
        "geist-vf": ["Geist VF", "sans-serif"],
        "playfair-display": ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        "fira-mono": ["Fira Mono", "monospace"],
        "fira-code": ["Fira Code", "monospace"],
        "roboto-mono": ["Roboto Mono", "monospace"],
        "sometype-mono": ["Sometype Mono", "monospace"],
        "amithen-extra": ["Amithen Extra", "sans-serif"],
        "major-mono-display": ["MajorMonoDisplay-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
