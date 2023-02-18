/** @type {import('tailwindcss').Config} */
const dafaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    maxWidth: {
      'max': '1100px',
      'max-form': "600px"
    },
    maxHeight: {
      'max-form': "600px"
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...dafaultTheme.fontFamily.sans]
      }, boxShadow: {
        '3xl': "0px 0px 30px 10px #F0F0F0;"
      }
    },
    backgroundImage: {
      'hero-pattern': "url('@/assets/images/banner-bg.png')",
    }
  },
  plugins: [],
}