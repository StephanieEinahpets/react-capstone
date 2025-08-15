import "./styles/main.scss"
import Navbar from "./components/Navbar"
import Routing from "./components/Routing"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content">
        <Routing />
      </main>
      <Footer />
    </div>
  )
}

export default App
