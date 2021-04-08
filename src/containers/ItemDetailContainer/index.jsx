// simular el tomar un producto a través de una API

import React, { useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
// import { LinearProgress } from '@material-ui/core'
import LinearIndeterminate from '../../components/MaterialUI/LinearIndeterminate'
import ItemDetail from '../../components/ItemDetail'
import { getProduct } from '../../mocks/productService'

export default function ItemDetailContainer () {
  const [isLoading, setIsLoading] = useState(false)
  const [item, setItem] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    setIsLoading(true)

    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(getProduct(itemId))
      }, 2000)
    })

    myPromise.then((result) => {
      setItem(result)
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
