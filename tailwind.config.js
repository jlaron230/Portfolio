// tailwind.config.js
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",    // Inclut les pages Next.js
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Inclut les composants
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",       // Inclut les fichiers de l'application
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,html}", // Ajoute les fichiers NextUI
  ],
  theme: {
    extend: {
      height: {
        '27rem': '27rem',
        '30rem': '30rem',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'Inter-laptop': '1122px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
    screens: {
    Interlaptop: "1122px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  darkMode: "class", // Active le mode sombre basé sur une classe
  plugins: [nextui()], // Ajoute le plugin NextUI
};