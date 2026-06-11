/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F5",
        "paper-soft": "#F7F5F2",
        "paper-blue": "#F3F7FA",
        ink: "#171A1F",
        muted: "#6F747D",
        line: "#E7E1DA",
        brand: {
          50: "#F0F6FB",
          100: "#DCEAF5",
          500: "#5E8EBC",
          600: "#3F719F",
          700: "#315B82",
        },
      },
      boxShadow: {
        editorial: "0 24px 80px rgba(23, 26, 31, 0.08)",
        "soft-card": "0 14px 40px rgba(23, 26, 31, 0.05)",
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
