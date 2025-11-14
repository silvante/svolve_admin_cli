#!/usr/bin/env node
import path from "path";
import fs from "fs";
import { green, red } from "./text_themes/themes.js";
import ora from "ora";
import readline from "readline";
import chalk from "chalk";
import { wellcome } from "./defaults.js";

const commands_dir = path.resolve("./commands");

function run_command(command_name) {
  const file_path = path.join(commands_dir, `${command_name}.js`);

  if (!fs.existsSync(file_path)) {
    console.log(`Unknown command: ${red(command_name)}`);
    return;
  }

  import(file_path).then((cmd) => {
    const loader = ora("loading your command...").start();
    cmd
      .default()
      .then(() => {
        loader.succeed(`command $${command_name} succeeded :)`);
      })
      .catch((err) => {
        loader.fail(`command failed: ${err.message}`);
      });
  });
}

async function startShell() {
  console.clear();

  // wellcome screen
  await wellcome();

  const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: chalk.magenta("enter command >"),
  });

  readl.prompt();
}

if (process.argv.length <= 2) {
  startShell();
} else {
  console.log(`for now you can run only shell, please run ${green(clisa)} 🍋`);
}
