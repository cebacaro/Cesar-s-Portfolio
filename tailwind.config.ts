import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'bungee-hairline': ['Bungee Hairline', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
        'geist-vf': ['Geist VF', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'fira-mono': ['Fira Mono', 'monospace'],
        'fira-code': ['Fira Code', 'monospace'],
        'major-mono-display': ['Major Mono Display', 'monospace'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'sometype-mono': ['Sometype Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;