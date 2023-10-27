const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'neutral-grey': '#D9D9D9',
        'neutral-dark': '#3F3F3F',
        'dark-blue': '#1F3469',
        'gray-textron': '#E7E7E7',
        'blue-light': '#0F71B1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
