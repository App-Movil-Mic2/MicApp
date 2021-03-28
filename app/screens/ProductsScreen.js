import { connect } from "react-redux"
import React from "react"
import { StyleSheet, TextInput, View } from "react-native"

import ProductModal from "../components/ProductModal"
import ProductsList from "../components/ProductsList"

const ProductsScreen = (props) => {
  const getModalBackground = () => {
    if (!props.showProductModal) {
      return
    }
    return <View style={styles.modal_backgroud} />
  }

  return (
    <View style={styles.products_screen}>
      {getModalBackground()}
      <TextInput placeholder="Buscar" style={styles.products_search_box} />
      <ProductsList />
      <ProductModal />
    </View>
  )
}

const styles = StyleSheet.create({
  products_screen: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 14,
    paddingVertical: 20,
    flexDirection: "column",
  },
  products_search_box: {
    backgroundColor: "#ffffff",
    fontSize: 15,
    marginBottom: 20,
    fontFamily: "Poppins-Medium",
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
  showProductModal: state.ui.showProductModal,
}))(ProductsScreen)
