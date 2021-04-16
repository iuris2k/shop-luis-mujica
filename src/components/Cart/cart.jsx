/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import './cart.css'
import {useCart} from '../../context/CartContext'

export const Cart = () => {
  const { cart, removeItem, totalItems, totalPrecio, clear } = useCart()

  const generarOrden = () => {
    const order = {}

    order.buyer = { name: "Juan", phone: "tel", email: "tel@gmail.com" }
    order.total = totalPrecio
    order.items = cart.map( cartItem => {
      const {id} = cartItem.item
      const title = cartItem.item.name
      const price = cartItem.item.price * cartItem.quantity

      return { id, title, price }
    } )
    console.log(order)
  }


  return (
    <div className='cartContainer'>
      {!cart.length ? (
        <h2 className='title'>
          No hay items en el carrito <Link to='/'>Ir al home</Link>
        </h2>
      ) : (
        <>
          {cart.map((cartItem) => (
            <div key={cartItem.item.id}>
              <h3 className='title'>Producto: {cartItem.item.name}</h3>
              <p className='quantity'>Cantidad: {cartItem.quantity}</p>
              <p className='quantity'>Precio: ${cartItem.item.price}</p>

              <Button
                onClick={() => removeItem(cartItem.item.id)}
                variant='contained'
                color='secondary'
              >
                Borrar
              </Button>
            </div>
          ))}
          <div className='total'>
            <p>
              Total: {totalItems} y ${totalPrecio}
            </p>
            <Button onClick={clear} variant='contained' color='secondary'>
              Eliminar todos los items
            </Button>
          </div>
          <div>
            <Button onClick={clear} variant='contained' color='primary'>
              Confirmar compra
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
