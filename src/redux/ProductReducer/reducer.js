import initialState from "./state"
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_PRODUCTLIST":
      return {
        products:[...state.products,action.payload]
      }
    default:
      return state
  }
}
export default reducer
