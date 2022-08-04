//nothing relatecd to TimeOut. Simple useref practice


import React, { useRef, useState } from 'react'


function TimeOut() {


    const [counter, setCounter]= useState(0);

let ref= useRef(10);

console.log("x value initially", ref)

    return (
    <div>

    <h3>Counter: {counter} </h3>

    <button onClick={()=>{
        setCounter(counter + 1)
    } }>  counter</button>
        <button  onClick={()=>{
            ref.current +=1
            console.log("x is changed", ref)
        }}> change x </button>
    </div>
  )


    }


export default TimeOut;