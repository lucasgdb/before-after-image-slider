/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        dark: "rgba(0, 0, 0, 0.3) 0px 0px 3px 0px",
      },
    },
  },
  plugins: [],
};
