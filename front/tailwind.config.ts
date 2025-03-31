import type { Config } from 'tailwindcss';
import tailwindClipPath from 'tailwind-clip-path';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color
        foreground: "var(--foreground)", // Custom foreground color
        primary: "#b58c4d", // Primary color
        secondary: "#333333", // Secondary color
        links: "#e3958b", // Links color
      },
      clipPath: {
        sloping: 'polygon(0 2%, 97% -5%, 100% 115%, 0% 102%)', // Custom sloping effect
      },
    },
  },
  plugins: [
    tailwindClipPath, // Plugin for clip-path utilities
  ],
};

export default config;


