const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: "jit",
  important: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      // },
      padding: {
        '1/2': '50%',
        '1/3': '33.3333333333%',
        '2/3': '66.6666666666%',
      },
      gridTemplateColumns: {
        'layout': '300px 1fr',
      },
      boxShadow: {
        post: '10px 10px 25px -5px rgba(0, 0, 0, 0.1), -10px -10px 10px -5px rgba(0, 0, 0, 0.04)',
        // DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        // md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        // lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        // xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        // '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        // '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        // inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        // none: 'none',
      },
      colors: {
        'code': '#f0f0f0',
      }
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'md': '16px',
      'base': '18px',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
}