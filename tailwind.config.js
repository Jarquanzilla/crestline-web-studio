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
        ink: '#050608',
        charcoal: '#0d1014',
        paper: '#f5f4f0',
        line: 'rgba(255,255,255,0.08)',
        'line-strong': 'rgba(255,255,255,0.16)',
      },
    },
  },
  plugins: [],
}
