const plugin = require("tailwindcss/plugin");

const properties = {
  p: "padding",
  pt: "padding-top",
  pr: "padding-right",
  pb: "padding-bottom",
  pl: "padding-left",
  m: "margin",
  mt: "margin-top",
  mr: "margin-right",
  mb: "margin-bottom",
  ml: "margin-left",
  gap: "gap",
  "gap-x": "column-gap",
  "gap-y": "row-gap",
  top: "top",
  right: "right",
  bottom: "bottom",
  left: "left",
};

const layoutLayer = {
  name: "layout",
  baseSize: "base",
  mdSize: "lg",
  lgSize: "2xl",
};

const cardLayer = {
  name: "card",
  baseSize: "base",
  mdSize: "md",
  lgSize: "lg",
};

const elementLayer = {
  name: "element",
  baseSize: "sm",
  mdSize: "base",
  lgSize: "md",
};

const generateUtilities = (theme, { name, baseSize, mdSize, lgSize }) =>
  Object.entries(properties).map(([key, property]) => ({
    [`.${key}-${name}`]: {
      [property]: theme(`spacing.${baseSize}`),
      "@screen md": {
        [property]: theme(`spacing.${mdSize}`),
      },
      "@screen lg": {
        [property]: theme(`spacing.${lgSize}`),
      },
    },
  }));

module.exports = plugin.withOptions(() => ({ theme, addComponents }) => {
  addComponents([
    ...generateUtilities(theme, layoutLayer),
    ...generateUtilities(theme, cardLayer),
    ...generateUtilities(theme, elementLayer),
  ]);
});
