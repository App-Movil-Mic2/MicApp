import { connect } from "react-redux"
import { DrawerContentScrollView } from "@react-navigation/drawer"
import React from "react"
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"

import { goLogout } from "../actions/SessionActions"
import MIC2Logo from "../../assets/images/MIC2Logo"
import { routes } from "../constants/RouteNames"

class Drawer extends React.Component {
  isActive(routeName) {
    if (this.props.state.state.routeNames[0] === routeName) {
      return true
    }
    return false
  }

  render() {
    return (
      <DrawerContentScrollView style={styles.drawer_view}>
        <View style={styles.drawer_image}>
          <MIC2Logo />
        </View>
        <View style={styles.drawer_item_list}>
          <TouchableWithoutFeedback>
            <Text
              style={[
                styles.drawer_item,
                this.isActive(routes.BUSINESS_PARTNERS_STACK) &&
                  styles.drawer_item_active,
              ]}>
              Socios de Negocios
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text
              style={[
                styles.drawer_item,
                this.isActive(routes.PRODUCTS_LIST_STACK) &&
                  styles.drawer_item_active,
              ]}>
              Lista de productos
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
