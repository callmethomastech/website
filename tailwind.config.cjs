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
      }
    },
  },
  plugins: [],
}
