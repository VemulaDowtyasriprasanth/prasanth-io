/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Blue
        secondary: '#1e3a8a', // Darker blue
        accent: '#6ee7b7', // Green accent
        background: '#f1f5f9', // Light gray background
      },
      gradientColorStops: {
        primary: '#3b82f6',
        secondary: '#1e3a8a',
      },
    },
  },
  plugins: [],
};
