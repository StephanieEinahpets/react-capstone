import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchAllProducts } from "../components/fetchData"
import { useCart } from "../components/CartContext"

export default function Products() {
  const { addToCart } = useCart()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading products...</div>

  return (
    <div className="products-list" style={{ display: "grid", gap: "1rem" }}>
      {products.map((product) => (
        <div key={product.id}>
          <Link
            to={`/product/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ height: "150px", objectFit: "contain" }}
            />
            <h3>{product.title}</h3>
          </Link>
          <p>Price: ${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}
