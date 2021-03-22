import React from "react"
import { View, StyleSheet, Text } from "react-native"

import DollarSymbol from "../../assets/images/DollarSymbol"
import Mobile from "../../assets/images/Mobile"
import User from "../../assets/images/User"

class BusinessPartnerItem extends React.Component {
  static defaultProps = {
    item: null,
  }

  render() {
    return (
      <View style={styles.business_partner_item_view}>
        <View style={styles.business_partner_item_row}>
          <User />
          <Text style={styles.business_partner_item_name}>
            {this.props.item.name}
          </Text>
        </View>
        <View style={styles.business_partner_item_row}>
          <View style={styles.business_partner_item_image_view}>
            <Mobile />
          </View>
          <View style={styles.business_partner_item_column}>
            <Text style={styles.business_partner_item_description}>
              {this.props.item.phone_number}
            </Text>
            <Text style={styles.business_partner_item_title}>Móvil</Text>
          </View>
        </View>
        <View style={styles.business_partner_item_row}>
          <View style={styles.business_partner_item_image_view}>
            <DollarSymbol />
          </View>
          <View style={styles.business_partner_item_column}>
            <Text style={styles.business_partner_item_description}>
              {this.props.item.cash}
            </Text>
            <Text style={styles.business_partner_item_title}>
              Saldo cliente
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  business_partner_item_view: {
    width: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "column",
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  business_partner_item_row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2.5,
  },
  business_partner_item_column: {
    flexDirection: "column",
    marginLeft: 12,
  },
  business_partner_item_name: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    marginLeft: 12,
  },
  business_partner_item_image_view: {
    width: 18,
    flexDirection: "column",
    alignItems: "center",
  },
  business_partner_item_description: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
  },
  business_partner_item_title: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: "gray",
  },
})

export default BusinessPartnerItem
