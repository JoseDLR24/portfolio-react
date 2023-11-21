/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueblack: "#373D43"
      },
      fontFamily: {
        'jetBrains': ['JetBrains Mono', 'monospace'],
        'nunito': ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}