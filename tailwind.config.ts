import { transform } from "next/dist/build/swc";
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
        mablelightpink: "var(--mablelightpink)",
        mabledarkpink: "var(--mabledarkpink)",
        mablelightpurple: "var(--mablelightpurple)",
        mabledarkpurple: "var(--mabledarkpurple)",
        mablegold: "var(--mablegold)",
        mablelightorange: "var(--mablelightorange)",
        mabledarkorange: "var(--mabledarkorange)",
        mablelightblue: "var(--mablelightblue)",
        mableturqoise: "var(--mableturqoise)",
        mablegreen: "var(--mablegreen)",
        mableeggshell: "var(--mableeggshell)",
      },

      fontFamily: {
        englebert: ['var(--font-englebert)']
      },

      keyframes: {
        twinkle: {
          'from': {transform: 'scale(0)'},
          'to': {transform: 'scale(1)'},
        }
      },

      animation: {
        twinkle: 'twinkle 2s ease-in-out infinite alternate;'
      }
    },
  },
  plugins: [],
};
export default config;
