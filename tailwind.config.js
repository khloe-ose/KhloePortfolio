/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#102A43",
        "paper-soft": "#183B56",
        "paper-blue": "#243B53",
        ink: "#F0F7FF",
        muted: "#BCCCDC",
        line: "#486581",
        brand: {
          50: "#1F3F5B",
          100: "#486581",
          500: "#63B3ED",
          600: "#38BDF8",
          700: "#BEE3F8",
        },
      },
      boxShadow: {
        editorial: "0 26px 90px rgba(8, 17, 31, 0.32)",
        "soft-card": "0 16px 48px rgba(8, 17, 31, 0.26)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
