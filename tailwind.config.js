/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#131417",
        secondary: "#1E1F26",
        primaryText: "#868CA0",
        text555: "#555",
        customGreen:" rgb(234,255,150)",
        cusGreen:" rgb(214,235,150)",
      },
    },
  },
  plugins: [],
}