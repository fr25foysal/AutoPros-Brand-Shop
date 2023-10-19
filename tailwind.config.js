/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': "'Poppins', sans-serif"    },
    colors: {
      'yellow': '#FFD717',
      'dark-bg': '#222831',
      'white': '#fff',
      'black': '#000',
      'second-dark-bg': '#352F44'
    }
  },
  plugins: [require("daisyui")],
}

