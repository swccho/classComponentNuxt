/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#00519F",
          100: "#115FA8",
          200: "#236DB1",
          300: "#387CBB",
          400: "#4F8CC5",
          500: "#679DCF",
          600: "#82AED8",
          700: "#9EC1E2",
          800: "#BCD5EC",
          900: "#DDE9F5",
          DEFAULT: "#00519F",
        },
        darkblue: "#000102",
        gray: "#788088",
      },
    },
  },
  plugins: [],
}

