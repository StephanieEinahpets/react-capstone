import React, { useState, useEffect } from "react"
import { useParams, Redirect } from "react-router-dom"
import { fetchProductById } from "../components/fetchData"
import { useCart } from "../components/CartContext"
import "../styles/pages/productDetails.scss"

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
        setQuantity(1)
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
        {product.rating?.rate}★ ({product.rating?.count} reviews)
      </p>
      <br></br>
      <p>
        {showFullDesc ? description : truncatedDesc}{" "}
        {description.length > 100 && (
          <button onClick={() => setShowFullDesc(!showFullDesc)}>
            {showFullDesc ? "...show less" : "show more..."}
          </button>
        )}
      </p>

      <br></br>
      <p className="price">${product.price.toFixed(2)}</p>

      <div className="quantity-controls">
        <button onClick={decreaseQuantity} disabled={quantity === 0}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={quantity === 0}
        className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  )
}
