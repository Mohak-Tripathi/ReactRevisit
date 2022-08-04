
// https://github.com/HamzaAnwar1998/LocalStorage-with-React-Hooks-BookList-App/blob/main/src/App.js

//Source Code

import React, { useEffect } from "react";
import { useState } from "react";
import View from "./View"
const getDataForm = () => {
  const data = localStorage.getItem("books");

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};


const Form = () => {
  const [books, setBooks] = useState(getDataForm());

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    let book = {
      title: formData.title,
      author: formData.author,
      isbn: formData.isbn,
    };
    setBooks([...books, book]);

    setFormData({
      title: "",
      author: "",
      isbn: "",
    });
  }

  function deleteBook(id){
   const filteredData=  books.filter((elem)=> elem.isbn !== id)
   setBooks(filteredData)
}

  useEffect(() => {
    console.log("books", books);

    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  function handleChange(e) {
    const { name, value } = e.target;

    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className='wrapper'>
      <h1>Book list</h1>
      <p> LocalStorage Practice Session</p>

      <div className='main'>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <div>
              <label> Title</label>
              <input
                type='text'
                name='title'
                value={formData.title}
                placeholder='Title'
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label> Author </label>
              <input
                type='text'
                name='author'
                value={formData.author}
                placeholder='Author'
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label> ISBN </label>
              <input
                type='text'
                name='isbn'
                value={formData.isbn}
                placeholder='ISBN'
                required
                onChange={handleChange}
              />
            </div>
            <button type='submit'> Submit</button>
          </form>
        </div>

        <div className='view-container'>
          {books.length > 0 && (
            <>
              <div className='table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>ISBN#</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    <View books={books} deleteBook={deleteBook} />
                  </tbody>
                </table>
              </div>

              <button
                className='btn btn-danger btn-md'
                onClick={() => setBooks([])}
              >
                Remove All
              </button>
            </>
          )}
          {books.length < 1 && <div>No books are added yet</div>}
        </div>
      </div>
    </div>
  );
};

export default Form;
