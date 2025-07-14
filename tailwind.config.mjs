import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");
const tailwindTypography = require("@tailwindcss/typography");

export default {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx,html,css}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        pink: "#cca8e9",
        purple: "#4f3b78",
        white: "#f4f4f5",
        black: "rgb(15, 18, 25)",
        cardlight: "#ffffff",
        carddark: "#27272a",
      },
      boxShadow: {
        custom:
          "0 2px 6px rgba(96, 115, 159, 0.25), 0 8px 24px rgba(96, 115, 159, 0.33), 0 16px 32px rgba(96, 115, 159, 0.33)",
      },
      fontFamily: {
        winky: ['"Winky Rough"', ...fontFamily.sans],
      },
    },
    keyframes: {
      "gradient-text": {
        "0%": {
          "--tw-gradient-from": "#4f3b78",
          "--tw-gradient-to": "#cca8e9",
        },
        "100%": {
          "--tw-gradient-from": "#cca8e9",
          "--tw-gradient-to": "#4f3b78",
        },
      },
    },
    animation: {
      "gradient-text": "gradient-text 3s ease-in infinite alternate",
    },
    backgroundImage: {
      "animated-gradient":
        "linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))",
    },
  },
  plugins: [tailwindTypography(), addDynamicIconSelectors()],
};
