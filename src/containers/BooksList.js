import React from 'react';
import Book from '../components/Book';

function BooksList() {
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      <Book />
      <tr>
        <td>2</td>
        <td>The One Thing</td>
        <td>Focusing</td>
      </tr>
    </table>
  );
}

export default BooksList;
