import React from 'react'
import {createContext} from "react"

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
  
  
    return (
                    <CartContext.Provider  value={0}> {children}</CartContext.Provider>
  )
}

export default CartContextProvider