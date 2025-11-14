#!/usr/bin/env node
import figlet from "figlet";

import { green } from "./text_themes/themes.js";
import gradient from "gradient-string";

console.log(green("🍋 Welcome to clisa v1, enjoy using it!"));
figlet("Clisa v1.", (err, data) => {
  console.log(gradient.pastel.multiline(data));
});