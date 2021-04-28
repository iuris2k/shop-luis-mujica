/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import './cart.css'
import {useCart} from '../../context/CartContext'
import {createOrder} from '../../services/ordersService'

const Cart = () => {
  const [name, setName] = useState( '' )
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState( '' )
  const [email2, setEmail2] = useState( '' )
  const history = useHistory()

  const {cart, removeItem, totalItems, totalPrecio, clear} = useCart()

  const guardarOrden = (e) => {
    e.preventDefault()
    const buyer = {name, phone, email}

    const items = cart.map((cartItem) => ({
      id: cartItem.item.id,
      title: cartItem.item.name,
      price: cartItem.item.price,
      quantity: cartItem.quantity,
    }))

    const order = {buyers: buyer, items, total: totalPrecio}
    createOrder(order).then((orderCreated) => {
      clear()
      history.push(`/orders/${orderCreated.id}`)
    })
  }

  return (
    <div className='cartContainer'>
      {!cart.length ? (
        <h2 className='title'>
          No hay items en el carrito
          <Link to='/'>
            <Button variant='contained' color='primary'>
              Ir a Homepage
            </Button>
          </Link>
        </h2>
      ) : (
        <>
          {cart.map((cartItem) => (
            <div key={cartItem.item.id}>
              <h3 className='title'>Producto: {cartItem.item.name}</h3>
              <img
                alt=''
                src={cartItem.item.pictureUrl}
                style={{minHeight: '200px', maxHeight: '200px'}}
              />
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
              El total de productos es: {totalItems} y el precio total de tu
              compra es: ${totalPrecio}
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
          <form action='' onSubmit={guardarOrden}>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            <input
              type='number'
              placeholder='Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <input
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type='text'
              placeholder='Reitere su Email'
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
            />
            <br />
            <Button variant='contained' color='primary' type='submit' disabled={!!(!name || !lastName || !phone || !email || !email2 || !(email === email2))}>
              Generar orden
            </Button>
          </form>
        </>
      )}
    </div>
  )
}

export default Cart
