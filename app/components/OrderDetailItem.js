import { connect } from "react-redux"
import Proptypes from "prop-types"
import React from "react"
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"

import { showOrderDetailModal } from "../actions/UIActions"

class OrderDetailItem extends React.Component {
  static defaultProps = {
    item: null,
  }

  getSubtotalDetail() {
    return `$ ${(
      Number.parseFloat(this.props.item?.product.price) *
      Number.parseFloat(this.props.item?.quantity)
    ).toFixed(2)}`
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          this.props.dispatch(showOrderDetailModal(this.props.item))
        }>
        <View style={styles.order_detail_item_view}>
          <Text style={styles.order_detail_item_name}>
            {this.props.item?.product.name}
          </Text>
          <Text style={styles.order_detail_item_quantity}>
            Cantidad: {this.props.item?.quantity}
          </Text>
          <Text style={styles.order_detail_item_subtotal}>
            {this.getSubtotalDetail()}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

OrderDetailItem.propTypes = {
  item: Proptypes.object.isRequired,
}

const styles = StyleSheet.create({
  order_detail_item_view: {
    width: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  order_detail_item_name: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
  },
  order_detail_item_quantity: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
  },
  order_detail_item_subtotal: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#56bef4",
  },
})

export default connect()(OrderDetailItem)
