import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightest: 'rgb(var(--color-lightest) / <alpha-value>)',
        light: 'rgb(var(--color-light) / <alpha-value>)',
        medium: 'rgb(var(--color-medium) / <alpha-value>)',
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        darkest: 'rgb(var(--color-darkest) / <alpha-value>)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;