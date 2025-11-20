import inquirer from "inquirer";
import { morning } from "../text_themes/themes.js"; // if needed

export default async function getOrg() {
  const { unique_name } = await inquirer.prompt([
    {
      type: "input",
      name: "unique_name",
      message: "unique_name:",
    },
  ]);

  console.log(unique_name);
}
