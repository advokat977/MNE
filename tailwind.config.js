/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f7f5f2",
        ink: "#111827",
        subtle: "#6b7280",
        accent: "#0f172a",
        line: "#e5e7eb"
      }
    },
  },
  plugins: [],
};
