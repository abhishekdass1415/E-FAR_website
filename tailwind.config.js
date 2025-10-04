/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          brand: {
            orange: "#D4991B", // Metallic orange - lighter shade
            blue: "#00A3E0",   // McLaren blue
            black: "#0B0B0B",
            white: "#FFFFFF",
            dark: "#1A1A1A",   // Dark grey background
          },
        },
      },
    },
    plugins: [],
  }
  