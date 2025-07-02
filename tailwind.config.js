/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7b3db1',
        'primary-dark': '#452848',
        'primary-light': '#e5dbff',
        secondary: '#6aa6ff',
        success: '#34c759',
        error: '#ff3b30',
        'dark-gray': '#333333',
        'medium-gray': '#666666',
        'light-gray': '#f8f9fc',
        offwhite: '#f8f9fd',
      }
    },
  },
  plugins: [],
} 