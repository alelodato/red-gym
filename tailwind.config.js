/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#B91C1C",
          redHover: "#991B1B",
          redDeep: "#7F1D1D",
          black: "#0B0B0B",
          charcoal: "#111827",
          gray900: "#1F2937",
          gray200: "#E5E7EB",
          offwhite: "#F9FAFB",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        heading: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
