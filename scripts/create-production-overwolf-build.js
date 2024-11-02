const fs = require("fs");
const path = require("path");
const { existsSync, mkdirSync, renameSync } = fs;

console.info("%cInit overwolf build", "color: green; font-weight: bold;");

const currentDir = `${__dirname}/../`;

const fileDir = path.join(currentDir, "build");
const buildDir = path.join(fileDir, "Files");

// Creating Files directory if doesn't exists
if (!existsSync(buildDir)) {
  mkdirSync(buildDir);
}

const customRename = (name) => {
  const oldPath = path.join(fileDir, name);
  const newPath = path.join(buildDir, name);
  renameSync(oldPath, newPath);
};

// Renaming files
["index.html", "static"].forEach(customRename);

console.info("%cCompiled successfully!", "color: green; font-weight: bold;");
