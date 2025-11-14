import figlet from "figlet";
import gradient from "gradient-string";
import { multicolor, white } from "./text_themes/themes.js";

export const base_url = "https://server.svolve.uz";
export const request_timeout = 15000;

export async function wellcome() {
  console.log(`🍋 welcome to ${multicolor("clisa v1 cli")} for svolve admin.`);
  console.log("");

  const clisa_asci = await figlet.text("Clisa v1");
  console.log(multicolor(clisa_asci));

  console.log("");
  console.log(`> type ${white("exit")} to close clisa.`);
  console.log(`> type ${white("help")} to get some help and available commands.`);
  console.log(`> type ${white("version")} to get current version of clisa.`);
  console.log("");
}
