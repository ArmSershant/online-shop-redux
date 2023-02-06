export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: { ...product },
  }
}
export const quantityUp = (product) => {
  return {
    type: "QUANTITY_UP",
    payload: { ...product },
  }
}
export const quantityDown = (product) => {
  return {
    type: "QUANTITY_DOWN",
    payload: { ...product },
  }
}
export const deleteProduct = (product) => {
  return {
    type: "DELETE_PR",
    payload: { ...product },
  }
}
export const clearProducts = (product) => {
  return {
    type: "CLEAR_ALL",
    payload: { ...product },
  }
}
