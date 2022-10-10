/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1024px',
        '2xl': '1140px',
      },
    },
    extend: {
      boxShadow: {
        basic: '0px 1px 4px rgba(255, 255, 255, 0.5);',
      },
      colors: {
        primary: {
          100: '#0A0B0C',
          200: '#403D3D',
          300: '#736A62',
          400: '#BFB0A3',
          500: '#D9C9BA',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
