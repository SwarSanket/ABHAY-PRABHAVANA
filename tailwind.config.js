/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontSize: {
        'fipch-heading': '2.25rem', //  36px
        'fipch-subheading': '1.875rem', //  30px
        'fipch-text': '1rem', //  16px
        'fipch-small': '0.875rem', //  14px
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'semibold': 600,
        'bold': 700,
      },
      colors: {
        'fipch-orange': '#f15a22', // Custom color example
        'fipch-grey': '#606161',
        'fipch-chandan': '#fcb415',
        'fipch-champa': '#f9ba78',
        'fipch-pink': '#f59886',
        'fipch-conch': '#e6e2D7',
        'fipch-yellow':'#FFD30E',

      },


    },
  },
  plugins: [],
}

