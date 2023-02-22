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
        'login-fondo': "url('https://firebasestorage.googleapis.com/v0/b/marketplace-b3a91.appspot.com/o/puros.jpg?alt=media&token=3f23eeda-05ce-431d-b24c-f5883669e6e2')",
      }
      
    },
  },
  plugins: []
}


