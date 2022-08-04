import React, {useState} from 'react'


const TodoInput = ({getdata}) => {
  const [text, setText] = useState("")
  
    return (
    <>
    
    <input type="text" placeholder="Enter text" onChange={(e)=> setText(e.target.value)}/>

    <button onClick={()=> getdata(text)}> Add Todo  </button> 
    
    </>
  )
}

export default TodoInput