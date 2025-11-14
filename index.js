#!/usr/bin/env node
import path from "path";
import fs from "fs";
import { green, red } from "./text_themes/themes.js";
import ora from "ora";
import figlet from "figlet";

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

function startShell() {
  console.clear();

  console.log(`🚀 welcome to clisa ${green("v1 cli")}, enjoy using it.`);
  
  figlet("Clisa v1", (err, data) => {
    console.log();
  });
}
