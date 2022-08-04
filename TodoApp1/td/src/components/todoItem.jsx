import React , {useState} from 'react'

const TodoItem = ({handleChange, item, handleDelete, handleUpdate}) => {
 const [update, setUpdate] = useState("")

    return (
    <div> 
  
{item.title}- {item.status ? "Done" : "Not Done"} 

<button onClick={()=>handleChange(item.id)}> Toggle</button> 
<button onClick={()=>handleDelete(item.id)}> Delete</button> 

<input type="text" placeholder="Update" onChange={(e)=> setUpdate(e.target.value)}/>

<button onClick={()=>handleUpdate(item.id, update)}> update</button> 

    </div> 
)}

export default TodoItem