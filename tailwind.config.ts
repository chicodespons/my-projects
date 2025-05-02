import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customTeal: "#6AAFB2",
        customDarkTeal: "#559092",
      },
      animation: {
        "roll-out": "rollOut 0.5s ease-in-out forwards", // Increased duration for bounce effect
        "roll-out-delayed": "rollOutDelayed 1s ease-in-out forwards",
      },
      keyframes: {
        rollOut: {
          "0%": { transform: "translateX(-100%) translateY(-50%)" },
          "100%": { transform: "translateX(10rem) translateY(-50%)" }, // Settle into final position
        },
        rollOutDelayed: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" }, // Final position
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
