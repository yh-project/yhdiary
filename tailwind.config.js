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
        placeholder: "#C5C8CE",
      },
    },
  },
  plugins: [],
};
