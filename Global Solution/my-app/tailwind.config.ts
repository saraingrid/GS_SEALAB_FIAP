/*
Instalar:
npm install --save-dev @types/tailwindcss

*/
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}"
  ],


  /* Para eu controlar o modo de tema entre claro ou escuro */
  darkMode: 'class',

  theme: {
    extend: {

      // Definição dos breakpoints
      screens: {
        'ss': '375px',
        'sm': '579px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xx': '1440px',
        
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        orelega: ['FonteOrelega', 'sans-serif'],
        sen: ['FonteSen', 'sans-serif'],
        manrope: ['FonteManrope', 'sans-serif'],
      },
      
      backgroundColor: {
        primeira: "#A0D7FF",
        segunda: "#3EA0E7",
        terceira: "#63D0D0",
      },

      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },

      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },

      
    },
  },
  plugins: [addVariablesForColors],
};


function addVariablesForColors({ addBase }: { addBase: any }) {
  
  // Definindo as cores específicas
  const colorVars = {
    '--segunda': '#E7F1F3',
    '--terceira': '#CFE3E7',
    '--quarta': '#B7D4DA',
    '--quinta': '#9FC6CE',
  };
 
  addBase({
    ":root": colorVars,
  });
}
export default config;