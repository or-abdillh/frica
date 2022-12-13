/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landscape-nature": "url('/img/landscape-nature.png')"
      },
      colors: {
        "viva-magenta": "#BB2649"
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
