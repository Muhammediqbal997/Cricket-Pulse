module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Cricket Heritage
        primary: {
          DEFAULT: "#0D4F3C", // Deep forest green - cricket field authority
          light: "#2D7A5F", // Supporting green - natural hierarchy
          50: "#F0F9F5",
          100: "#DCF2E7",
          200: "#BBE5D1",
          300: "#8DD3B5",
          400: "#5ABB94",
          500: "#2D7A5F", // Supporting green
          600: "#0D4F3C", // Primary
          700: "#0A3D2F",
          800: "#083025",
          900: "#06251D",
        },
        accent: {
          DEFAULT: "#D4A574", // Golden hour warmth
          50: "#FDF8F3",
          100: "#FAEEE1",
          200: "#F4DCC3",
          300: "#EBC49A",
          400: "#E0A76F",
          500: "#D4A574", // Accent
          600: "#C19660",
          700: "#A17A4A",
          800: "#83633E",
          900: "#6B5135",
        },
        // Background Colors
        background: "#FAFAFA", // Clean reading canvas - gray-50
        surface: "#FFFFFF", // Content cards - white
        
        // Text Colors
        text: {
          primary: "#1A1A1A", // Extended reading comfort - gray-900
          secondary: "#6B7280", // Supporting information - gray-500
        },
        
        // Status Colors
        success: "#059669", // Positive outcomes - emerald-600
        warning: "#D97706", // Match alerts - amber-600
        error: "#DC2626", // Critical issues - red-600
        
        // Border Colors
        border: {
          light: "#E5E7EB", // Subtle definition - gray-200
          DEFAULT: "#D1D5DB", // Stronger separation - gray-300
        },
        
        // Gray Scale for consistency
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#1A1A1A",
        },
      },
      fontFamily: {
        // Headlines and CTAs
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        
        // Body text
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
        source: ['Source Sans 3', 'system-ui', 'sans-serif'],
        
        // Statistics and live scores
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
        jetbrains: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.3' }],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'live-widget': '0 8px 25px -5px rgba(13, 79, 60, 0.1), 0 4px 10px -3px rgba(13, 79, 60, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'live-pulse': 'livePulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        livePulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
        'in-out': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-micro': {
          transition: 'all 250ms ease-out',
        },
        '.transition-smooth': {
          transition: 'all 400ms ease-in-out',
        },
        '.text-balance': {
          'text-wrap': 'balance',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}