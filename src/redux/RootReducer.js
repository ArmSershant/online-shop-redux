import ProductReducer from "./ProductReducer/reducer"
import CartReducer from "./CartReducer/reducer"
import { combineReducers } from "redux"
export const RootReducer = combineReducers({
  productlist: ProductReducer,
  cart: CartReducer,
})