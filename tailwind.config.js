/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wmelon: {
          100: "#FF3B3F",
        },
        carbon: {
          100: "#4A4A4A",
        },
        neutral: {
          100: "#EFEFEF",
        },
      },
    },
  },
  plugins: [],
}