const fs = require("fs");
const path = require("path");
const { existsSync, mkdirSync, renameSync } = fs;

console.log("Init overwolf build");

const currentDir = __dirname;

const fileDir = path.join(currentDir, "build");
const buildDir = path.join(fileDir, "app", "Files");

// Creating Files directory if doesn't exists
if (!existsSync(buildDir)) {
  mkdirSync(buildDir);
}

// Moving index.html and static folder
const index = "index.html";
const static = "static";

const customRename = (name) => {
  const oldPath = path.join(fileDir, name);
  const newPath = path.join(buildDir, name);
  renameSync(oldPath, newPath);
};

customRename(index);
customRename(static);

console.log("Compiled successfully!");
