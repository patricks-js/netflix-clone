/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.tsx", "index.html"],

  theme: {
    extend: {
      colors: {
        red: {
          700: "#E50914"
        }
      },
      backgroundImage: {
        "hero-image":
          "url(https://raw.githubusercontent.com/patricks-js/netflix-clone/main/src/assets/hero-image.png)",
        "register-login":
          "linear-gradient(180deg, #151515 39.08%, #030303 100%);"
      }
    }
  },

  plugins: []
};
