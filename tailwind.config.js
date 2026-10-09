/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        architectural: {
          dark: '#08090b',
          surface: '#111317',
          surfaceLight: '#1b1e24',
          border: '#2a2e38',
          accent: '#F5C242',      // Shining gold
          accentLight: '#FFE885', // Shining highlight
          accentHover: '#FFF2A8', // Shining hover
          cyan: '#ffffff',        // Modern white
          steel: '#94a3b8',
          muted: '#64748b',
          light: '#f8fafc'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'], // Remaps font-serif to modern geometric Outfit
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.28em'
      }
    },
  },
  plugins: [],
}
