/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-bg": "#f5f5f5",
        "dark-bg": "#1a1a1a",
        "light-text": "#333",
        "dark-text": "#f5f5f5",
      },
    },
  },
  plugins: [],
};
