import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { blueGrey } from '@material-ui/core/colors'
import {useCart} from '../../context/CartContext'

const CartWidget = () => {
  const { totalItems } = useCart()

  return <>
    {totalItems ?

      <ShoppingCartIcon fontSize="large" style={ { color: blueGrey[100] } } />

      : null }
  </>
}

export default CartWidget
