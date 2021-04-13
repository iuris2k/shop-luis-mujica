import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import {blueGrey} from '@material-ui/core/colors'

const CartWidget = () => (
  <ShoppingCartIcon fontSize="large" style={ { color:blueGrey[100] } }/>
)

export default CartWidget
