/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease forwards",
      },
      colors: {
        nm: {
          bg:    "#1c1c2e",
          deep:  "#16162a",
          dark:  "#0f0f1e",
          light: "#292944",
        },
        accent: {
          DEFAULT: "#38bdf8",
          teal:    "#2dd4bf",
        },
      },
    },
  },
  plugins: [],
};
