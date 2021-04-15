import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { blueGrey } from '@material-ui/core/colors'
import {useCart} from '../../context/CartContext'

const CartWidget = () => {
  const { totalItems } = useCart()

  return <>
    {totalItems ? (
      <>
        <ShoppingCartIcon fontSize="large" style={ { color: blueGrey[100] } } />

        <div className=' text-red-500 bg-gray-300 rounded-full ml-1 border-gray-300'>
          {totalItems}
        </div>
      </>
    ): null }
  </>
}

export default CartWidget
