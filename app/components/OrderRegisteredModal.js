import { connect } from "react-redux"
import {
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import React from "react"

import GeneratePDFButton from "./GeneratePDFButton"
import { hideOrderRegisteredModal } from "../actions/UIActions"
import OrderRegisteredIcon from "../../assets/images/OrderRegisteredIcon"

class OrderRegisteredModal extends React.Component {
  static defaulProps = {
    showOrderRegisteredModal: false,
  }

  closeOrderRegisteredModal() {
    this.props.dispatch(hideOrderRegisteredModal())
  }

  render() {
    return (
      <Modal
        visible={this.props.showOrderRegisteredModal}
        transparent={true}
        animationType="fade">
        <View style={styles.center_view}>
          <View style={styles.modal_view}>
            <Text style={styles.order_registered_title}>Orden Registrada</Text>
            <OrderRegisteredIcon />
            <GeneratePDFButton />
            <TouchableWithoutFeedback
              onPress={() => this.closeOrderRegisteredModal()}>
              <Text style={styles.modal_close_text}>Cerrar</Text>
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
  order_registered_title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    paddingBottom: 20,
  },
  modal_close_text: {
    color: "#56bef4",
    fontFamily: "Poppins-SemiBold",
    marginTop: 15,
  },
})

export default connect((state) => ({
  showOrderRegisteredModal: state.ui.showOrderRegisteredModal,
}))(OrderRegisteredModal)
