/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          950: '#020208',
          900: '#09090E',
          800: '#0D0E18',
          700: '#12141F',
          600: '#1A1D2E',
          500: '#252840',
          400: '#3D4166',
          300: '#5E6288',
          200: '#8892A4',
          100: '#B0BBC8',
          50:  '#E2E8F0',
        },
        neon: {
          DEFAULT: '#00F5A0',
          hover:   '#00D688',
          dim:     'rgba(0,245,160,0.07)',
          glow:    'rgba(0,245,160,0.20)',
        },
        hot: {
          DEFAULT: '#FF3D71',
          light:   '#FF6B94',
          dim:     'rgba(255,61,113,0.07)',
        },
        azure: {
          DEFAULT: '#38BDF8',
          dim:     'rgba(56,189,248,0.07)',
        },
      },
      animation: {
        'blob-1': 'blob1 16s ease-in-out infinite',
        'blob-2': 'blob2 20s ease-in-out infinite',
        'blink':  'blink 1.1s step-end infinite',
        'float':  'float 5s ease-in-out infinite',
        'scan':   'scan 3s linear infinite',
      },
      keyframes: {
        blob1: {
          '0%,100%': { transform: 'translate(0,0) scale(1)'          },
          '50%':     { transform: 'translate(40px,-30px) scale(1.08)' },
        },
        blob2: {
          '0%,100%': { transform: 'translate(0,0) scale(1)'          },
          '50%':     { transform: 'translate(-30px,25px) scale(1.05)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)'     },
          '50%':     { transform: 'translateY(-10px)'  },
        },
        blink: {
          '0%,100%': { opacity: 1 },
          '50%':     { opacity: 0 },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      boxShadow: {
        card:   '0 2px 20px rgba(0,0,0,0.6)',
        neon:   '0 0 24px rgba(0,245,160,0.3), 0 0 48px rgba(0,245,160,0.1)',
        hot:    '0 0 24px rgba(255,61,113,0.3)',
        azure:  '0 0 24px rgba(56,189,248,0.3)',
      },
    },
  },
  plugins: [],
}
