import { readdirSync } from "fs";
import path from "path";

const command_dir = path.resolve("./commands");

export default async function help() {
  const files = readdirSync(command_dir);

  const commands = files
    .filter((file) => file.endsWith(".js"))
    .map((file) => file.replace(".js", ""));

  console.log("📜 Available commands:\n");

  commands.map((cm) => {
    console.log(`> ${cm}`);
  });
}
