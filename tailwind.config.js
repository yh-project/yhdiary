/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hr: "#DBDCDD",
        bg: "#F7F8F9",
        "m-100": "#EAEBF4",
        "m-200": "#CBCBE5",
        "m-300": "#A9AAD3",
        "m-400": "#8989C0",
        "m-500": "#716EB2",
        "m-600": "#5C54A8",
        "m-700": "#554C9E",
        primary: "#374553",
        secondary: "#646F7C",
        placeholder: "#C5C8CE",
      },
      boxShadow: {
        figma: "0 4px 4px 0px rgba(0, 0, 0, 0.25)",
        card: "0px 2px 2px 0px rgba(0, 0, 0, 0.1)",
        "card-hover": "2px 4px 4px 2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
