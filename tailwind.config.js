/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "325px",

      sm: "640px",

      md: "1024px",

      xl: "1280px",
    },
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
