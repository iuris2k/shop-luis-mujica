import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LinearIndeterminate from '../../components/MaterialUI/LinearIndeterminate'
import ItemList from '../../components/ItemList'
import { getProducts } from '../../services/productsService'
import '../../App.css'
import './loading.css'

const ItemListContainer = () => {
  const { categoryId } = useParams()

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    getProducts(categoryId).then((productList) => {
      setProducts(productList)
      setIsLoading(false)
    })
  }, [categoryId])

  return <>
    {isLoading && <LinearIndeterminate /> }
    {!isLoading && <ItemList products={products} />}

  </>

}
export default ItemListContainer
