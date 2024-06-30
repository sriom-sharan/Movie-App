/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7b2cbf",
        secondary: "#1f1e24",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        wix: ["Wix Madefor Display", "sans-serif"],
      },
      boxShadow: {
        s: "0 0 20px -10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
