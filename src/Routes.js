import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductList from "./pages/ProductList/ProductList"
import AddProduct from "./pages/AddProduct/AddProduct"
export const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  )
}