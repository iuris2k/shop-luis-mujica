/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/*
 * Copyright (c) 2021.  By LM - All rights reserved.
 */

import React, {useState, useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {Button} from '@material-ui/core'
// import Icon from '@material-ui/core/Icon'
import SaveIcon from '@material-ui/icons/Save'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

import {ItemCount} from '../ItemCount'
import { CartProvider, useCart } from '../../context/CartContext'
import '../Item/card.css'
// import { useCart } from '../../context/CartContext'

export function AddToCart({product}) {
  const [counter, setCounter] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  const {addItem, cart} = useCart()

  function addToCart () {
    console.log('se agrega un item', counter)
    addItem(product, counter)
    setIsAdded(true)
    // alert("Agregamos " + contador + " " + product.name + " al carrito");
  }

  function counterChangeHandler(val) {
    setCounter(val)
  }

  return (
    <div>
      <ItemCount
        stock={product?.stock || 0}
        value={counter}
        onChange={counterChangeHandler}
      />
      {!isAdded && (
        <div className='card text-center bg-dark animate__animated animate__fadeInUp mt-2 p-2'>
          <div className='overflow'>
            <Button
              variant='contained'
              color='primary'
              endIcon={<AddShoppingCartIcon />}
              onClick={addToCart}
            >
              Agregar al carrito
            </Button>
          </div>
        </div>
      )}
      {isAdded && (
        <div className='card text-center bg-dark animate__animated animate__fadeInUp mt-2 p-2'>
          <div className='overflow'>
            <NavLink to='/cart' className='navbar-brand'>
              <Button
                variant='contained'
                color='primary'
                endIcon={<SaveIcon />}
              >
                Terminar mi compra
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  )
}
