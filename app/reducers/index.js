import { combineReducers } from "redux"

import order from "./Order"
import session from "./Session"
import shoppingCart from "./ShoppingCart"
import ui from "./UI"

const reducers = combineReducers({
  order,
  session,
  shoppingCart,
  ui,
})

export default reducers
