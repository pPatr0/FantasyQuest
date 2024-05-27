/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: ({ colors }) => ({
        primary: '#002B59',
        secondary: '#4EB4D5',
        light: '#EDEDEE',
        dark: '#231F20',
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        black: colors.black,
        white: colors.white,
        neutral: colors.neutral
    }),
  },
  plugins: [],
}