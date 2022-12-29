/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    colors: {
      lightGray: "hsl(0, 0%, 81%)",
      lightGrayishBlue: "hsl(210, 46%, 95%)",
      moderateVoilet: "hsl(263, 55%, 52%)",
      darkGrayishBlue: "hsl(217, 19%, 35%)",
      veryDarkGrayishBlue: "hsl(219, 29%, 14%)",

      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      sans: ["Barlow Semi Condensed", "sans-serif"],
      serif: ["Barlow Semi Condensed", "serif"],
    },
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },

    extend: {},
  },
  plugins: [],
};
