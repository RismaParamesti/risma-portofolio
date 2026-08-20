/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 70px rgba(15, 23, 42, 0.10)',
      },
    },
  },
  plugins: [],
};
