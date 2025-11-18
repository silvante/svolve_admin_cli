// this command have to be deleted at production

import { GetAuthToken as LoadToken } from "../token/auth_token.js";

export default async function GetAuthToken() {
  const token = await LoadToken();
  console.log(`${token}`);
  return;
}
