import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addProduct } from "../../redux/ProductReducer/actions"
import styles from "./style.module.css"
const AddProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [product, setProduct] = useState({
    id: Date.now(),
    name: "",
    price: "",
    photo: "",
    quantity: "1",
  })
  //https://img.freepik.com/premium-vector/modern-thin-frame-realistic-laptop_213110-114.jpg?w=2000
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!product.name.trim()) {
      setError("Please write the product name")
    } else if (!product.price.trim()) {
      setError("Please write the product price")
    } else if (!product.photo.trim()) {
      setError("Please place the photo URL")
    } else if (!Number(product.price)) {
      setError("Please write number for the price")
    } else {
      dispatch(addProduct(product))
      navigate("/")
    }
  }
  const goBack = (e) => {
    e.preventDefault()
    navigate("/")
  }
  return (
    <div>
      <button className={styles.goBack} onClick={(e) => goBack(e)}>
        Go Back
      </button>
      <form className={styles.inputForm} onSubmit={handleSubmit}>
        <p style={{ color: "red" }}>{error}</p>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Price ֏"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Image URL"
          onChange={(e) => setProduct({ ...product, photo: e.target.value })}
        />
        <button className={styles.addProduct} type="submit">
          Add
        </button>
      </form>
    </div>
  )
}
export default AddProduct
