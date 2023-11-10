/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#ffdd07",
        gray: {
          "100": "#19181d",
          "200": "rgba(255, 255, 255, 0.01)",
          "300": "rgba(0, 0, 0, 0.01)",
          "400": "rgba(0, 0, 0, 0.3)",
        },
        black: "#000",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        headlandone: "HeadlandOne",
        "inknut-antiqua": "'Inknut Antiqua'",
        "goblin-one": "'Goblin One'",
      },
      borderRadius: {
        "3xs": "10px",
        "21xl": "40px",
        xl: "20px",
      },
    },
    fontSize: {
      mid: "17px",
      lg: "18px",
      xl: "20px",
      "21xl": "40px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
