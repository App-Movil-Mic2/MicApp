import { connect } from "react-redux"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import React, { useState } from "react"

import BaseConfigurationScreen from "../screens/BaseConfigurationScreen"
import BusinessPartnerScreen from "../screens/BusinessPartnerScreen"
import BusinessPartnersScreen from "../screens/BusinessPartnersScreen"
import Drawer from "../components/Drawer"
import Header from "../components/Header"
import LoginScreen from "../screens/LoginScreen"
import { navigationRef } from "../utils/navigation"
import OrderScreen from "../screens/OrderScreen"
import ProductsScreen from "../screens/ProductsScreen"
import { routes, titles } from "../constants/RouteNames"
import ShippingAddressesScreen from "../screens/ShippingAddressesScreen"

const PrimaryNavigator = createStackNavigator()
const LoginStack = createStackNavigator()
const DrawerNavigationStack = createDrawerNavigator()
const BusinnessPartnersStack = createStackNavigator()
const ProductsStack = createStackNavigator()

const mapNavigationStateParamsToProps = (SomeComponent) => {
  return class extends React.Component {
    static navigationOptions = SomeComponent.navigationOptions
    render() {
      const {
        route: { params },
      } = this.props
      return <SomeComponent {...params} />
    }
  }
}

const getHeader = (scene, previous, navigation) => {
  const { options } = scene.descriptor
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name

  return (
    <Header
      title={title}
      navigation={navigation}
      previous={previous}
      scene={scene}
    />
  )
}

const createBusinnessPartnersStack = () => {
  return (
    <BusinnessPartnersStack.Navigator
      initialRouteName={routes.BUSINESS_PARTNERS_SCREEN}>
      <BusinnessPartnersStack.Screen
        name={routes.BUSINESS_PARTNERS_SCREEN}
        component={BusinessPartnersScreen}
        options={{
          headerTitle: titles.BUSINESS_PARTNERS_SCREEN,
          header: ({ scene, previous, navigation }) =>
            getHeader(scene, previous, navigation),
        }}
      />
      <BusinnessPartnersStack.Screen
        name={routes.BUSINESS_PARTNER_SCREEN}
        component={mapNavigationStateParamsToProps(BusinessPartnerScreen)}
        options={{
          headerTitle: titles.BUSINESS_PARTNER_SCREEN,
          header: ({ scene, previous, navigation }) =>
            getHeader(scene, previous, navigation),
        }}
      />
      <BusinnessPartnersStack.Screen
        name={routes.ORDER_SCREEN}
        component={mapNavigationStateParamsToProps(OrderScreen)}
        options={{
          headerTitle: titles.ORDER_SCREEN,
          header: ({ scene, previous, navigation }) =>
            getHeader(scene, previous, navigation),
        }}
      />
      <BusinnessPartnersStack.Screen
        name={routes.SHIPPING_ADDRESSES_SCREEN}
        component={mapNavigationStateParamsToProps(ShippingAddressesScreen)}
        options={{
          headerTitle: titles.SHIPPING_ADDRESSES_SCREEN,
          header: ({ scene, previous, navigation }) =>
            getHeader(scene, previous, navigation),
        }}
      />
    </BusinnessPartnersStack.Navigator>
  )
}

const createProductsStack = () => {
  return (
    <ProductsStack.Navigator initialRouteName={routes.PRODUCTS_SCREEN}>
      <ProductsStack.Screen
        name={routes.PRODUCTS_SCREEN}
        component={ProductsScreen}
        options={{
          headerTitle: titles.PRODUCTS_SCREEN,
          header: ({ scene, previous, navigation }) =>
            getHeader(scene, previous, navigation),
        }}
      />
    </ProductsStack.Navigator>
  )
}

const createDrawerNavigationStack = () => {
  return (
    <DrawerNavigationStack.Navigator
      initialRouteName={routes.BUSINESS_PARTNERS_STACK}
      drawerPosition="left"
      drawerType="front"
      drawerContent={({ state, descriptors }) => (
        <Drawer state={state} descriptors={descriptors} />
      )}>
      <DrawerNavigationStack.Screen
        name={routes.BUSINESS_PARTNERS_STACK}
        children={createBusinnessPartnersStack}
      />
      <DrawerNavigationStack.Screen
        name={routes.PRODUCTS_STACK}
        children={createProductsStack}
      />
    </DrawerNavigationStack.Navigator>
  )
}

const createLoginStack = (isConfigured) => {
  return (
    <LoginStack.Navigator
      initialRouteName={
        isConfigured ? routes.LOGIN_SCREEN : routes.BASE_CONFIGURATION_SCREEN
      }
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

  const isConfigured = () => {
    return props.url && props.database
  }

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
          children={createLoginStack.bind(null, isConfigured())}
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
  url: state.session.url,
  database: state.session.database,
}))(AppNavigation)
