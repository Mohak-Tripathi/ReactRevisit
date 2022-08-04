import React from "react";
import { useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [text, setText] = React.useState("");
  const [Todos, setTodos] = React.useState([]);
  const [page, setPage] = React.useState(1);

  function pay() {
    const payload = {
      title: text,
      status: false,
    };
    axios.post("http://localhost:8080/todos", payload).then(() => getdata1());
  }

  useEffect(() => {
    getdata1();

    return () => {
      console.log("cleanup function");
    };
  }, [page]);

  const getdata1 = async () => {
    const data1 = await fetch(
      `http://localhost:8080/todos?_page=${page}&_limit=2`
    ).then((d) => d.json());
    setTodos(data1);
  };

  function handleChange(id, st) {
    // return ( setTodos(Todos.map((elem)=> elem.id === id ? {...elem, status: !elem.status} : elem )))
    var p2 = {
      status: !st,
    };
    axios.patch(`http://localhost:8080/todos/${id}`, p2).then(() => getdata1());
  }

  function handleDelete(id) {
    // return ( setTodos(Todos.filter((elem)=> elem.id !== id )))
    axios.delete(`http://localhost:8080/todos/${id}`).then(() => getdata1());
  }

  function handleUpdate(id, update) {
    const p = {
      title: update,
      status: false,
    };

    axios.put(`http://localhost:8080/todos/${id}`, p).then(() => getdata1());
  }

  return (
    <>
      <input
        type='text'
        placeholder='Enter todo'
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={pay}> Add Todo </button>

      <div>
        {Todos.map((elem) => {
          return (
            <TodoItem
              handleChange={handleChange}
              item={elem}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          );
        })}
      </div>

      <button onClick={() => setPage(page - 1)}> Prev </button>
      <button onClick={() => setPage(page + 1)}> Next </button>
    </>
  );
};

export default Todo;
