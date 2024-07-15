/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FBDAC8",
        },
        text: {
          DEFAULT: "#000000",
        },
        border: {
          DEFAULT: "#000000",
        },
      },
      boxShadow: {
        cta: "-8px 8px 0px rgba(0, 0, 0, 1)",
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
