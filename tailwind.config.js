/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#191e24',
        secondary: '#000e14',
        textSecondary: '#c9cccf',
      },
      fontFamily: {
        'roboto': ['"Roboto Slab"', 'serif'],
      },
    },
  },
  plugins: [],
};
