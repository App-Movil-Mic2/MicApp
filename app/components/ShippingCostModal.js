import { connect } from "react-redux"
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import React from "react"

import Button from "./Button"
import { hideShippingCostModal } from "../actions/UIActions"
import { setShippingCost } from "../actions/OrderActions"

class ShippingCostModal extends React.Component {
  static defaultProps = {
    shippingCost: 10,
  }

  state = {
    shippingCost: "10",
  }

  componentDidMount() {
    if (this.props.shippingCost) {
      this.setState({
        shippingCost: this.props.shippingCost.toString(),
      })
    }
  }

  changeShippingCostModal() {
    this.props.dispatch(
      setShippingCost(Number.parseFloat(this.state.shippingCost)),
    )
    this.closeShippingCostModal()
  }

  closeShippingCostModal() {
    this.props.dispatch(hideShippingCostModal())
  }

  render() {
    return (
      <Modal
        visible={this.props.showShippingCostModal}
        transparent={true}
        animationType="fade">
        <View style={styles.center_view}>
          <View style={styles.modal_view}>
            <Text style={styles.shipping_cost_modal_title}>Costo de Envío</Text>
            <View style={styles.modal_row}>
              <Text style={styles.shipping_cost_modal_text}>$</Text>
              <TextInput
                keyboardType="numeric"
                placeholder="0"
                value={this.state.shippingCost}
                onChangeText={(shippingCost) =>
                  this.setState({
                    shippingCost: shippingCost
                      .replace("-", "")
                      .replace(" ", ""),
                  })
                }
                style={styles.modal_text_input}
              />
            </View>
            <Button
              title="Aceptar"
              onPress={() => this.changeShippingCostModal()}
            />
            <TouchableWithoutFeedback
              onPress={() => this.closeShippingCostModal()}>
              <Text style={styles.modal_cancel_text}>Cancelar</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
    )
  }
}
const styles = StyleSheet.create({
  center_view: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modal_view: {
    width: "80%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  shipping_cost_modal_title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
  },
  shipping_cost_modal_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    marginRight: 5,
  },
  modal_row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    marginBottom: 10,
  },
  modal_text_input: {
    borderColor: "#000000",
    borderWidth: 1,
    height: "80%",
  },
  modal_cancel_text: {
    color: "#56bef4",
    fontFamily: "Poppins-SemiBold",
    marginTop: 15,
  },
})

export default connect((state) => ({
  shippingCost: state.order.shippingCost,
  showShippingCostModal: state.ui.showShippingCostModal,
}))(ShippingCostModal)
