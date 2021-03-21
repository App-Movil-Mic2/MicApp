import { Alert } from "react-native"

export function displayAlertModal(
  title,
  message,
  showCancel = false,
  acceptAction,
  cancelAction = null,
) {
  const buttons = [{ text: "Aceptar", onPress: acceptAction }]
  if (showCancel) {
    buttons.push({ text: "Cancelar", onPress: cancelAction })
  }
  Alert.alert(title, message, buttons)
}
