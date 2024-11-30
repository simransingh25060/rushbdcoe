/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Belleza: ['Belleza', 'sans-serif'],
        Gabarito: ['Gabarito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

