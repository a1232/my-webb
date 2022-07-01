module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      llg: "1000px",
      xl: "1440px",
    },
    extend: {
      height: {
        128: "32rem",
        1000: "50rem",
        1200: "60rem",
        1300: "70rem",
      },
    },
  },
  plugins: [],
};
