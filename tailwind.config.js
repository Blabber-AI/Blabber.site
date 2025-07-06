/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Assistant', 'sans-serif'],
        assistant: ['Assistant', 'sans-serif'],
      },
      fontWeight: {
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
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
  safelist: [
    'font-assistant',
    {
      pattern: /font-assistant/,
    },
    // RTL utilities
    'rtl',
    'ltr', 
    'text-right',
    'text-left',
    'text-center',
    {
      pattern: /rtl:(text-right|text-left|text-center|space-x-reverse|mr-\d+|ml-\d+|pr-\d+|pl-\d+)/,
    }
  ],
} 