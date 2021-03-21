import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import LoginForm from "../components/LoginForm"

const LoginScreen = () => {
  return (
    <View style={styles.login_screen}>
      <Image
        source={require("../../assets/images/mic_logo.png")}
        style={styles.login_image}
      />
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
    width: 300,
    height: 200,
    alignSelf: "center",
  },
  login_description: {
    fontSize: 22,
    marginBottom: 20,
    fontFamily: "Poppins-Medium",
  },
})

export default LoginScreen
