/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Main blue color
        secondary: '#1e3a8a', // Darker blue
        accent: '#6ee7b7', // Light green accent
        background: '#1f2937', // Dark gray for the background
        textPrimary: '#f1f5f9', // Light text for dark backgrounds
        cardBackground: '#2d3748', // Darker card background
        sectionBackground: '#1e293b', // Background for specific sections
      },
      fontFamily: {
        sans: ['"Poppins"', 'Inter', 'sans-serif'], // Use Poppins or Inter for a cleaner look
      },
      gradientColorStops: {
        primary: '#3b82f6',
        secondary: '#1e3a8a',
        darkStart: '#1f2937',
        darkEnd: '#2d3748',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
