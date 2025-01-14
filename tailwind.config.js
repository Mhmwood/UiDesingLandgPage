/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#5F669D",
          400: "#555673",
          500: "#2F2F8A",
          900: "#1C1C65",
          950: "#0F103F",
        },
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(105.95deg, #C961DE 24.79%, #2954A3 71.87% )",
      },
      boxShadow: {
        "3xl": "0 px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

