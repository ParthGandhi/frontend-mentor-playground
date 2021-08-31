module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fyloBlue: "hsl(218, 28%, 13%)",
        fyloBlueLight: "hsl(217, 28%, 15%)",
        fyloBlueXLight: "hsl(219, 30%, 18%)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
