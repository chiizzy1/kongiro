import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        primary: "#FF0130",
        secondary: "#7E7E82",
      },
      fontFamily: {
        monumentExtended: "var(--font-monumentExtended)",
        satoshi: "var(--font-satoshi)",
      },
    },
    screens: {
      sm: "740px",
      md: "1020px",
      lg: "1240px",
    },
  },
  plugins: [],
};
export default config;
