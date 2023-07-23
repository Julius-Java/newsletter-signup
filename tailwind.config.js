/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      fontFamily : {
        robotoRegular : "Roboto-Regular",
        robotoBold : "Roboto-Bold"
      },
      colors: {
          primary : {
            pinkTomato: " hsl(4, 100%, 47%)",
            tomato: "hsl(4, 100%, 67%)",
        },
        neutral: {
          slateGrey: "hsl(234, 29%, 20%)",
          charGrey: "hsl(235, 18%, 26%)",
          grey: "hsl(231, 7%, 60%)",
          white: "hsl(0, 0%, 100%)"
        }
      }
    },
  },
  plugins: [],
}

