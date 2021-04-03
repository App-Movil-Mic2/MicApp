import ActionTypes from "../constants/ActionTypes"

const initialState = {
  productModalSelected: null,
  shoppingCart: [],
}

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.SHOW_PRODUCT_MODAL:
      return {
        ...state,
        productModalSelected: action.productModalSelected,
      }
    case ActionTypes.HIDE_PRODUCT_MODAL:
      return {
        ...state,
        productModalSelected: null,
      }
    case ActionTypes.SET_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: action.shoppingCart,
      }
    default:
      return state
  }
}

export default reducer
