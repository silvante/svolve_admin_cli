import inquirer from "inquirer";
import { DeleteAuthToken, StoreAuthToken } from "./token/auth_token.js";
import { green, red } from "./text_themes/themes.js";
import authService from "./api/services/auth.service.js";

export async function Authenticate() {
  await DeleteAuthToken();

  let tries = 0;
  let access = false;

  // we can use while loop for this function

  while (!access && tries <= 2) {
    const { password } = await inquirer.prompt([
      {
        type: "password",
        name: "password",
        message: "Admin password:",
        mask: "*",
      },
    ]);

    console.log("");
    const res = await authService.register(password);

    if (res.status >= 400) {
      console.log(red(res.response.data.message));
    }

    if (res.permission === true && res.token) {
      console.log(green("> Wellcome back! Password is correct\n"));
      await StoreAuthToken(res.token);
      return (access = true);
    }

    // counting tials
    tries = tries + 1;
    console.log(`tried ${tries} times!`);

    if (tries >= 3) {
      process.exit(1);
    }
    console.log("");
  }
}
