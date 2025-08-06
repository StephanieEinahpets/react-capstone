export function fetchAllProducts() {
  return fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .catch(err => {
      console.error("Error fetching products:", err)
      return []
    })
}

export function fetchCategories() {
  return fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .catch(err => {
      console.error("Error fetching categories:", err)
      return []
    })
}

export function fetchProductById(id) {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .catch(err => {
      console.error(`Error fetching product with id ${id}:`, err)
      return null
    })
}