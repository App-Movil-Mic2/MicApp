import "react-native-gesture-handler"
import React, { useState } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import BaseConfigurationScreen from "../screens/BaseConfigurationScreen"
import LoginScreen from "../screens/LoginScreen"
import { navigationRef } from "../utils/navigation"
import { routes } from "../constants/RouteNames"

const PrimaryNavigator = createStackNavigator()
const LoginStack = createStackNavigator()

const createLoginStack = () => {
  return (
    <LoginStack.Navigator
      initialRouteName={routes.BASE_CONFIGURATION_SCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <LoginStack.Screen
        name={routes.BASE_CONFIGURATION_SCREEN}
        component={BaseConfigurationScreen}
      />
      <LoginStack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
    </LoginStack.Navigator>
  )
}

const AppNavigation = () => {
  const [isReadyRef, setIsReadyRef] = useState(false)
  return (
    <NavigationContainer
      ref={isReadyRef ? navigationRef : null}
      onReady={() => {
        setIsReadyRef(true)
      }}>
      <PrimaryNavigator.Navigator
        initialRouteName={routes.LOGIN_STACK}
        screenOptions={{
          headerShown: false,
        }}>
        <PrimaryNavigator.Screen
          name={routes.LOGIN_STACK}
          children={createLoginStack}
        />
      </PrimaryNavigator.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
