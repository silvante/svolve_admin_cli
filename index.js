#!/usr/bin/env node
import path from "path";
import fs, { read } from "fs";
import { command_line, green, red, white } from "./text_themes/themes.js";
import ora from "ora";
import readline from "readline";
import chalk from "chalk";
import { wellcome } from "./defaults.js";
import nano_spinner from "nanospinner";

const commands_dir = path.resolve("./commands");

async function run_command(command_name) {
  const file_path = path.join(commands_dir, `${command_name}.js`);

  if (!fs.existsSync(file_path)) {
    console.log(
      `\n ❌ Unknown command: ${red(command_name)} \n\n Type ${white(
        "help"
      )} to get available commands \n`
    );
    return;
  }

  const spinner = nano_spinner
    .createSpinner("processing your command...")
    .start();

  console.log("\n");

  try {
    const cmd = await import(file_path);
    await cmd.default();
    console.log("");
    spinner.success({ text: `command ${white(command_name)} succeeded :)` });
  } catch (error) {
    console.log("");
    spinner.error({ text: `command failed: ${error.message}` });
  }
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

    // to exit
    if (input === "exit" || input === "quit") {
      console.log("\n arrivederci 👋\n");
      readl.close();
      return;
    }

    // to clear
    if (input === "clear") {
      process.stdout.write("\x1Bc"); // <— Clears terminal
      await wellcome();
      readl.prompt();
      return;
    }

    await run_command(input);
    readl.prompt();
  });
}

if (process.argv.length <= 2) {
  startShell();
} else {
  console.log(
    `\n for now you can run only shell, please run ${green("clisa")} 🍋 \n`
  );
}
