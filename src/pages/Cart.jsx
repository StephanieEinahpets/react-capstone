import React from "react"
import { useCart } from "../components/CartContext"
import { Link } from "react-router-dom"

export default function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart()

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (cart.length === 0) {
    return (
      <div>
        <h2>Your cart is empty</h2>
        <Link to="/products">Browse Products</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>Your Shopping Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            borderBottom: "1px solid #ccc",
            padding: "1rem 0",
          }}>
          <img src={item.image} alt={item.title} />
          <div>
            <h4>{item.title}</h4>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>

            <div>
              <button onClick={() => addToCart(item, 1)}>+</button>
              <button
                onClick={() =>
                  item.quantity > 1
                    ? addToCart(item, -1)
                    : removeFromCart(item.id)
                }>
                -
              </button>
            </div>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ${totalPrice.toFixed(2)}</h3>

      <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}
