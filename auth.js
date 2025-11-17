import inquirer from "inquirer";
import { DeleteAuthToken } from "./token/auth_token.js";

export async function Authenticate() {
  await DeleteAuthToken();

  // we can use while loop for this function

  const { password } = await inquirer.prompt([
    {
      type: "password",
      name: "password",
      message: "Password:",
      mask: "*",
    },
  ]);

  console.log(`your password is ${password}`);
}
