import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#d1e8ff",
          primary: "#1c2e63",
          dark: "##1C2143",
        },
        gray: {
          light: "#f5f5f5",
          primary: "#e9e4e3",
          dark: "#a39f9e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
