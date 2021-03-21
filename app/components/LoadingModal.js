import { ActivityIndicator, Modal, StyleSheet, View } from "react-native"
import { connect } from "react-redux"
import React from "react"

class LoadingModal extends React.Component {
  static defaultProps = {
    showLoadingModal: false,
  }

  state = {
    modalVisible: false,
  }

  componentDidMount() {
    this.setState({
      modalVisible: this.props.showLoadingModal,
    })
  }

  componentDidUpdate() {
    if (this.state.modalVisible !== this.props.showLoadingModal) {
      this.setState({
        modalVisible: this.props.showLoadingModal,
      })
    }
  }

  render() {
    return (
      <Modal
        animationType="fade"
        visible={this.state.modalVisible}
        transparent={true}>
        <View style={styles.loading_modal_view}>
          <ActivityIndicator size="large" color="#56bef4" />
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  loading_modal_view: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.4)",
  },
})

export default connect((state) => ({
  showLoadingModal: state.ui.showLoadingModal,
}))(LoadingModal)
