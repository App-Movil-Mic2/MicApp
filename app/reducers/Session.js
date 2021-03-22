import ActionTypes from "../constants/ActionTypes"

const initialState = {
  url: "",
  database: "",
  username: "",
  password: "",
}

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.SET_BASE_CONFIGURATION:
      return {
        ...state,
        url: action.url,
        database: action.database,
      }
    case ActionTypes.LOGIN_SUCCESSFUL:
      return {
        ...state,
        username: action.username,
        password: action.password,
      }
    case ActionTypes.LOGOUT:
      return {
        ...initialState,
        url: state.url,
        database: state.database,
        username: state.username,
      }
    default:
      return state
  }
}

export default reducer
