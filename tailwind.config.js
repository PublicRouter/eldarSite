/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/Home.js",
    "./src/components/Navigation.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        DancingScript: ["La Belle Aurore", "cursive"],
        mainTitle: ["Kanit", "sans-serif"],
        titleSub: ["Roboto Slab", "serif"],
        mainTitleTwo: ['Fredoka One', 'cursive']
      }
    },
  },
  plugins: [],
}
