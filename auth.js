import inquirer from "inquirer";
import { DeleteAuthToken } from "./token/auth_token.js";
import { red } from "./text_themes/themes.js";

export async function Authenticate() {
  await DeleteAuthToken();

  let tries = 0;
  const access = false;

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

    console.log(`\nyour password is ${password} \n`);

    // counting tials
    tries = tries + 1;
    console.log(`tried ${tries} times!`);
    
    if (tries >= 3) {
      console.log(red("Game over"));
    }
  }
}
