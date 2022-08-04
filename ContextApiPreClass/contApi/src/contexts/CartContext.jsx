import React from 'react'
import {useState} from "react"
import { createContext } from "react"

export const CartContext = createContext()

// CardContext --- object

function CartContextProvider({ children }) {
    const [cart, setCart]= useState(11)

    function handleChange(inc){
        setCart(cart + inc)
    }
    
    
    return (
        <CartContext.Provider value={{cart, handleChange}}>     {children}      </CartContext.Provider>
    )
}

export default CartContextProvider