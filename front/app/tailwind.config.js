/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  content: [],
  theme: {
    screens: {
      phone: '360px',
      // phone: {'min': '360px','max':'450'},
      // tablet: '640px',
      // laptop: '1024px',
      desktop: '1280px',
    },
    fontFamily: {
      // display: ['Gilroy', 'sans-serif'],
      // body: ['Graphik', 'sans-serif'],
    },
    

    // borderRadius: {
    //   'none': '0',
    //   'sm': '.125rem',
    //   DEFAULT: '.25rem',
    //   'lg': '.5rem'
    // },
    extend: {
      colors: {
        main: '#24B7D7',
        sub1: '#9BDDEC',
        sub2: '#8D8D8D',
        sub3: '#FFF',
        star5: '#F04564',
        star4: '#F07C91',
        star3: '#F3BEC7',
        star2: '#E7D1D5',
        star1: '#E0E0E0',
        fontMain: '#FFF',
        fontSub1: '#ADADAD',
        fontSub2: '#000',
      }
    },
  },
  plugins: [],
}
