import Proptypes from "prop-types"
import React from "react"
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"

class Button extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={styles.button}>
          <Text style={styles.button_text}>{this.props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

Button.propTypes = {
  title: Proptypes.string,
  onPress: Proptypes.func,
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#56bef4",
    width: "100%",
    height: 55,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button_text: {
    color: "#ffffff",
    fontFamily: "Poppins-SemiBold",
  },
})

export default Button
