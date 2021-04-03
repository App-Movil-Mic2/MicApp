import React from "react"
import { StyleSheet, Text, View } from "react-native"

import LoginForm from "../components/LoginForm"
import MIC2ColorLogo from "../../assets/images/MIC2ColorLogo"

const LoginScreen = () => {
  return (
    <View style={styles.login_screen}>
      <View style={styles.login_image}>
        <MIC2ColorLogo />
      </View>
      <Text style={styles.login_description}>Inicio de sesión</Text>
      <LoginForm />
    </View>
  )
}

const styles = StyleSheet.create({
  login_screen: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 14,
    paddingVertical: 65,
    flexDirection: "column",
    alignItems: "stretch",
  },
  login_image: {
    alignSelf: "center",
  },
  login_description: {
    fontSize: 22,
    marginBottom: 20,
    fontFamily: "Poppins-Medium",
  },
})

export default LoginScreen
