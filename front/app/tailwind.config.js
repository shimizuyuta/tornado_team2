/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode:false,
  content: [],
  theme: {
    screens: {
      phone: "360px",
      // phone: {'min': '360px','max':'450'},
      // tablet: '640px',
      // laptop: '1024px',
      desktop: '1280px'
    },
    fontFamily: {
      // display: ['Gilroy', 'sans-serif'],
      // body: ['Graphik', 'sans-serif'],
    },
    // colors: {
    //   main: "F04564",
    //   sub1: "FFF5E2",
    //   sub2: "FF859B",
    //   star5: "F04564",
    //   star4: "#F07C91",
    //   star3: "#F3BEC7",
    //   star2: "#E7D1D5",
    //   star1: "#E0E0E0"
    // },
    // borderRadius: {
    //   'none': '0',
    //   'sm': '.125rem',
    //   DEFAULT: '.25rem',
    //   'lg': '.5rem'
    // },
    extend: {},
    // spacing: {
    //   px: '1px',
    //   '0': '0',
    //   '1': '0.25rem',
    //   '2': '0.5rem',
    //   '3': '0.75rem',
    //   '4': '1rem',
    //   '5': '1.25rem',
    //   '6': '1.5rem',
    //   '8': '2rem',
    //   '10': '2.5rem',
    //   '12': '3rem',
    //   '16': '4rem',
    //   '20': '5rem',
    //   '24': '6rem',
    //   '32': '8rem',
    //   '40': '10rem',
    //   '48': '12rem',
    //   '56': '14rem',
    //   '64': '16rem',
    // },
  },
  plugins: [],
}
