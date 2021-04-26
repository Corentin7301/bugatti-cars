module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        chironLegendColor: '#2E4A55',
        veyronSuperSportColor: '#E57F33',
        centodieciColor: '#F24242',
        leVoitureNoireColor: '#37373B',
        divoColor: '#2DA9C1'
      },
      backgroundImage: theme => ({
        chironLegend: "url('./public/images/chiron-sport-les-legendes-du-ciel-d.png')",
        veyronSuperSport: "url('./public/images/veyron-super-sport-d.png')",
        centodieci: "url('./public/images/centodieci-d.png')",
        leVoitureNoire: "url('./public/images/la-voiture-noire-d.png')",
        divo: "url('./public/images/divo-d.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
