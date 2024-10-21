import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "gradient-background": "linear-gradient(180deg, #FFF 0%, #CAEDFF 200%)",
      },
      fontFamily: {
        quicksand: ["var(--font-quicksand)", "sans-serif"], // Sử dụng font Quicksand
      },
    },
  },
  plugins: [],
};
export default config;
