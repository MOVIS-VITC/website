/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--body-inter)'],
        poppins: ['var(--body-poppins)'],
      },
      colors: {
        neutral: '#ffffed',
        heading: '#111111',
        text: '#222222',
        textAlt: '#333333',
        light: '#555555',
        out: '#d2d2c8' 
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [],
  },
}