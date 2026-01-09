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
          burgundy: '#5D181E', // New Burgundy
          cream: '#F7F3EC',    // New Cream
          gold: '#c5a065',     // Accent (Unchanged)
          lightGold: '#F0D59B', // Light Gold for hover effects
          black: '#0A0A0A'     // New Black (replacing dark)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}