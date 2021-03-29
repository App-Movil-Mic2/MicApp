import ActionTypes from "../constants/ActionTypes"

export function selectBusinessPartner(selectedBusinessPartner) {
  return {
    type: ActionTypes.SELECT_BUSINESS_PARTNER,
    selectedBusinessPartner: selectedBusinessPartner,
  }
}

export function selectShippingAddress(selectedShippingAddress) {
  return {
    type: ActionTypes.SELECT_SHIPPING_ADDRESS,
    selectedShippingAddress: selectedShippingAddress,
  }
}

export function setShippingCost(shippingCost) {
  return {
    type: ActionTypes.SET_SHIPPING_COST,
    shippingCost: shippingCost,
  }
}
