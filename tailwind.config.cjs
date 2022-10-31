/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '200px',
      // => @media (min-width: 200px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: {
        'login-fondo': "url('C:\Users\sebas\OneDrive\Escritorio\marketplace\marketplace\src\assets\img\puros.jpg')",
      }
      
    },
  },
  plugins: []
}


