import React from "react"
import { StyleSheet, TextInput, View } from "react-native"
import BusinessPartnersList from "../components/BusinessPartnersList"

const BusinessPartnersScreen = () => {
  return (
    <View style={styles.business_partners_screen}>
      <TextInput
        placeholder="Buscar"
        style={styles.business_partners_search_box}
      />
      <BusinessPartnersList />
    </View>
  )
}

const styles = StyleSheet.create({
  business_partners_screen: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 14,
    paddingVertical: 20,
    flexDirection: "column",
    alignItems: "stretch",
  },
  login_image: {
    width: 300,
    height: 200,
    alignSelf: "center",
  },
  business_partners_search_box: {
    backgroundColor: "#ffffff",
    fontSize: 15,
    marginBottom: 20,
    fontFamily: "Poppins-Medium",
  },
})

export default BusinessPartnersScreen
