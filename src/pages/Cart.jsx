import React from "react"
import { useState } from "react"
import { useCart } from "../components/CartContext"
import { Link } from "react-router-dom"
import Modal from "react-modal"
import "../styles/pages/cart.scss"

Modal.setAppElement("#root")

export default function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalAction, setModalAction] = useState("")
  const [selectedItem, setSelectedItem] = useState(null)

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleRemove = (item) => {
    setSelectedItem(item)
    setModalAction("remove")
    setModalIsOpen(true)
  }

  const handleCheckout = () => {
    setModalAction("checkout")
    setModalIsOpen(true)
  }

  const confirmAction = () => {
    if (modalAction === "remove" && selectedItem) {
      removeFromCart(selectedItem.id)
    } else if (modalAction === "checkout") {
      clearCart()
    }
    setModalIsOpen(false)
  }

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <Link to="/products">
          <button>Explore Products</button>
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="item-info">
            <h4>{item.title}</h4>
            <p>Price: ${item.price.toFixed(2)}</p>
            <div className="quantity-controls">
              <button
                onClick={() => addToCart(item, -1)}
                disabled={item.quantity <= 1}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item, 1)}>+</button>
            </div>
          </div>
          <button className="remove-btn" onClick={() => handleRemove(item)}>
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <p>Subtotal: ${totalPrice.toFixed(2)}</p>
        <p>Shipping: $5.00</p>
        <h3>Total: ${(totalPrice + 5).toFixed(2)}</h3>
      </div>

      <button className="checkout-btn" onClick={handleCheckout}>
        Checkout
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        overlayClassName="cart-modal-overlay"
        className="cart-modal-content">
        <h3>
          {modalAction === "checkout"
            ? "Confirm Checkout?"
            : "Remove this item?"}
        </h3>
        <div className="modal-buttons">
          <button onClick={confirmAction}>
            {modalAction === "checkout" ? "Confirm" : "Remove"}
          </button>
          <button onClick={() => setModalIsOpen(false)}>Cancel</button>
        </div>
      </Modal>
    </div>
  )
}
