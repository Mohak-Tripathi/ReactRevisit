
import React from "react";


const View = ({ books, deleteBook }) => {

  return (books.map((book) => (
    <tr key={book.isbn}>
      <td> {book.isbn} </td>
      <td> {book.title} </td>
      <td> {book.author} </td>
      <td className='delete-btn' onClick={() => deleteBook(book.isbn)}>
        {" "}
      Delete
      </td>
    </tr>
  )));
};

export default View;
