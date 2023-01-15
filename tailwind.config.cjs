/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        }
      },
      animation: {
        "blinking": "blink 1s linear infinite"
      },
      fontFamily: {
        inter: ["inter", "serif"]
      },
      colors: {
        "space-cadet": "#273043",
        "prussian-blue": "#2E3B54",
        "independence": "#394A6A",
        "mint-cream": "#F8FFF8",
        "platinum": "#CCD1CB",
      }, 
    },
  },
  plugins: [],
}
