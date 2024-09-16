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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  darkMode: "class", // Active le mode sombre basé sur une classe
  plugins: [nextui()], // Ajoute le plugin NextUI
};
