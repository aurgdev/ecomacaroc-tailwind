/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        melon: "#da1538",
        avo: {
          100: "#fafff3",
          200: "#f1f9e4",
          300: "#e0eecb",
          400: "#88d014",
          900: "#669f0a",
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
