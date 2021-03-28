import { connect } from "react-redux"
import Proptypes from "prop-types"
import React from "react"
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"

import { showProductModal } from "../actions/UIActions"

class ProductItem extends React.Component {
  static defaultProps = {
    item: null,
  }

  getQuantityText() {
    if (Number.parseFloat(this.props.item.quantity) > 1) {
      return `${this.props.item.quantity} unidades`
    } else {
      return `${this.props.item.quantity} unidad`
    }
  }

  openProductModal() {
    this.props.dispatch(showProductModal(this.props.item))
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.openProductModal()}>
        <View style={styles.product_item_view}>
          <Text style={styles.product_item_name}>{this.props.item.name}</Text>
          <Text style={styles.product_item_price}>
            $ {Number.parseFloat(this.props.item.price).toFixed(2)}
          </Text>
          <Text style={styles.product_item_quantity}>
            {this.getQuantityText()}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

ProductItem.propTypes = {
  item: Proptypes.object,
}

const styles = StyleSheet.create({
  product_item_view: {
    width: "48%",
    backgroundColor: "#ffffff",
    flexDirection: "column",
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
  },
  product_item_name: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  product_item_price: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
  },
  product_item_quantity: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: "gray",
  },
})

export default connect()(ProductItem)
