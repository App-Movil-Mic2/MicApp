import Odoo from "react-native-odoo"

import ActionTypes from "../constants/ActionTypes"
import { navigateTo, resetNavigationTo } from "../utils/navigation"
import { routes } from "../constants/RouteNames"

export function saveBaseConfiguration(url, database) {
  return (dispatch) => {
    dispatch(setBaseConfiguration(url, database))
    navigateTo(routes.LOGIN_SCREEN, null, null)
  }
}

function setBaseConfiguration(url, database) {
  return {
    type: ActionTypes.SET_BASE_CONFIGURATION,
    url: url,
    database: database,
  }
}

export function login(url, database, username, password) {
  return (dispatch) => {
    dispatch(showLoadingModal())
    const odoo = new Odoo({
      host: url,
      port: "8069",
      database: database,
      username: username,
      password: password,
    })
    odoo.connect((error) => {
      if (error) {
        if (error.data?.arguments[0] === "Access Denied") {
          dispatch(
            loginFailed(
              "Error de autenticación",
              "Usuario o contraseña incorrectas.",
            ),
          )
        } else if (
          error.data?.arguments[0] ===
          "Demasiados intentos de inicio de sesión. Inténtelo de nuevo más tarde."
        ) {
          dispatch(
            loginFailed(
              "Exceso de intentos",
              "Demasiados intentos de inicio de sesión. Inténtelo de nuevo más tarde.",
            ),
          )
        } else {
          dispatch(
            loginFailed(
              "Error de conexión",
              "Revise su conexión a internet o intente de nuevo más tarde.",
            ),
          )
        }
      } else {
        dispatch(loginSuccesful(username, password))
        resetNavigationTo(routes.DRAWER_STACK, null, null, null)
      }
      dispatch(hideLoadingModal())
    })
  }
}

function loginSuccesful(username, password) {
  return {
    type: ActionTypes.LOGIN_SUCCESSFUL,
    username: username,
    password: password,
  }
}

function loginFailed(loginErrorTitle, loginErrorMessage) {
  return {
    type: ActionTypes.LOGIN_FAILED,
    loginErrorTitle: loginErrorTitle,
    loginErrorMessage: loginErrorMessage,
  }
}

export function cleanLoginError() {
  return {
    type: ActionTypes.CLEAN_LOGIN_ERROR,
  }
}

function showLoadingModal() {
  return {
    type: ActionTypes.SHOW_LOADING_MODAL,
  }
}

function hideLoadingModal() {
  return {
    type: ActionTypes.HIDE_LOADING_MODAL,
  }
}
