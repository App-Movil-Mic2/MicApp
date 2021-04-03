import { connect } from "react-redux"
import { PermissionsAndroid, Platform, StyleSheet } from "react-native"
import React from "react"
import RNHTMLtoPDF from "react-native-html-to-pdf"
import Share from "react-native-share"

import Button from "./Button"
import { displayAlertModal } from "../utils/UI"
import { hideLoadingModal, showLoadingModal } from "../actions/UIActions"

class GeneratePDFButton extends React.Component {
  async checkPermission() {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Permiso de Escritura de Almacenamiento Externo",
            message:
              "La aplicación necesita acceso a los datos de almacenamiento.",
          },
        )
        return granted === PermissionsAndroid.RESULTS.GRANTED
      } catch (error) {
        return false
      }
    } else {
      return true
    }
  }

  getProductsRow() {
    let productsRow = ""
    this.props.shoppingCart.map((orderDetail) => {
      productsRow += `<tr style="text-align: center;">
                                  <td style="text-align: center; border: 1px solid black;">${
                                    orderDetail.quantity
                                  }</td>
                                  <td style="text-align: left; border: 1px solid black;">${
                                    orderDetail.product.name
                                  }</td>
                                  <td style="text-align: center; border: 1px solid black;">${Number.parseFloat(
                                    orderDetail.product.price,
                                  )?.toFixed(2)}</td>
                                  <td style="text-align: center; border: 1px solid black;">${(
                                    Number.parseFloat(orderDetail.quantity) *
                                    Number.parseFloat(orderDetail.product.price)
                                  ).toFixed(2)}</td>
                                <tr>`
    })
    return productsRow
  }

  getTotal() {
    let total = 0
    this.props.shoppingCart.map((orderDetail) => {
      total +=
        Number.parseFloat(orderDetail?.quantity) *
        Number.parseFloat(orderDetail?.product.price)
    })
    return total
  }

  async generatePDF() {
    this.props.dispatch(showLoadingModal())
    if (await this.checkPermission()) {
      let options = {
        html: `<h1 style="text-align: center;">
                    <strong>Cotización MIC2</strong>
                   </h1>
                   <p style="text-align: left;">
                    <strong>Cliente:</strong>
                   </p>
                   <p style="text-align: left;">${
                     this.props.selectedBusinessPartner.name
                   }</p>
                   <p style="text-align: left;">
                    <strong>Dirección:</strong>
                   </p>
                   <p style="text-align: left;">${
                     this.props.selectedShippingAddress.name
                   }</p>
                   <p style="text-align: left;">${
                     this.props.selectedShippingAddress.address
                   }</p>
                   <table style="border: 1px solid black; width: 100%; border-collapse: collapse;">
                    <thead>
                      <tr>
                        <th style="width: 25%; border: 1px solid black;">Cantidad</th>
                        <th style="width: 25%; border: 1px solid black;">Producto</th>
                        <th style="width: 25%; border: 1px solid black;">Precio Unitario</th>
                        <th style="width: 25%; border: 1px solid black;">Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                    ${this.getProductsRow()}
                    <tbody>
                   </table>
                   <p style="text-align: right;"><strong>Total: </strong>$ ${this.getTotal().toFixed(
                     2,
                   )}</p>`,
        fileName: `Cotización ${new Date().toLocaleString()}`,
        directory: "Download",
      }
      let file = await RNHTMLtoPDF.convert(options)
      this.props.dispatch(hideLoadingModal())
      Share.open({
        title: "Cotización",
        url: `file://${file.filePath}`,
        subject: "PDF",
      })
    } else {
      this.props.dispatch(hideLoadingModal())
      displayAlertModal(
        "Sin permiso de escritura",
        "Debe otorgarle permiso de escritura a la aplicación.",
        false,
        null,
        null,
      )
    }
  }

  render() {
    return (
      <Button
        title="Obtener PDF"
        onPress={() => this.generatePDF()}
        style={styles.button_style}
      />
    )
  }
}

const styles = StyleSheet.create({
  button_style: {
    height: 60,
    marginTop: 20,
  },
})

export default connect((state) => ({
  selectedBusinessPartner: state.order.selectedBusinessPartner,
  selectedShippingAddress: state.order.selectedShippingAddress,
  shoppingCart: state.ui.shoppingCart,
}))(GeneratePDFButton)
