import styles from "./style.module.css"
import { addToCart } from "../../redux/CartReducer/actions"
import { useDispatch } from "react-redux"
const ProductItem = ({ product }) => {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    if (product) {
      product.quantity++
    }
    dispatch(addToCart(product))
  }
  return (
    <div className={styles.products}>
      <div className={styles.product}>
        <p>{product.name}</p>
        <img className={styles.productImg} src={product.photo} alt="" />
        <p>{product.price} AMD</p>
        <button onClick={() => handleAddToCart()} className={styles.addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  )
}
export default ProductItem
