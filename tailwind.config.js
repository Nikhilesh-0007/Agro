/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          primary: "#1B4928", // Deeper, warmer village forest green
          mid: "#2A6E3B",
          tint: "#EFF5EF", // Sage/Leaf warm tint
        },
        amber: {
          primary: "#D48A1D", // Golden-hour harvest honey
          deep: "#B26910", // Warm clay/terracotta soil
          tint: "#FBF3E3", // Wheat straw/golden grain warm tint
        },
        neutral: {
          charcoal: "#1C1917", // Warm stone charcoal
          stone: "#6B6661", // Warm granite dust
          offwhite: "#FAF5EC", // Warm organic linen/sand backdrop
        },
        earthy: {
          clay: "#A05A2C", // Warm terracotta clay
          ochre: "#D4A373", // Village ochre yellow
          straw: "#E7C169", // Fresh straw
        }
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        '4.5xl': ['2.625rem', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
}
