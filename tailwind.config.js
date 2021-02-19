module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    animation: {
      float: "float 3s infinite",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
