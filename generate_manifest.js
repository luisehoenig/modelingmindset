/**
 * Optional convenience script — run locally with Node.js:
 *   node generate_manifest.js
 *
 * Scans the img/ folder and writes img/manifest.json listing every image
 * file it finds. experiment.js will automatically use this file if present,
 * so you don't have to hand-type filenames into config.js.
 */
const fs = require("fs");
const path = require("path");

const imgDir = path.join(__dirname, "img");
const exts = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp"];

const files = fs
  .readdirSync(imgDir)
  .filter((f) => exts.includes(path.extname(f).toLowerCase()))
  .sort();

fs.writeFileSync(
  path.join(imgDir, "manifest.json"),
  JSON.stringify(files, null, 2)
);

console.log("Wrote img/manifest.json with " + files.length + " files.");
