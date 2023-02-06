export const addProduct = (product) => {
  return {
    type: "ADD_TO_PRODUCTLIST",
    payload: { ...product },
  }
}
