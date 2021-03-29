import ActionTypes from "../constants/ActionTypes"

const initialState = {
  selectedBusinessPartner: null,
  selectedOrderDetail: null,
  selectedShippingAddress: null,
  orderDetailSelected: null,
  shippingCost: 10,
}

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.SELECT_BUSINESS_PARTNER:
      return {
        ...state,
        selectedBusinessPartner: action.selectedBusinessPartner,
      }
    case ActionTypes.SELECT_BUSINESS_PARTNER:
      return {
        ...state,
        selectedBusinessPartner: action.selectedBusinessPartner,
      }
    case ActionTypes.SHOW_ORDER_DETAIL_MODAL:
      return {
        ...state,
        selectedOrderDetail: action.selectedOrderDetail,
      }
    case ActionTypes.SELECT_SHIPPING_ADDRESS:
      return {
        ...state,
        selectedShippingAddress: action.selectedShippingAddress,
      }
    case ActionTypes.SET_SHIPPING_COST:
      return {
        ...state,
        shippingCost: action.shippingCost,
      }
    default:
      return state
  }
}

export default reducer
