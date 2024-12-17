/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        ultraWide: "0.2em",
        extraUltraWide: "0.4em",
      },
      fontFamily: {
        fredericka: ['"Fredericka the Great"', "serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      colors: {
        "main-color": "#005A71",
        "secondary-color": "#EEFAF6",
        "ternary-color": "#00728D",
        dark: "#004656",
        light: "#0099BDAB",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
