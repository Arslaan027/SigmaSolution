/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or 'media' for automatic dark mode based on user's system preferences
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1a202c",
        "dark-text": "#e2e8f0",
        "light-bg": "#f7fafc",
        "light-text": "#2d3748",
      },
    },
  },
  plugins: [],
};
