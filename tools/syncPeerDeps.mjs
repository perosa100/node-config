/* eslint-disable no-undef */
// @ts-check
import fs from "node:fs/promises";

const filePath = "package.json";

const packageJson = JSON.parse(await fs.readFile(filePath, "utf-8"));

let mutated = false;

for (const dep of Object.keys(packageJson.peerDependencies)) {
  const value =
    packageJson.dependencies?.[dep] || packageJson.devDependencies?.[dep];

  if (value && packageJson.peerDependencies[dep] !== value) {
    packageJson.peerDependencies[dep] = value;
    mutated = true;
  }
}

if (mutated) {
  console.log("*corrected* peer dependencies");

  await fs.writeFile(filePath, JSON.stringify(packageJson, null, 2) + "\n");
} else {
  console.log("Peer Dependencies are already in sync");
}
