import { connect } from "react-redux"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import React, { useState } from "react"

import BaseConfigurationScreen from "../screens/BaseConfigurationScreen"
import BusinessPartnersScreen from "../screens/BusinessPartnersScreen"
import LoginScreen from "../screens/LoginScreen"
import { navigationRef } from "../utils/navigation"
import { routes, titles } from "../constants/RouteNames"
import Header from "../components/Header"
import Drawer from "../components/Drawer"
import { useEffect } from "react"

const PrimaryNavigator = createStackNavigator()
const LoginStack = createStackNavigator()
const DrawerNavigationStack = createDrawerNavigator()
const BusinnessPartnersStack = createStackNavigator()

const createBusinnessPartnersStack = () => {
  return (
    <BusinnessPartnersStack.Navigator
      initialRouteName={routes.BUSINESS_PARTNERS_SCREEN}>
      <BusinnessPartnersStack.Screen
        name={routes.BUSINESS_PARTNERS_SCREEN}
        component={BusinessPartnersScreen}
        options={{
          headerTitle: titles.BUSINESS_PARTNERS_SCREEN,
          header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name

            return <Header title={title} navigation={navigation} />
          },
        }}
      />
    </BusinnessPartnersStack.Navigator>
  )
}

const createDrawerNavigationStack = () => {
  return (
    <DrawerNavigationStack.Navigator
      initialRouteName={routes.BUSINESS_PARTNERS_STACK}
      drawerPosition="left"
      drawerType="front"
      drawerContent={(state, navigation) => (
        <Drawer state={state} nav={navigation} />
      )}>
      <DrawerNavigationStack.Screen
        name={routes.BUSINESS_PARTNERS_STACK}
        component={createBusinnessPartnersStack}
      />
    </DrawerNavigationStack.Navigator>
  )
}

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

const AppNavigation = (props) => {
  const [isReadyRef, setIsReadyRef] = useState(false)
  return (
    <NavigationContainer
      ref={isReadyRef ? navigationRef : null}
      onReady={() => {
        setIsReadyRef(true)
      }}>
      <PrimaryNavigator.Navigator
        initialRouteName={
          props.password ? routes.DRAWER_STACK : routes.LOGIN_STACK
        }
        screenOptions={{
          headerShown: false,
        }}>
        <PrimaryNavigator.Screen
          name={routes.LOGIN_STACK}
          children={createLoginStack}
        />
        <PrimaryNavigator.Screen
          name={routes.DRAWER_STACK}
          children={createDrawerNavigationStack}
        />
      </PrimaryNavigator.Navigator>
    </NavigationContainer>
  )
}

export default connect((state) => ({
  password: state.session.password,
}))(AppNavigation)
