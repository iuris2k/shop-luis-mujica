import React, { useEffect, useState } from 'react'
import '../../App.css'
import { useParams } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import ItemList from '../../components/ItemList'
import { getProducts } from '../../mocks/productService'
import './loading.css'

const ItemListContainer = () => {
  const { categoryId } = useParams()

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(getProducts(categoryId))
      }, 2000)
    })

    myPromise.then((result) => {
      setProducts(result)
      setIsLoading(false)
    })
  }, [categoryId])

  if (isLoading) {
    return (
      <div>
        <h2 className="loading">Cargando productos...</h2>
        <br/>
        <LinearProgress />
        <br/>
        <LinearProgress color="secondary" />
      </div>
    )
  }

  return <ItemList products={products} />
}
export default ItemListContainer
