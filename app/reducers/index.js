import { combineReducers } from "redux"

import ui from "./UI"
import session from "./Session"

const reducers = combineReducers({
  ui,
  session,
})

export default reducers
