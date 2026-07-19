/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#FA3E32", // reserved for the logo mark only
          rose: "#FF6452", // site-wide accent red (buttons, links, tags, nav)
          maroon: "#6B1414", // deep red — replaces black everywhere except the logo
          black: "#000000", // logo wordmark only
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
