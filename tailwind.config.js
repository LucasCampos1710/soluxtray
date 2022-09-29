module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  Media: false, // or 'media' or 'class'
  theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
