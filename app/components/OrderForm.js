import { connect } from "react-redux"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

import Button from "./Button"
import EditIcon from "../../assets/images/EditIcon"
import { showShippingCostModal } from "../actions/UIActions"

class OrderForm extends React.Component {
  getTotal() {
    return `$ ${(111.7 + this.props.shippingCost).toFixed(2)}`
  }

  render() {
    return (
      <View style={styles.order_form_view}>
        <View style={styles.order_form_row}>
          <Text style={styles.order_form_title}>Subtotal</Text>
          <Text style={styles.order_form_price}>$ 111.70</Text>
        </View>
        <View style={styles.order_form_row}>
          <Text style={styles.order_form_title}>Costo de Envío</Text>
          <View style={styles.order_form_shipping_tax_view}>
            <TouchableWithoutFeedback
              onPress={() => this.props.dispatch(showShippingCostModal())}>
              <EditIcon width={15} height={15} />
            </TouchableWithoutFeedback>
            <Text
              style={[
                styles.order_form_price,
                { marginLeft: 10 },
              ]}>{`$ ${this.props.shippingCost.toFixed(2)}`}</Text>
          </View>
        </View>
        <View style={styles.order_form_row}>
          <Text style={styles.order_form_title}>Total</Text>
          <Text style={styles.order_form_price}>{this.getTotal()}</Text>
        </View>
        <Button title="Confirmar" style={styles.order_form_confirm_button} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  order_form_view: {
    width: "100%",
    backgroundColor: "#ffffff",
  },
  order_form_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: "#a9a9a9",
    borderTopWidth: 1.6,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  order_form_title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  order_form_price: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    color: "#56bef4",
  },
  order_form_shipping_tax_view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  order_form_confirm_button: {
    width: "90%",
    marginTop: 10,
    alignSelf: "center",
  },
})

export default connect((state) => ({
  shippingCost: state.order.shippingCost,
}))(OrderForm)
