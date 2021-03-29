import React from "react"
import { StyleSheet, View } from "react-native"

import BusinessActions from "../components/BusinessActions"
import BusinessPartnerItem from "../components/BusinessPartnerItem"

const BusinessPartnerScreen = (props) => {
  return (
    <View style={styles.business_partner_screen_view}>
      <BusinessPartnerItem
        item={props.item}
        canGoBusinessPartnerScreen={false}
      />
      <BusinessActions />
    </View>
  )
}

const styles = StyleSheet.create({
  business_partner_screen_view: {
    height: "100%",
    backgroundColor: "#ffffff",
  },
})

export default BusinessPartnerScreen
