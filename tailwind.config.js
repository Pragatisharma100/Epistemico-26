/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serifUi: ["Georgia", "serif"],
      },
      colors: {
        parchment: "#efe0c9",
        brownDark: "#4a2b1d",
        brownMid: "#7a4a2c",
        accent: "#c8743b",
      },
      boxShadow: {
        soft: "0 8px 25px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
