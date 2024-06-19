/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bones:'#ECECEC',
        dark: '#0B081C',
        bg: '#0B0121',
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('/bg.jpg')",
        'blur': "url('/blur.png')",
      },
      boxShadow: {
        'card': 'inset 0px 0.5px 0px 0px #FFFFFF80, 0px -2px 40px 0px #BB9BFF26, 0px -2px 10px 0px #E9DFFF4D',
        'icon': '0px 0px 36.45px 0px #591DDDBF'
      }
    },
  },
  plugins: [],
}