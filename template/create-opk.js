const fs = require('fs');
const path = require('path');

console.log("Init overwolf opk packaging")

const currentDir = __dirname;
const distFile = path.join(currentDir, 'dist-opk.zip')
const opkFile = path.join(currentDir, 'dist-opk.opk')

fs.copyFileSync(distFile, opkFile)


console.log("opk created successfully!")