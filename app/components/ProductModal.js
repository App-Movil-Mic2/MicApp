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
import { displayAlertModal } from "../utils/UI"
import { hideProductModal } from "../actions/UIActions"
import { saveProductInShoppingCart } from "../actions/ShoppingCartActions"

class ProductModal extends React.Component {
  static defaulProps = {
    productModalSelected: null,
  }

  state = {
    quantity: "",
    productModalSelected: null,
  }

  componentDidUpdate() {
    if (
      this.props.productModalSelected?.name !==
      this.state.productModalSelected?.name
    ) {
      const index = this.props.shoppingCart?.findIndex(
        (orderDetail) =>
          orderDetail.product?.name === this.props.productModalSelected?.name,
      )
      if (
        index >= 0 &&
        this.state.quantity !==
          this.props.shoppingCart[index]?.quantity?.toString()
      ) {
        this.setState({
          quantity: this.props.shoppingCart[index]?.quantity?.toString(),
          productModalSelected: this.props.shoppingCart[index]?.product,
        })
      }
    }
  }

  getSubtotal() {
    if (
      Number.parseFloat(this.state.quantity) <= 1 ||
      !Number.parseFloat(this.state.quantity)
    ) {
      return this.props.productModalSelected?.price
    } else {
      return (
        Number.parseFloat(this.props.productModalSelected?.price) *
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

  addProductToShoppingCart() {
    if (Number.parseFloat(this.state.quantity)) {
      if (
        Number.parseFloat(this.state.quantity) >
        Number.parseFloat(this.props.productModalSelected.quantity)
      ) {
        displayAlertModal(
          "Sin stock",
          "No es posible cotizar una mayor cantidad que el stock del producto",
          false,
          null,
          null,
        )
        return
      }
      this.props.dispatch(
        saveProductInShoppingCart(
          this.props.productModalSelected,
          Number.parseFloat(this.state.quantity),
          this.props.shoppingCart,
        ),
      )
    }
    this.closeProductModal()
  }

  async closeProductModal() {
    await this.props.dispatch(hideProductModal())
    this.setState({
      quantity: "",
      productModalSelected: null,
    })
  }

  render() {
    return (
      <Modal
        visible={this.props.showProductModal}
        transparent={true}
        animationType="fade">
        <View style={styles.center_view}>
          <View style={styles.modal_view}>
            <Text style={styles.product_item_name}>
              {this.props.productModalSelected?.name}
            </Text>
            <Text style={styles.product_item_detail_text}>
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
              <Text style={styles.product_item_detail_text}>
                {this.getQuantityText()}
              </Text>
            </View>
            <Button
              title="Agregar al carrito"
              onPress={() => this.addProductToShoppingCart()}
            />
            <TouchableWithoutFeedback onPress={() => this.closeProductModal()}>
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
  product_item_name: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
  },
  product_item_detail_text: {
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
  productModalSelected: state.shoppingCart.productModalSelected,
  showProductModal: state.ui.showProductModal,
  shoppingCart: state.shoppingCart.shoppingCart,
}))(ProductModal)
