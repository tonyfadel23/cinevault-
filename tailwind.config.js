/**
 * Tailwind config for the compiled stylesheet in assets/tailwind.css.
 * Rebuild after changing classes in index.html:  npm run build:css
 */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          300: '#fda4af', 400: '#fb7185', 500: '#f43f5e',
          600: '#e11d48', 700: '#be123c', 900: '#881337',
        },
        cinema: {
          base: '#08090F',
          raised: '#10131F',
          card: '#141828',
          cardHover: '#1B2135',
          border: '#242B42',
          borderSoft: '#1C2236',
          accent: '#38BDF8',
        },
      },
      boxShadow: {
        poster: '0 18px 40px -18px rgba(0, 0, 0, 0.9)',
        glow: '0 0 0 1px rgba(244, 63, 94, 0.35), 0 18px 45px -20px rgba(244, 63, 94, 0.65)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .35s ease-out both',
        'scale-in': 'scale-in .18s ease-out both',
      },
    },
  },
};
