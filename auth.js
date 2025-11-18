import inquirer from "inquirer";
import { DeleteAuthToken, StoreAuthToken } from "./token/auth_token.js";
import { morning } from "./text_themes/themes.js";
import authService from "./api/services/auth.service.js";
import nano_spinner from "nanospinner";

export async function Authenticate() {
  DeleteAuthToken();

  let tries = 3;
  let access = false;

  // we can use while loop for this function

  console.log(`> ${tries} tries left!`);

  while (!access && tries > 0) {
    const { password } = await inquirer.prompt([
      {
        type: "password",
        name: "password",
        message: morning("Admin password ❯❯"),
        mask: "*",
      },
    ]);

    console.log("");

    const spinner = nano_spinner.createSpinner("Getting permission...").start();
    const res = await authService.register(password);

    if (res.status >= 400) {
      spinner.error({ text: res.response.data.message });
    }

    if (res.permission === true && res.token) {
      spinner.success({ text: `Permission accepted, Wellcome back! \n` });
      StoreAuthToken(res.token);
      return (access = true);
    }

    // counting tials
    tries = tries - 1;
    console.log(`> ${tries} tries left!`);

    if (tries >= 3) {
      process.exit(1);
    }
    console.log("");
  }

  if (access) {
    return;
  } else {
    process.exit(1);
  }
}
