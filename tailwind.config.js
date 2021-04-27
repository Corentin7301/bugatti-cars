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
      backgroundImage: theme => ({
        chironLegend: "url('./public/images/chiron-sport-les-legendes-du-ciel-de.png')",
        chironLegendMobile: "url('./public/images/chiron-sport-les-legendes-du-ciel-de-mobile.png')",
        veyronSuperSport: "url('./public/images/veyron-super-sport-de.png')",
        veyronSuperSportMobile: "url('./public/images/veyron-super-sport-de-mobile.png')",
        centodieci: "url('./public/images/centodieci-de.png')",
        centodieciMobile: "url('./public/images/centodieci-de-mobile.png')",
        laVoitureNoire: "url('./public/images/la-voiture-noire-de.png')",
        laVoitureNoireMobile: "url('./public/images/la-voiture-noire-de-mobile.png')",
        divo: "url('./public/images/divo-de.png')",
        divoMobile: "url('./public/images/divo-de-mobile.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
