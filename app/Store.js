import AsyncStorage from "@react-native-community/async-storage"
import { createStore, applyMiddleware } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"

import reducers from "./reducers"

const persistConf = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["session"],
}
const persistedReducer = persistReducer(persistConf, reducers)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export default () => {
  return [store, persistor]
}
