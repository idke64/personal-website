/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "gradient-text": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "gradient-text": "gradient-text 12s infinite",
      },
      boxShadow: {
        DEFAULT: "rgba(27, 27, 35, 0.12) 5px 5px 10px",
      },
      dropShadow: {
        DEFAULT: "rgba(27, 27, 35, 0.12) 1.95px 1.95px 2.6px",
      },
      colors: {
        palette: {
          green: "#00FF87",
          cyan: "#43caf0",
          magenta: "#E32636",
          purple: "#E81CFF",
          "cyan-dark": "#18beed",
          "cyan-light-1": "#c7effa",
          "cyan-light-2": "#d9f4fc",
        },
        bg: {
          1: "#fdfdff",
        },
        text: {
          1: "#000000",
          2: "#2f3336",
          3: "#55555f",
        },
      },
    },
  },
  plugins: [],
};
