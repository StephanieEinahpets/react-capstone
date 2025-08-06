import { useEffect, useState } from 'react'
import { fetchAllProducts, fetchCategories } from '../components/fetchData'

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
      <h1>Our Products</h1>

      <div className="filters">
        <h3>Filter by category:</h3>
        {categories.map((cat) => (
          <label key={cat}>
            <input type="checkbox" value={cat} />
            {cat}
          </label>
        ))}
      </div>

      <div className="product-grid">
        {products.map((prod) => (
          <div className="product-card" key={prod.id}>
            <img src={prod.image} alt={prod.title} />
            <h4>{prod.title}</h4>
            <p>${prod.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}