/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'syne': ['"Syne Tactile"', 'system-ui', 'sans-serif'],
      'tillana': ['"Tillana"', 'system-ui', 'sans-serif']
    },
  },
  plugins: [],
}
