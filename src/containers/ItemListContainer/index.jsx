import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { LinearProgress } from '@material-ui/core'
import LinearIndeterminate from '../../components/MaterialUI/LinearIndeterminate'
import ItemList from '../../components/ItemList'
// import { getProducts } from '../../mocks/productService'
import {getFirestore} from '../../firebase'
import '../../App.css'
import './loading.css'

const ItemListContainer = () => {
  const { categoryId } = useParams()

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    const db = getFirestore()
    const itemCollection = db.collection( 'Items' )

    let filter
    if (categoryId) {
      filter = itemCollection.where('category', '==', categoryId)
    } else {
      filter = itemCollection
    }


    const myPromise = filter.get()
    myPromise.then((snapshot) => {
      console.log('se consultaron los datos')
      console.log(snapshot)

      if (snapshot.size > 0) {
        console.log(snapshot.docs.map((doc) => doc.data()))
        console.log(snapshot.docs.map((doc) => doc.id))
        setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
      }
      setIsLoading(false)
    } )
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
