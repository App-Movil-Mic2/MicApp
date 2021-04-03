import ActionTypes from "../constants/ActionTypes"

export function saveProductInShoppingCart(product, quantity, shoppingCart) {
  return (dispatch) => {
    const index = shoppingCart?.findIndex(
      (orderDetail) => orderDetail.product.name === product.name,
    )
    if (index >= 0) {
      shoppingCart[index].quantity = quantity
    } else {
      shoppingCart.push({ product, quantity })
    }
    dispatch(setShoppingCart(shoppingCart))
  }
}

export function deleteProductInShoppingCart(product, shoppingCart) {
  return (dispatch) => {
    const index = shoppingCart?.findIndex(
      (orderDetail) => orderDetail.product.name === product.name,
    )
    if (index >= 0) {
      shoppingCart.splice(index, 1)
    }
    dispatch(setShoppingCart(shoppingCart))
  }
}

function setShoppingCart(shoppingCart) {
  return {
    type: ActionTypes.SET_SHOPPING_CART,
    shoppingCart: shoppingCart,
  }
}
