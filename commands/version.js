import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { white } from "../text_themes/themes.js";
const { version } = require("../package.json");

export default async function GetVersion() {
  console.log(`current version of clisa: ${white(`v${version}`)} 📦`);
  return;
}
