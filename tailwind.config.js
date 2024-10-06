/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins'],
        roboto500: ['roboto-500'],
        roboto1000: ['roboto-1000'],
      },
    },
  },
  plugins: [],
}

