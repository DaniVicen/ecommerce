import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartListItems, setCartListItems] = useState([])
    
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItems => cartItems.id === product.id)
        if (!isInCart) {
            setCartListItems([...cartListItems, { ...product, quantity: 1 }])
            // setTotalPrice(totalPrice + product.price * product.quantity)
            return
        }
        
        // si llega aca es porque el item ya existia en el carrito, entonces le actualizo la cantidad
        setCartListItems(
            cartListItems.map(cartItem => {
                const newQuantity = (cartItem?.quantity || 0) + 1 
                return cartItem.id === product.id ? {
                    ...cartItem,
                    quantity: newQuantity,
                    amount: newQuantity * product.price, 
                } : cartItem
            })
        )
    }

    const removeProductFromCart = (product) => {
        const existingQuantity = cartListItems.find(cartItem => cartItem.id === product.id)?.quantity
        if (!existingQuantity || existingQuantity === 1) {
            setCartListItems(
                cartListItems.filter(cartItem => cartItem.id !== product.id)
            )
            return
        }
        
        // si llega aca es porque quantity > 1
        setCartListItems(
            cartListItems.map(cartItem => {
                const newQuantity = cartItem?.quantity - 1 
                return cartItem.id === product.id ? {
                    ...cartItem,
                    quantity: newQuantity,
                    amount: newQuantity * product.price, 
                } : cartItem
            })
        )
    }

    const removeAllProductsFromCart = () => {
        setCartListItems([])
    }

    const getTotal = () => {
        return cartListItems.reduce((carry, value) => {
            return carry + (value.price * value.quantity)
        }, 0)
    }

    const cleanCartProducts = () => {
        setTotalPrice(0)
        setCartListItems([])
    }

    const data = {
        cartListItems,
        addProductToCart,
        removeProductFromCart,
        removeAllProductsFromCart,
        totalPrice,
        getTotal,
        cleanCartProducts,
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }