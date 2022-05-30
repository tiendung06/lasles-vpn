module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      "sm-min": { min: "640px" },
      "sm-max": { max: "767px" },
      "md-min": { min: "768px" },
      "md-max": { max: "1023px" },
      "lg-min": { min: "1024px" },
      "lg-max": { max: "1279px" },
      "xl-min": { min: "1280px" },
      "xl-max": { max: "1535px" },
    },
  },
  plugins: [],
};
