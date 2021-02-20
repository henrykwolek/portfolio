module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    animation: {
      bounce: "bounce 1s infinite",
      pulse:
        "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
