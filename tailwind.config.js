/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          page: '#FBF9F4',
          surface: '#FFFFFF',
          dark: '#0e273c',
          forest: {
            DEFAULT: '#0e273c', // Deep Python Navy (Primary Dark)
            light: '#1a4263',
            dark: '#081622',
          },
          navy: {
            DEFAULT: '#0e273c',
            light: '#1a4263',
            dark: '#081622',
          },
          accent: {
            DEFAULT: '#FFD43B', // Iconic Python Yellow
            hover: '#F0C428',
            muted: '#FEF3C7',
            subtle: '#FFFBEB',
          },
          yellow: {
            DEFAULT: '#FFD43B',
            hover: '#F0C428',
            muted: '#FEF3C7',
            subtle: '#FFFBEB',
          },
          gold: {
            DEFAULT: '#E5A700', // Rich warm Python Gold for high-contrast text on light backgrounds
            hover: '#C88A00',
            light: '#FFE885',
            muted: '#FEF3C7',
          },
          blue: {
            DEFAULT: '#306998', // Official Python Steel Blue
            light: '#4B8BBE',
            dark: '#1e486d',
          },
          cyan: {
            DEFAULT: '#00D8FF', // React Cyan
          },
          teal: {
            DEFAULT: '#05998B', // FastAPI Teal
          },
          django: {
            DEFAULT: '#092E20', // Django Dark Forest
          },
          text: {
            primary: '#0e273c',
            secondary: '#24455f',
            tertiary: '#5a778e',
            inverse: '#ffffff',
          },
          border: '#E2E8F0',
        }
      },
      borderRadius: {
        none: '0px',
        xs: '2px',
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '10px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        pill: '9999px',
        full: '9999px',
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"', 'sans-serif'],
        primary: ['"Hanken Grotesk"', 'sans-serif'],
      },
      transitionDuration: {
        instant: '160ms',
        fast: '200ms',
        normal: '300ms',
      }
    },
  },
  plugins: [],
}
