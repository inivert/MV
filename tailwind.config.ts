import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#dbf0dd',
          200: '#b8e0bc',
          300: '#86c98c',
          400: '#4fa656',
          500: '#3a8940',
          600: '#2d6d32',
          700: '#265729',
          800: '#214624',
          900: '#1c3b1f'
        },
        secondary: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#313131'
        }
      },
      fontSize: {
        base: ['1.125rem', '1.75rem'],
        lg: ['1.25rem', '1.875rem'],
        xl: ['1.5rem', '2rem'],
        '2xl': ['1.875rem', '2.25rem'],
        '3xl': ['2.25rem', '2.75rem']
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem'
      }
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      heading: ['Montserrat', 'system-ui', 'sans-serif']
    }
  },
  plugins: []
} satisfies Config
