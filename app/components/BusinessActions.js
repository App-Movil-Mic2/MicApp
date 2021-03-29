import React from "react"
import { View, StyleSheet, Text } from "react-native"

import Button from "./Button"
import ChargeIcon from "../../assets/images/ChargeIcon"
import { navigateTo } from "../utils/navigation"
import OrderIcon from "../../assets/images/OrderIcon"
import { routes } from "../constants/RouteNames"

class BusinessActions extends React.Component {
  goOrderScreen() {
    navigateTo(routes.ORDER_SCREEN, null, null)
  }

  render() {
    return (
      <View style={styles.business_actions_view}>
        <View style={styles.business_actions_bar}>
          <Text style={styles.business_actions_bar_title}>
            Ingreso de gestiones
          </Text>
        </View>
        <View style={styles.business_actions_row}>
          <View style={styles.business_actions_column}>
            <OrderIcon />
            <Button
              title="Pedidos"
              onPress={() => this.goOrderScreen()}
              style={{ height: 35 }}
            />
          </View>
          <View style={styles.business_actions_column}>
            <ChargeIcon />
            <Button title="Cobranzas" style={{ height: 35 }} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  business_actions_view: {
    width: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "column",
  },
  business_actions_row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  business_actions_bar: {
    width: "100%",
    backgroundColor: "#58c3f8",
    height: 45,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  business_actions_bar_title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    marginLeft: 12,
    color: "#ffffff",
  },
  business_actions_column: {
    width: "30%",
    flexDirection: "column",
    alignItems: "center",
  },
})

export default BusinessActions
