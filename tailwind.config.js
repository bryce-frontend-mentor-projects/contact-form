/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          500: "#86A2A5",
          900: "#2A4144",
        },
        green: {
          200: "#E0F1E8",
          600: "#0C7D69",
        },
        red: {
          errors: "#D73C3C",
        },
      },
    },
    fontSize: {
      sm: "16px",
      md: "18px",
      heading: "32px",
    },
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
