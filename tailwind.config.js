/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        russet: '#8D3B31',
        cream: '#F5F5DC',
      },
    },
  },
  plugins: [],
};
