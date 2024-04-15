/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        width: "95%",
      },
      colors: {
        gray: {
          200: "#D5DAE1",
        },
        black: {
          DEFAULT: "#000",
          600: "#1D2235",
        },
        blue: {
          500: "#2b77e7",
        },
        pink: {
          500: "#CAB2FB",
        },
        cream: {
          500: "#f1f1f2",
        },
        red: "#FF0000",
        purple: "#772DF7",
        gray: "#313133",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
      },
      screens: {
        'sm': {'max': '640px'},   
        'md': {'min': '641px', 'max': '768px'},   
        'lg': {'min': '769px', 'max': '1024px'},  
        'xl': {'min': '1025px'},  

      },
    },
  },
  plugins: [],
};
