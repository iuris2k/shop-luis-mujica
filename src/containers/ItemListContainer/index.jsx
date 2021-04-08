import React, { useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
// import { LinearProgress } from '@material-ui/core'
import LinearIndeterminate from '../../components/MaterialUI/LinearIndeterminate'
import ItemList from '../../components/ItemList'
import { getProducts } from '../../mocks/productService'
import '../../App.css'
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
      <>
        <h2 className="loading">Cargando productos...</h2>
        <br/>
        <LinearIndeterminate />
      </>
    )
  }

  return <ItemList products={products} />
}
export default ItemListContainer
