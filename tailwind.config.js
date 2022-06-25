/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './components/**/*.{html,js}',
  './pages/**/*.{html,js}',
  './index.html',
  "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      spacing: {
        '100': '33rem',
      }
    },
    colors: {
      'primary': '#8ED081',
      'secondary': '#2196F3',
      },
  },
  plugins: [ 
    require('flowbite/plugin')
  ],
}
