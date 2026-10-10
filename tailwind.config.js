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
        dark: {
          950: '#070709',
          900: '#0C0C0E',
          850: '#111114',
          800: '#16161A',
          750: '#1D1D22',
          700: '#26262D',
          border: '#232329',
        },
        brand: {
          DEFAULT: '#FF5E1E', // Vibrant Neon Orange from reference image
          hover: '#FF7338',
          light: '#FF8854',
          glow: 'rgba(255, 94, 30, 0.35)',
          muted: 'rgba(255, 94, 30, 0.12)',
        },
        accent: {
          amber: '#F59E0B',
          emerald: '#10B981',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
        handwriting: ['"Caveat"', '"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'orange-sm': '0 0 15px rgba(255, 94, 30, 0.2)',
        'orange-md': '0 0 30px rgba(255, 94, 30, 0.35)',
        'orange-lg': '0 0 50px rgba(255, 94, 30, 0.45)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
