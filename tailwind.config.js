module.exports = {
  mode: "jit",
  content: ["./src/*.{html,js}", "./src/**/*.{js}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
