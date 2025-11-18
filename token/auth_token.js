import keytar from "keytar";

const SERVICE = "clisa";
const ACCOUNT = "auth_token";

export function StoreAuthToken(token) {
  return keytar.setPassword(SERVICE, ACCOUNT, token);
}

export function GetAuthToken() {
  return keytar.getPassword(SERVICE, ACCOUNT);
}

export function DeleteAuthToken() {
  return keytar.deletePassword(SERVICE, ACCOUNT);
}
