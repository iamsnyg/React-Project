/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nerko': ['Nerko+One', 'cursive'],
        'display': ['Matemasie', 'sans-serif'],
        'map': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        "10xl": '108px'
      },
      lineHeight: {
        'lineHeight': '90px'
      }

    },
  },
  plugins: [],
}

