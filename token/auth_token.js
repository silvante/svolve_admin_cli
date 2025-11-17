import keytar from "keytar";

const SERVICE = "clisa";
const ACCOUNT = "auth_token";

export async function StoreAuthToken(token) {
  await keytar.setPassword(SERVICE, ACCOUNT, token);
}

export async function GetAuthToken() {
  await keytar.getPassword(SERVICE, ACCOUNT);
}

export async function DeleteAuthToken() {
  await keytar.deletePassword(SERVICE, ACCOUNT);
}
