// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "gensen-rounded": [
        "GenSenRounded-B",
        "GenSenRounded-EL",
        "GenSenRounded-H",
        "GenSenRounded-L",
        "GenSenRounded-M",
        "GenSenRounded-R",
        "sans-serif",
      ],
    },
    fontWeight: {
      extralight: 200,
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
  plugins: [],
};
