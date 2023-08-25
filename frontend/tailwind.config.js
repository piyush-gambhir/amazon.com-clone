/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'amazon-ember': ['Amazon Ember', 'Arial', 'sans-serif']
      },
      colors: {
        'pumpkin_orange': '#E47911',
        'vibrant_yellow': '#FFD814',
        'amber_yellow': '#FF9900',
        'goldenrod_yellow': '#f0c14b',
        'light_gray': '#949494',
        'medium_gray': '#a6a6a6',
        'snow_white': '#F7FEFF',
        'crimson_red': '#c40000',
        'blue_green': '#007185',
        'royal_blue': '#0066c0',
        'midnight_navy_blue': '#131921',
        'blue_gray': '#232f3e',
        'steel_blue': '#37475A',
        'mist_blue': '#e3e6e6',
        'light_gray': '#DDD',
        'ocean_blue': '#004B91',
        'gray': '#999',
      },
      boxShadow: {
        'input_box_focus': '0 0 0 3px #c8f3fa, 0 1px 2px rgba(15,17,17,.15) inset',
        'input_box_error_focus': '0 0 0 1px #cc0c39 inset, 0 0 0 3px #ffe3e3',
      },
    },
  },
  plugins: [],
}
