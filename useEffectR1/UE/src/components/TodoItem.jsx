import React from 'react'

const TodoItem = ({handleChange, item, handleDelete, handleUpdate}) => {
 
 const[update, setUpdate] = React.useState("")
    return (
    <>
    <div> {item.id} {item.title}- {item.status ? "Done" : "Not Done"}  </div>

    <button onClick={()=>handleChange(item.id, item.status)}> Toggle </button>
    <button onClick={()=>handleDelete(item.id)}> Delete </button>

<input type="text" placeholder= "up"  onChange={(e)=> setUpdate(e.target.value)} />
    <button onClick={()=>handleUpdate(item.id, update)}> update </button>


    </>
  )
}

export default TodoItem