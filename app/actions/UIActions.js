import ActionTypes from "../constants/ActionTypes"

export function showLoadingModal() {
  return {
    type: ActionTypes.SHOW_LOADING_MODAL,
  }
}

export function hideLoadingModal() {
  return {
    type: ActionTypes.HIDE_LOADING_MODAL,
  }
}

export function showProductModal(productModalSelected) {
  return {
    type: ActionTypes.SHOW_PRODUCT_MODAL,
    productModalSelected: productModalSelected,
  }
}

export function hideProductModal() {
  return {
    type: ActionTypes.HIDE_PRODUCT_MODAL,
  }
}
