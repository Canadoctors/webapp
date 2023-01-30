module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cdgreen: "#00A099",
        cdgreenlight: "#8CBB93",
        cdbeige: "#FAEED7",
        cdgrey: "#59595B",
        cdlogocolor: "#56938B",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
