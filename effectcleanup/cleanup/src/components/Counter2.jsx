import React from 'react'
import {useState} from "react"

const Counter2 = () => {
  const [counter, setCounter] = useState(0)


  function handleChange2(value){
if(counter > 7){
    alert("can't move forward")
    return setCounter(counter-1)
}

    setCounter(counter + value)
  }
  
if(counter >=10){
    return <h4> The counter reached maximum value</h4> 
}


    return (
    <>
     <div>counter3 : {counter} </div>
<button onClick={()=>handleChange2(1)} > Add 1  </button>
<button onClick={()=>handleChange2(-1)}> Sub 1 </button>


    </>
   

  )
}

export default Counter2