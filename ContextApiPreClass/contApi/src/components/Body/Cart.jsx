import React from 'react'
import { CartContext } from '../../contexts/CartContext'

import {useContext} from "react";

function Cart() {
  
  const {handleChange} = useContext(CartContext)
    return (
    <div style={{
        width: "200px",
        height: "300px",
        backgroundColor: "grey"
    }}>

        <button onClick={()=>{
            handleChange(1)
        }}> Add 1 </button>
    </div>
  )
}

export default Cart