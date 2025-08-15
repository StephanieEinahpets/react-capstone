import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import Modal from "react-modal"
import brandImage from "../assets/whimsywaresSq.png"
import "../styles/pages/home.scss"

Modal.setAppElement("#root")

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(true)

  const history = useHistory()

  const handleClick = () => {
    history.push("/products")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    // localStorage.setItem("hasVisited", "true")
    setModalIsOpen(false)
  }

  // useEffect(() => {
  // const visited = localStorage.getItem("hasVisited")
  // if (!visited) {
  //   setModalIsOpen(true)
  //   localStorage.setItem("hasVisited", "true")
  // }
  // }, [])

  return (
    <div className="home-container">
      <div className="welcome-container">
        <h1>Welcome.</h1>
        <p>Discover the need for stuff you never knew you didn’t need.</p>
        <button onClick={handleClick}>Explore</button>
      </div>
      <div className="hero-container">
        <img src={brandImage} alt="BrandImg" className="brandImage" />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        overlayClassName="home-modal__overlay"
        className="home-modal__content">
        <h2>Sign up to get updates and offers!</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Sign Up</button>
          <button
            type="button"
            onClick={() => setModalIsOpen(false)}
            className="close-modal">
            No Thank You
          </button>
        </form>
      </Modal>
    </div>
  )
}
