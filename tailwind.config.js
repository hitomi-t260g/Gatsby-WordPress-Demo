/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./src/config/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "british-racing-green":
          "var(--wp--preset--color--british-racing-green)",
        "bumblebee-yellow": "var(--wp--preset--color--bumblebee-yellow)",
      },
    },
  },
  plugins: [],
};
