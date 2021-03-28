import { connect } from "react-redux"
import { DrawerContentScrollView } from "@react-navigation/drawer"
import React from "react"
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"

import { goLogout } from "../actions/SessionActions"
import MIC2Logo from "../../assets/images/MIC2Logo"
import { resetNavigationTo } from "../utils/navigation"
import { routes } from "../constants/RouteNames"

class Drawer extends React.Component {
  isActive(routeName) {
    const route = this.props.state?.routes?.find(
      (route) => route.name === routeName,
    )
    return this.props.descriptors[route.key]?.navigation?.isFocused()
  }

  render() {
    return (
      <DrawerContentScrollView style={styles.drawer_view}>
        <View style={styles.drawer_image}>
          <MIC2Logo />
        </View>
        <View style={styles.drawer_item_list}>
          <TouchableWithoutFeedback
            onPress={() =>
              resetNavigationTo(routes.BUSINESS_PARTNERS_STACK, null, null)
            }>
            <Text
              style={[
                styles.drawer_item,
                this.isActive(routes.BUSINESS_PARTNERS_STACK) &&
                  styles.drawer_item_active,
              ]}>
              Socios de Negocios
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              resetNavigationTo(routes.PRODUCTS_STACK, null, null)
            }>
            <Text
              style={[
                styles.drawer_item,
                this.isActive(routes.PRODUCTS_STACK) &&
                  styles.drawer_item_active,
              ]}>
              Lista de Productos
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.props.dispatch(goLogout())}>
            <Text style={styles.drawer_item}>Cerrar Sesión</Text>
          </TouchableWithoutFeedback>
        </View>
      </DrawerContentScrollView>
    )
  }
}

const styles = StyleSheet.create({
  drawer_view: {
    backgroundColor: "#58c3f8",
  },
  drawer_image: {
    flexDirection: "row",
    justifyContent: "center",
  },
  drawer_item_list: {
    flexDirection: "column",
    marginLeft: 20,
  },
  drawer_item: {
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "Montserrat-SemiBold",
    marginBottom: 15,
    paddingLeft: 10,
  },
  drawer_item_active: {
    borderLeftColor: "#ffffff",
    borderLeftWidth: 2,
  },
})

export default connect()(Drawer)
