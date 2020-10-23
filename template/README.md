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

You can get a new overwolf app up and running on your local dev environment with these four steps:

### Prerequisites

- Install [Node.js](https://nodejs.org)
- Install [npm](https://www.npmjs.com/)

1. **Clone the repo**

   ```shell
   git clone https://github.com/AlbericoD/overwolf-modern-react-boilerplate.git

   ```

2. **Install dependencies.**

   ```shell
   #Change into directory
   cd overwolf-modern-react-boilerplate

   #Install
   npm i
   ```

3. **Start the app in `develop` mode.**

   Next, start it up:

   ```shell
    npm start
   ```

   in development mode, the application create a [mock overwolf object](https://github.com/AlbericoD/overwolf-modern-react-boilerplate/blob/master/src/overwolf.dev.mock.ts), this allows you to develop your application in the common browser.

4) **Open the source code and start editing!**

   Your app is now running at `http://localhost:3000`. Open the `overwolf-modern-react-boilerplate` directory in your code editor of choice and edit `src/**/*.{ts|tsx}`. Save your changes, and the browser will update in real time!

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

## 🐛 Remote Redux Debug.

In overwolf it is not possible to install plugins to debug the code, so the alternative is to use something remote to debug an injected code.

1. **Install tool.**

- Install [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl)
  in common browser.

2. **Configure**

- if the installation is correct, a redux dev tools icon should appear in your browser's toolbar.
- click into icon then choose **"Open remote devTools"**
- click into settings option and let hostname called to **"localhost"** and port **8000**.

3. **Run Server Bridge**

- run the server that bridges the remote redux and the overwolf application.
  ```shell
  #Change into directory
  cd overwolf-modern-react-boilerplate
  npm run start-remote-devtools
  ```

4. **Start debugging**
   > whenever you want to debug your app store, just remember to use the **remote redux dev tools** + **the bridge server**

## 📦 Build/Create package for overwolf store.

you need to create an optimized version of your code and the correct structure before sending it to the overwolf store.
[Overwolf Doc: How to submit an app](https://overwolf.github.io/docs/start/submit-your-app-to-the-store#how-to-submit-an-app)

1. **Compile**

   ```shell
   #Change into directory
   cd overwolf-modern-react-boilerplate
   npm run build
   ```

2. **Organize Folder**

```shell
   npm run pack-overwolf
```

- **OBS 1** this organization script was tested on the git bash and linux terminal.
- **OBS 2** this organization script needs to be ported to windows bash powershell.

3. **Create .zip**

- the generated code is located in `|--- build/**/.**`
- Package all **build/** folders to .zip
- just send your .zip code to the overwolf test team.
