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

export function showOrderDetailModal(selectedOrderDetail) {
  return {
    type: ActionTypes.SHOW_ORDER_DETAIL_MODAL,
    selectedOrderDetail: selectedOrderDetail,
  }
}

export function hideOrderDetailModal() {
  return {
    type: ActionTypes.HIDE_ORDER_DETAIL_MODAL,
  }
}

export function showShippingCostModal() {
  return {
    type: ActionTypes.SHOW_SHIPPING_COST_MODAL,
  }
}

export function hideShippingCostModal() {
  return {
    type: ActionTypes.HIDE_SHIPPING_COST_MODAL,
  }
}

export function showOrderRegisteredModal(shoppingCart) {
  return {
    type: ActionTypes.SHOW_ORDER_REGISTERED_MODAL,
    shoppingCart: shoppingCart,
  }
}

export function hideOrderRegisteredModal() {
  return {
    type: ActionTypes.HIDE_ORDER_REGISTERED_MODAL,
  }
}

export function setBusinessPartnerFilter(businessPartnerFilter) {
  return {
    type: ActionTypes.SET_BUSINESS_PARTNER_FILTER,
    businessPartnerFilter: businessPartnerFilter,
  }
}

export function setProductFilter(productFilter) {
  return {
    type: ActionTypes.SET_PRODUCT_FILTER,
    productFilter: productFilter,
  }
}
