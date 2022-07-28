import { fromCript, toCript } from "../utils/functions";
// CONSTS TO USE IN CODE
const TOKEN_KEY = toCript(process.env.REACT_APP_MODULE_APPTOKEN_KEY);
const USER_KEY = toCript(process.env.REACT_APP_MODULE_APPUSER_KEY);
const EXPIRES_IN_KEY = toCript(process.env.REACT_APP_MODULE_APPEXPIRES_IN_KEY);
const LAST_LOGIN_KEY = toCript(process.env.REACT_APP_MODULE_APPLAST_LOGIN_KEY);
const REMEMBER_USER_KEY = toCript(process.env.REACT_APP_MODULE_APPREMEMBER_USER_KEY);

// COMMANDS TO EXPORT

const getToken = () => {
  let token = fromCript(localStorage.getItem(TOKEN_KEY));

  return token;
};

const updateLocalUser = (user) => {
  localStorage.removeItem(USER_KEY);
  localStorage.setItem(USER_KEY, toCript(JSON.stringify(user)));
}

const getUser = () => {
  let userStr = localStorage.getItem(USER_KEY);

  return JSON.parse(fromCript(userStr));
};

const getRemember = () => {
  let remember = fromCript(localStorage.getItem(REMEMBER_USER_KEY));
  if (remember === "true") {
    return true;
  }
  return false;
};

const localLogin = async (user, token, expires_in, remember) => {
  try {
    await localStorage.setItem(TOKEN_KEY, toCript(token));
    await localStorage.setItem(USER_KEY, toCript(JSON.stringify(user)));
    await localStorage.setItem(REMEMBER_USER_KEY, toCript(remember));
    await localStorage.setItem(EXPIRES_IN_KEY, expires_in.toString());
    await localStorage.setItem(LAST_LOGIN_KEY, new Date().toString());
    return true;
  } catch (error) {
    return false;
  }
};

const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  return true;
};

const isAuthenticated = () => {
  let localToken = localStorage.getItem(TOKEN_KEY);
  let token = fromCript(localToken);
  let user = fromCript(localStorage.getItem(USER_KEY));
  let last_login = localStorage.getItem(LAST_LOGIN_KEY);
  let expires_in = localStorage.getItem(EXPIRES_IN_KEY);

  if (localToken != null && token != null && user != null) {
    let now = new Date();
    let past = new Date(last_login);
    let diff = Math.abs(now.getTime() - past.getTime());
    let seconds = Math.ceil(diff / 1000);
    if (seconds < parseInt(expires_in)) {
      return true;
    }
  }

  return false;
};

export { getToken, getUser, updateLocalUser, localLogin, logout, isAuthenticated, getRemember };