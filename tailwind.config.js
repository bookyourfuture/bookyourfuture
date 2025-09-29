/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        byf: {
          green: "#DAF100", // Book Green (from memory; can be changed)
          pink: "#F7E5DA",
          dark: "#0A0A0A",
        },
      },
    },
  },
  plugins: [],
};
