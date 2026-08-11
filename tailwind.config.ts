import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F6F0E4",
          soft: "#EFE6D3",
          deep: "#E4D6B8",
        },
        brick: {
          DEFAULT: "#9C4A2E",
          light: "#C97C54",
          deep: "#6E3320",
        },
        night: {
          DEFAULT: "#181310",
          light: "#241C17",
          deep: "#0E0B09",
        },
        amber: {
          DEFAULT: "#E1A23D",
          light: "#F2C878",
          deep: "#A9762A",
        },
        charcoal: {
          DEFAULT: "#2B2420",
          soft: "#5B4F44",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        "drift": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 1.1s ease forwards",
        drift: "drift 6s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(23, 50, 41, 0.25)",
        card: "0 12px 40px -12px rgba(23, 50, 41, 0.18)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
