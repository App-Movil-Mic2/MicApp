import ActionTypes from "../constants/ActionTypes"

const initialState = {
  productModalSelected: null,
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
    default:
      return state
  }
}

export default reducer
