import styles from "./style.module.css"
import { useSelector, useDispatch } from "react-redux"
import {
  quantityUp,
  quantityDown,
  deleteProduct,
  clearProducts,
} from "../../redux/CartReducer/actions"
const Cart = () => {
  const dispatch = useDispatch()
  const addedProducts = useSelector((state) => state.cart.addedProducts)
  const onQuantityUp = (product) => {
    dispatch(quantityUp(product))
  }
  const onQuantityDown = (product) => {
    if (product.quantity <= 2) {
      product.quantity = 2
    }
    dispatch(quantityDown(product))
  }
  const onDelete = (product) => {
    dispatch(deleteProduct(product))
  }
  const onClear = () => {
    dispatch(clearProducts())
  }
  return (
    <div className={styles.cart}>
      <p>Cart</p>
      <button className={styles.clear} onClick={() => onClear()}>
        Clear
      </button>
      <table>
        <thead className={styles.thead}>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {addedProducts.map((elm, i) => {
            return (
              <tr key={i}>
                <td>{elm.name}</td>
                <td>{elm.price} ֏</td>
                <td>{elm.quantity}</td>
                <td>{elm.quantity * elm.price} ֏</td>
                <td>
                  <button
                    onClick={() => {
                      onQuantityUp(elm)
                    }}
                    className={styles.quantity}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      onQuantityDown(elm)
                    }}
                    className={styles.quantity}
                  >
                    -
                  </button>
                  <button
                    onClick={() => onDelete(elm)}
                    className={styles.delete}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default Cart
