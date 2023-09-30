/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueprimary: "#7395CB",
        bluesecondary: "#AECDE2",
        blueblack: "#373D43"
      }
    },
  },
  plugins: [],
}