# Class Management System

## To install this project, follow these steps:

1.Clone the repository:

  ```
   git clone <repo-url>
   cd <repo-dir>
  ```

2.Install the necessary packages:

  ``` 
  npm install  
  ```

3. Add Redux Toolkit and React-Redux packages:

  ```
  npm install @reduxjs/toolkit
  npm install react-redux 
  ```

4.Start the project:

  ```
  npm run dev
  ```

## The project has the following structure:

```
  .
  ├── node_modules/
  ├── public/
  │   ├── information.md
  ├── src/
  │   ├── components/
  │   │   ├── Class/
  │   │   ├── Point/
  │   │   ├── Student/
  │   ├── interface/
  │   │   ├── interface.ts
  │   ├── redux/
  │   │   ├── expense/
  │   │   │   ├── lessonSlice.ts
  │   │   │   ├── pointSlice.ts
  │   │   │   ├── studentSlice.ts
  │   │   ├── index.ts
  │   │   ├── rootReducer.ts
  │   ├── App.module.css
  │   ├── App.tsx
  │   ├── index.css
  │   ├── main.tsx
  │   ├── vite-env.d.ts
  ├── .eslintrc.cjs
  ├── .gitignore
  ├── index.html
  ├── package-lock.json
  ├── package.json
  ├── README.md
  ├── tsconfig.app.json
  ├── tsconfig.json
  ├── tsconfig.node.json
  └── vite.config.ts
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
