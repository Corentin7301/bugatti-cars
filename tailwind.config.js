module.exports = {
  purge: [
    './*.html',
    './src/assets/tailwindPerso.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: '#1b1a17',
        lightGray: '#F5F5F5',
        chironLegendColor: '#2E4A55',
        veyronSuperSportColor: '#C55719',
        centodieciColor: '#BFC1CD',
        laVoitureNoireColor: '#37373B',
        divoColor: '#2DA9C1'
      },
      fontFamily: {
        lato: ['lato']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
