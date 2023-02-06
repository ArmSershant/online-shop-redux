import initialState from "./state"
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.addedProducts.some((elm) => elm.id === action.payload.id)) {
        return {
          addedProducts: [
            ...state.addedProducts.map((elm) =>
              elm.id === action.payload.id
                ? { ...elm, quantity: ++elm.quantity }
                : elm
            ),
          ],
        }
      } else {
        return {
          addedProducts: [
            ...state.addedProducts,
            { ...action.payload, quantity: 1 },
          ],
        }
      }
    case "QUANTITY_UP":
      return {
        ...state,
        addedProducts: [
          ...state.addedProducts.map((elm) =>
            elm.id === action.payload.id
              ? { ...elm, quantity: ++action.payload.quantity }
              : elm
          ),
        ],
      }
    case "QUANTITY_DOWN":
      return {
        ...state,
        addedProducts: [
          ...state.addedProducts.map((elm) =>
            elm.id === action.payload.id
              ? { ...elm, quantity: --action.payload.quantity }
              : elm
          ),
        ],
      }
    case "DELETE_PR":
      return {
        addedProducts: [
          ...state.addedProducts.filter((elm) => elm.id !== action.payload.id),
        ],
      }
    case "CLEAR_ALL":
      return {
        addedProducts: [],
      }
    default:
      return state
  }
}
export default reducer
