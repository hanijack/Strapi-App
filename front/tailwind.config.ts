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
      clipPath: {
        'sloping': 'polygon(0 0, 100% 0, 100% 20%, 0 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
