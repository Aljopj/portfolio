/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  
  plugins: [],
}


// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'fade-up': 'fadeUp 1s ease-out',
//         'fade-down': 'fadeDown 1s ease-out',
//       },
//       keyframes: {
//         fadeUp: {
//           '0%': { opacity: '0', transform: 'translateY(20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         fadeDown: {
//           '0%': { opacity: '0', transform: 'translateY(-20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
