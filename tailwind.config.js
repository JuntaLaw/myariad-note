/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],

  daisyui: {
    themes: [ 
      {
        mytheme: {
          "primary": "#4f46e5",
          "secondary": "#db2777",
          "accent": "#0891b2",
          "neutral": "#e6e9ea",
          "base-100": "#9333ea",
        },
      },
      "dark", 
      "cupcake"],
  },
}; 