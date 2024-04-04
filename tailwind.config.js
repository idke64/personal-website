/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: "rgba(27, 27, 35, 0.12) 0px 4px 12px",
      },
      dropShadow: {
        DEFAULT: "rgba(27, 27, 35, 0.12) 0px 4px 12px",
      },
      colors: {
        palette: {
          green: "#0ADD08",
          cyan: "#44E5E7",
          red: "#E32636",
          yellow: "#FFBF00",
        },
        bg: {
          1: "#fdfdff",
        },
        text: {
          1: "#161621 ",
          2: "#2f3336",
          3: "#55555f",
        },
      },
    },
  },
  plugins: [],
};
