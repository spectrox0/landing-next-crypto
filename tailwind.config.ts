import type { Config } from "tailwindcss";

// the color palette is defined in src/styles/colors.css
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        "hamburger-menu": "var(--hamburger-menu-color)",
        box: "var(--box-color)",
        "bg-1": "var(--bg-1)",
        app: "var(--background-app)",
        gray: "var(--gray)",
      },
      gap: {
        "10": "3.125rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "linear-gradient-1": "var(--linear-gradient-1)",
        "linear-gradient-2": "var(--linear-gradient-2)",
        "linear-gradient-3": "var(--linear-gradient-3)",
        "linear-gradient-4": "var(--linear-gradient-4)",
        "linear-gradient-5": "var(--linear-gradient-5)",
        "gradient-backdrop": "var(--gradient-backdrop)",
        "gradient-app": "var(--gradient-app)",
        "gradient-backdrop-2": "var(--gradient-backdrop-2)",
      },
      // keyframes: {
      //   "open-menu": {
      //     "0%": {
      //       transform: "translateX(-100%)",
      //     },
      //     "100%": {
      //       transform: "translateX(0)",
      //     },
      //   },
      // },
      // animation: {
      //   "open-menu": "open-menu 0.5s ease-in-out forwards",
      // },
    },
  },
  plugins: [],
};
export default config;
