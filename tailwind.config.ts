import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  theme: {
    extend: {
      colors: {
        "p3-blue": "#003EDA",
        "p3-cyan": "#00E5FF",
        "p3-dark": "#0A0A0A",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".clip-slant": {
          "clip-path": "polygon(8% 0, 100% 0, 92% 100%, 0 100%)",
        },
        ".clip-p3-slant": {
          "clip-path": "polygon(8% 0, 100% 0, 92% 100%, 0 100%)",
        },
        ".clip-p3-slash": {
          "clip-path": "polygon(16% 0, 100% 0, 84% 100%, 0 100%)",
        },
        ".text-glow": {
          "text-shadow": "0 0 8px #00E5FF, 0 0 20px #00E5FF",
        },
        ".text-shadow-p3-glow": {
          "text-shadow": "0 0 8px #00E5FF, 0 0 20px #00E5FF",
        },
      });
    }),
  ],
};

export default config;
