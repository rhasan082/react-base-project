module.exports = {
  mode: "jit",
  content: ["./src/*.{html,js, ts}", "./src/**/*.{js, ts}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
