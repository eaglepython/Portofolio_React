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
        matrix: {
          50: '#f0fff4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          primary: '#00ff88',
          dark: '#0a0a0a',
          secondary: '#1a1a1a'
        },
        cyber: {
          blue: '#00d4ff',
          purple: '#b000ff',
          pink: '#ff0080',
          orange: '#ff4000'
        },
        dark: {
          bg: '#0a0a0a',
          card: '#1a1a1a',
          border: '#2a2a2a'
        }
      },
      fontFamily: {
        garamond: ['EB Garamond', 'serif'],
        code: ['Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'matrix-rain': 'matrix-rain 4s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
        'typewriter': 'typewriter 3s steps(40, end)',
        'cursor': 'cursor 1s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'particle': 'particle 20s linear infinite',
        'neural-pulse': 'neural-pulse 3s ease-in-out infinite'
      },
      keyframes: {
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'glitch': {
          '0%, 100%': { 
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)'
          },
          '20%': { 
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(90deg)'
          },
          '40%': { 
            transform: 'translate(-2px, -2px)',
            filter: 'hue-rotate(180deg)'
          },
          '60%': { 
            transform: 'translate(2px, 2px)',
            filter: 'hue-rotate(270deg)'
          },
          '80%': { 
            transform: 'translate(2px, -2px)',
            filter: 'hue-rotate(360deg)'
          }
        },
        'typewriter': {
          'to': { left: '100%' }
        },
        'cursor': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(0, 255, 136, 0.8)',
            transform: 'scale(1.05)'
          }
        },
        'slide-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'scale-in': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.8)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'particle': {
          '0%': { 
            transform: 'translate(0, 100vh) rotate(0deg)',
            opacity: '0'
          },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { 
            transform: 'translate(100px, -100vh) rotate(360deg)',
            opacity: '0'
          }
        },
        'neural-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'scale(1.2)',
            opacity: '1'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)',
        'matrix-bg': 'radial-gradient(ellipse at top, rgba(0,255,136,0.1) 0%, transparent 70%)'
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '480px',
        '3xl': '1920px'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem'
      },
      borderWidth: {
        '3': '3px'
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem'
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 8px 16px rgba(0,0,0,0.3)',
        },
        '.text-glow': {
          textShadow: '0 0 10px rgba(0,255,136,0.8)',
        },
        '.cyber-border': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(45deg, #00ff88, #00d4ff, #b000ff, #ff0080)',
            borderRadius: 'inherit',
            padding: '2px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'subtract'
          }
        }
      }
      addUtilities(newUtilities)
    }
  ],
}