/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-fast": "pulse 0.5s linear infinite",
        "ping-slow": "ping 3s linear infinite",
        "bounce-fast": "bounce 0.5s linear infinite",
      },
      screens: {
        lg: "1000px",
        "2xl": "1000px",
      },
    },
  },
  plugins: [],
};
