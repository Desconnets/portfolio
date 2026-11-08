/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#e4ebf6",
        paper: "#fbf8f2",
        foreground: "#1b1b1b",
        accent: "#0a0a0a",
        pop: "#d4ff00",
        monitor: "#1b1b1b",
        card: "#fbf8f2",
      },
      fontFamily: {
        sans: ["Figtree", "system-ui", "sans-serif"],
        display: ["Bricolage Grotesque", "Figtree", "system-ui", "sans-serif"],
        handwriting: ["Bricolage Grotesque", "sans-serif"],
        mono: ["Azeret Mono", "ui-monospace", "monospace"],
      },
      animation: {
        "marquee": "marquee 20s linear infinite",
        "marquee-reverse": "marquee-reverse 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
