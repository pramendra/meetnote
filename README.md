# Development Tutorial

## Create vite app

```bash
$ npm create vite@latest meetnote -- --template react
$ echo "v18.18.0" > .nvmrc | nvm use
$ npm i
```

## Add tailwindcss

```bash
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```

### update tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

### prepend into src/index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
