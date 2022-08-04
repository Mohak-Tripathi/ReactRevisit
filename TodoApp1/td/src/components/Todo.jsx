import React, { useState } from "react";
import TodoInput from "./TodoInput";
import { nanoid } from "nanoid";
import TodoItem from "./todoItem";
const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const getdata = (value) => {
    const payload = {
      title: value,
      status: false,
      id: nanoid(5),
    };
    setTodoList([...todoList, payload]);
  };

  function handleChange(id) {
    setTodoList(
      todoList.map((elem) =>
        elem.id === id ? { ...elem, status: !elem.status } : elem
      )
    );
  }

  function handleDelete(id) {
    setTodoList(todoList.filter((elem) => elem.id !== id));
  }

  function handleUpdate(id, update) {
    setTodoList(
      todoList.map((elem) =>
        elem.id == id ? { ...elem, title: update } : elem
      )
    );
  }

  return (
    <>
      <TodoInput getdata={getdata} />

      {todoList.map((elem) => {
        return (
          <TodoItem
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
