/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      keyframes: {
        zoomIn: {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "50%": {
            opacity: 1,
          },
        },
        slideInRight: {
          "0%": {
            transform: "translateX(50%)",
            visibility: "visible",
            opacity: 0,
          },
          "50%": {
            transform: "translateX(50%)",
            visibility: "visible",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(25%)",
            opacity: 1,
          },
        },
        slideInLeft: {
          "0%": {
            transform: "translate3d(-50%, 0, 0)",
            visibility: "visible",
          },
          "100%": {
            transform: "translateZ(0)",
          },
        },
      },
      animation: {
        zoomIn: "zoomIn 2s linear",
        slideInRight: "slideInRight 2s linear ",
        slideInLeft: "slideInLeft 1s linear",
      },

      colors: {
        secondary: "#525260",
        blueLink: "#5956e9",
      },
    },
  },
  plugins: [],
};