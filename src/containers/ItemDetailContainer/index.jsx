import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { LinearProgress } from '@material-ui/core'
import LinearIndeterminate from '../../components/MaterialUI/LinearIndeterminate'
import ItemDetail from '../../components/ItemDetail'
// import { getProduct } from '../../mocks/productService'
import { getFirestore } from '../../firebase'

const getItems = (id) => {
  const db = getFirestore()
  const itemCollection = db.collection('Items')

  const item = itemCollection.doc(id)
  return item.get()
}


export default function ItemDetailContainer () {
  const [isLoading, setIsLoading] = useState(false)
  const [item, setItem] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    setIsLoading(true)

    getItems(itemId).then((result) => {
      console.log('existe?', result.exists)
      if (result.exists) {
        setItem(result.data())
      }
      setIsLoading(false)
    })
  }, [itemId])

  if (isLoading) {
    return (
      <>
        <h2 className="loading">Cargando producto...</h2>
        <br />
        <LinearIndeterminate />
      </>
    )
  }

  return <ItemDetail item={item} />
}
