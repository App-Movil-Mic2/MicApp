import { CommonActions } from "@react-navigation/native"
import * as React from "react"

export const navigationRef = React.createRef()

export const resetNavigationTo = (routeName, index, key, navigation) => {
  const resetAction = CommonActions.reset({
    index: index,
    key: key,
    routes: [{ name: routeName }],
  })
  if (navigation) {
    navigation.dispatch(resetAction)
  } else {
    navigationRef.current?.dispatch(resetAction)
  }
}

export function navigateTo(routeName, params, navigation) {
  if (navigation) {
    navigation.dispatch(
      CommonActions.navigate({ name: routeName, params: params }),
    )
  } else {
    navigationRef.current?.dispatch(
      CommonActions.navigate({ name: routeName, params: params }),
    )
  }
}

export function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack())
}
