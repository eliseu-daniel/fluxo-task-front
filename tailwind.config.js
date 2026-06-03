/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#378ADD',
          dark: '#1D9E75',
          light: '#E3F2FD',
        },
        danger: {
          DEFAULT: '#FF6B6B',
          text: '#DC3545',
          bg: '#FFE5E5',
        },
        success: {
          DEFAULT: '#51CF66',
          text: '#28A745',
          bg: '#E8F5E9',
        },
        warning: {
          DEFAULT: '#FFD43B',
          text: '#FFC107',
          bg: '#FFF3CD',
        },
        info: {
          DEFAULT: '#4DABF7',
          text: '#17A2B8',
          bg: '#E3F2FD',
        },
        bg: {
          primary: '#FFFFFF',
          secondary: '#F8F9FA',
          tertiary: '#E9ECEF',
          black: '#1A1A1A',
          gray: '#555555',
        },
        border: {
          primary: '#DEE2E6',
          secondary: '#CED4DA',
          tertiary: '#ced4da3d',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#555555',
          tertiary: '#999999',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'Consolas', 'monospace'],
      },
      borderRadius: {
        md: '8px',
        lg: '12px',
      },
    },
  },
  plugins: [],
}
