export const content = [];
export const darkMode = 'class';
export const safelist = [
  {
    pattern: /text-(red|green|blue)-(100|400)/,
    variants: ['group-hover']
  },
  {
    pattern: /bg-(red|green|blue)-(100|400)/,
    variants: ['group-hover']
  }
];
export const theme = {
  screens: {
    xs: "614px",
    sm: "1002px",
    md: "1022px",
    lg: "1292px",
    xl: "1480px",
  },

  extend: {
    colors: {
      dim: {
        50: "#5F99F7",
        100: "#5F99F7",
        200: "#38444d",
        300: "#202e3a",
        400: "#253341",
        500: "#5F99F7",
        600: "#5F99F7",
        700: "#192734",
        800: "#162d40",
        900: "#15202b",
      },
    },
  },
};
export const plugins = [
  require('@tailwindcss/forms')
];