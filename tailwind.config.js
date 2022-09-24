
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'rentya_home_bg': "url('../public/rentya_image.png')"
      }
    },
    fontFamily:{
      'manrope' : ['Manrope', 'sans-serif']
    }
  },
  plugins: [],
}
