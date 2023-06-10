/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      'sans': ['Noto Sans', 'sans-serif'],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      colors: {
        'clp-purple': '#6B43BC',
        'clp-gray': '#808386'
      },
      backgroundImage: {
        'bg1': "url('../src/img/bg1.jpg')",
        'bg2': "url('../src/img/bg2.jpg')",
        'bg3': "url('../src/img/bg3.jpg')",
        'mision': "url('../src/img/mision.jpg')",
        'vision': "url('../src/img/vision.jpg')",
        'objetivo': "url('../src/img/objetivo.jpg')",
        'courses': "url('../src/img/services/courses.jpg')",
        'ing': "url('../src/img/services/ing.jpg')",
        'phone': "url('../src/img/services/phone.jpg')",
        'router': "url('../src/img/services/router.jpg')",
        'security': "url('../src/img/services/security.jpg')",
        'shop': "url('../src/img/services/shop.jpg')",
        'support': "url('../src/img/services/support.jpg')"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
