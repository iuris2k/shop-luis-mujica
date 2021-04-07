import React from 'react'

export const cartContext = React.createContext({})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({})

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
