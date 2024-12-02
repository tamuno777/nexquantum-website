/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        customPink: "#ed51c2",
        customPurple: "#8a2be2",
        customblue: "#2a2292",
        brandBlue: 'rgb(0, 8, 135)', 

      },
      textGradient: {
        background: "linear-gradient(to right, #ed51c2, #8a2be2)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },  },
  plugins: [],
};
