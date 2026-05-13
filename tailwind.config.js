/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: {
          50:  '#f2f7f0',
          100: '#e0eddb',
          200: '#c2dab9',
          300: '#98c08e',
          400: '#6da261',
          500: '#4e8545',
          600: '#3a6933',
          700: '#2f542a',
          800: '#274424',
          900: '#1e3419',  // deep forest
          950: '#0f1f0d',
        },
        beige: {
          50:  '#fdfaf5',
          100: '#f9f2e5',
          200: '#f2e4cb',
          300: '#e8d0a8',
          400: '#dab97e',
          500: '#cda05c',
          600: '#b8854a',
          700: '#9a6c3d',
          800: '#7d5735',
          900: '#65472d',
        },
        terra: {
          50:  '#fdf4f0',
          100: '#fae5db',
          200: '#f4ccba',
          300: '#ecaa8c',
          400: '#e17e57',
          500: '#d65e34',
          600: '#c44928',
          700: '#a33a22',
          800: '#863122',
          900: '#6e2c21',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
