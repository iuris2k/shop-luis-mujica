/* eslint-disable no-unused-vars */
import React, {useState, useContext, useEffect} from 'react'
import PropTypes from 'prop-types'

const CartContext = React.createContext([])

export const CartProvider = ({children}) => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
  const [cart, setCart] = useState(cartFromLocalStorage)
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const price = cart.reduce((beforePrice, actualItem) => {
      const p = actualItem.quantity * actualItem.item.price
      return beforePrice + p
    }, 0)
    const totItems = cart.reduce((beforeItems, ActualItem) => beforeItems + ActualItem.quantity, 0)
    // for (const cartItem of cart) {
    //   totItems += cartItem.quantity
    //   precio += cartItem.quantity * cartItem.item.price
    // }
    localStorage.setItem('cart', JSON.stringify(cart))

    setTotalItems(totItems)
    setTotalPrice(price)
  }, [cart])

  const addItem = (newItem, newQuantity) => {
    const {item = null, quantity = 0} =
      cart.find((e) => e.item.id === newItem.id) || {}

    const newCart = cart.filter((e) => e.item.id !== newItem.id)

    setCart([...newCart, {item: newItem, quantity: quantity + newQuantity}])
  } // agregar cierta cantidad de un ítem al carrito

  const removeItem = (itemId) => {
    const newCart = cart.filter((e) => e.item.id !== itemId)
    setCart(newCart)
  } // Remover un item del cart por usando su id

  const clear = () => {
    setCart([])
  } // Remover todos los items

  const isInCart = (id) => {
    const currentItem = cart.find((e) => e.item.id === id)

    return !!currentItem
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        totalItems,
        totalPrecio: totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe estar dentro de CartContext')
  }
  return context
}
