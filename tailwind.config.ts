import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        blue: {
          main: "#012698",
          "000": "#F5F7FB",
          "001": "#E6EDF4",
          "002": "#5F77C0",
          "003": "#1347E8",
          "004": "#00165A",
        },
        yellow: {
          main: "#F6C800",
          "000": "#FFFAE6",
          "001": "#FFE46E",
          "002": "#FFD728",
          "003": "#CEA800",
        },
        light: {
          main: "#FFFFFF",
          "000": "#F7F7F7",
          "001": "#EEEEEE",
          "002": "#E0E0E0",
          "003": "#C7C7C7",
        },
        dark: {
          main: "#111112",
          "000": "#696969",
          "001": "#343435",
          "002": "#1C1C1D",
          "003": "#000000",
        },
        red: {
          main: "#FF1C1C",
          "000": "#FFE9E9",
          "001": "#FFA9A9",
          "002": "#FF2F34",
          "003": "#E72327",
        },
        orange: {
          main: "#F48400",
        },
      },
      gridTemplateColumns: {
        footer: "repeat(3, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
