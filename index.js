#!/usr/bin/env node
import path from "path";
import fs from "fs";
import { command_line, green, red } from "./text_themes/themes.js";
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
    const loader = ora("processing your command...").start();
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
    prompt: chalk.bold(`${command_line("clisa ⟡ svolve")} ❯❯ `),
  });

  readl.prompt();

  readl.on("line", async (line) => {
    const input = line.trim();
    if (!input) return readl.prompt();

    if (input === "exit" || input === "quit") {
      console.log("arrivederci 👋");
      readl.close()
      return
    }
  });
}

if (process.argv.length <= 2) {
  startShell();
} else {
  console.log(
    `\n for now you can run only shell, please run ${green("clisa")} 🍋 \n`
  );
}
