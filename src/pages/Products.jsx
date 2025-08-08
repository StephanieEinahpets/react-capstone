import { useEffect, useState } from "react"
import { fetchAllProducts, fetchCategories } from "../components/fetchData"

export default function Products() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Promise.all([fetchAllProducts(), fetchCategories()])
      .then(([productsData, categoryData]) => {
        setProducts(productsData)
        setCategories(categoryData)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="loading">
        <i className="fas fa-spinner fa-spin"></i> Loading...
      </div>
    )
  }

  return (
    <div className="products">
      <h1>Our Wares</h1>

      <div className="filters">
        <h3>Filter by category:</h3>
        {categories.map((category) => (
          <label key={category}>
            <input type="checkbox" value={category} />
            {category}
          </label>
        ))}
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}
