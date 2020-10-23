<h1 align="center">
  Overwolf Modern React Boilerplate 
</h1>
<p align="center">
  <a href="https://github.com/AlbericoD/overwolf-modern-react-boilerplate/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="OMRB is released under the MIT license." />
  </a>
  <a href="#contribution">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
 
</p>

<h3 align="center">
  <a href="#-quick-start">Quickstart</a>
  <span> · </span>
  <a href="#-project-structure---feature-folder">Project structure</a>
  <span> · </span>
  <a href="https://www.npmjs.com/package/overwolf-hooks">Overwolf Custom Hooks</a>
  <span> · </span>
  <a href="#-remote-redux-debug">Remote Debug</a>
  <span> · </span>
  <a href="https://github.com/AlbericoD/overwolf-modern-react-boilerplate/blob/master/CONTRIBUTING.md">Contribution</a>
  <span> · </span>
</h3>

> This is the official [Overwolf Modern React Boilerplate](https://github.com/AlbericoD/overwolf-modern-react-boilerplate) template for [Create React App](https://github.com/facebook/create-react-app).

> OMRB is a free and open source opinionated boilerplate based on React that helps developers create fast, modular and modern overwolf app.

### Technology

<h4 align="center">
  <a href="https://reactjs.org/">React JS</a>
  <span> · </span>
  <a href="https://redux-toolkit.js.org/">Redux ToolKit</a>
  <span> · </span>
  <a href="https://www.i18next.com/">I18next</a>
  <span> · </span>
  <a href="https://github.com/reduxjs/redux-devtools">Redux Devtools - Remote</a>
   <span> · </span>
  <a href="https://overwolf.github.io/">Overwolf Api</a>
</h4>

- **Use a Modern Stack for Every App.** Create a uniform workflow for you and your team without ejecting the Create React App code.

- **Internationalization.** Support for multiple languages without having to change code.

- **Performance Is Baked In.** Custom hooks with functions and variables memoized for common uses in overwolf development.

- **Build.** Folders and structure ready for use in the overwolf store.

---

## 🚀 Quick Start

### Prerequisites

- Install [Node.js](https://nodejs.org)
- Install [npm](https://www.npmjs.com/)

To use this template, add `--template overwolf-typescript-redux` when creating a new app.

For example:

```sh
npx create-react-app my-app --template overwolf-typescript-redux

# or

yarn create react-app my-app --template overwolf-typescript-redux
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.

## 💼 Project structure - Feature Folder.

Folder-by-type only works on small-scale projects. Folder-by-feature is superior in the majority of cases, is better due to its scalability, stands out in high modularity and cohesion. It allows us to play with the components' scope.

```text
.
|--- public
|    |--- app/
|    |-------IconMouseNormal.png
|    |-------IconMouseOver.png
|    |-------TaskbarIcon.png
|    |-------desktop-icon.ico
|    |-------manifest.json
|    |--- store/
|    |-------description.txt
|    |-------store.json
|    |--- index.html
|--- src
|    |--- app/
|    |-------App.css
|    |-------App.tsx
|    |-------constants.ts
|    |-------rootReducer.ts
|    |-------store.ts
|    |--- components/*/**.tsx
|    |--- features/*/**.tsx
|    |--- typings/*/**.d.ts
|    |--- locales/
|    |-----------de/**/*.json
|    |-----------de/index.ts
|    |-----------en/**/*.json
|    |-----------en/index.ts
|    |-----------es/**/*.json
|    |-----------es/index.ts
|    |-----------fr/**/*.json
|    |-----------fr/index.ts
|    |-----------it/**/*.json
|    |-----------it/index.ts
|    |-----------ko/**/*.json
|    |-----------ko/index.ts
|    |-----------pl/**/*.json
|    |-----------pl/index.ts
|    |-----------pt/**/*.json
|    |-----------pt/index.ts
|    |-----------ru/**/*.json
|    |-----------ru/index.ts
|    |-----------tr/**/*.json
|    |-----------tr/index.ts
|    |-----------index.ts
|    |--- index.tsx
|    |--- overwolf.dev.mock.ts
|    |--- react-app-env.d.ts
|    |--- setupTests.ts
|--- .gitignore
|--- LICENSE
|--- README.md
|--- create-production-overwolf-build.sh
|--- package-lock.json
|--- package.json
|--- remote-dev-redux-devtools.js
|--- tsconfig.json
.
```
