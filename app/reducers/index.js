import { combineReducers } from "redux"

import session from "./Session"
import shoppingCart from "./ShoppingCart"
import ui from "./UI"

const reducers = combineReducers({
  session,
  shoppingCart,
  ui,
})

export default reducers
