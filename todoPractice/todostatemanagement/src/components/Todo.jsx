import React, { useState } from "react";
import TodoInput from "./TodoInput";
import { nanoid } from "nanoid";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [TodoList, settodoList] = useState([]);

  function getData(value) {
    const payload = {
      title: value,
      status: false,
      id: nanoid(5),
    };

    settodoList([...TodoList, payload]);
  }

  function handleChange(id) {
    settodoList(
      TodoList.map((elem) =>
        elem.id === id ? { ...elem, status: !elem.status } : elem
      )
    );
  }

  function handleDelete(id) {
    settodoList(TodoList.filter((elem) => elem.id !== id));
  }


  function handleUpdate(tit, id){
    settodoList(TodoList.map((elem) => elem.id === id ? {...elem, title: tit} : elem))
  }

  return (
    <>
      <TodoInput getData={getData} />

      {TodoList.map((elem) => {
        return (
          <TodoItem
            key={elem.id}
            handleChange={handleChange}
            item={elem}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        );
      })}
    </>
  );
};

export default Todo;

// import React from 'react'
// import TodoInput from './TodoInput'
// import TodoItem from './TodoItem'
// import {nanoid} from "nanoid";

// function Todo() {
//   const [todoList, settodoList]= React.useState([])

//   const getData= (value)=>{
//     let payload ={
//         title : value,
//         status : false,
//         id : nanoid(5)
//     }

//     settodoList([...todoList, payload])
//   }

//   function handleChange(id){

//     return settodoList([...todoList.map((e)=>e.id===id ? {...e, status: !e.status}: e)])

//   }
//     return (
//     <div>

// <TodoInput getData={getData}/>

// {todoList.map(function(elem){
//    return ( <TodoItem handleChange={handleChange} item= {elem} /> )
// })}
//     </div>
//   )
// }

// export default Todo
