import inquirer from "inquirer";
import { DeleteAuthToken } from "./token/auth_token.js";
import { red } from "./text_themes/themes.js";

export async function Authenticate() {
  await DeleteAuthToken();

  let tries = 0;
  const access = false;

  // we can use while loop for this function

  while (!access) {
    const { password } = await inquirer.prompt([
      {
        type: "password",
        name: "password",
        message: "admin password:",
        mask: "*",
      },
    ]);
    
    console.log(`your password is ${password}`);

    // counting tials
    tries = tries + 1;
    if (tries >= 3) {
      console.log(red("Game over"));
    }
  }
}
