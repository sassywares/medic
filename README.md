# Medic 🚑

[![npm version](https://badge.fury.io/js/%40sassywares%2Fmedic.svg)](https://badge.fury.io/js/%40sassywares%2Fmedic) ![Builds](https://github.com/sassywares/medic/actions/workflows/release.yml/badge.svg)

Medic 🚑 is a minimal Tailwind Plugin that brings consistent, cross-breakpoint utilities to your applications. No need to set random padding and margin values, Medic's ergonomic API (stuff like p-layout) makes it easy to create consistent layouts across your application. Medic 🚑 is built using [Crust](https://github.com/sassywares/crust), a simple boilerplate for creating and publishing packages to NPM.

## Getting Started

1. Install Medic 🚑 using your package manager of choice:

```bash
npm install @sassywares/medic
```

```bash
yarn add @sassywares/medic
```

```bash
pnpm add @sassywares/medic
```

2. Add Medic 🚑 to your Tailwind config file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // ...
    require('@sassywares/medic'),
  ],
};
```

3. Now add the following to your tailwind config file:

```js
// tailwind.config.js
module.exports = {
  // ...
  theme: {
    // ...
    extend: {
      // ...
      theme: {
        spacing: {
            "2xs": "4px",
            xs: "8px",
            sm: "12px",
            base: "16px",
            md: "20px",
            lg: "24px",
            xl: "28px",
            "2xl": "32px",
            "3xl": "36px",
            "4xl": "40px",
            },
        },
    },
  },
};
```

These spacing values are used by Medic 🚑 to create the spacing utilities. You can modify these values to suit your needs. If the default values look good to you, you can simply add medic as a preset to your tailwind config file, this way you don't need to do anything else.

```js
// tailwind.config.js
module.exports = {
  // ...
  presets: [
    // ...
    require('@sassywares/medic/preset'),
  ],
};
```

## Usage

Medic 🚑 breaks down your layouts into three layers: layouts, cards, and elements. Each layer has its own set of utilities that you can use to create consistent layouts across your application.

```html
<article class="p-card">Card</article>
```

The above class will apply the following styles to the element:

```css
.p-card {
  padding: 16px;
}

@media (min-width: 768px) {
  .p-card {
    padding: 20px;
  }
}

@media (min-width: 1024px) {
  .p-card {
    padding: 24px;
  }
}
```

You can do the same for layouts and elements:

```html
<section class="p-layout">Layout</section>
```

```html
<div class="p-element">Element</div>
```

### Which layer to use?

Use the `p-layout` layer for your main layout elements like `header`, `main`, `section`, `footer`, etc. Use the `p-card` layer for your card elements like `article`, `aside`, `div`, etc. Use the `p-element` layer for your other elements like wrappers of `button`, `input`, `a`, etc.

I think of it like this: layouts are your grids, cards are your boxes, and elements are anything that goes inside the boxes.

### Which properties are included?

Medic 🚑 includes the following properties for each layer:

- p: "padding"
- pt: "padding-top"
- pr: "padding-right"
- pb: "padding-bottom"
- pl: "padding-left"
- m: "margin"
- mt: "margin-top"
- mr: "margin-right"
- mb: "margin-bottom"
- ml: "margin-left"
- gap: "gap"
- "gap-x": "column-gap"
- "gap-y": "row-gap"

Need more properties? Please open an issue or a pull request.

## Why Medic 🚑?

It's not fun to set random padding, margin, or gap values for your elements. It's even less fun to set these values for different breakpoints. You're bound to make a mistake or two and end up having inconsistent layouts across your application. Medic 🚑 solves this problem by providing a set of ergonomic utilities that make it easy to create consistent layouts across your application.

## Contributing

Medic 🚑 comes from the community for the community. I made Medic to solve my own problems, but I'm sure there are other people out there who have the same problems. If you have any ideas on how to improve Medic 🚑, please open an issue or a pull request. I'm always open to new ideas.

## License

Medic 🚑 is open source software released under the [MIT License](LICENSE). We encourage you to use, modify, and distribute Medic as you see fit.
