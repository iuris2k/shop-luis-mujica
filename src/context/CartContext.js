import React, { createContext, useState } from 'react'

export const cartContext = createContext({})

export function CartProvider = ({ defaultValue = [], children }) {

    const [cart, setCart] = useState(defaultValue) // este es el carrito q podemos manejar desde cualquier componente

    const cartLength = () => {
        return cart.reduce((accumlator, currentValue) => { return accumlator + currentValue.cant }, 0)
    }

    const cartPrice = () => {
        return cart.reduce((accumlator, currentValue) => { return accumlator + currentValue.cant * }, 0)
    }

    const addToCart = (newProduct, quantity) => {
        let prodIndex = cart.findIndex(item => item.prod.id === newProduct.id);
        if (prodIndex === -1) {
            setCart(cart => [...cart, { prod: newProduct, cant: quantity }])
        } else {
            let modifiedCart = [...cart]
            modifiedCart[prodIndex].cant += quantity
            setCart(modifiedCart)
        }
    }

    const dropCart = () => {
        setCart([])
    }






    const addItem = (item, quantity) => {
        const currentItem = cart.find(e => e.item.id === item.id)
        removeItem(currentItem.id)
        setCart([...cart, { item: item.quantity: currentItem.quantity + quantity {} }])

    }

    const removeItem = (itemId) => {

        const currentItemIndex = cart.findIndex(e => e.item.id === itemId)
        setCart(newCart)
    }

    const clear = () => {
        setCart([])

    }
    const isInCart = (id) => {
        const currentItem = cart.find(e => e.item.id === id)
        return currentItem
    }
}