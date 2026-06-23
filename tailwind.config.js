/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F3A',
        midnight: '#071426',
        gold: '#D4AF37',
        ivory: '#F8F6F0',
        beige: '#EFE7DA',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 30px 60px -15px rgba(11, 31, 58, 0.35)',
        gold: '0 10px 40px -10px rgba(212, 175, 55, 0.45)',
        card: '0 20px 50px -20px rgba(7, 20, 38, 0.45)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F1D98B 50%, #B8902B 100%)',
        'navy-gradient': 'linear-gradient(160deg, #0B1F3A 0%, #071426 100%)',
      },
      letterSpacing: {
        luxe: '0.25em',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
      },
    },
  },
  plugins: [],
}
