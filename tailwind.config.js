/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl':'1650px',
        'lg2':'1134px',
        'lg3':'926px',
        'md2': '780px',
        'md3':'680px',
        'xs':'544px'
      },
    },
  },
  plugins: [],
}