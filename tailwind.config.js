/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    colors: {
      'plat': '#DCE0D9',
      'charc': '#28536B',
      'redw': '#b2675e',
      'coffee': '#644536',
    },
  },
  plugins: [],
}

