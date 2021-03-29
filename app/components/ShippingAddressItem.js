import { connect } from "react-redux"
import Proptypes from "prop-types"
import React from "react"
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"

import { goBack } from "../utils/navigation"
import { selectShippingAddress as changeShippingAddress } from "../actions/OrderActions"

class ShippingAddressItem extends React.Component {
  static defaultProps = {
    item: null,
  }

  selectShippingAddress() {
    this.props.dispatch(changeShippingAddress(this.props.item))
    goBack()
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.selectShippingAddress()}>
        <View style={styles.shipping_address_item_view}>
          <Text style={styles.shipping_address_item_name}>
            {this.props.item.name}
          </Text>
          <Text style={styles.shipping_address_item_address}>
            {this.props.item.address}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

ShippingAddressItem.propTypes = {
  item: Proptypes.object,
}

const styles = StyleSheet.create({
  shipping_address_item_view: {
    width: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  shipping_address_item_name: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  shipping_address_item_address: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
  },
})

export default connect()(ShippingAddressItem)
