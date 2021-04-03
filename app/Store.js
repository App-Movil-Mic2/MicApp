import AsyncStorage from "@react-native-community/async-storage"
import { compose, createStore, applyMiddleware } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"

import reducers from "./reducers"

const persistConf = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["order", "session", "shoppingCart"],
}
const persistedReducer = persistReducer(persistConf, reducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
)
const persistor = persistStore(store)

export default () => {
  return [store, persistor]
}
