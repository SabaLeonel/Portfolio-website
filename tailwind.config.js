/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': '#002651',
        'selected-text': '#ff304f',
        'secondary': '#ff304f',
        'nav': '#002651',
        'input-border': '#28c7fa',
        'input': '#775ada',
        },
    },
  },
  plugins: [],
}