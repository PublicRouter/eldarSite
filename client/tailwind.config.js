/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    // "./src/components/CreateCharacter/CharacterForm.js",
    "./src/components/CreateCharacter",
    "./src/components/CharactersPage.js",
    "./src/components/FightPage.js",
    "./src/components/Home.js",
    "./src/components/Login.js",
    "./src/components/Navigation.js",
    "./src/components/CharactersList/index.js",
    "./src/components/CharacterForm/index.js",
    "./src/pages/CreateCharacterPage.js",
    "./src/components/ReturnSignObject/index.js",
    "./src/components/OrxCard/index.js",
    "./src/pages/Profile.js",
    "./src/pages/FightPage/index.js",
    "./src/pages/FightPage/profile.js"

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
