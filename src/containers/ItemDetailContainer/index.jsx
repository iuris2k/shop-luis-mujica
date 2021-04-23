import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LinearIndeterminate from '../../components/MaterialUI/LinearIndeterminate'
import ItemDetail from '../../components/ItemDetail'
import { getProduct } from '../../services/productsService'


export default function ItemDetailContainer () {
  const [isLoading, setIsLoading] = useState(false)
  const [item, setItem] = useState(null)
  const {itemId} = useParams()

  useEffect(() => {
    setIsLoading(true)
    getProduct(itemId).then((product) => {
      setItem(product)
      setIsLoading(false)
    })
  }, [itemId])

  // if (isLoading) {
  return (
    <>
      {isLoading && <LinearIndeterminate /> }
      {!isLoading && <ItemDetail item={item} />}
    </>
  )

}

// return <ItemDetail item={item} />
