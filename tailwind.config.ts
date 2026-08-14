import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0A0C",
          900: "#101014",
          800: "#17171D",
          700: "#22222A",
          600: "#33333D",
        },
        bone: {
          DEFAULT: "#EDE8E0",
          dim: "#B9B3A8",
          faint: "#6E6A62",
        },
        accent: {
          giigs: "#7B61FF",
          music: "#FF3D5A",
          photo: "#FFB454",
          build: "#3DE8B0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-2xl": [
          "clamp(3.5rem, 9vw, 9.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.02em" },
        ],
        "display-xl": [
          "clamp(2.75rem, 6.5vw, 6.5rem)",
          { lineHeight: "1.0", letterSpacing: "-0.02em" },
        ],
        "display-lg": ["clamp(2rem, 4.5vw, 4rem)", { lineHeight: "1.05" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.15" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.2em" }],
      },
      maxWidth: {
        measure: "68ch",
      },
    },
  },
  plugins: [],
};
export default config;
