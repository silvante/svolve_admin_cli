import chalk from "chalk";

export function green(text) {
  const dark_text = chalk.black(text);
  return chalk.bgGreen(dark_text);
}

export function white(text) {
  const dark_text = chalk.black(text);
  return chalk.bgWhite(dark_text);
}
