import { jwtDecode } from "jwt-decode";

function saveToken(token) {
  localStorage.setItem("access_token", token);
}

function getToken() {
  try {
    return jwt_decode(localStorage.setItem("access_token"));
  } catch (error) {}
}

function destroyToken() {
  localStorage.removeItem("access_token");
}

export { getToken, saveToken, destroyToken };
