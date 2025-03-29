import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#b58c4d",
        secondary:"#333333",
        links:"#e3958b"
      },
      clipPath:{
        "slope": "polygon(0 0, 0% 100%, 100% 100%);",
      },
    },
  },
  plugins: [],
} satisfies Config;
