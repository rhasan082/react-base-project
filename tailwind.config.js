module.exports = {
  mode: "jit",
  content: [
    "./src/*.{html,js,jsx,ts,tsx,css}",
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
