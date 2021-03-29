import Proptypes from "prop-types"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

import BackIcon from "../../assets/images/BackIcon"
import MenuIcon from "../../assets/images/MenuIcon"
import ShoppingCartIcon from "../../assets/images/ShoppingCartIcon"
import { routes, titles } from "../constants/RouteNames"
import { navigateTo } from "../utils/navigation"

class Header extends React.Component {
  getHeaderIcon() {
    if (
      !this.props.navigation.canGoBack() &&
      !this.props.scene.route.params?.canGoBack
    ) {
      return (
        <TouchableWithoutFeedback onPress={this.props.navigation.openDrawer}>
          <MenuIcon />
        </TouchableWithoutFeedback>
      )
    } else {
      return (
        <TouchableWithoutFeedback onPress={this.props.navigation.goBack}>
          <BackIcon />
        </TouchableWithoutFeedback>
      )
    }
  }

  getShoppingCartIcon() {
    if (this.props.title === titles.ORDER_SCREEN) {
      return (
        <TouchableWithoutFeedback
          onPress={() =>
            navigateTo(routes.PRODUCTS_STACK, { canGoBack: true }, null)
          }>
          <ShoppingCartIcon />
        </TouchableWithoutFeedback>
      )
    }
  }

  render() {
    return (
      <View style={styles.header}>
        {this.getHeaderIcon()}
        <Text style={styles.header_title}>{this.props.title}</Text>
        {this.getShoppingCartIcon()}
      </View>
    )
  }
}

Header.propTypes = {
  title: Proptypes.string,
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#56bef4",
    width: "100%",
    height: 55,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header_title: {
    color: "#ffffff",
    fontFamily: "Poppins-SemiBold",
    marginLeft: 22,
    textAlignVertical: "center",
    includeFontPadding: false,
    flex: 1,
  },
})

export default Header
