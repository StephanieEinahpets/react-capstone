import { NavLink } from "react-router-dom"


export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>©2025 Whimsy Wares</p>
        <p>123 Main St, Some City, BFE 12345</p>
        <p>(123) 456-7890</p>
      </div>
      <div>
        <NavLink className="nav-link" to="/about">
          About Us
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact Us
        </NavLink>
      </div>
    </footer>
  )
}