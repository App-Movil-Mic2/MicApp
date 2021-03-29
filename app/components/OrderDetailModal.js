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
import { hideOrderDetailModal } from "../actions/UIActions"

class OrderDetailModal extends React.Component {
  static defaultProps = {
    selectedOrderDetail: null,
  }

  state = {
    quantity: "",
    selectedOrderDetail: null,
  }

  componentDidMount() {
    if (this.props.selectedOrderDetail) {
      this.setState({
        quantity: this.props.selectedOrderDetail?.quantity.toString(),
        selectedOrderDetail: this.props.selectedOrderDetail,
      })
    }
  }

  areOrderDetailEqual(selectedOrderDetailProp, selectedOrderDetailState) {
    return (
      selectedOrderDetailProp.product?.name ===
        selectedOrderDetailState.product?.name &&
      selectedOrderDetailProp.quantity === selectedOrderDetailState.quantity
    )
  }

  componentDidUpdate() {
    if (
      this.props.selectedOrderDetail?.quantity.toString() !==
        this.state.quantity &&
      !this.areOrderDetailEqual(
        this.props.selectedOrderDetail,
        this.state.selectedOrderDetail,
      )
    ) {
      {
        this.setState({
          quantity: this.props.selectedOrderDetail?.quantity.toString(),
          selectedOrderDetail: this.props.selectedOrderDetail,
        })
      }
    }
  }

  getSubtotal() {
    if (
      Number.parseFloat(this.state.quantity) <= 1 ||
      !Number.parseFloat(this.state.quantity)
    ) {
      return this.props.selectedOrderDetail?.product?.price
    } else {
      return (
        Number.parseFloat(this.props.selectedOrderDetail?.product?.price) *
        Number.parseFloat(this.state.quantity)
      )
    }
  }

  getQuantityText() {
    if (Number.parseFloat(this.state.quantity) <= 1) {
      return "Unidad"
    } else {
      return "Unidades"
    }
  }

  closeOrderDetailModal() {
    this.setState({
      quantity: this.props.selectedOrderDetail?.quantity.toString(),
    })
    this.props.dispatch(hideOrderDetailModal())
  }

  render() {
    return (
      <Modal
        visible={this.props.showOrderDetailModal}
        transparent={true}
        animationType="fade">
        <View style={styles.center_view}>
          <View style={styles.modal_view}>
            <Text style={styles.order_detail_name}>
              {this.props.selectedOrderDetail?.product?.name}
            </Text>
            <Text style={styles.order_detail_detail_text}>
              $ {Number.parseFloat(this.getSubtotal()).toFixed(2)}
            </Text>
            <View style={styles.modal_row}>
              <TextInput
                keyboardType="numeric"
                placeholder="0"
                value={this.state.quantity}
                onChangeText={(quantity) =>
                  this.setState({ quantity: quantity.replace(/[^\d]/, "") })
                }
                style={styles.modal_text_input}
              />
              <Text style={styles.order_detail_detail_text}>
                {this.getQuantityText()}
              </Text>
            </View>
            <Button
              title="Actualizar"
              onPress={() => this.closeOrderDetailModal()}
            />
            <TouchableWithoutFeedback
              onPress={() => this.closeOrderDetailModal()}>
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
  order_detail_name: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
  },
  order_detail_detail_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
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
    marginRight: 5,
  },
  modal_cancel_text: {
    color: "#56bef4",
    fontFamily: "Poppins-SemiBold",
    marginTop: 15,
  },
})

export default connect((state) => ({
  selectedOrderDetail: state.order.selectedOrderDetail,
  showOrderDetailModal: state.ui.showOrderDetailModal,
}))(OrderDetailModal)
