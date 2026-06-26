/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: '#0a0a0a',
        charcoal: '#141414',
        paper: '#f5f4f0',
        line: 'rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}
