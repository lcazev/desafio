import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        background_body: "#1F1F1F",
        gray: "#A4A4A4",
        border_yellow: "#B2DF28",
        text_blue: "#00B5CC",
      },
      fontFamily: {
        creepster: ["var(--font-creepster)", "cursive"],
        sans: ["var(--font-poppins)", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
