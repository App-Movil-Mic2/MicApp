import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import React from "react"
import { StatusBar } from "react-native"

import AppNavigation from "./navigation/AppNavigation"
import Store from "./Store"
import LoadingModal from "./components/LoadingModal"

const App = () => {
  const [store, persistor] = Store()
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#56bef4" />
        <LoadingModal />
        <AppNavigation />
      </PersistGate>
    </Provider>
  )
}

export default App
