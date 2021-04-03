import React from "react"
import { StyleSheet, Text, View } from "react-native"

import BaseConfigurationForm from "../components/BaseConfigurationForm"
import MIC2ColorLogo from "../../assets/images/MIC2ColorLogo"

const BaseConfigurationScreen = () => {
  return (
    <View style={styles.base_configuration_screen}>
      <View style={styles.base_configuration_image}>
        <MIC2ColorLogo />
      </View>
      <Text style={styles.base_configuration_description}>
        Configuración Base
      </Text>
      <BaseConfigurationForm />
    </View>
  )
}

const styles = StyleSheet.create({
  base_configuration_screen: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 14,
    paddingVertical: 65,
    flexDirection: "column",
    alignItems: "stretch",
  },
  base_configuration_image: {
    alignSelf: "center",
  },
  base_configuration_description: {
    fontSize: 22,
    marginBottom: 20,
    fontFamily: "Poppins-Medium",
  },
})

export default BaseConfigurationScreen
