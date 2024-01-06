/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dangrek': ['Dangrek',' serif'],
        'hanuman' : ['Hanuman', 'serif']
      }
    },
  },
  plugins: [],
}

