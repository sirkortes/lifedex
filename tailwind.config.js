module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    width: ['responsive', 'hover', 'focus'],
    height: ['responsive', 'hover', 'focus']
  },
  extend: {
    transitionProperty: { height: 'height' }
  },
  plugins: []
}
