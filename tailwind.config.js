module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "640px" },
        md: { min: "640px", max: "960px" },
        lg: { min: "960px" },
      },
      colors: {
        "jp-gray-color": "#d1d1d1",
      },
      boxShadow: {
        "3xl": "0 0px 5px 5px rgba(0, 0, 0, 0.03)",
      },
      inset: {
        "1/8": "12.5%",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
