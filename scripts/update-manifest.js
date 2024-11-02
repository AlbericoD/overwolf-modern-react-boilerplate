const fs = require("fs");
const { version } = require("../package.json");
const MANIFEST_PATH = `${__dirname}/../public/manifest.json`;

const manifest = require(`${MANIFEST_PATH}`);
console.info(
  "%cCurrent manifest version is",
  "color: green; font-weight: bold;",
  manifest.meta.version
);

console.info(
  "%cUpdating manifest version to",
  "color: green; font-weight: bold;",
  version
);

manifest.meta.version = version;

fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

console.info(
  "%cManifest updated successfully!",
  "color: green; font-weight: bold;"
);
