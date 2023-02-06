import styles from "./style.module.css"
import ProductItem from "../../components/ProductItem/ProductItem"
import Cart from "../../components/Cart/Cart"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
const ProductList = () => {
  const navigate = useNavigate()
  const products = useSelector((state) => state.productlist.products)
  const addProduct = () => {
    navigate("/add")
  }
  return (
    <div className={styles.mainDiv}>
      <h1>Choose what you want to buy 😊</h1>
      <button onClick={() => addProduct()} className={styles.addProduct}>
        Add Product
      </button>
      <Cart />
      <div className={styles.products}>
        {products.map((elm, i) => (
          <ProductItem key={i} product={elm} />
        ))}
      </div>
    </div>
  )
}
export default ProductList
