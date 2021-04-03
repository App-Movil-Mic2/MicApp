import { connect } from "react-redux"
import React from "react"
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"

import EditIcon from "../../assets/images/EditIcon"
import { navigateTo } from "../utils/navigation"
import OrderDetailsList from "../components/OrderDetailsList"
import OrderDetailModal from "../components/OrderDetailModal"
import OrderForm from "../components/OrderForm"
import { routes } from "../constants/RouteNames"
import ShippingCostModal from "../components/ShippingCostModal"
import User from "../../assets/images/User"
import OrderRegisteredModal from "../components/OrderRegisteredModal"

const OrderScreen = (props) => {
  const getContactView = () => {
    return (
      <View style={styles.order_contact_view}>
        <User />
        <Text style={styles.order_contact_item_name}>
          {props.selectedBusinessPartner?.name}
        </Text>
      </View>
    )
  }

  const goShippingAddressesScreen = () => {
    navigateTo(routes.SHIPPING_ADDRESSES_SCREEN, null, null)
  }

  const getShippingAddressCard = () => {
    return (
      <View style={styles.shipping_address_view}>
        <View style={styles.shipping_address_detail_column}>
          <Text style={styles.shipping_address_title}>
            DIRECCIÓN DE ENTREGA
          </Text>
          <Text style={[styles.shipping_address_detail, { marginBottom: 10 }]}>
            {props.selectedShippingAddress?.name || "Sucursal"}
          </Text>
          <Text style={styles.shipping_address_detail}>
            {props.selectedShippingAddress?.address || "Dirección"}
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={() => goShippingAddressesScreen()}>
          <View style={styles.shipping_address_edit_column}>
            <EditIcon width={25} height={25} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  const getModalBackground = () => {
    if (
      !props.showShippingCostModal &&
      !props.showOrderDetailModal &&
      !props.showOrderRegisteredModal
    ) {
      return
    }
    return <View style={styles.modal_backgroud} />
  }

  return (
    <View style={styles.order_screen_view}>
      {getModalBackground()}
      {getContactView()}
      {getShippingAddressCard()}
      <ShippingCostModal />
      <OrderDetailsList />
      <OrderDetailModal />
      <OrderForm />
      <OrderRegisteredModal />
    </View>
  )
}

const styles = StyleSheet.create({
  order_screen_view: {
    height: "100%",
    backgroundColor: "#ffffff",
  },
  order_contact_view: {
    width: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingTop: 12,
    alignItems: "center",
  },
  order_contact_item_name: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    marginLeft: 12,
    includeFontPadding: false,
  },
  shipping_address_detail_column: {
    width: "80%",
  },
  shipping_address_edit_column: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  shipping_address_view: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTopColor: "#a9a9a9",
    borderTopWidth: 1.6,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  shipping_address_title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  shipping_address_detail: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#a9a9a9",
  },
  modal_backgroud: {
    width: "150%",
    height: "150%",
    position: "absolute",
    zIndex: 2,
    backgroundColor: "#000000",
    opacity: 0.71,
  },
})

export default connect((state) => ({
  selectedBusinessPartner: state.order.selectedBusinessPartner,
  selectedShippingAddress: state.order.selectedShippingAddress,
  showShippingCostModal: state.ui.showShippingCostModal,
  showOrderDetailModal: state.ui.showOrderDetailModal,
  showOrderRegisteredModal: state.ui.showOrderRegisteredModal,
}))(OrderScreen)
