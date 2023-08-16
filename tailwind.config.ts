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
          extraLight: "#efeff6",
          light: "#d1e8ff",
          primary: "#1c2e63",
          dark: "#080b21",
        },
        gray: {
          extraLight: "#f4f4f4",
          light: "#f5f5f5",
          primary: "#e9e4e3",
          dark: "#a39f9e",
        },
      },
      boxShadow: {
        asideMenu: "4px 0px 8px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
