import { NavLink } from "react-router-dom"
import "../styles/pages/footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>123 Main St, Some City, BFE 12345</p>
        <p>|</p>
        <p>(123) 456-7890</p>
        <p>|</p>
        <p>©2025 Whimsy Wares</p>
      </div>
      <div>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </div>
    </footer>
  )
}
