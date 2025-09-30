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
      primary: "#014421",   // Forest Green
      secondary: "#F7E5DA", // Soft Beige
      text: "#0A0A0A",
      bg: "#FFFFFF",
      border: "#E5E5E5",
    },
  },
},
  },
  plugins: [],
};
