/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          primary: "#1A6B2F",
          mid: "#2E8B47",
          tint: "#EAF6EC",
        },
        amber: {
          primary: "#F5A800",
          deep: "#E07B00",
          tint: "#FFF5DD",
        },
        neutral: {
          charcoal: "#1C1C1C",
          stone: "#5A5A5A",
          offwhite: "#F7F7F5",
        },
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
