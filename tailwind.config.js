/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'dark-background': '#212529',
        'light-background': '#F8F9FA',
        'action': '#f5cb5c'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}