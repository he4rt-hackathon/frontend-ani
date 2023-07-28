/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        loginBgMobile:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('../assets/login/backgroundLogin.jpg')",
        loginBgDesktop: "url('../assets/login/backgroundLogin.jpg')",
      },
    },
    colors: {
      primary: {
        DEFAULT: "#31ED98",
        50: "#E6F8EC",
        100: "#B4E9C8",
        200: "#81D8A6",
        300: "#49C686",
        400: "#00B36A",
        500: "#009E52",
        600: "#00883E",
        700: "#00722E",
        800: "#005C22",
        900: "#004619",
      },
      secondary: {
        DEFAULT: "#000",
        border: "#1C1D1D",
        50: "#F3F4F4",
        100: "#DCDDDD",
        200: "#C5C7C7",
        300: "#AFB1B2",
        400: "#999B9D",
        500: "#848788",
        600: "#707274",
        700: "#5C5F60",
        800: "#4A4C4D",
        900: "#38393A",
      },
      white: {
        DEFAULT: "#fdfdfd",
        secondary: "#BFC1C5",
      },
      mediumEmphasis: "#848788",
      highEmphasis: "#F3F4F4",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
