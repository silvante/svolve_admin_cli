import figlet from "figlet";
import gradient from "gradient-string";
import { green, red, white } from "./text_themes/themes.js";

export const base_url = "https://server.svolve.uz";
export const request_timeout = 15000;

export async function wellcome() {
  console.log(`🍋 welcome to clisa ${green("v1 cli")}, enjoy using it.`);
  console.log("");
  await figlet("Clisa v1", (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
  console.log("");
  console.log(`> type ${white("quit")} to close clisa.`);
  console.log(`> type ${white("help")} to get some help and basic commands.`);
  console.log(`> type ${white("version")} to get current version of clisa.`);
  console.log("");
}
