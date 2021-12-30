# Symmetrical Palm Tree

For Tailwind

### Install

```bash
npm install symmetrical-palm-tree
```

### Usage

Make sure you have tailwind config, if not run command below

```bash
npx tailwindcss init
```

Open `tailwindcss.config.js` and use add the plugin

```js
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('symmetrical-palm-tree')
  ]
}
```