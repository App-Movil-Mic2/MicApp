import ActionTypes from "../constants/ActionTypes"

const initialState = {
  loginErrorTitle: "",
  loginErrorMessage: "",
  showLoadingModal: false,
}

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.LOGIN_FAILED:
      return {
        ...state,
        loginErrorTitle: action.loginErrorTitle,
        loginErrorMessage: action.loginErrorMessage,
      }
    case ActionTypes.CLEAN_LOGIN_ERROR:
      return {
        ...state,
        loginErrorTitle: "",
        loginErrorMessage: "",
      }
    case ActionTypes.SHOW_LOADING_MODAL:
      return {
        ...state,
        showLoadingModal: true,
      }
    case ActionTypes.HIDE_LOADING_MODAL:
      return {
        ...state,
        showLoadingModal: false,
      }
    case ActionTypes.LOGOUT:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default reducer
