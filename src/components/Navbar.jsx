import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <NavLink className="nav-link" to="/home">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/products">
        Shop
      </NavLink>
      <NavLink className="nav-link" to="/cart">
        Cart
      </NavLink>
    </div>
  )
}