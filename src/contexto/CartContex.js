import { useState, createContext } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const newCart = cart.map(item => {
                if (item.id === productToAdd.id) {
                    const productoActualizado = { ...item, quantity: productToAdd.quantity }
                    return productoActualizado
                } else {
                    return item
                }
            })
            setCart(newCart)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const removeItem = (id) => {
        const newCartWhitoutItem = cart.filter(product => product.id !== id)
        setCart(newCartWhitoutItem)
    }

    const getQuantity = () => {
        let acc = 0

        cart.forEach(product => {
            acc += product.quantity
        })

        return acc
    }

    const getProductQuantity = (id) => {
        const product = cart.find(item => item.id === id)
        return product?.quantity
    }

    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity, isInCart, removeItem, clearCart, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext