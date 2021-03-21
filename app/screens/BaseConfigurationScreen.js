import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import BaseConfigurationForm from "../components/BaseConfigurationForm"

const BaseConfigurationScreen = () => {
  return (
    <View style={styles.base_configuration_screen}>
      <Image
        source={require("../../assets/images/mic_logo.png")}
        style={styles.base_configuration_image}
      />
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
    width: 300,
    height: 200,
    alignSelf: "center",
  },
  base_configuration_description: {
    fontSize: 22,
    marginBottom: 20,
    fontFamily: "Poppins-Medium",
  },
})

export default BaseConfigurationScreen
