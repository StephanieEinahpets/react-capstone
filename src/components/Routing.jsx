import { Switch, Redirect, Route } from "react-router-dom"

import Home from "../pages/Home"
import Products from "../pages/Products"
import ProductDetails from "../pages/ProductDetails"
import Contact from "../pages/Contact"
import About from "../pages/About"
import Cart from "../pages/Cart"
import NotFound from "../pages/NotFound"

export default function Routing() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/product" component={Products} />
      <Route path="/product-details" component={ProductDetails} />
      <Route path="/cart" component={Cart} />
      <Route path="/*" component={NotFound} />
      <Redirect exact from="/" to="/home" />
    </Switch>
  )
}
