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
   <a href="https://github.com/AlbericoD/overwolf-modern-react-boilerplate/actions/workflows/publish-npm-package.yml">
    <img src="https://github.com/AlbericoD/overwolf-modern-react-boilerplate/actions/workflows/publish-npm-package.yml/badge.svg?branch=master" alt="Publish NPM Package" />
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

- **CI/CD - Experimental** continuous development, continuous testing, continuous integration, continuous deployment

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

## 📸 Screenshot

> In this version the project is configured and ready to test with the Hearthstone game, you can use the template, compile and test without modifying anything to understand the development flow.

#### Desktop Window

![Desktop Window](https://raw.githubusercontent.com/AlbericoD/overwolf-modern-react-boilerplate/master/doc/desktop-wn.png)

#### InGame Window - 1

![Desktop Window](https://raw.githubusercontent.com/AlbericoD/overwolf-modern-react-boilerplate/master/doc/hearthstone-ingame.png)

#### InGame Window - 2

![Desktop Window](https://raw.githubusercontent.com/AlbericoD/overwolf-modern-react-boilerplate/master/doc/hearthstone-ingame-2.png)

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
|    |-------CurrentPage.tsx
|    |-------rootReducer.ts
|    |-------store.ts
|    |----utils/*/**/.ts
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

4. **Edit Changelog**
   > To make it easier for users, contributors and overwolf team to see precisely what notable changes have been made between each release (or version) of the project.

```shell
$ vi project-root/CHANGELOG.md
```

## 📦 🔃 🛎️ CI/CD - Experimental

> throughout the development cycle testing or releasing small updates can become a bit tedious, so there is also a github action setting when you generate a new project, you don't actually need to do any extra steps if you use github, this means that whenever you add valid code to the main branch, then an automatic github action will do all the compiling and packaging steps automatically.

About [ CI/CD File.yml](https://raw.githubusercontent.com/AlbericoD/overwolf-modern-react-boilerplate/master/template/.github/workflows/overwolf-opk.yml)

check out some screenshots of what github actions looks like:

## ![Overview](https://raw.githubusercontent.com/AlbericoD/overwolf-modern-react-boilerplate/master/doc/ci-overview.png)

## ![Overview Details-1](https://raw.githubusercontent.com/AlbericoD/overwolf-modern-react-boilerplate/master/doc/ci-overview-details-1.png)

## ![Overview Details-2](https://raw.githubusercontent.com/AlbericoD/overwolf-modern-react-boilerplate/master/doc/ci-overview-details-2.png)

## ![Overview Release-1](https://raw.githubusercontent.com/AlbericoD/overwolf-modern-react-boilerplate/master/doc/ci-overview-release-1.png)

## ![Overview Release-2](https://raw.githubusercontent.com/AlbericoD/overwolf-modern-react-boilerplate/master/doc/ci-overview-release-2.png)

![Overview Release-3](https://raw.githubusercontent.com/AlbericoD/overwolf-modern-react-boilerplate/master/doc/ci-overview-release-3.png)

\*\*in the near future the overwolf team will make available an API to publish an application, so just add a few lines of code at the end of the github actions and the build will be complete
