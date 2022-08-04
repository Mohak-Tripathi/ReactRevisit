import React, {useState} from "react";

const TodoItem = ({ handleChange, item, handleDelete, handleUpdate }) => {
const [update, setUpdate] = useState()

  return (
    <div>
    
    <div className={item.status ? "strike" : null}> {item.title} - {item.status ? "Done" : "Not Done"} </div>   
      <button onClick={() => handleChange(item.id)}> Toggle</button>
      <button onClick={() => handleDelete(item.id)}> Delete</button>

<input type="text" placeholder="enter text" onChange={(e)=> setUpdate(e.target.value)}/> 
<button onClick={() =>{update && handleUpdate(update, item.id)}}  > Update Todo </button>
    </div>

  );
};

export default TodoItem;

// import React from 'react'
// import Todo from './Todo'

// function TodoItem({item, handleChange}) {

//     console.log(item)
//     return (
//     <div>

//         {item.title}- {item.status ? "Done" : "Not Done"} <button onClick={()=>handleChange(item.id)}> Toggle</button>
//            </div>
//   )
// }

// export default TodoItem
