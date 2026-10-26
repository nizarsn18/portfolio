/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        luxury: {
          black: '#0A0A0A',
          charcoal: '#121214',
          card: '#161619',
          border: 'rgba(201, 169, 110, 0.18)',
          gold: {
            50: '#FAF6EF',
            100: '#F4ECE0',
            200: '#E7D8BD',
            300: '#D9C298',
            400: '#C9A96E', // Primary Champagne Gold
            500: '#B89253',
            600: '#9B773C',
            700: '#7B5D2D',
            800: '#5C441E',
            900: '#3D2D13'
          },
          light: {
            bg: '#F9F8F5',
            card: '#FFFFFF',
            surface: '#F2EDE4',
            border: '#E3D7C3',
            text: '#1A1815',
            muted: '#6E675F'
          }
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Manrope"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #ECC880 0%, #C9A96E 50%, #9B783E 100%)',
        'gold-subtle': 'linear-gradient(135deg, rgba(201,169,110,0.15) 0%, rgba(201,169,110,0.03) 100%)',
        'radial-luxury': 'radial-gradient(circle at 50% 0%, rgba(201,169,110,0.12) 0%, rgba(10,10,10,0) 70%)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0%, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translate3d(-50%, 0, 0)' },
          '100%': { transform: 'translate3d(0%, 0, 0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.75 },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0px, 0)' },
          '50%': { transform: 'translate3d(0, -8px, 0)' },
        }
      }
    },
  },
  plugins: [],
}
