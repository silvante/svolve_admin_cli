import inquirer from "inquirer";

export async function Authenticate(readl) {
  readl.pause();

  const { password } = await inquirer.prompt([
    {
      type: "password",
      name: "password",
      message: "Password:",
      mask: "*",
    },
  ]);

  console.log(`your password is ${password}`);

  readl.resume();
}
