import { BrowserRouter } from "react-router-dom"
import "./styles/main.scss"
import Navbar from "./components/Navbar"
import Routing from "./components/Routing"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routing />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
