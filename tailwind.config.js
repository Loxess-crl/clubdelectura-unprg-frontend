/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  presets: [require("@spartan-ng/ui-core/hlm-tailwind-preset")],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primaryTheme: "#4686c8",
        secondaryTheme: "#ea9a12",
        accentTheme: "#75b3a6",
        bgTheme: "#f6f1ea",
        surfaceTheme: "#b9bba3",
        alternativeTheme: "#b5ca8d",
        brownTheme: "#66503b",
      },
      fontFamily: {
        allura: ["Allura", "cursive"],
        edu: ["Edu AU VIC WA NT Guides", "cursive"],
        sans: ["Lora", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
