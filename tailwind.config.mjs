/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')
const tailwindTypography = require('@tailwindcss/typography')

export default {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx,html,css}'],
  theme: {
    extend: {
      colors: {
        accent: '#2337ff',
        accentdark: '#000d8a',
        black: 'rgb(15, 18, 25)',
      },
      boxShadow: {
        custom: '0 2px 6px rgba(96, 115, 159, 0.25), 0 8px 24px rgba(96, 115, 159, 0.33), 0 16px 32px rgba(96, 115, 159, 0.33)',
      },
      fontFamily: {
        atkinson: ['Atkinson', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindTypography(), addDynamicIconSelectors()],
};
