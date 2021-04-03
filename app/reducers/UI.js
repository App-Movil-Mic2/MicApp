import ActionTypes from "../constants/ActionTypes"

const initialState = {
  loginErrorTitle: "",
  loginErrorMessage: "",
  showLoadingModal: false,
  showProductModal: false,
  showOrderDetailModal: false,
  showShippingCostModal: false,
  refreshOrderDetailItem: false,
  businessPartnerFilter: "",
  productFilter: "",
}

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.LOGIN_FAILED:
      return {
        ...state,
        loginErrorTitle: action.loginErrorTitle,
        loginErrorMessage: action.loginErrorMessage,
      }
    case ActionTypes.CLEAN_LOGIN_ERROR:
      return {
        ...state,
        loginErrorTitle: "",
        loginErrorMessage: "",
      }
    case ActionTypes.SHOW_LOADING_MODAL:
      return {
        ...state,
        showLoadingModal: true,
      }
    case ActionTypes.HIDE_LOADING_MODAL:
      return {
        ...state,
        showLoadingModal: false,
      }
    case ActionTypes.SHOW_ORDER_DETAIL_MODAL:
      return {
        ...state,
        showOrderDetailModal: true,
      }
    case ActionTypes.HIDE_ORDER_DETAIL_MODAL:
      return {
        ...state,
        showOrderDetailModal: false,
        refreshOrderDetailItem: !state.refreshOrderDetailItem,
      }
    case ActionTypes.SHOW_SHIPPING_COST_MODAL:
      return {
        ...state,
        showShippingCostModal: true,
      }
    case ActionTypes.HIDE_SHIPPING_COST_MODAL:
      return {
        ...state,
        showShippingCostModal: false,
      }
    case ActionTypes.SHOW_PRODUCT_MODAL:
      return {
        ...state,
        showProductModal: true,
      }
    case ActionTypes.HIDE_PRODUCT_MODAL:
      return {
        ...state,
        showProductModal: false,
        refreshOrderDetailItem: !state.refreshOrderDetailItem,
      }
    case ActionTypes.SET_BUSINESS_PARTNER_FILTER:
      return {
        ...state,
        businessPartnerFilter: action.businessPartnerFilter,
      }
    case ActionTypes.SET_PRODUCT_FILTER:
      return {
        ...state,
        productFilter: action.productFilter,
      }
    case ActionTypes.LOGOUT:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default reducer
