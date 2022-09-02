module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  plugins: [
        "postcss-import",
        "postcss-advanced-variables",
        "tailwindcss/nesting",
        "tailwindcss",
        "./tailwind.config.js",
        "autoprefixer",
    ],

};
