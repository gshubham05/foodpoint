/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#E8590C",
          dark: "#C2410C",
          light: "#FFE8D6",
        },
        leaf: "#2F7D32",
        cream: "#FFF8EF",
        ink: "#1F1A17",
      },
      boxShadow: {
        card: "0 6px 24px -8px rgba(31, 26, 23, 0.18)",
      },
    },
  },
  plugins: [],
};
