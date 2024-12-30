/** @type {import('tailwindcss').Config} */
export default {
  server: {
    proxy: {
      "/send-email": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'proxima': ['Proxima Nova', 'sans-serif'], // Add Proxima Nova as the default sans font  
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        fadeInDown: "fadeInDown 1s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6,1) infinite",
        fadeInUp: "fadeInUp 1s ease-out",
      },
      keyframes:{
        pulse:{
          '0%, 100%':{opacity: 1},
          '50%': {opacity: 0.5}
        }
      }
    },
  },
  plugins: [],
};
