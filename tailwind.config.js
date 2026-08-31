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
        obsidian: {
          950: '#03050a',
          900: '#050811',
          850: '#090e1a',
          800: '#0f172a',
          700: '#17223b',
        },
        gold: {
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#f3d997',
          500: '#d4af37',
          600: '#c59b27',
          700: '#a1781c',
          800: '#855f18',
          900: '#583e0c',
        },
        quantum: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#38bdf8',
          500: '#00e5ff',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        ember: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'Cinzel Decorative', 'Trajan Pro', 'serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f3d997 0%, #d4af37 50%, #aa801e 100%)',
        'quantum-gradient': 'linear-gradient(135deg, #00e5ff 0%, #38bdf8 50%, #2563eb 100%)',
        'dual-gradient': 'linear-gradient(135deg, #d4af37 0%, #00e5ff 100%)',
        'ember-gradient': 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #7c2d12 100%)',
        'card-radial': 'radial-gradient(ellipse at top left, rgba(212, 175, 55, 0.12), transparent 70%)',
        'quantum-radial': 'radial-gradient(ellipse at bottom right, rgba(0, 229, 255, 0.1), transparent 70%)',
      },
      boxShadow: {
        'gold-glow-sm': '0 0 15px -3px rgba(212, 175, 55, 0.3)',
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.45)',
        'gold-glow-lg': '0 0 45px -5px rgba(212, 175, 55, 0.65)',
        'quantum-glow-sm': '0 0 15px -3px rgba(0, 229, 255, 0.3)',
        'quantum-glow': '0 0 25px -5px rgba(0, 229, 255, 0.45)',
        'quantum-glow-lg': '0 0 45px -5px rgba(0, 229, 255, 0.65)',
        'ember-glow': '0 0 30px -5px rgba(234, 88, 12, 0.4)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-spin': 'glowSpin 12s linear infinite',
        'shimmer': 'shimmer 3s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
