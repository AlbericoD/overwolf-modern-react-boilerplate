const fs = require("fs");
const path = require("path");
//import metadata from './package.json';
const { version } = require("./package.json");

console.log("Init overwolf opk packaging");

const currentDir = __dirname;
const distFile = path.join(currentDir, `dist-opk.v${version}.zip`);
const opkFile = path.join(currentDir, `dist-opk.v${version}.opk`);

fs.copyFileSync(distFile, opkFile);

console.log("opk created successfully!");
