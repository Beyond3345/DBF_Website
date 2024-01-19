/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'mayTGM': "url('../src/assets/mayTGM.png')",
        'flyday2': "url('../src/assets/flyday2.png')",
        'flydayHeader': "url('../src/assets/flydayHeader.png')",
        'flydayHeader2': "url('../src/assets/flydayHeader2.png')",
      },
      height: {
        '128': '600px',
        '148': '800px',
      },
    },
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
}
