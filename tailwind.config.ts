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
        "slate-200": "#F7F7F7",
      },
      screens: {
        mobile: { max: "768px" },
        desktop:{ max:" 7680px"}, 
      },
    },
  },
  plugins: [],
};

export default config;
