import { connect } from "react-redux"
import React from "react"
import { StyleSheet, TextInput, View } from "react-native"

import Button from "./Button"
import { displayAlertModal } from "../utils/UI"
import { saveBaseConfiguration } from "../actions/SessionActions"

class BaseConfigurationForm extends React.Component {
  static defaultProps = {
    url: "",
    database: "",
  }

  state = {
    url: "",
    database: "",
  }

  componentDidMount() {
    if (this.props.url) {
      this.setState({ url: this.props.url })
    }
    if (this.props.database) {
      this.setState({ database: this.props.database })
    }
  }

  goLogin() {
    if (this.state.url === "" || this.state.database === "") {
      displayAlertModal(
        "Campos incompletos",
        "Debe completar la url y base de datos a conectar.",
        false,
        null,
        null,
      )
    } else {
      this.props.dispatch(
        saveBaseConfiguration(this.state.url, this.state.database),
      )
    }
  }

  render() {
    return (
      <View style={styles.base_configuration_form_view}>
        <TextInput
          placeholder="URL"
          value={this.state.url}
          onChangeText={(text) => this.setState({ url: text })}
          autoCapitalize="none"
          style={styles.base_configuration_form_form_text_input}
        />
        <TextInput
          placeholder="Base de datos"
          value={this.state.database}
          onChangeText={(text) => this.setState({ database: text })}
          autoCapitalize="none"
          style={styles.base_configuration_form_form_text_input}
        />
        <Button
          title="Ir a inicio de sesión"
          onPress={this.goLogin.bind(this)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  base_configuration_form_view: {
    height: 180,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  base_configuration_form_form_text_input: {
    fontFamily: "Poppins-Medium",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
  },
})

export default connect((state) => ({
  url: state.session.url,
  database: state.session.database,
}))(BaseConfigurationForm)
