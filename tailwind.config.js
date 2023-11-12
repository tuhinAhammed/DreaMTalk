/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'container' : '1385px'
      },
      fontFamily: {
        'Nunito': ['Nunito', 'sans-serif']
      },
      colors : {
        primary : "#5F35F5"
      },
      boxShadow: {
        'sm': '0 3px 4px 3px rgb(0 0 0 / 0.1), 0 9px 12px 1px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}

