import React from "react"
import { StyleSheet, View } from "react-native"

import ShippingAddressesList from "../components/ShippingAddressesList"

const ShippingAddressesScreen = () => {
  return (
    <View style={styles.shipping_addresses_screen}>
      <ShippingAddressesList />
    </View>
  )
}

const styles = StyleSheet.create({
  shipping_addresses_screen: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
})

export default ShippingAddressesScreen
