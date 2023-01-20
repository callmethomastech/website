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
        inter: ["Open Sans", "sans-serif"]
      },
      colors: {
        "blue-green": "#0abdd1",
        "davys-grey": "#202020",
        "jet-grey": "#181818",
        "alice-blue": "#e6eaf0",
        "dim-grey": "#787b7d",
      }, 
    },
  },
  plugins: [],
}
