/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { LinearProgress } from '@material-ui/core'
// import LinearIndeterminate from '../../components/MaterialUI/LinearIndeterminate'
// import ItemList from '../../components/ItemList'
import {getFirestore} from '../../firebase'
// import { getProducts } from '../../mocks/productService'
import '../../App.css'
import './loading.css'

const ItemListContainer = () => {
  // const { categoryId } = useParams()

  const [items, seItems] = useState( [] )
  const [loading, setLoading] = useState( false )

  useEffect( () => {
    setLoading( true )

    const db = getFirestore()
    const itemCollection = db.collection( "Items" )
    itemCollection.get().then( ( querySnapshot ) => {
      if ( querySnapshot.size === 0 ) {
        console.log( "No results!" )
      }
      setItems( querySnapshot.docs.map( doc => doc.data() ) )
    } ).catch( ( error ) => {
      console.log( "Error searching items", error )
    } ).finally( () => {
      setLoading( false )
    })


    //   const myPromise = new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve(getProducts(categoryId))
    //     }, 2000)
    //   })

    //   myPromise.then((result) => {
    //     setProducts(result)
    //     setIsLoading(false)
    //   })
    // }, [categoryId])

    // if (loading) {
    //   return (
    //     <>
    //       <h2 className="loading">Cargando productos...</h2>
    //       <br/>
    //       <LinearIndeterminate />
    //     </>
    //   )
    // }

    // return <ItemList products={products} />
  }, [])
}
export default ItemListContainer
