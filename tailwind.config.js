/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '893px',
      },
    },
    fontFamily: {
      'syne': ['"Syne"', 'system-ui', 'sans-serif'],
      'tillana': ['"Tillana"', 'system-ui', 'sans-serif']
    },
    
  },
  plugins: [],
}
