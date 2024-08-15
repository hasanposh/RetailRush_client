/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#004aad",
        customRed: "#c2272d",
      },
      fontFamily: {
        PlayfairDisplay: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("flowbite/plugin"),
  ],
};
