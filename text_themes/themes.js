import chalk from "chalk";
import gradient from "gradient-string";

export function green(text) {
  const dark_text = chalk.black(text);
  return chalk.bgGreen(dark_text);
}

export function white(text) {
  const dark_text = chalk.black(text);
  return chalk.bgWhite(dark_text);
}

export function red(text) {
  return chalk.bgRed(text);
}

export function multicolor(text) {
  return gradient.pastel.multiline(text);
}

export function command_line(text) {
  return gradient.atlas.multiline(text);
}

export function morning(text) {
  return gradient.morning.multiline(text);
}