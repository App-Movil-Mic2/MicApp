import { connect } from "react-redux"
import React from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native"

import Button from "./Button"
import { cleanLoginError, login } from "../actions/SessionActions"
import { displayAlertModal } from "../utils/UI"
import { resetNavigationTo } from "../utils/navigation"
import { routes } from "../constants/RouteNames"

class LoginForm extends React.Component {
  static defaultProps = {
    username: "",
    url: "",
    database: "",
    loginErrorMessage: "",
    loginErrorTitle: "",
  }

  state = {
    username: "",
    password: "",
  }

  inputRef

  componentDidMount() {
    if (this.props.username) {
      this.setState({ username: this.props.username })
    }
    this.inputRef.setNativeProps({
      style: {
        fontFamily: "Poppins-Medium",
      },
    })
  }

  componentDidUpdate() {
    if (this.props.loginErrorMessage) {
      displayAlertModal(
        this.props.loginErrorTitle,
        this.props.loginErrorMessage,
        false,
        () => this.props.dispatch(cleanLoginError()),
        null,
      )
    }
  }

  login() {
    if (this.state.username === "" || this.state.password === "") {
      displayAlertModal(
        "Campos incompletos",
        "Debe completar el usuario y contraseña.",
        false,
        null,
        null,
      )
    } else {
      this.props.dispatch(
        login(
          this.props.url,
          this.props.database,
          this.state.username,
          this.state.password,
        ),
      )
    }
  }

  render() {
    return (
      <View style={styles.login_form_view}>
        <TextInput
          placeholder="Usuario"
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text })}
          autoCapitalize="none"
          style={styles.login_form_text_input}
        />
        <TextInput
          ref={(ref) => (this.inputRef = ref)}
          placeholder="Contraseña"
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
          autoCapitalize="none"
          secureTextEntry={true}
          style={styles.login_form_text_input}
        />
        <View style={styles.login_form_back_view}>
          <TouchableWithoutFeedback
            onPress={() => {
              resetNavigationTo(
                routes.BASE_CONFIGURATION_SCREEN,
                null,
                null,
                null,
              )
            }}>
            <Text style={styles.login_form_back_text}>
              Cambiar configuración base
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <Button title="Iniciar sesión" onPress={this.login.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  login_form_view: {
    height: 220,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  login_form_text_input: {
    fontFamily: "Poppins-Medium",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
  },
  login_form_back_view: {
    alignSelf: "flex-end",
  },
  login_form_back_text: {
    fontFamily: "Poppins-SemiBold",
    color: "#56bef4",
  },
})

export default connect((state) => ({
  username: state.session.username,
  url: state.session.url,
  database: state.session.database,
  loginErrorTitle: state.ui.loginErrorTitle,
  loginErrorMessage: state.ui.loginErrorMessage,
}))(LoginForm)
