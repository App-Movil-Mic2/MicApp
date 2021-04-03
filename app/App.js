import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import React, { useEffect } from "react"
import SplashScreen from "react-native-splash-screen"
import { StatusBar } from "react-native"

import AppNavigation from "./navigation/AppNavigation"
import Store from "./Store"
import LoadingModal from "./components/LoadingModal"

const App = () => {
  const [store, persistor] = Store()

  useEffect(() => {
    SplashScreen.hide()
  })

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#4dabdb" />
        <LoadingModal />
        <AppNavigation />
      </PersistGate>
    </Provider>
  )
}

export default App
