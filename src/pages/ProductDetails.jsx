import React, { useState, useEffect } from "react"
import { useParams, Redirect } from "react-router-dom"
import { fetchProductById } from "../components/fetchData"
import { useCart } from "../components/CartContext"

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [showFullDesc, setShowFullDesc] = useState(false)
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    setLoading(true)
    fetchProductById(id)
      .then((data) => {
        setProduct(data)
        setNotFound(false)
        setQuantity(0)
        setShowFullDesc(false)
      })
      .catch(() => {
        setNotFound(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) return <div>Loading product...</div>
  if (notFound) return <Redirect to="/not-found" />

  const description = product.description
  const truncatedDesc =
    description.length > 100 ? description.slice(0, 100) + "..." : description

  const increaseQuantity = () => setQuantity((q) => q + 1)
  const decreaseQuantity = () => setQuantity((q) => (q > 0 ? q - 1 : 0))

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity)
      setQuantity(0)
    }
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <p>
        <em>Category: {product.category}</em>
      </p>
      <img src={product.image} alt={product.title} />

      <p>
        {showFullDesc ? description : truncatedDesc}{" "}
        {description.length > 100 && (
          <button onClick={() => setShowFullDesc(!showFullDesc)}>
            {showFullDesc ? "show less" : "show more..."}
          </button>
        )}
      </p>

      <p>Price: ${product.price.toFixed(2)}</p>
      <p>
        Rating: {product.rating?.rate} ({product.rating?.count} reviews)
      </p>

      <div className="quantity-controls" style={{ margin: "1rem 0" }}>
        <button
          onClick={decreaseQuantity}
          disabled={quantity === 0}
          style={{ cursor: quantity === 0 ? "not-allowed" : "pointer" }}>
          -
        </button>
        <span style={{ margin: "0 1rem" }}>{quantity}</span>
        <button onClick={increaseQuantity} style={{ cursor: "pointer" }}>
          +
        </button>
      </div>

      <button onClick={handleAddToCart} disabled={quantity === 0}>
        Add to Cart
      </button>
    </div>
  )
}
