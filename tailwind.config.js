/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        blue: "#023168",
        gray: {
          100: "#ECEEF1",
          300: "#D8DEE7",
          500: "#C7CDD8",
          700: "#82878D",
          900: "#333333",
        },
      },
    },
  },
  plugins: [],
};
