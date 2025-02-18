/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        JosefinSans: ['"Josefin Sans"', "sans-serif"],
        Montserrat: ['"Montserrat"', "san-serif"],
        OpenSans: ['"Open Sans"', "sans-serif"],

      },
      fontWeight: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      }
    },
  },
  plugins: [],
}
