/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,html,js,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns : {
        '70/30' : '70% 28%',
      }
    },
  },
  plugins: [],
}

