/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "abu-abu": "#f6f7f8",
        "abu-gelap" : "#9EA0A5",
        "orange-gelap": "#fbb017",
        "orange-terang": "#FAD589",
        'ungu-muda' : '#5E50A1',
        'abu-muda' : '#F2F3F4'
      },
      backgroundImage: {
        "login": "url('./src/assets/image/bg-login.png')"
      }
    },
  },
};