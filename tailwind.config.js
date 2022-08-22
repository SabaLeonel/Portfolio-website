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
          100: "#A9A9A9",
        },
        neutral: {
          100: "#EFEFEF",
        },
      },
    },
  },
  plugins: [],
}