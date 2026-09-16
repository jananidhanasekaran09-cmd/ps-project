export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08080A',
          900: '#0C0C0F',
          850: '#121216',
          800: '#17171C',
          700: '#1F1F26',
          600: '#2A2A33',
        },
        accent: {
          DEFAULT: '#D2FF4D',
          soft: '#E4FF8F',
          dim: '#9FC22E',
        },
        haze: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          strong: 'rgba(255,255,255,0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        lift: '0 24px 60px -20px rgba(0,0,0,0.75)',
        glow: '0 0 0 1px rgba(210,255,77,0.35), 0 12px 40px -12px rgba(210,255,77,0.25)',
      },
    },
  },
  plugins: [],
}
