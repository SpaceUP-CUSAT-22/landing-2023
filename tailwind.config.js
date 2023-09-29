/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans'], 
      },
      keyframes: {
        curtain: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        }
      },
      backgroundImage: theme => ({
        'Vector': "url('./assets/Vector.svg')",
        'Vector3': "url('./assets/Vector3.svg')",
      }),
      
    },
  },
  plugins: [],
}