/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      disabled: "#A3A3A3",
      overlay: "rgba(0,0,0,0.4)",
      white: "#fff",
      "white-100": "#F5F5F5",
      green: {
        300: "#CDE5D9",
      },
      gray: {
        200: "#E5E5E5",
        300: "#D4D4D4",
      },
      black: {
        900: "#171717",
        500: "#404040",
        600: "#525252",
        300: "#737373",
      },
      errors: {
        300: "#F83B3B",
        500: "#FE353D",
        600: "#ED1C24",
      },
      main: {
        700: "#008C44",
        500: "#FFAE00",
        100: "#D6FFEA",
        50: "#F4ECFB",
      },
      orange: {
        50: "#FFF0EA",
      },
      tertiary: {
        50: "#FCFFE7",
        500: "#FFF200",
      },
      warnings: {
        400: "#FE7B11",
      },
      "blue-500": "#008C44",
      selectedColor: "#008C44",
    },

    backgroundImage: {
      markingBg: "url('./assets/images/marking-bg.png')",
      login: "url('./assets/images/loginBg.png')",
      reset: "url('./assets/images/resetPasswordBg.png')",
    },
  },
  // darkMode: "class",
  plugins: [
  ],
}

