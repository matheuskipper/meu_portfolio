/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Criando as classes 'font-tech' e 'font-code'
        tech: ['Orbitron', 'sans-serif'],
        code: ['"Fira Code"', 'monospace'],
        geist: ['"Geist Pixel"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}