import { useState, useEffect } from 'react'
import { getCategories } from '../mocks/productService'

export default function useCategories() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    setCategories(getCategories())
  }, [])
  return { categories }
}

// Test Git
// Test Git2
