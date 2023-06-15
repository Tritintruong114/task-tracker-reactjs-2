/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#051923",
      white: "#FFFFFF",
      darkBlue: "#03256C",
      lightBlue: "#2541B2",
      oceanBlue: "#1768AC",
      skyBlue: "#06BEE1",
      active: "#c1121f",
      process: "#ff8600",
      success: "#7ae582",
      ximen: "#10002b",
      lightXimen: "#5a189a",
    },
    extend: {},
    fontFamily: {
      poppins: ["Poppins"],
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
