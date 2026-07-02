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
        moss: {
          200: '#d7dbb8',
          300: '#b7c17e',
          400: '#94a05c',
          500: '#748049',
          600: '#5c6539',
        },
        silver: {
          300: '#e4e5e7',
          400: '#c3c5c9',
          500: '#9a9da2',
        },
      },
    },
  },
  plugins: [],
}
