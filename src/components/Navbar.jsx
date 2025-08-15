import { NavLink } from "react-router-dom"
import logo from "../assets/ww.png"
import "../styles/pages/navbar.scss"

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="logo-wrapper">
        <NavLink className="nav-link" to="/home">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
      </div>

      <NavLink className="nav-link" to="/products">
        Shop
      </NavLink>

      <NavLink className="nav-link" to="/cart">
        <i className="fa-solid fa-cart-shopping"></i>
      </NavLink>
    </div>
  )
}
