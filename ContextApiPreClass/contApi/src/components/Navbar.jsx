import React from 'react'
import {CartContext} from "../contexts/CartContext";

import {useContext} from "react"

function Navbar() {

    const {cart}= useContext(CartContext)

    return (
    <nav style={{
        display: "flex",
        fontSize: "18px",
        justifyContent: "end",
        padding: "10px",
        border: "1px solid black"
    }}>Cart : {cart} </nav>
  )
}

export default Navbar