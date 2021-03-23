import Proptypes from "prop-types"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

import BackIcon from "../../assets/images/BackIcon"
import MenuIcon from "../../assets/images/MenuIcon"

class Header extends React.Component {
  getHeaderIcon() {
    if (!this.props.navigation.canGoBack()) {
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

  render() {
    return (
      <View style={styles.header}>
        {this.getHeaderIcon()}
        <Text style={styles.header_title}>{this.props.title}</Text>
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
  },
})

export default Header
