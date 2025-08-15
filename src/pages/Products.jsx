import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchAllProducts, fetchCategories } from "../components/fetchData"
import { useCart } from "../components/CartContext"
import "../styles/pages/products.scss"

export default function Products() {
  const { addToCart } = useCart()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])

  useEffect(() => {
    setLoading(true)
    Promise.all([fetchAllProducts(), fetchCategories()])
      .then(([productsData, categoriesData]) => {
        setProducts(productsData)
        setCategories(categoriesData)
        setSelectedCategories(categoriesData)
      })
      .catch((err) => console.error("Error fetching data:", err))
      .finally(() => setLoading(false))
  }, [])

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const filteredProducts = products.filter((p) =>
    selectedCategories.includes(p.category)
  )

  if (loading) return <div>::::::::Loading products...</div>

  return (
    <div className="products-container">
      <div className="filters">
        <h4>Filter by category</h4>
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => toggleCategory(category)}
            />
            {category}
          </label>
        ))}
      </div>

      <div className="products-list">
        {filteredProducts.length === 0 ? (
          <p className="no-products">
            No products to display. Select a category above.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
              </Link>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
