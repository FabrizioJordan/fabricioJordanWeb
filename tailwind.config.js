/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {  
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'beige': '#f5f5dc',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'tahiti': {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
        light: '#67e8f9',
        DEFAULT: '#06b6d4',
        dark: '#0e7490',
      },
    },
  },
  plugins: [],
}