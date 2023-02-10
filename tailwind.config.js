/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue'],
      },
      colors: {
        primary: '#ff6392',
        'primary-darker': '#DA507A',
        'primary-darkest': '#ad1457',
        secondary: '#23FFD5',
        'secondary-darker': '#1AC7A6',
        'secondary-darkest': '#11806A',
        disabled: '#bebebe',
        'grey-medium': '#5a5a5a',
        'grey-dark': '#232323',
        background: '#130f20',
        success: '#23FFD5',
        warning: '#FEFE83',
        invalid: '#F65164',
        'invalid-darker': '#EB5757',
        default: 'white',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}
