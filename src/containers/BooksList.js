import React from 'react';

function BooksList() {
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</td>
        <td>Productivity</td>
      </tr>
      <tr>
        <td>2</td>
        <td>The One Thing</td>
        <td>Focusing</td>
      </tr>
    </table>
  );
}

export default BooksList;
